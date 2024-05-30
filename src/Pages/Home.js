import './Home.css';
import { Reveal } from './Reveal';
import { useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import ReactPlayer from 'react-player';

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
                initial={{ backgroundColor: 'rgba(0, 191, 125, 1)'}}
                animate={{ backgroundColor: 'rgba(0, 0, 0, 0)'}}
                transition={{ duration: 4}}
                className='frameMe'>
                    <div className="homeHeroText">
                        <Reveal>
                            <h1>
                                Phytogene || Slogan here 
                            </h1>
                        </Reveal>
                    </div>
                    <div className="learnMore">
                        <Reveal>
                            <h3 className='offText'> Learn More</h3>
                            <h1 className='offText'> ↓ </h1>
                        </Reveal>
                    </div>
                </motion.div>
            </section>

            <section className='missionBox'>
                <div className="missionText">
                    <Reveal>
                    <h1 className='missionTitle'> Our Mission Statememnt </h1>
                    <p className='missionPara'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and 
                        going through the cites of the word in classical literature, discovered 
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 
                        1.10.33 of "de Finibus Bonorum et Malorum"
                    </p>
                    </Reveal>
                </div>
                <div className="promoVideo">
                    <ReactPlayer url="/rockVibes.mov"
                    width="100%"
                    height="100%"
                    controls={true}/>
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