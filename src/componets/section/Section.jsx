import React from "react";
import fondSectionDesktop from "../../image/illustration-editor-desktop.svg";
import fondSectionMobile from "../../image/illustration-editor-mobile.svg";
import "./style.css";

const Section = () => {
  return (
    <div className="sectionIntial">
      <div>
        <span className="titleH1">Designed for the future</span>
      </div>

      <div className="container">
        <div className="designSection">
          <div className="infoSection">
            <span className="subTitle">Introducing an extensible editor </span>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <span className="subTitle">Robust content management</span>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div className="ImgSection">
          <div className="imgDesktopSection">
            <img src={fondSectionDesktop} alt="" />
          </div>
          <div className="imgMobileSection">
            <img src={fondSectionMobile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
