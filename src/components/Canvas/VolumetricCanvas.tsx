import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useEffect, useState } from "react";
import * as THREE from "three";

const Model = () => {
  const [model, setModel] = useState<THREE.Group | null>(null);

  useEffect(() => {
    // MTLLoader를 사용하여 MTL 파일 로드
    const mtlLoader = new MTLLoader();
    mtlLoader.load("/Compass.mtl", (materials) => {
      materials.preload(); // 재질 준비
      // OBJLoader를 사용하여 OBJ 파일 로드
      const objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load("/Compass.obj", (object) => {
        // 모델 크기 조정 (2배 크기로 설정)
        object.scale.set(1.7, 1.7, 1.7);
        setModel(object);
      });
    });
  }, []);

  return model ? <primitive object={model} /> : null; // 모델이 로드되면 렌더링
};

const VolumetricCanvas = () => {
  return (
    <Canvas style={{ height: "40%" }}>
      <OrbitControls autoRotate={true} enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />
      <Model /> {/* 로드한 모델 추가 */}
    </Canvas>
  );
};

export default VolumetricCanvas;
