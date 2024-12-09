import React from "react";
import Hero from "../components/hero-banner.png";

const Home = () => {
  return (
    <div className="Home-hero" style={{ backgroundImage: `url(${Hero})` }}>
      <div class="container">
        <div class="row">
          <div class="col"><h1>1 of 2</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
