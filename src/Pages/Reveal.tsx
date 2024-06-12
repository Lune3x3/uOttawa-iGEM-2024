import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({children, width="fit-content"} : Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("end");
        }
    }, [isInView]);

    return (
        <div style={{position: "relative", width, overflow: "hidden"}}>
            <motion.div
                ref={ref}
                variants={{
                    start: {opacity: 0, y:75},
                    end: {opacity: 1, y: 0}
                }}
                initial="start"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}