import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";

import protien from './protien.glb'

const Protien = (props) => {
    const protienRef = useRef();

    const { nodes, materials } = useGLTF(protien);

    return (
        <group ref={protienRef} {...props}>
            <mesh
                geometry={nodes["1TUP_stab"].geometry}
                material={materials.Material}
                position={[-0.043, 0.008, -0.008]}
                scale={-0.104}
            />
        </group>
    );
}

export default Protien;