import React from "react";
import Home from "./pages/home";
import RegisterForm from "./pages/register";
import Webinar from "./pages/webinar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register/:id" element={<RegisterForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/webinar" element={<Webinar />} />
      </Routes>
    </Router>
  );
}

export default App;
