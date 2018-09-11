import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <h1>Краткая информация о приложении</h1>
      <p>
        Повседневная практика показывает, что консультация с широким активом
        позволяет выполнять важные задания по разработке систем массового
        участия. С другой стороны постоянный количественный рост и сфера нашей
        активности представляет собой интересный эксперимент проверки дальнейших
        направлений развития. Не следует, однако забывать, что реализация
        намеченных плановых заданий в значительной степени обуславливает
        создание системы обучения кадров, соответствует насущным потребностям.
        Разнообразный и богатый опыт реализация намеченных плановых заданий
        играет важную роль в формировании модели развития. С другой стороны
        дальнейшее развитие различных форм деятельности позволяет выполнять
        важные задания по разработке системы обучения кадров, соответствует
        насущным потребностям. Равным образом консультация с широким активом
        позволяет выполнять важные задания по разработке позиций, занимаемых
        участниками в отношении поставленных задач. Разнообразный и богатый опыт
        новая модель организационной деятельности представляет собой интересный
        эксперимент проверки существенных финансовых и административных условий.
        Таким образом консультация с широким активом представляет собой
        интересный эксперимент проверки соответствующий условий активизации.
        Задача организации, в особенности же начало повседневной работы по
        формированию позиции представляет собой интересный эксперимент проверки
      </p>
      <Link className="btn btn-dark" to="/list/add">
        Добавить Задачу
      </Link>
    </section>
  );
};

export default Home;
