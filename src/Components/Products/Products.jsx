import React from "react";
import productCSS from "./Products.module.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Auto-scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import ProductImg1 from "./../../assets/product1.jpg";
import ProductImg2 from "./../../assets/product2.jpg";
import ProductImg3 from "./../../assets/product3.jpg";
import ProductImg4 from "./../../assets/product4.jpg";
import ProductImg5 from "./../../assets/product5.jpg";
import ProductImg6 from "./../../assets/product6.jpg";
import ProductImg7 from "./../../assets/product7.jpg";
import ProductImg8 from "./../../assets/product8.jpg";
import ProductImg9 from "./../../assets/product9.jpg";
import ProductImg10 from "./../../assets/product10.jpg";

export default function Products() {
  const products1 = [
    { title: "Skeletin", image: ProductImg1 },
    { title: "Skeletin", image: ProductImg2 },
    { title: "Skeletin", image: ProductImg3 },
    { title: "Skeletin", image: ProductImg4 },
    { title: "Skeletin", image: ProductImg5 },
  ];

  const products2 = [
    { title: "Skeletin", image: ProductImg6 },
    { title: "Skeletin", image: ProductImg7 },
    { title: "Skeletin", image: ProductImg8 },
    { title: "Skeletin", image: ProductImg9 },
    { title: "Skeletin", image: ProductImg10 },
  ];

  return (
    <div className={productCSS.Product_wrapper} id="product">
      <Splide
        options={{
          perPage: 5,
          gap: "2rem",
          type: "loop",
          focus: "center",
          drag: "free",
          pagination: false,
          AutoScroll: {
            speed: 1,
          },
          breakpoints: {
            1400: {
              perPage: 5,
            },
            1300: {
              perPage: 4,
            },
            1100: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            500: {
              perPage: 1,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {products1.map((product, index) => (
          <SplideSlide>
            <div key={index} className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
              <img src={product.image} alt="" />
              <h2>
                {product.title} #{(index + 1).toString().padStart(2, "0")}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Splide
        options={{
          perPage: 5,
          direction: "rtl",
          gap: "2rem",
          type: "loop",
          focus: "center",
          drag: "free",
          pagination: false,
          AutoScroll: {
            speed: 1,
          },
          breakpoints: {
            1400: {
              perPage: 5,
            },
            1300: {
              perPage: 4,
            },
            1100: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            500: {
              perPage: 1,
            },
          },
        }}
        extensions={{ AutoScroll }}
      >
        {products2.map((product, index) => (
          <SplideSlide>
            <div key={index} className={`${productCSS.Product_Card} card`}>
              <span></span>
              <span></span>
              <img src={product.image} alt="" />
              <h2>
                {product.title} #{(index + 6).toString().padStart(2, "0")}
              </h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
