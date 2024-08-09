import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Robot = () => {
  const mountRef = useRef(null);
  const [controlPoints, setControlPoints] = useState([]);
  const raycaster = useRef(new THREE.Raycaster()).current;
  const mouse = useRef(new THREE.Vector2()).current;
  const [lineSegments, setLineSegments] = useState([]);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 100000); // Aspect ratio will be updated dynamically
    camera.position.set(0, 150, 300);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 600); // Initial size
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight1.position.set(1, 1, 1).normalize();
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-1, -1, -1).normalize();
    scene.add(directionalLight2);

    // Model Loader
    const loader = new STLLoader();
    let loadedMesh;

    loader.load(
      "/models/Assem17.stl",
      (geometry) => {
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        loadedMesh = new THREE.Mesh(geometry, material);

        // Centering the model
        geometry.computeBoundingBox();
        const box = geometry.boundingBox;
        const size = new THREE.Vector3();
        box.getSize(size);
        loadedMesh.position.set(-size.x / 2, -size.y / 2, -size.z / 2);

        scene.add(loadedMesh);

        // Adjust camera to fit the model
        const distance = size.length() * 1.5;
        camera.position.set(0, distance, distance);
        camera.lookAt(loadedMesh.position);
        camera.updateProjectionMatrix();
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.error("Error loading STL model", error);
      }
    );

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const handleMouseClick = (event) => {
      const boundingRect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - boundingRect.left) / boundingRect.width) * 2 - 1;
      mouse.y = -((event.clientY - boundingRect.top) / boundingRect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      if (loadedMesh) {
        const intersects = raycaster.intersectObject(loadedMesh);

        if (intersects.length > 0) {
          const point = intersects[0].point;

          // Add control point
          setControlPoints((prevPoints) => {
            const newPoints = [...prevPoints, point];
            updateLines(newPoints);
            return newPoints;
          });

          // Visualize the point
          const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
          const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          sphere.position.copy(point);
          scene.add(sphere);
        } else {
          console.log('Clicked outside the model');
        }
      } else {
        console.log('STL model not loaded yet');
      }
    };

    const updateLines = (points) => {
      // Remove existing lines
      lineSegments.forEach((line) => scene.remove(line));
      setLineSegments([]);

      if (points.length < 2) return;

      // Draw lines between points
      for (let i = 0; i < points.length - 1; i++) {
        const geometry = new THREE.BufferGeometry().setFromPoints([points[i], points[i + 1]]);
        const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
        setLineSegments((prev) => [...prev, line]);
      }
    };

    window.addEventListener('click', handleMouseClick, false);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Initial resize
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener('click', handleMouseClick);
      mountRef.current.removeChild(renderer.domElement);
      if (loadedMesh) {
        loadedMesh.geometry.dispose();
        loadedMesh.material.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="h-full w-full"
    />
  );
};

export default Robot;
