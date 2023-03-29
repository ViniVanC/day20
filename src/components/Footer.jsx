import React from "react";
import { Container } from "./Container";
import { Navbar } from "./Navbar";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="top">
          <div className="right-box">
            <Logo />
            <p>
              Сподіваємось ви прийняли правильне рішення{" "}
              <Link to={"/contact"}>contact</Link>
            </p>
          </div>
          <div className="left-box">
            <h2 className="footer-title">Menu</h2>
            <Navbar />
          </div>
        </div>
        <div className="bottom">
          Powered dy{" "}
          <a href="https://github.com/ViniVanC" target={"_blank"}>
            Vini
          </a>
        </div>
      </Container>
    </footer>
  );
};
