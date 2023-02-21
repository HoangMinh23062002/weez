import React from "react";
import Slider from "../containers/homepage/Slider";
import Plans from "../containers/homepage/Plans";
import Ownblog from "../containers/homepage/Ownblog";
import Intro from "../containers/homepage/Intro";
import Appdl from "../containers/homepage/Appdl";
// import Footer from "../containers/";
import Footer from "./Footer";
import Header from "./Header";

export default function Homepage() {
  return (
    <div className="page-intro">
      <Header/>
      <Slider />
      <Intro />
      <Ownblog />
      <Plans />
      <Appdl />
      <Footer/>
    </div>
  );
}


