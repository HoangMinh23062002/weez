import React from "react";
import "../../../styles/components/__index.css";
import { imax, imgr, Image } from "../../../assets/index";

export default function slider() {
  return (
    <div className="homePage-intro">
      <div className="homePage-intro-why">
        <div className="homePage-intro-why-word">
          <div className="homePage-intro-why-word-specific">
            <p className="intro-title"> Whats EZParking</p>
            <h2 className="intro-why">
              Why you should use <br></br> EZParking?
            </h2>
            <p className="intro-describe">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit,
              sed do eiusmod tempor incididunt ut labore et <br></br>dolore
              magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <div className="intro-catogary">
            <ul>
              <li><i class="fa fa-circle"></i>Reducing traffic jams & illegal parking</li>
              <li><i class="fa fa-circle"></i>Saving time and money</li>
              <li><i class="fa fa-circle"></i>Convenience</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="homePage-intro-img1">
        <img src={imax} />
      </div>
      <div className="homePage-intro-img2">
        <img src={imgr} />
      </div>
      <div className="homePage-intro-img3">
        <img src={Image} />
      </div>
    </div>
  );
}
