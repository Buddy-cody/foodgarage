import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home';
import Project from './Routes/Project';
import About from './Routes/About';
import Contact from './Routes/Contact';

import {Roure,Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Routes path="/" element={<Home/>} />
        <Routes path="/Project" element={<Project/>} />
        <Routes path="/About" element={<About/>} />
        <Routes path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  );
}
import { Form } from 'formik';

export default App;
