import { useState } from 'react';
import { motion } from 'framer-motion';

import './Documentation.css'
import { Scene } from "./Scene"

export const Documentation = () => {
    const [text, setText] = useState('');

    return (
        <>
            <section className="screen">
                <div>
                    popup
                </div>
                <Scene/>
            </section>
        </>
    )
}

//<input type="text" value={text} onInput={e => {setText(e.target.value);}}/>
//<div>
//    {text}
//</div>