import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const Model = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    // // MTLLoader를 사용하여 MTL 파일 로드
    // const mtlLoader = new MTLLoader();
    // mtlLoader.load("/Compass.mtl", (materials) => {
    //   materials.preload(); // 재질 준비
    //   // OBJLoader를 사용하여 OBJ 파일 로드
    //   const objLoader = new OBJLoader();
    //   objLoader.setMaterials(materials);
    //   objLoader.load("/Compass.obj", (object) => {
    //     // 모델 크기 조정 (2배 크기로 설정)
    //     object.scale.set(1.7, 1.7, 1.7);
    //     setModel(object);
    //   });
    // });

    // const gltfLoader = new GLTFLoader();
    // gltfLoader.load("/Compass.glb", (gltf) => {
    //   setModel(gltf.scene);
    // });

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/"); // Draco 디코더 파일 경로 설정

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader); // GLTFLoader에 DRACOLoader 설정

    gltfLoader.load("/Compass.gltf", (gltf) => {
      const scene = gltf.scene;
      scene.scale.set(2, 2, 2); // 모델 크기 조정 (2배 크기로 설정
      scene.rotation.z = -5;
      // 모델의 모든 메쉬에 대해 재질 속성 조정
      scene.traverse((child) => {
        // @ts-ignore
        if (child.isMesh) {
          // 메탈 느낌을 주기 위해 속성 조정
          // @ts-ignore
          child.material.metalness = 0.9; // 최대값 (1)으로 설정
          // @ts-ignore
          child.material.roughness = 0.2; // 매끄러운 표면을 위한 낮은 값
        }
      });

      setModel(scene);
    });

    return () => {
      // 메모리 누수를 방지하기 위해 청소
      dracoLoader.dispose();
    };
  }, []);

  return model ? <primitive object={model} /> : null; // 모델이 로드되면 렌더링
};

const VolumetricCanvas = () => {
  return (
    <Canvas style={{ height: "40%" }}>
      <OrbitControls autoRotate={true} enableZoom={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 6, 1]} intensity={30} />
      <Model /> {/* 로드한 모델 추가 */}
    </Canvas>
  );
};

export default VolumetricCanvas;
