import React, { Component } from "react";
import portfolioData from "../../portfoliodata";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img
              className="s-about__pic"
              src="images/avatars/user-09.jpg"
              alt=""
            />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
              {portfolioData.aboutme}
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  {portfolioData.name} <br />
                  {/* {portfolioData["location-firstpart"]} <br />
                  {portfolioData["location-secondpart"]} <br />
                  <a href="tel:+5582">{portfolioData.phonenumber}</a> <br /> */}
                  <a href="mailto:rodolfomoreira1994@gmail.com">{portfolioData.email}</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="https://drive.google.com/file/d/1MdGESpRZxjZuEGCz_Rh1XZMCXTD7opQH/view?usp=sharing" target="_blank"className="btn btn--download">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{
                      fill: "rgba(0, 0, 0, 1)",
                      transform: "",
                      msFilter: "",
                    }}
                  >
                    <path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" />
                    <path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
