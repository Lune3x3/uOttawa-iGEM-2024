import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './Pages/Home.jsx';
import { NavBar } from './Pages/Navbar/Navbar.jsx';

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

import { Roster } from './Pages/Team/Roster/Roster.jsx';
import Collaborations from "./Pages/Team/Collaborations.md";

import HumanPractices from "./Pages/More/HumanPractices.md";
import Education from "./Pages/More/Education.md";
import Safety from "./Pages/More/Safety.md";

import { Template } from './Pages/Template.jsx';

function App() {
  document.body.style = 'background: rgb(255, 255, 255);';
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/uottawa" element={<Home/>}/>
        

        <Route path="/uottawa/description" element={<Template src={Description}/>}/>
        <Route path="/uottawa/design" element={<Template src={Design}/>}/>
        <Route path="/uottawa/proof-of-concept" element={<Template src={ProofOfConcept}/>}/>
        <Route path="/uottawa/implementation" element={<Template src={Implementation}/>}/>

        <Route path="/uottawa/engineering" element={<Template src={Engineering}/>}/>
        <Route path="/uottawa/notebook" element={<Template src={Notebook}/>}/>
        <Route path="/uottawa/protocol" element={<Template src={Protocol}/>}/>
        <Route path="/uottawa/results" element={<Template src={Results}/>}/>
        <Route path="/uottawa/parts" element={<Template src={Parts}/>}/>

        <Route path="/uottawa/model" element={<Template src={Model}/>}/>
        <Route path="/uottawa/hardware" element={<Template src={Hardware}/>}/>
        <Route path="/uottawa/measurements" element={<Template src={Measurements}/>}/>

        <Route path="/uottawa/roster" element={<Roster/>}/>
        <Route path="/uottawa/collaborations" element={<Template src={Collaborations}/>}/>

        <Route path="/uottawa/human-practices" element={<Template src={HumanPractices}/>}/>
        <Route path="/uottawa/education" element={<Template src={Education}/>}/>
        <Route path="/uottawa/safety" element={<Template src={Safety}/>}/>
      </Routes>
    </Router>
  );
}


//{age >= 18 ? <h1 style={{color: "green"}}> YES </h1> : <h1 style={{color: "red"}}> NO </h1>}
//{age}
//<button onClick={increaseAge}>Increase age</button>

export default App;
