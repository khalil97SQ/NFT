import React from "react";
import sliderCss from "./Slider.module.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Auto-scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Slider() {
  return (
    <div className={sliderCss.slider_wrapper}>
      <Splide
        options={{
          type: "loop",
          perPage: 10,
          focus: "center",
          pagination: false,
          arrows: false,
          drag: "free",
          AutoScroll: {
            speed: 1,
          },
          breakpoints: {
            1600: {
              perPage: 8,
            },
            1300: {
              perPage: 7,
            },
            1100: {
              perPage: 6,
            },
            900: {
              perPage: 4,
            },
            600: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
            100: {
              perPage: 1,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <h1>NOXSTR</h1>
        </SplideSlide>
        <SplideSlide>
          <h1>BOXNFT</h1>
        </SplideSlide>
        <SplideSlide>
          <h1>NFTBOX</h1>
        </SplideSlide>
        <SplideSlide>
          <h1>NOXSTR</h1>
        </SplideSlide>
        <SplideSlide>
          <h1>BOXNFT</h1>
        </SplideSlide>
        <SplideSlide>
          <h1>NFTBOX</h1>
        </SplideSlide>
      </Splide>
    </div>
  );
}
