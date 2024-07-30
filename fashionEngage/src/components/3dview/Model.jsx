import { Clone, useGLTF } from "@react-three/drei";

const Model=()=> {
    const model = useGLTF('./female.glb')
    return <Clone object={model.scene} position={[0, -1.83/2, 0]}/>
}
useGLTF.preload('./female.glb')
export default Model;