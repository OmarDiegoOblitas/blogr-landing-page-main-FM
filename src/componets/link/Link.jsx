import React from "react";
import logo from "../../image/logo.svg";
import "./style.css";

const Links = () => {
  const rut1 = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const rut2 = ["About", "Team", "Blog", "Careers"];
  const rut3 = ["Contact", "Newsletter", "LinkedIn"];

  return (
    <div className="back">
      <div className="logoEnd">
        <img src={logo} alt="" />
      </div>
      <div className="product">
        <button>Product</button>
        {rut1.map((rut1, index) => (
          <span key={index}>
            <p>{rut1}</p>
          </span>
        ))}
      </div>

      <div className="company">
        <button> Company</button>
        {rut2.map((rut2, index) => (
          <span key={index}>
            <p>{rut2}</p>
          </span>
        ))}
      </div>

      <div className="connect">
        <button> Connect</button>
        {rut3.map((rut3, index) => (
          <span key={index}>
            <p>{rut3}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Links;
