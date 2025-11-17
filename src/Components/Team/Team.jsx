import React from "react";
import teamCSS from "./Team.module.css";

import TeamImg1 from "./../../assets/team-1.jpg";
import TeamImg2 from "./../../assets/team-2.jpg";
import TeamImg3 from "./../../assets/team-3.jpg";
import TeamImg4 from "./../../assets/team-4.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

//Auto-scroll
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Team() {
  return (
    <div className={`${teamCSS.Team_wrapper} section`} id="team">
      <h2 className="Section_Title">
        Our <span>Team</span>
      </h2>

      <div className={teamCSS.TeamsCards}>
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            gap: "3rem",
            breakpoints: {
              768: {
                perPage: 1,
              },
              900: {
                perPage: 2,
              },
              1400: {
                perPage: 3,
              },
              1600: {
                perPage: 4,
              },
            },
          }}
        >
          <SplideSlide>
            <div className={`${teamCSS.TeamsCard} card`}>
              <span></span>
              <span></span>
              <img src={TeamImg1} alt="" />
              <h3>
                Jonathan Josh <small>Founder</small>
              </h3>
              <div className={teamCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-youtube-line"></i>
                <i className="ri-twitter-x-line"></i>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={`${teamCSS.TeamsCard} card`}>
              <span></span>
              <span></span>
              <img src={TeamImg2} alt="" />
              <h3>
                Jonathan Josh <small>Founder</small>
              </h3>
              <div className={teamCSS.social}>
                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-youtube-line"></i>
                <i className="ri-twitter-x-line"></i>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
