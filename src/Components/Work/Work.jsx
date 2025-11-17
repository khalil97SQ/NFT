import React from "react";
import workCSS from "./Work.module.css";

import cardImg1 from "./../../assets/work-1.svg";
import cardImg2 from "./../../assets/work-2.svg";
import cardImg3 from "./../../assets/work-3.svg";
import cardImg4 from "./../../assets/work-4.svg";

export default function Work() {
  const workData = [
    {
      img: cardImg1,
      title: "Collect The Wallet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, itaque.",
    },
    {
      img: cardImg2,
      title: "Select The Quantity",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, itaque.",
    },
    {
      img: cardImg3,
      title: "Confirm Transaction",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, itaque.",
    },
    {
      img: cardImg4,
      title: "Receive Your NFT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, itaque.",
    },
  ];

  return (
    <div className={`${workCSS.Work_wrapper} section`}>
      <h2 className="Section_Title">
        How to <span>NOXSTAR</span> Work
      </h2>
      <div className={workCSS.Cards}>
        {workData.map((card, index) => (
          <div key={index} className={`${workCSS.Card} card`}>
            <span></span>
            <span></span>

            <img src={card.img} alt="" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
