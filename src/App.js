// filename - App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SiteFooter from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages";
import About from "./pages/home";
import Events from "./pages/events";
import AnnualReport from "./pages/submission";
import Teams from "./pages/team";
import Blogs from "./pages/manual";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/submissions" element={<AnnualReport />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/manual" element={<Blogs />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>

        <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
