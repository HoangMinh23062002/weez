import React from "react";
import '../../../styles/components/__index.css'
import { parkingImage } from "../../../assets/index";

export default function Slider() {
  return (
    <div className="homePage-ezParking">
      <div className="homePage-banner">
        <div className="homePage-banner-slogan">
          <div className="homePage-banner-slogan-show-first">
            <h1>Our <span className="high-color">solutions</span> for <br></br> your finding <span className="high-color">parking</span> </h1>
          </div>
          <div className="homePage-banner-slogan-show-second">
            <p>
              Supporting drivers easy to find parking space <br></br> Helping space owners
              earning passive income
            </p>
          </div>
          <div className="homePage-banner-slogan-show-seeMore">
            <p>Learn more <i class="fa-solid fa-greater-than"></i></p>
          </div>
        </div>
        <div className="homePage-banner-image">
          <img src={parkingImage} />
        </div>
      </div>
    </div>
  );
}
