import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />,
      <Home />,
      <Navbar />
    </div>
  );
}

export default App;
