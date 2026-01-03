import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comp/Home.jsx';
import Login from './comp/login.jsx';
import Signup from './comp/signup.jsx';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        {/*Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/*Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
