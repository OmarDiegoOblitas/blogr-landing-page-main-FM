import React, { useState } from "react";
import logo from "../../image/logo.svg";
import hamburg from "../../image/icon-hamburger.svg";
import close from "../../image/icon-close.svg";
import icon from "../../image/icon-arrow-light.svg";
import "./style.css";

const link1 = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integrations",
];
const link2 = ["About", "Team", "Blog", "Careers", "Connect"];
const link3 = ["Contact", "Newsletter", "LinkedIn"];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="intro">
      <div className="mainMobile">
        <nav className="navBarMobileHeader">
          <div className="ImgMobileHeader">
            <img src={logo} alt="logo"/>
          </div>
          <img
            onClick={() => setIsOpen(!isOpen)}
            src={isOpen ? close : hamburg}
            alt=""
          />
          {isOpen && (
            <div className="navBarMobile">
              <div className="dropdown">
                <button className="dropBtn">
                  Product <img src={icon} alt="" />
                </button>
                <img to={this.props} onClick={icon} alt="icon">
                  Here
                </img>
                <div className="dropdown-content">
                  {link1.map((link1, index) => (
                    <div key={index}>
                      <a href="#">{link1}</a>
                    </div>
                  ))}
                </div>
                <button className="dropBtn">
                  Company <img src={icon} alt="" />
                </button>
                <div className="dropdown-content">
                  {link2.map((link2, index) => (
                    <div key={index}>
                      <a href="#">{link2}</a>
                    </div>
                  ))}
                </div>
                <button className="dropBtn">
                  Connect <img src={icon} alt="" />
                </button>
                <div className="dropdown-content">
                  {link3.map((link3, index) => (
                    <div key={index}>
                      <a href="#">{link3}</a>
                    </div>
                  ))}
                </div>
                <div className="login">
                  <button className="button"> Login </button>
                  <button className="buttonSecond">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      <nav className="navBarDesktop">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="dropdown">
            <button className="dropBtn">
              Product <img src={icon} alt="icon" />
            </button>
            <div className="dropdown-content">
              {link1.map((link1, index) => (
                <div key={index}>
                  <a href="#">{link1}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="dropdown">
            <button className="dropBtn">
              Company <img src={icon} alt="icon" />
            </button>
            <div className="dropdown-content">
              {link2.map((link2, index) => (
                <div key={index}>
                  <a href="#">{link2}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="dropdown">
            <button className="dropBtn">
              Connect <img src={icon} alt="icon" />
            </button>
            <div className="dropdown-content">
              {link3.map((link3, index) => (
                <div key={index}>
                  <a href="#">{link3}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="login">
          <div className="btn">
            <button className="button"> Login </button>
          </div>
          <div className="btn">
            <button className="buttonSecond">Sign Up</button>
          </div>
        </div>
      </nav>
      <div className="blog">
        <span className="firstTitle">A modern publishing platform </span>
        <p className="litleInfo">
          Grow your audience and build your online brand
        </p>
        <div className="buttonAlter">
          <button>Start for Free </button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
