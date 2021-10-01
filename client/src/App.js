import React from "react";
import Header from "./components/HeaderV2";
import Routes from "./Routes";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  // --- ---
  // --- ---
  return (
    <div className="">
      <Router>
        <Header /> 
        <Sidebar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}
