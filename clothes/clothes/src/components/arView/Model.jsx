import { Clone, useGLTF, useTexture } from "@react-three/drei";
import { cloneElement, useEffect, useRef } from "react";
import { SRGBColorSpace } from "three";

export default function Model({ clothImg = "3.png" }) {
    const model = useGLTF('./female.glb')
    const clone = useRef()
    const clothTexture = useTexture(clothImg)

    clothTexture.center.set(.5, .5)
    clothTexture.rotation = Math.PI
    clothTexture.repeat.x = -1
    clothTexture.colorSpace = SRGBColorSpace

    useEffect(() => {
        if (clone.current) {
            const material = clone.current.children[0].children[2].children[6].material
            material.map = clothTexture
            material.needsUpdate = true
        }
    }, [cloneElement.current])

    return <Clone object={model.scene} position={[0, -1.83/2, 0]} ref={clone} />
}
useGLTF.preload('./female.glb')