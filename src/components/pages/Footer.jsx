import React from "react";
import "../../styles/components/__index.css";
import { logofooter } from "../../assets/index";

const Footer = () => {
  return (
    <div>
      <div className="row footer">
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <ul>
                <li>
                  <a href="#">
                    <h5>Home</h5>
                  </a>
                </li>

                <li>Home</li>

                <li>Community</li>

                <li>Events</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-sm">
              <ul>
                <li>
                  <h5>Resources</h5>
                </li>

                <li>Blogs</li>

                <li>News</li>

                <li>Guides</li>
                <li>Help Center</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="row">
            <div className="col-sm">
              <ul>
                <li>
                  <h5>Community</h5>
                </li>

                <li>NewsFeed</li>

                <li>Profile</li>

                <li>Friends</li>
                <li>Forums</li>
              </ul>
            </div>
            <div className="col-sm">
              <ul>
                <li>
                  <h5>Main links</h5>
                </li>

                <li>Members</li>

                <li>Activity</li>

                <li>Groups</li>
                <li>Private Group</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div>
            <h5>Subscribe Cirkle Newsletter</h5>
          </div>
          <div>
            Subscribe to be the first one to know about updates.
            <br /> Enter your email.
          </div>
          <div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Email Address..."
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <div>chucuoi@gmail.com <br></br>(+84)03333333333</div>
          </div>
        </div>
      </div>

      <div className="row footer-bot">
        <div className="col-sm bot">
          <p>PNV-ers Creative Agency.</p>
        </div>
        <div className="col-sm ">
          <img className="imageLogoFooter" src={logofooter} alt="" />
        </div>
        <div className="col-sm ">
        </div>
      </div>
    </div>
  );
};

export default Footer;
