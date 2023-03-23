import React from "react";
import './App.css';
import Kezdolap from "./pages/Kezdolap";
import Feladat1 from "./pages/Feladat1";
import Feladat2 from "./pages/Feladat2";
import Feladat3 from "./pages/Feladat3";
import Account from "./pages/Feladat3/Account";
import Kezdooldal from "./pages/Feladat3/Kezdooldal";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

export default function App() {

  return (
    <div className="App-header">
      <header className="select-header">
        <BrowserRouter>
          <nav className="nav-main">
            <div>
              <Link to="/" >Kezdőlap</Link>
            </div>
            <div>
              <Link to="/feladat1" >1. feladat</Link>
            </div>
            <div>
              <Link to="/feladat2" >2. feladat</Link>
            </div>
            <div>
              <Link to="/feladat3" >3. feladat</Link>
            </div>
          </nav>

          <Routes>
            <Route index element={ <Kezdolap /> } />
            <Route path="/feladat1" element={ <Feladat1 /> } />
            <Route path="/feladat2" element={ <Feladat2 /> } />
            <Route path="/feladat3" element={ <Feladat3 /> } />

            <Route path="/feladat3/kezdooldal" element={ <Kezdooldal /> } />
            <Route path="/feladat3/kepek" element={ <Kezdooldal /> } />
            <Route path="/feladat3/videok" element={ <Kezdooldal /> } />
            <Route path="/feladat3/account" element={ <Account /> } />

          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
};
