import React, { useEffect } from "react";
import Header from "./components/Header";

export default function App() {
  // --- ---

  const randomNumberBetween = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min));

  // --- ---

  

  return (
    <>
      <div className="center">
        <h1>Scroll Down</h1>
      </div>
      <Header />
      <div className="triangle-topleft" />
      <div className="triangle-bottomright" />

      {/* <div className="center">
        <main className="center">
          <h2>Feed</h2>
        </main>
      </div>

      <div className="center">
        <footer className="center">
          <h2>Footer</h2>
        </footer>
      </div> */}
    </>
  );
}
