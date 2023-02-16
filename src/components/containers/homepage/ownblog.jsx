import React from "react";
import "../../../styles/components/__index.css";
import { Trophy, people, logoorca } from "../../../assets/index";

export default function Ownblog() {
  return (
    <div className="homePage-blog">
      <div className="homePage-blog-ourBlog blog-border">
        <div className="homePage-blog-ourBlog-title">
          <h3>
            <i class="fas fa-blog fa-blog-icon"></i>
            Our blog
          </h3>
        </div>

        <div className="homePage-blog-ourBlog-content">
          <img src={people} />
          <h5>
            <span className="highligh-title">+836k</span> Members
          </h5>
        </div>
        <p className="description-word">
          Share and answer all questions <br></br>
          about our application about<br></br>
          transactions, people, services
        </p>
        <h4 className="homePage-blog-ourBlog-join">
          Join Our Blog <i class="fa fa-arrow-right narrow-icon"></i>
        </h4>
      </div>
      <div className="homePage-blog-awards  blog-border">
        <h3>
          <i class="fas fa-award fa-blog-icon"></i>
          Awards
        </h3>
        <div className="homePage-blog-ourBlog-content">
          <img src={people} />
          <h5>
            Best of <span className="highligh-title">2021</span> on Orca Tank
          </h5>
        </div>
        <p className="description-word">
          The best idea of startup ideas at<br></br>
          organization Passerelles Numeriques<br></br>
          Vietnam
        </p>
        <h4 className="homePage-blog-ourBlog-aw">
         Go To Awards <i class="fa fa-arrow-right "></i>
        </h4>
      </div>
      <div className="homPage-blog-achievement">
        <h5>Our Achievement</h5>
        <h1>
          We are Connecting <br></br>
          You The Digital Life.
        </h1>
        <p>
          The scope the EZParking becomes crucial Is<br></br>
          helps the space owners and end users to<br></br>
          directly engage with their needs and wants.
        </p>
        <button className="homPage-blog-achievement-discover">
          Discover me
          <i class="fa fa-arrow-right narrow-dis"></i>
        </button>
      </div>
    </div>
  );
}
