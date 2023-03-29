import React from "react";
import { ReviewsItem } from "./ReviewsItem";

export const Reviews = () => {
  return (
    <section id="reviews">
      <h2 className="title">Відгуки</h2>
      <p>
        Відгуки про нас завжди гарні. Люди що скористались нашими послугами
        завжди задоволені, або більше ніде не можуть залишити відгук.
      </p>

      <div className="drop-down__items">
        <ReviewsItem
          title={"review 1"}
          description={
            "Я дуже радий що вони встигли нас врятувати. Дякую велике. Чудова агенція."
          }
          open={true}
        />
        <ReviewsItem
          title={"review 2"}
          description={
            "Ніхто не хотів братись за мою справу, але в агенції мені допомогли. Нарешті прокляття що тас всіх тероризувало зникло."
          }
        />
      </div>
    </section>
  );
};
