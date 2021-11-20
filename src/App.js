import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Team from './Components/Pages/Team';
import Support from './Components/Pages/Support';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/team' component={Team} />
          <Route path='/support' component={Support} />
        </Routes>
      </Router>
    </>
  );
}

export default App;