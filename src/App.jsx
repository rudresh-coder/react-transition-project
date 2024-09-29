import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [isWhite, setWhite] = useState(true);
  const [isBlack, setBlack] = useState(true);
  const [animateWhite, setAnimateWhite] = useState(false);
  const [animateBlack, setAnimateBlack] = useState(false);
  
  const handleWhite = () => {
    setAnimateWhite(true);
    setTimeout(() => {
      setWhite(p => !p);
      setAnimateWhite(false);
    }, 4000);
  };

  const handleBlack = () => {
    setAnimateBlack(true);
    setTimeout(() => {
      setBlack(p => !p);
      setAnimateBlack(false);
    }, 4000);
  };

  const w = isWhite ? (animateWhite ? "S1 whiteToBlack" : "S1") : (animateWhite ? "S1 blackToWhite" : "S1");
  const b = isBlack ? (animateBlack ? "S2 blackToWhite" : "S2") : (animateBlack ? "S2 whiteToBlack" : "S2");

  return (
    <>
    <Navbar />
      <div className="p">
        <div className={w}>
          <div className="text fadeIn">
            White-Section
          </div>
          <div>
            <div className="card">
              <img src="src/duck.jpg" alt="duck" className="card-img"/>
            </div>
              <button className="whiteButton" type="button" onClick={handleWhite}>
                 Click For Black
              </button>
          </div>
        </div>
        <div className={b}>
          <div className="text fadeIn">
            Black-Section
          </div>
          <div>
            <div className="card">
              <img src="src/bridge.jpg" alt="bridge" className="card-img"/>
            </div>
              <button className="blackButton" type="button" onClick={handleBlack}>
                Click For white
              </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
