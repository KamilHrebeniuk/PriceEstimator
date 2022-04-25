import "./HomePage.scss";
import Background from "../../layout/Background";
import React from "react";
import Header from "../../layout/Header";
import Search from "../../layout/Search";
import ContentElement from "../../layout/Content";

const HomePage = () => {
  return (
    <>
      <Background />
      <Header />
      <div className="contentLayout">
          <div className="contentElementContainer">
              <ContentElement />
              <ContentElement />
              <ContentElement />
          </div>
          <Search />
      </div>
    </>
  );
};

export default HomePage;
