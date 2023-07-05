import React from "react";
import { SiNasa } from "react-icons/si";
import "./styles.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <a href="#APOD">
            <SiNasa color="white" size={92} />
          </a>
        </div>
        <div>
          <ul className=" sm:block sm:flex sm:flex-row sm:text-2xl xl:text-2xl text-base">
            <li>
              <a className="" href="#APOD">
                APOD
              </a>
            </li>
            <li>
              <a href="#SpaceX">Spatial search</a>
            </li>
            <li>
              <a href="#Fav">Favorites</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
