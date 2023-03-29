import React from "react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <div className="inner">
            <Logo />
            <Navbar />
          </div>
        </Container>
      </header>
      <hr
        style={{
          margin: "0",
        }}
      />
    </>
  );
};
