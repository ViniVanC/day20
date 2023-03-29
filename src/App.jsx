import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
