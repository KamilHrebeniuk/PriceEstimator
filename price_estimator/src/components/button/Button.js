import React from "react";
import UserImage from "../../assets/icons/user.png";
import "./Button.scss";

const Button = ({ label = "Button", color = "#F05365" }) => {
  return (
    <div className="buttonContainer" style={{ backgroundColor: color }}>
      <div className="buttonImageContainer">
        <img src={UserImage} alt="ButtonImage" className="buttonImage" />
      </div>
      <div className="buttonImageText">{label}</div>
    </div>
  );
};

export default Button;
