import React from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button";
import "./Header.scss";

const Header = () => {
  // const Modal = () => (
  //     <PopUp trigger={<button className="button"> Open Modal </button>} modal>
  //         <span> Modal content </span>
  //     </PopUp>
  // );

  const login = () => {
    alert("Looogin");

    const url = "http://localhost:8000/login/";
    const data = {
      username: "test111",
      password: "test111",
    };

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => alert("Zalogowano" + r.token));
  };

  const register = () => {
    alert("Register");

    const url = "http://localhost:8000/register/";
    const data = {
      username: "test111",
      password: "test111",
      password2: "test111",
    };

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => alert(`Zarejestrowano`));
  };

  return (
    <div className="headerContainer">
      <div className="headerContainerHelper">
        <img className="headerLogoContainer" src={Logo} alt="Logo" />
        <div className="headerButtonsContainer">
          <Button label={"Zaloguj"} color={"#F05365"} buttonHandler={login} />
          <Button
            label={"Zarejestruj"}
            color={"#4E5283"}
            buttonHandler={register}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
