import React from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerContainer">
        <div className="headerContainerHelper">
            <img className="headerLogoContainer" src={Logo} alt="Logo" />
            <div className="headerButtonsContainer">
                <Button label={"Zaloguj"} color={"#F05365"} />
                <Button label={"Zarejestruj"} color={"#4E5283"} />
            </div>
        </div>
    </div>
  );
};

export default Header;
