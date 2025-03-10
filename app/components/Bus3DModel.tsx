import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { busModel } from "~/assets";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef<THREE.Mesh | null>(null);
  const { scene } = useGLTF(busModel);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= delta / 2;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      rotation={[0, 0.8, 0]}
      position={[0.5, 0, 0]}
    />
  );
};

const Bus3DModel = () => {
  return (
    <div className="h-[180px] overflow-hidden rounded-2xl rounded-b-none sm:h-[320px] md:h-[380px] lg:h-[400px] xl:h-[460px] 2xl:h-[500px]">
      <Canvas camera={{ position: [20, 5, 5], fov: 30 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <Model />
        {/* <Preload all /> */}
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

useGLTF.preload(busModel);
export default Bus3DModel;
