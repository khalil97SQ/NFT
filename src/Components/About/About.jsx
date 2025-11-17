import React from "react";
import aboutCSS from "./About.module.css";

export default function About() {
  const dataInfo = [
    {
      title: "High Quaility",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias!",
    },
    {
      title: "Big Collection",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias!",
    },
    {
      title: "Top Resource",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias!",
    },
    {
      title: "Big Community",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias!",
    },
  ];

  return (
    <div className={`${aboutCSS.About_wrapper} section`} id="about">
      <h2 className="Section_Title">
        <span>About</span> Us
      </h2>
      <p className={aboutCSS.section_paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        voluptatum veritatis voluptate eligendi nostrum iusto, consequatur
        deserunt nam inventore neque molestias sequi officiis minus dolor! Vero
        harum atque officiis nostrum.
      </p>
      <div className={aboutCSS.Counters}>
        <p className="Counters">
          <span>2024+</span> Total Items
        </p>
        <p className="Counters">
          <span>20000+</span> WhiteList Profiles
        </p>
      </div>
      <div className={aboutCSS.AboutCards}>
        {dataInfo.map((t, index) => {
          return (
            <div
              key={index}
              className={`${aboutCSS.About_card} card`}
              count={index + 1}
            >
              <span></span>
              <span></span>
              <h2>{t.title}</h2>
              <p>{t.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
