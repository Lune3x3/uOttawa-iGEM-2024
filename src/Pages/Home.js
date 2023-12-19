import './Home.css';
import { Reveal } from './Reveal';
import { useState, useEffect } from 'react';

export const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrollPosition(window.scrollY);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(scrollPosition);

    return (
        <>
            <section className="homeHero">
                <div className="homeHeroText">
                    <Reveal>
                        <h1> uOttawa iGEM project name </h1>
                    </Reveal>
                </div>
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