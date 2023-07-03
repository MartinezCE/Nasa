import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Mars from "../Mars/Mars";
import Apod from "../Apod/Apod";
import Search from "../Search/Search";

const Main = () => {
  return (
    <div>
      <Header />
      <Apod />
      <Search />
      <Mars />
      <Footer />
    </div>
  );
};

export default Main;
