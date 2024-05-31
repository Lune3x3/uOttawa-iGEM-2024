import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './Pages/Home.js';
import { NavBar } from './Pages/Navbar/Navbar.js';

import { Roster } from './Pages/Team/Roster/Roster.js';

import { Template } from './Pages/Template.js';

function App() {
  document.body.style = 'background: rgb(255, 255, 255);';
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

        <Route path="/description" element={<Template src="./Pages/Project/Description.md"/>}/>
        <Route path="/design" element={<Template src="./Pages/Project/Design.md"/>}/>
        <Route path="/proof-of-concept" element={<Template src="./Pages/Project/ProofOfConcept.md"/>}/>
        <Route path="/implementation" element={<Template src="./Pages/Project/Implementation.md"/>}/>

        <Route path="/engineering" element={<Template src="./Pages/WetLab/Engineering.md"/>}/>
        <Route path="/notebook" element={<Template src="./Pages/WetLab/Notebook.md"/>}/>
        <Route path="/protocol" element={<Template src="./Pages/WetLab/Protocol.md"/>}/>
        <Route path="/results" element={<Template src="./Pages/WetLab/Results.md"/>}/>
        <Route path="/parts" element={<Template src="./Pages/WetLab/Parts.md"/>}/>

        <Route path="/model" element={<Template src="./Pages/DryLab/Model.md"/>}/>
        <Route path="/hardware" element={<Template src="./Pages/DryLab/Hardware.md"/>}/>
        <Route path="/measurements" element={<Template src="./Pages/DryLab/Measurements.md"/>}/>

        <Route path="/roster" element={<Roster/>}/>
        <Route path="/collaborations" element={<Template src="./Pages/Team/Collaborations.md"/>}/>

        <Route path="/human-practices" element={<Template src="./Pages/More/HumanPractices.md"/>}/>
        <Route path="/education" element={<Template src="./Pages/More/Education.md"/>}/>
        <Route path="/safety" element={<Template src="./Pages/More/Safety.md"/>}/>
      </Routes>
    </Router>
  );
}


//{age >= 18 ? <h1 style={{color: "green"}}> YES </h1> : <h1 style={{color: "red"}}> NO </h1>}
//{age}
//<button onClick={increaseAge}>Increase age</button>

export default App;
