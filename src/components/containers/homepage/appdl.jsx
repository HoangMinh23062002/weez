import React from "react";
import "../../../styles/components/__index.css";
import { image301, mobile, image288 } from "../../../assets/index";

export default function Appdl() {
  return (
    <div className="homePage-dl">
      <div className="homePage-dl-imageba">
        <img src={image301} />
        <div className="get-content">
          <div className="title-dl">
            <p className="get-app">Get Our Application</p>
            <h3 className="get-slogan">
              You Can Easily Find <br></br> This App...!
            </h3>
            <p className="get-des">
              I say chap that’s suing lavatory chip shop
              <br></br> gosh off his smashing boot are you taking
              <br></br>the piss posh loo brilliant.
            </p>
            <div className="dl-oparate">
              <img src={image288} />
              <img src={image288} />
            </div>
          </div>
          <div className="image-app">
            <img src={mobile} />
          </div>
        </div>
      </div>
    </div>
  );
}
