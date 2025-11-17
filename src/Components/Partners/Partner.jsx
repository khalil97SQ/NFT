import React from "react";
import partnerCSS from "./Partner.module.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Auto-scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import PartnerImg1 from "./../../assets/partner-1.png";
import PartnerImg2 from "./../../assets/partner-2.png";
import PartnerImg3 from "./../../assets/partner-3.png";
import PartnerImg4 from "./../../assets/partner-4.png";
import PartnerImg5 from "./../../assets/partner-5.png";
import PartnerImg6 from "./../../assets/partner-6.png";
import PartnerImg7 from "./../../assets/partner-7.png";
import PartnerImg8 from "./../../assets/partner-8.png";
import PartnerImg10 from "./../../assets/partner-10.png";
import PartnerImg11 from "./../../assets/partner-11.png";
import PartnerImg12 from "./../../assets/partner-12.png";

export default function Partner() {
  const image1 = [
    PartnerImg1,
    PartnerImg2,
    PartnerImg3,
    PartnerImg4,
    PartnerImg5,
  ];

  const image2 = [
    PartnerImg5,
    PartnerImg6,
    PartnerImg7,
    PartnerImg8,
    PartnerImg10,
  ];
  const image3 = [
    PartnerImg10,
    PartnerImg11,
    PartnerImg12,
    PartnerImg1,
    PartnerImg2,
  ];
  return (
    <div className={`${partnerCSS.Partners_wrapper} section`} id="partner">
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          focus: "center",
          drag: "free",
          pagination: false,
          gap: "1rem",
          AutoScroll: {
            speed: 1,
          },
          arrows: false,
          breakpoints: {
            900: {
              perPage: 4,
            },
            700: {
              perPage: 3,
            },

            500: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {image1.map((i) => (
          <SplideSlide>
            <img src={i} alt="" />
          </SplideSlide>
        ))}
      </Splide>
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          direction: "rtl",
          focus: "center",
          drag: "free",
          pagination: false,
          gap: "1rem",
          AutoScroll: {
            speed: 1,
          },
          arrows: false,
          breakpoints: {
            900: {
              perPage: 4,
            },
            700: {
              perPage: 3,
            },

            500: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {image2.map((i) => (
          <SplideSlide>
            <img src={i} alt="" />
          </SplideSlide>
        ))}
      </Splide>
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          focus: "center",
          drag: "free",
          pagination: false,
          gap: "1rem",
          AutoScroll: {
            speed: 1,
          },
          arrows: false,
          breakpoints: {
            900: {
              perPage: 4,
            },
            700: {
              perPage: 3,
            },

            500: {
              perPage: 2,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {image3.map((i) => (
          <SplideSlide>
            <img src={i} alt="" />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
