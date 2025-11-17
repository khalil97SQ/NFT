import React from "react";
import headerCSS from "./../Header/Header.module.css";

import heroImage from "./../../assets/hero-img.png";
import element1 from "./../../assets/element-star.png";

import { ReactTyped } from "react-typed";

export default function Header() {
  return (
    <div className={`${headerCSS.Header_wrapper} section`} id="home">
      <span className={headerCSS.element2}></span>
      <div className={headerCSS.Header_content}>
        <h2>
          With
          <span>
            <ReactTyped
              strings={["Khalil", "Diaa", "Hamod"]}
              typeSpeed={50}
              backSpeed={70}
              loop={true}
            ></ReactTyped>
          </span>
          <br />
          Explore NFT <br />
          Collection
        </h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          accusamus fugiat atque accusantium, fuga ut modi maiores ea aspernatur
          nesciunt nemo ab dolorum distinctio molestiae et minima, pariatur
          vitae exercitationem.
        </p>

        <div className={headerCSS.clients}>
          <p className="Counters">
            2021+ <span>Clients</span>
          </p>
          <p className="Counters">
            20000+ <span>Whitelist Profiles</span>
          </p>
        </div>

        <div className={headerCSS.header_btns}>
          <button className="btn">
            <i className="ri-wallet-line"></i>Connect Wallet
          </button>
          <button>
            <i className="ri-links-line"></i>WhiteList Now
          </button>
        </div>
      </div>

      <div className={headerCSS.Header_image}>
        <img src={heroImage} alt="hero-img" />
        <img src={element1} alt="" id={headerCSS.element1} />
      </div>
    </div>
  );
}
