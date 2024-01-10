import './Home.css';
import { Reveal } from './Reveal';
import { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrollPosition(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    //when scrollPosition > 179: change background to image gradient

    return (
        <>
            <section className="homeHero">
                <motion.div
                initial={{ backgroundColor: 'rgba(0, 21, 36, 1)'}}
                animate={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}
                transition={{ duration: 4}}
                className='frameMe'>
                    <div className="homeHeroText">
                        <Reveal>
                            <h1> uOttawa iGEM project name </h1>
                        </Reveal>
                    </div>
                </motion.div>
            </section>

            <div className="frosted">
                    <h3 className="text"> The underlying problem this project addresses goes here </h3>
            </div>

            <div className="homeRoot">
                WIP
            </div>
        </>
    );
}