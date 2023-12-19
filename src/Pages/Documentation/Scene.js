import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { Loading } from "./Loading";
import Protien from "../../Assets/Protien"
import './Documentation.css'

export const Scene = () => {
    const adjustModelForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, 0.5, -3];
        let rotation = [0.1, 4.7, 0];

        if(window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        }
        else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation]
    }

    const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();
    return (
        <Canvas className="canvas" camera={{ near:0.1, far:1000 }}>

            <Suspense fallback={<Loading/>}>
                <directionalLight position={[1, 1, 1]} intensity={2}/>
                <ambientLight intensity={0.5}/>
                <hemisphereLight skyColor="#b1e1ff" groundColor="#ffffff" intensity={1}/>

                

                <Protien
                    position = {modelPosition}
                    scale = {modelScale}
                    rotation = {modelRotation}
                />
            </Suspense>
        </Canvas>
    )
}