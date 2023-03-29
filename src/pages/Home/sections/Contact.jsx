import React from "react";

export const Contact = () => {
  return (
    <section id="contact">
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
    </section>
  );
};
