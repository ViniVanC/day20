import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

export const ReviewsItem = ({ title, description, open = false }) => {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div
      className={`drop-down__box ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="drop-down__header">
        <span>{title.trim()}</span>
        <button>
          <FaPlus />
        </button>
      </div>
      <div className="drop-down__main">"{description.trim()}"</div>
    </div>
  );
};
