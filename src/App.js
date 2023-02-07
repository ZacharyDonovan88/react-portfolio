import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import About from "./components/About/About.js";
import Work from "./components/Work/Work.js"

function App() {
  return (
    <div>
      <Home />,
      <Navbar />
      <div id="sidebar-padding">
        <About />
        <Work />
      </div>
    </div>
  );
}

export default App;
