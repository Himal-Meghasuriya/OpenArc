import React from "react";
import Hero from "../components/hero-banner.png";

const Home = () => {
  return (
    <div className="Home-hero">
      <img src={Hero} alt="Hero" className="img-fluid w-100" />
      <div className="home-hero-text position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1>
          Innovating <br /> Tech Solution
        </h1>
      </div>
    </div>
  );
};

export default Home;
