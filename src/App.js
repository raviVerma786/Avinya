import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
