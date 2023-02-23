import React from "react";
import Header from "../..//components/pages/Header";
import Footer from "../..//components/pages/Footer";
import Slider from "../..//components/containers/homepage/slider";
import Intro from "../..//components/containers/homepage/intro";
import Ownblog from "../..//components/containers/homepage/ownblog";
import Plans from "../..//components/containers/homepage/plans";
import Appdl from "../..//components/containers/homepage/appdl";

// import Footer from "../containers/";
//    

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


