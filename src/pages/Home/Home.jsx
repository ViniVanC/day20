import React, { useRef } from "react";
import { Intro } from "./sections/Intro";
import { AboutUs } from "./sections/AboutUs";
import { Contact } from "./sections/Contact";
import { Reviews } from "./sections/Reviews";
import { Container } from "../../components/Container";

export const Home = () => {
  const funScrollToNextSection = () => {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Container>
        <Intro funScrollToNextSection={funScrollToNextSection} />
        <AboutUs />
        <Contact />
        <Reviews />
      </Container>
    </div>
  );
};
