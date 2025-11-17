import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

export default function Nav() {
  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeMenu);
  };

  return (
    <div className={navCSS.Nav_wrapper}>
      <div className={navCSS.logo}>
        <a href="#">
          NOX<span>STAR</span>
        </a>
      </div>

      <ul ref={menu}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#product">Products</a>
        </li>
        <li>
          <a href="#team">Our Team</a>
        </li>
        <li>
          <a href="#partner">Partners</a>
        </li>
      </ul>

      <div className={navCSS.NavBtns}>
        <button className="btn">
          <i className="ri-discord-line"></i>Discord
        </button>
        <button>
          <i className="ri-wallet-line"></i>Contact
        </button>
        <i className="ri-menu-line" id={navCSS.bars} onClick={menuHandler}></i>
      </div>
    </div>
  );
}
