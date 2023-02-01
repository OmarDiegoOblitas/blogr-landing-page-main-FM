import React from "react";
import image from "../../image/illustration-phones.svg";
import "./style.css";

const Info = () => {
  return (
    <div className="phone">
      <div className="state">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <span className="titleState">State of the Art Infrastructure</span>
        <p>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};

export default Info;
