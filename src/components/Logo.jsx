import React from "react";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="logo"
      onClick={() => {
        document.documentElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </Link>
  );
};
