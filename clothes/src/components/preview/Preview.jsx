import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { DoubleSide } from "three";

export default function Preview({ clothImg, stageColor, bgColor, model}) {
    return <Canvas 
        camera={{position: [0, .5, 1.2]}} 
        gl={{antialias: false}} 
        flat 
        style={{ background: bgColor }}
    >
        <ambientLight intensity={4}/>
        {/* <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI*2/3} minPolarAngle={0.2} /> */}
        <mesh rotation={[-Math.PI/2, 0, 0]} scale={[2, 2, 1]} position={[0, -1, 0]}>
            <planeGeometry />
            <meshBasicMaterial side={DoubleSide} color={stageColor} />
        </mesh>
        <Model clothImg={clothImg} model={model} />
    </Canvas>
}