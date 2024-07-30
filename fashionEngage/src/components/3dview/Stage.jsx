import React, { useRef, useEffect } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";
import Model from "./Model";

const Stage = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.error('WebGL context lost. Attempting to restore...');
      if (canvasRef.current) {
        const renderer = canvasRef.current.gl.getContext();
        renderer.forceContextLoss();
        renderer.dispose();
      }
      // Reinitialize the scene (you can call init or any reinitialization function)
    };

    const handleContextRestored = () => {
      console.log('WebGL context restored.');
      // Reinitialize the scene (you can call init or any reinitialization function)
    };

    if (canvasRef.current) {
      const canvas = canvasRef.current.domElement;
      canvas.addEventListener('webglcontextlost', handleContextLost, false);
      canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

      return () => {
        canvas.removeEventListener('webglcontextlost', handleContextLost);
        canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      };
    }
  }, []);

  return (
    <Canvas ref={canvasRef} camera={{ position: [0, 0, 1.6] }} gl={{ antialias: false }} flat onCreated={onCanvasCreated}>
      <ambientLight intensity={4} />
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI * 2 / 3} minPolarAngle={0.2} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} scale={[2, 2, 1]} position={[0, -1.84 / 2, 0]}>
        <planeGeometry />
        <meshBasicMaterial side={DoubleSide} color={'red'} />
      </mesh>
      <Model />
    </Canvas>
  );
}

export default Stage;
