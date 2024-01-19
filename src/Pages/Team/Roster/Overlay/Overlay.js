import './Overlay.css';
import { User } from '../User';

import { useState } from 'react';

export function Overlay({ person }) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    return(
        <>
            <div>
                <div className="profileButton" onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
                    <img className="profileImage" src={require('../../../../Assets/Members/' + person.image)} alt={person.image}/>
                </div>

                {isOverlayOpen && 
                <div className="overlay">
                    <div className="overlayBG" onClick={() => setIsOverlayOpen(!isOverlayOpen)}/>
                    <div className="overlayContainer">
                        <div className="overlayControls">
                            <button className="overlayClose" type="button" onClick={() => setIsOverlayOpen(!isOverlayOpen)}/>
                        </div>

                        <User name={person.name} email={person.email} about={person.about} image={person.image}/>

                    </div>
                </div>}
            </div>
        </>
    );
}