import { useState } from "react";
import arrowLeft from "../../images/arrow-left-icon.svg";
import arrowRight from "../../images/arrow-right-icon.svg";
import styles from "./sevicesPage.module.scss";

const carouselBox1 = () => {
  return (
    <div className={styles.boxWrapper}>
      <div>
        <h5>ВИХЛОПНА СИСТЕМА</h5>
        <p>Заміна глушника</p>
        <p>Заміна каталізатора</p>
        <p>Заміна лямбда-зонда</p>
        <p>Ремонт глушника</p>
        <h5>ІНШІ ПОСЛУГИ</h5>
        <p>Установка парктроніків</p>
        <p>Шумоізоляція авто</p>
      </div>
      <div>
        <h5>ПІДВІСКА</h5>
        <p>Діагностика підвіски</p>
        <p>Заміна втулки стабілізатора</p>
        <p>Заміна стійки стабілізатора</p>
        <p>Заміна маточини</p>
        <p>Заміна ходової</p>
        <p>Заміна кульової опори</p>
        <p>Розвал-сходження</p>
        <p>Ремонт амортизаторів</p>
        <p>Ремонт підвіски</p>
      </div>
    </div>
  );
};
const carouselBox2 = () => {
  return (
    <div className={styles.boxWrapper}>
      <div>
        <h5>СЕРВІСНЕ ТО</h5>
        <p>Заміна ременя ГРМ</p>
        <p>Заміна роликів ГРМ</p>
        <p>Планове техобслуговування</p>
        <p>Повна діагностика автомобіля</p>
        <p>Перевірка авто перед покупкою</p>
        <p>Промивання двигуна</p>
      </div>
      <div>
        <h5>ДВИГУН</h5>
        <p>Заміна мастила у двигуні</p>
        <h5>ПІДВІСКА</h5>
        <p>Заміна рульової рейки</p>
        <p>Заміна кермової тяги</p>
      </div>
    </div>
  );
};
const carouselBox3 = () => {
  return (
    <div className={styles.boxWrapper}>
      <div>
        <h5>СИСТЕМА ОХОЛОДЖЕННЯ</h5>
        <p>Заміна охолоджувальної рідини</p>
        <p>Заміна помпи</p>
        <p>Заміна радіатора охолодження</p>
        <p>Заміна термостату</p>
      </div>
      <div>
        <h5>ЗЧЕПЛЕННЯ</h5>
        <p>Заміна вичавного підшипника</p>
        <p>Заміна головного циліндра зчеплення</p>
        <p>Заміна зчеплення</p>
      </div>
    </div>
  );
};
const carouselBox4 = () => {
  return (
    <div className={styles.boxWrapper}>
      <div>
        <h5>ПАЛИВНА СИСТЕМА</h5>
        <p>Діагностика паливної системи</p>
        <p>Заміна паливного насосу</p>
        <p>Заміна паливного фільтра</p>
        <p>Ремонт дизельних форсунок</p>
        <p>Ремонт інжектора</p>
        <p>Ремонт карбюратора</p>
        <p>Ремонт форсунок</p>
        <p>Чищення дросельної заслінки</p>
        <p>Чищення інжектора</p>
      </div>
      <div>
        <h5>ГАЛЬМОВА СИСТЕМА</h5>
        <p>Заміна гальмової рідини</p>
        <p>Заміна гальмівних дисків</p>
        <p>Заміна гальмівних колодок</p>
        <p>Проточка гальмівних дисків</p>
        <p>Регулювання ручного гальма</p>
        <p>Ремонт гальмівної системи</p>
        <p>Ремонт гальмівних супортів</p>
      </div>
    </div>
  );
};
const carouselBox5 = () => {
  return (
    <div className={styles.boxWrapper}>
      <div>
        <h5>ТРАНСМІСІЯ</h5>
        <p>Діагностика АКПП</p>
        <p>Заміна АКПП</p>
        <p>Заміна олії в АКПП</p>
        <p>Заміна олії МКПП</p>
        <p>Заміна МКВП</p>
      </div>
      <div>
        <p>Заміна підвісного підшипника</p>
        <p>Заміна півосі</p>
        <p>Заміна пильовика ШРУС</p>
        <p>Ремонт АКПП</p>
        <p>Ремонт МКВП</p>
        <p>Ремонт редуктора</p>
      </div>
    </div>
  );
};
const carouselBoxes = [
  carouselBox1,
  carouselBox2,
  carouselBox3,
  carouselBox4,
  carouselBox5,
];

const ServisesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselBoxes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselBoxes.length) % carouselBoxes.length
    );
  };
  return (
    <div className={styles.servisesPage}>
      <h1>ПОСЛУГИ</h1>
      <div className={styles.carousel}>
        <img
          src={arrowLeft}
          alt="Previous"
          onClick={handlePrev}
          className={styles.arrow}
        />
        {carouselBoxes[currentIndex]()}
        <img
          src={arrowRight}
          alt="Next"
          onClick={handleNext}
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ServisesPage;

