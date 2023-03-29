import React from "react";
import { Container } from "../components/Container";

export const Contact = () => {
  return (
    <div className="contact-page">
      <Container>
        <div className="box">
          <h2 className="title">Бачили щось аномальне? Повідомте нас.</h2>
          <p>
            Якщо ви, чи ваші близькі бачили щось аномальне, паранормальне,
            незвичайне, дивне. Обов'язково повідомляйте нас про це.
          </p>
          <form className="form">
            <input type="text" placeholder="ім'я" />
            <textarea placeholder="опишіть що ви бачили"></textarea>
            <button>надіслати</button>
          </form>
        </div>
        <hr />
        <div className="box">
          <h2 className="title">Хочете приєднатись до агенції.</h2>
          <p>
            Для цього просто залиште заявку, заповнивши відповідну форму нижче.
          </p>
          <form className="form">
            <input type="text" placeholder="ім'я" />
            <input type="text" placeholder="вік" />
            <textarea placeholder="навички"></textarea>
            <button>надіслати</button>
          </form>
        </div>
      </Container>
    </div>
  );
};
