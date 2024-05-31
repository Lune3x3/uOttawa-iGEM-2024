import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './Pages/Home.js';
import { NavBar } from './Pages/Navbar/Navbar.js';

import Description from "./Pages/Project/Description.md";
import Design from "./Pages/Project/Design.md";
import ProofOfConcept from "./Pages/Project/ProofOfConcept.md";
import Implementation from "./Pages/Project/Implementation.md";

import Engineering from "./Pages/WetLab/Engineering.md";
import Notebook from "./Pages/WetLab/Notebook.md";
import Protocol from "./Pages/WetLab/Protocol.md";
import Results from "./Pages/WetLab/Results.md";
import Parts from "./Pages/WetLab/Parts.md";

import Model from "./Pages/DryLab/Model.md";
import Hardware from "./Pages/DryLab/Hardware.md";
import Measurements from "./Pages/DryLab/Measurements.md";

import { Roster } from './Pages/Team/Roster/Roster.js';
import Collaborations from "./Pages/Team/Collaborations.md";

import HumanPractices from "./Pages/More/HumanPractices.md";
import Education from "./Pages/More/Education.md";
import Safety from "./Pages/More/Safety.md";

import { Template } from './Pages/Template.js';

function App() {
  document.body.style = 'background: rgb(255, 255, 255);';
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

        <Route path="/description" element={<Template src={Description}/>}/>
        <Route path="/design" element={<Template src={Design}/>}/>
        <Route path="/proof-of-concept" element={<Template src={ProofOfConcept}/>}/>
        <Route path="/implementation" element={<Template src={Implementation}/>}/>

        <Route path="/engineering" element={<Template src={Engineering}/>}/>
        <Route path="/notebook" element={<Template src={Notebook}/>}/>
        <Route path="/protocol" element={<Template src={Protocol}/>}/>
        <Route path="/results" element={<Template src={Results}/>}/>
        <Route path="/parts" element={<Template src={Parts}/>}/>

        <Route path="/model" element={<Template src={Model}/>}/>
        <Route path="/hardware" element={<Template src={Hardware}/>}/>
        <Route path="/measurements" element={<Template src={Measurements}/>}/>

        <Route path="/roster" element={<Roster/>}/>
        <Route path="/collaborations" element={<Template src={Collaborations}/>}/>

        <Route path="/human-practices" element={<Template src={HumanPractices}/>}/>
        <Route path="/education" element={<Template src={Education}/>}/>
        <Route path="/safety" element={<Template src={Safety}/>}/>
      </Routes>
    </Router>
  );
}


//{age >= 18 ? <h1 style={{color: "green"}}> YES </h1> : <h1 style={{color: "red"}}> NO </h1>}
//{age}
//<button onClick={increaseAge}>Increase age</button>

export default App;
