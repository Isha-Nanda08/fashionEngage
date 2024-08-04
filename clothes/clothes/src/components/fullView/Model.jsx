import { Clone, useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";
import { SRGBColorSpace } from "three";

export default function Model({ clothImg, walk }) {
    const model = useGLTF('./female.glb')
    const clothTexture = useTexture(clothImg)

    clothTexture.center.set(.5, .5)
    clothTexture.rotation = Math.PI
    clothTexture.repeat.x = -1
    clothTexture.colorSpace = SRGBColorSpace
    
    const animation = useAnimations(model.animations, model.scene)
    
    useEffect(() => {
        const action = animation.actions[animation.names[0]]

        if (action) {
            if (walk) { action.reset().fadeIn(0.5).play()  }
            else { action.fadeOut(0.5) }
        }
    }, [ walk ])

    const material = model.scene.children[0].children[2].children[6].material
    material.map = clothTexture
    material.needsUpdate = true

    return <primitive object={model.scene} position={[0, -1.83/2, 0]}/>
}
useGLTF.preload('./female.glb')