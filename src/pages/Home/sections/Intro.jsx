import React from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export const Intro = ({ funScrollToNextSection }) => {
  return (
    <section id="intro">
      <h1>
        "Dots" <br /> Агенція боротьби та вивчення аномалій.
      </h1>
      <p>
        Ми агенція що працює з аномаліями. Якщо ви зайшли на цей сайт і вам є що
        нам повідомити, не витрачайте дарма часу можливо у вас його вже дуже
        мало.
      </p>
      <Link to="/contact">contact us</Link>
      <button className="scrollBtn" onClick={funScrollToNextSection}>
        <FaArrowDown size={18} />
      </button>
    </section>
  );
};
