import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Robot = ({ setPoints }) => {
  const mountRef = useRef(null);
  const [controlPoints, setControlPoints] = useState([]);
  // const [loading, setLoading] = useState(false);
  const scene = new THREE.Scene();

 
    const fetch = ()=>{
      // setLoading(true);
      // const scene = new THREE.Scene();
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
  
          // setLoading(false);
          // Hide the cube and show the model
        },
        (xhr) => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          console.error("Error loading STL model", error);
        }
      );
    }
    fetch();
    

    return <>
    <button onClick={()=>{
      setLoading(false)
    }}>click me </button>
    <div ref={mountRef} />
    
    </>;
};

export default Robot;
