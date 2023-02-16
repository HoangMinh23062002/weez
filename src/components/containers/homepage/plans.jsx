import React from "react";
import "../../../styles/components/__index.css";

export default function Plans() {
  return (
    <div className="homePage-plans">
    <div className="homePage-plans-nn">
      <button className="homePage-plans-nn-ame">Plans</button>

    </div>
      <div className="homePage-plans-detail">
        <div className="homePage-plans-detail-regular title">
          <h3 className="homePage-plans-detail-title">Regular Plan</h3>
          <h2>
            <sup className="sub-title">VND</sup>0
          </h2>
          <button className="choosing-plan">Select Plan</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Donec in nunc
          </p>
          <hr></hr>
          <div className="list-choosing">
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
              <li>consectetur</li>
              <li>adipiscing</li>
              <li>elit Donec</li>
              <li>in nunc</li>
            </ul>
          </div>
        </div>
        <div className="homePage-plans-detail-premium title">
        <h3 className="homePage-plans-detail-title">Premium Plan</h3>
          <h2>
            <sup className="sub-title">VND</sup>249
          </h2>
          <button className="choosing-plan-spe">Select Plan</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Donec in nunc
          </p>
          <hr></hr>
          <div className="list-choosing" >
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
              <li>consectetur</li>
              <li>adipiscing</li>
              <li>elit Donec</li>
              <li>in nunc</li>
            </ul>
          </div>
        </div>
        <div className="homePage-plans-detail-luxury title">
        <h3 className="homePage-plans-detail-title">Luxury Plan</h3>
          <h2>
            <sup className="sub-title">VND</sup>259
          </h2>
          <button className="choosing-plan">Select Plan</button>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>
            adipiscing elit. Donec in nunc
          </p>
          <hr></hr>
          <div className="list-choosing">
            <ul>
              <li>Lorem ipsum</li>
              <li>dolor sit amet</li>
              <li>consectetur</li>
              <li>adipiscing</li>
              <li>elit Donec</li>
              <li>in nunc</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
