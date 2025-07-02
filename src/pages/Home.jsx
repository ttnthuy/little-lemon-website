import React from "react";
import Hero from "../components/Hero/Hero";
import Specials from "../components/Specials/Specials";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </React.Fragment>
  );
};

export default Home;
