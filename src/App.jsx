import React from "react";
import Navbar from "./assets/Navbar";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactLine from "./assets/ContactLine";
import Home from "./assets/Home"

const App = () => {
  return (
    <div>
      <ContactLine />
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
