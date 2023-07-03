import React from "react";
import { SiNasa } from "react-icons/si";
import './styles.css'
const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <SiNasa color="white" size={52} />
        </div>
        <div>
          <ul className=" sm:block sm:flex sm:flex-row">
            <li>
              <a className="" href="#APOD">
              APOD
              </a>
            </li>
            <li>                
              <a href="#SpaceX">Spatial search</a>
            </li>
            <li>
              <a href="#Mars">Mars</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
