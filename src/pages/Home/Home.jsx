import React, { useEffect, useRef, useState } from "react";
import { Intro } from "./sections/Intro";
import { AboutUs } from "./sections/AboutUs";
import { Contact } from "./sections/Contact";
import { Reviews } from "./sections/Reviews/Reviews";
import { Container } from "../../components/Container";
import { FaArrowUp } from "react-icons/fa";

export const Home = () => {
  const [viewBtnToTop, setViewBtnToTop] = useState(false);

  const funScrollToNextSection = () => {
    document
      .getElementById("about-us")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const funScrollToTop = () => {
    document.documentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 400) {
        setViewBtnToTop(true);
      } else {
        setViewBtnToTop(false);
      }
    };

    window.addEventListener("scroll", scroll);
  });

  return (
    <div className="home">
      <Container>
        <Intro funScrollToNextSection={funScrollToNextSection} />
        <hr />
        <AboutUs />
        <hr />
        <Contact />
        <hr />
        <Reviews />
      </Container>
      <button
        className={`scrollBtn ${viewBtnToTop ? "view" : ""}`}
        onClick={funScrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};
