import React from "react";
import Navbar from "./components/pages/shared/Navbar";
import Banner from "./components/pages/Home/Banner";
import AboutUs from "./components/pages/Home/AboutUs/AboutUs";
import GrowthAndInovation from "./components/pages/Home/GrowthAndInovation/GrowthAndInovation";
import Services from "./components/pages/Home/Services/Services";
import Strength from "./components/pages/Home/Strength/Strength";

const App = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <GrowthAndInovation></GrowthAndInovation>
      <Services></Services>
      <Strength></Strength>
    </div>
  );
};

export default App;
