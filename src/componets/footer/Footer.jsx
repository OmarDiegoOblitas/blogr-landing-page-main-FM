import React from "react";
import imgfooterDesktop from "../../image/illustration-laptop-desktop.svg";
import imgfooterMobile from "../../image/illustration-laptop-mobile.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer_footer">
      <div className="image_footer">
        <div className="ImgFooterDesktop">
          <img src={imgfooterDesktop} alt="" />
        </div>
        <div className="ImgFooterMobile">
          <img src={imgfooterMobile} alt="" />
        </div>
      </div>
      <div className="info_footer">
        <span className="title">Free, open, simple</span>
        <p>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <span className="title">Powerful tooling</span>
        <p>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  );
};

export default Footer;
