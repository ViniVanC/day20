import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export const Intro = ({ funScrollToNextSection }) => {
  return (
    <section id="intro">
      <h1>
        "lorem" <br /> Lorem, ipsum dolor.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quod
        fugiat earum asperiores veniam deserunt, voluptates, error obcaecati
        architecto velit quae, dolore dolores. Sed, ad veritatis! Asperiores ab
        dolore ducimus.
      </p>
      <Link to="/contact">contact us</Link>
      <button className="scrollBtn" onClick={funScrollToNextSection}>
        <FaArrowDown size={18} />
      </button>
    </section>
  );
};
