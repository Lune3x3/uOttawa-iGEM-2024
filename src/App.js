import './App.css';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Home } from './Pages/Home.js';
import { Roster } from './Pages/Team/Roster.js';
import { NavBar } from './Pages/Navbar/Navbar.js';
import { Documentation } from './Pages/Documentation/Documentation.js';

function App() {
  document.body.style = 'background: rgb(0, 21, 36);';
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/roster" element={<Roster/>}/>
        <Route path="/documentation" element={<Documentation/>}/>
      </Routes>
    </Router>
  );
}


//{age >= 18 ? <h1 style={{color: "green"}}> YES </h1> : <h1 style={{color: "red"}}> NO </h1>}
//{age}
//<button onClick={increaseAge}>Increase age</button>

export default App;
