import { useState } from "react";
import ResponsiveAppBar from "./components/Navbar";
import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Docs from "./components/Docs";
import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
