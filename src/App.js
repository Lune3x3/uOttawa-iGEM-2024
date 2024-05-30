import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './Pages/Home.js';
import { NavBar } from './Pages/Navbar/Navbar.js';

import { Description } from './Pages/Project/Description/Description.js';
import { Design } from './Pages/Project/Design/Design.js';
import { Implementation } from './Pages/Project/Implementation/Implementation.js';
import { ProofOfConcept } from './Pages/Project/ProofOfConcept/ProofOfConecpt.js';

import { Engineering } from './Pages/WetLab/Engineering/Engineering.js';
import { Notebook } from './Pages/WetLab/Notebook/Notebook.js';
import { Parts } from './Pages/WetLab/Parts/Parts.js';
import { Protocol } from './Pages/WetLab/Protocol/Protocol.js';
import { Results } from './Pages/WetLab/Results/Results.js';

import { Hardware } from './Pages/DryLab/Hardware/Hardware.js';
import { Measurements } from './Pages/DryLab/Measurements/Measurements.js';
import { Model } from './Pages/DryLab/Model/Model.js';

import { Roster } from './Pages/Team/Roster/Roster.js';
import { Collaborations } from './Pages/Team/Collaborations/Collaborations.js';

import { Education } from './Pages/More/Education/Education.js';
import { HumanPractices } from './Pages/More/HumanPractices/HumanPractices.js';
import { Safety } from './Pages/More/Safety/Safety.js';

function App() {
  document.body.style = 'background: rgb(255, 255, 255);';
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

        <Route path="/description" element={<Description/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/proof-of-concept" element={<Implementation/>}/>
        <Route path="/implementation" element={<ProofOfConcept/>}/>

        <Route path="/engineering" element={<Engineering/>}/>
        <Route path="/notebook" element={<Notebook/>}/>
        <Route path="/protocol" element={<Protocol/>}/>
        <Route path="/results" element={<Results/>}/>
        <Route path="/parts" element={<Parts/>}/>

        <Route path="/model" element={<Model/>}/>
        <Route path="/hardware" element={<Hardware/>}/>
        <Route path="/measurements" element={<Measurements/>}/>

        <Route path="/roster" element={<Roster/>}/>
        <Route path="/collaborations" element={<Collaborations/>}/>

        <Route path="/human-practices" element={<HumanPractices/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/safety" element={<Safety/>}/>
      </Routes>
    </Router>
  );
}


//{age >= 18 ? <h1 style={{color: "green"}}> YES </h1> : <h1 style={{color: "red"}}> NO </h1>}
//{age}
//<button onClick={increaseAge}>Increase age</button>

export default App;
