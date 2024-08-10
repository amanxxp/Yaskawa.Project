import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Robot = ({ setPoints }) => {
  const mountRef = useRef(null);
  const [controlPoints, setControlPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize the rotating cube (loading screen)
    if (loading) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(800, 600);
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x0059b9 });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.set(1.5, 0, 0);
      scene.add(cube);

      const edgesGeometry = new THREE.EdgesGeometry(geometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
      const outline = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      cube.add(outline);

      camera.position.z = 5;
      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.009;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
      };
      animate();
      // setLoading(false);

      // Clean up on component unmount
      return () => {
        mountRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }
  }, [loading])

  useEffect(() => {
    // Initialize the STL model rendering
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100000);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(800, 600);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.position.set(1, 1, 1).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

    const loader = new STLLoader();
    let loadedMesh;

    loader.load(
      "/models/Assem17.stl",
      (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        loadedMesh = new THREE.Mesh(geometry, material);

        geometry.computeBoundingBox();
        const box = geometry.boundingBox;
        const size = new THREE.Vector3();
        box.getSize(size);
        loadedMesh.position.set(-size.x / 2, -size.y / 2, -size.z / 2);

        scene.add(loadedMesh);
        const distance = size.length() * 2;
        camera.position.set(0, distance, distance);
        camera.lookAt(loadedMesh.position);
        camera.updateProjectionMatrix();

        setLoading(false);
        // Hide the cube and show the model
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading STL model", error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseClick = (event) => {
      const boundingRect = mountRef.current.getBoundingClientRect();
      mouse.x =
        ((event.clientX - boundingRect.left) / boundingRect.width) * 2 - 1;
      mouse.y =
        -((event.clientY - boundingRect.top) / boundingRect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const gridHelper = new THREE.GridHelper(10000, 50);
      gridHelper.position.y = -50;
      scene.add(gridHelper);

      if (loadedMesh) {
        const intersects = raycaster.intersectObject(loadedMesh);

        if (intersects.length > 0) {
          const point = intersects[0].point;
          console.log("Clicked point on model:", point);

          setControlPoints((prevPoints) => {
            const newPoints = [...prevPoints, point];
            if (newPoints.length === 3) {
              drawCurve(newPoints);
              return [];
            }
            setPoints(newPoints);
            return newPoints;
          });

          const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
          const sphereMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
          });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.copy(point);
          scene.add(sphere);
        }
      } else {
        console.log("STL model not loaded yet");
      }
    };

    window.addEventListener("click", handleMouseClick, false);

    function drawCurve(points) {
      const curve = new THREE.CatmullRomCurve3(points);
      const curvePoints = curve.getPoints(500);
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
      const curveObject = new THREE.Line(geometry, material);
      scene.add(curveObject);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      if (loadedMesh) {
        loadedMesh.geometry.dispose();
        loadedMesh.material.dispose();
      }
    };
  }, [loading]);

  return (
    <>
      <button
        onClick={() => {
          setLoading(false);
        }}
      >
        click me{" "}
      </button>
      <div ref={mountRef} />
    </>
  );
};

export default Robot;
