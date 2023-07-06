import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Favorites from '../Favorites/Favorites';
import Apod from "../Apod/Apod";
import Search from "../Search/Search";

const Main = () => {
  return (
    <div>
      <Header />
      <Apod />
      <Search />
      <Favorites />
      <Footer />
    </div>
  );
};

export default Main;
