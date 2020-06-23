import React, { useEffect } from "react";
import Header from "./components/Header";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  // --- ---

  const randomNumberBetween = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min));

  // --- ---

  return (
    <>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}
