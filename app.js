import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import * as React from "react";
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    
    <div>
<Navbar />       
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Home" element={<Home/>} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
