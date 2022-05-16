import React, { useState } from "react";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/button";
import "./Header.scss";

const Header = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [loginValue, setLogin] = useState("Wpisz Login");
  const [passwordValue, setPassword] = useState("Wpisz Hasło");
  const [passwordValue2, setPassword2] = useState("Powtórz Hasło");

  const login = () => {
    alert("Login" + " " + loginValue + " " + passwordValue);

    const url = "http://localhost:8000/login/";
    const data = {
      username: loginValue,
      password: passwordValue,
    };

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => alert("Zalogowano" + r.token));
  };

  const register = () => {
    alert(
      "Register" + " " + loginValue + " " + passwordValue + " " + passwordValue2
    );

    const url = "http://localhost:8000/register/";
    const data = {
      username: loginValue,
      password: passwordValue,
      password2: passwordValue2,
    };

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then((r) => alert("Zarejestrowano"));
  };

  return (
    <div className="headerContainer">
      {showLogin ? (
        <div className="modalContainerHelper">
          <form onSubmit={login} className="contentContainer modalContainer">
            <div className="defaultContainer searchHeader">Zaloguj</div>
            <div className="searchInputContainer">
              <label className="defaultContainer searchInputLabel">Login</label>
              <input
                type="text"
                value={loginValue}
                className="defaultContainer searchInputInput"
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="searchInputContainer">
              <label className="defaultContainer searchInputLabel">Hasło</label>
              <input
                type="text"
                value={passwordValue}
                className="defaultContainer searchInputInput"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label className="defaultContainer searchButtonContainer">
              Zaloguj
              <input style={{ display: "none" }} type="submit" />
            </label>
            <button onClick={() => setShowLogin(false)}>Zamknij</button>
          </form>
        </div>
      ) : null}

      {showRegister ? (
        <div className="modalContainerHelper">
          <form onSubmit={register} className="contentContainer modalContainer">
            <div className="defaultContainer searchHeader">Zarejestruj</div>
            <div className="searchInputContainer">
              <label className="defaultContainer searchInputLabel">Login</label>
              <input
                type="text"
                value={loginValue}
                className="defaultContainer searchInputInput"
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="searchInputContainer">
              <label className="defaultContainer searchInputLabel">Hasło</label>
              <input
                type="text"
                value={passwordValue}
                className="defaultContainer searchInputInput"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="searchInputContainer">
              <label className="defaultContainer searchInputLabel">
                Powtórz hasło
              </label>
              <input
                type="text"
                value={passwordValue2}
                className="defaultContainer searchInputInput"
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
            <label className="defaultContainer searchButtonContainer">
              Zarejestruj
              <input style={{ display: "none" }} type="submit" />
            </label>
            <button onClick={() => setShowRegister(false)}>Zamknij</button>
          </form>
        </div>
      ) : null}

      <div className="headerContainerHelper">
        <img className="headerLogoContainer" src={Logo} alt="Logo" />
        <div className="headerButtonsContainer">
          <Button
            label={"Zaloguj"}
            color={"#F05365"}
            buttonHandler={() => {
              setShowLogin(true);
            }}
          />
          <Button
            label={"Zarejestruj"}
            color={"#4E5283"}
            buttonHandler={() => {
              setShowRegister(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
