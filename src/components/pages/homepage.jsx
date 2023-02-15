import React from "react";
import Slider from "../containers/homepage/Slider";
import Plans from "../containers/homepage/Plans";
import Ownblog from "../containers/homepage/Ownblog";
import Intro from "../containers/homepage/Intro";
import Appdl from "../containers/homepage/Appdl";

export default function homepage() {
  return (
    <div className="page-intro">
      <Slider />
      <Intro />
      <Ownblog />
      <Plans />
      <Appdl />
    </div>
  );
}
