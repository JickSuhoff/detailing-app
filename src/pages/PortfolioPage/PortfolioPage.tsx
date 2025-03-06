import { useState, useRef, useEffect } from "react";

// detailingImages
import kuzovImg from "../../images/kuzov.jpg";
import leather1Img from "../../images/leather1.jpg";
import polishimgImg from "../../images/polishing.jpg";
import tiers2Img from "../../images/tiers2.jpg";

//servicesImages
import carBrakesImg2 from "../../images/car-brakes2.jpg";
import engineImg2 from "../../images/engine-service2.jpg";
import pidviskaImg from "../../images/pidviska.jpg";
import servisneTOImg2 from "../../images/servisne-obslugovuvannia2.jpg";
import transmissionImg from "../../images/transmission.jpg";
import vyhlopnaSystemaImg2 from "../../images/vyhlopna-systema2.jpg";
import zcheplenniaImg2 from "../../images/zcheplennia2.jpg";

import infoBtn from "../../images/info-icon.svg";
import closeBtn from "../../images/close-icon.svg";
import styles from "./portfolioPage.module.scss";
import { NavLink } from "react-router-dom";

const detailingImages = [kuzovImg, leather1Img, polishimgImg, tiers2Img];
const servicesImages = [
  carBrakesImg2,
  servisneTOImg2,
  engineImg2,
  pidviskaImg,
  transmissionImg,
  vyhlopnaSystemaImg2,
  zcheplenniaImg2,
];

const detailingServices = [
  {
    title: "Шкіра",
    description:
      "Очищення, зволоження та захист шкіряного салону, що допомагає зберегти його м'якість та еластичність, захищаючи від тріщин та зносу.",
  },
  {
    title: "Кузов",
    description:
      "Полірування кузова для відновлення блиску та нанесення захисних покриттів, що забезпечують довготривалий захист від подряпин, корозії та погодних умов.",
  },
  {
    title: "Скло",
    description:
      "Обробка антидощем для покращення видимості в дощову погоду та захист від подряпин, що допомагає зберігати прозорість та запобігає утворенню водяних плям.",
  },
  {
    title: "Хром",
    description:
      "Відновлення блиску хромованих елементів та захист від окислення і потемніння, що забезпечує тривалий блиск та збереження вигляду нових деталей.",
  },
  {
    title: "Диски",
    description:
      "Очищення дисків від бруду, пилу та корозії, з нанесенням захисного покриття, що допомагає зберегти їх чистоту та запобігає утворенню іржі.",
  },
  {
    title: "Гума",
    description:
      "Захист шин від передчасного старіння та тріщин, забезпечуючи кращу адгезію до дороги та довговічність гуми.",
  },
  {
    title: "Приладова панель",
    description:
      "Очищення та захист приладової панелі від ультрафіолетового випромінювання, що запобігає вигоранню та старінню матеріалів.",
  },
  {
    title: "Килимові покриття",
    description:
      "Глибоке очищення та захист килимових покриттів від забруднень, що допомагає підтримувати їх чистоту, запобігає пошкодженню та зберігає вигляд нового інтер'єру.",
  },
];

const autoServices = [
  {
    title: "Вихлопна система",
    description:
      "Діагностика та ремонт вихлопної системи, заміна каталізаторів, глушників та усунення витоків.",
  },
  {
    title: "Підвіска",
    description:
      "Ремонт і заміна амортизаторів, пружин, важелів та інших елементів підвіски для забезпечення комфортної їзди.",
  },
  {
    title: "Сервісне ТО",
    description:
      "Регулярне технічне обслуговування, заміна мастил, фільтрів, свічок запалювання та перевірка всіх систем автомобіля.",
  },
  {
    title: "Двигун",
    description:
      "Діагностика, ремонт та заміна деталей двигуна, усунення витоків масла та перегріву.",
  },
  {
    title: "Система охолодження",
    description:
      "Перевірка та заміна антифризу, ремонт або заміна радіаторів, термостатів та водяних насосів.",
  },
  {
    title: "Зчеплення",
    description:
      "Ремонт і заміна дисків зчеплення, вижимних підшипників та корзини для плавного перемикання передач.",
  },
  {
    title: "Паливна система",
    description:
      "Діагностика та ремонт паливної системи, чистка форсунок, заміна паливного насоса та фільтрів.",
  },
  {
    title: "Гальмова система",
    description:
      "Ремонт і заміна гальмівних колодок, дисків, супортів та гальмівних магістралей.",
  },
  {
    title: "Трансмісія",
    description:
      "Діагностика та ремонт коробки передач (АКПП, МКПП, CVT), заміна мастила та усунення несправностей.",
  },
  {
    title: "Інше",
    description:
      "Інші види ремонту та обслуговування, зокрема електрика, рульове управління та кузовні роботи.",
  },
];

const PortfolioPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [activeContent, setActiveContent] = useState<
    "autoservice" | "detailing"
  >("autoservice");
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleDrawer = (serviceIndex: number) => {
    setSelectedService(serviceIndex);
    setIsDrawerOpen(!isDrawerOpen);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  useEffect(() => {
    localStorage.setItem("activeContent", activeContent);
    const handleOutsideClick = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      if (drawerRef.current && !drawerRef.current.contains(targetElement)) {
        closeDrawer();
      }
    };
    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen, activeContent]);

  return (
    <div className={styles.portfolioPage}>
      <header>
        <h2
          className={activeContent === "autoservice" ? styles.active : ""}
          onClick={() => setActiveContent("autoservice")}
        >
          АВТОСЕРВІС
        </h2>
        <h2
          className={activeContent === "detailing" ? styles.active : ""}
          onClick={() => setActiveContent("detailing")}
        >
          ДЕТЕЙЛІНГ
        </h2>
      </header>
      <h4>ЗАХИСТ І ДОГЛЯД ВАШОГО АВТО</h4>
      {activeContent === "autoservice" ? (
        <div className={styles.portfolioContentWrapper}>
          <div className={styles.servicesCaruousel}>
            <div className={styles.carouselTrack}>
              {[...servicesImages, ...servicesImages].map((image, index) => (
                <img key={index} src={image} alt={`carousel-image-${index}`} />
              ))}
            </div>
          </div>
          <h3>ПОСЛУГИ АВТОСЕРВІСУ</h3>
          <h6>Сучасні технології догляду та перевірки Вашого авто</h6>
          <div className={styles.servicesBoxInfo}>
            {autoServices.map((detailingService, index) => (
              <div
                key={index}
                className={`${styles.autoServiceBox} ${
                  styles[`autoServiceBox${index + 1}`]
                }`}
                onClick={() => toggleDrawer(index)}
              >
                <p>{detailingService.title}</p>
              </div>
            ))}
          </div>
          <div
            ref={drawerRef}
            className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
          >
            <div className={styles.drawerContent}>
              {selectedService !== null && (
                <>
                  <NavLink to={"/services"} className={styles.infoBtnLink}>
                    <img
                      src={infoBtn}
                      alt="infoBtn"
                      className={styles.infoBtn}
                    />
                  </NavLink>
                  <img
                    src={closeBtn}
                    alt="closeBtn"
                    className={styles.closeBtn}
                    onClick={closeDrawer}
                  />
                  <p>{autoServices[selectedService].description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.portfolioContentWrapper}>
          <div className={styles.servicesCaruousel}>
            <div className={styles.carouselTrack}>
              {[...detailingImages, ...detailingImages].map((image, index) => (
                <img key={index} src={image} alt={`carousel-image-${index}`} />
              ))}
            </div>
          </div>
          <h3>МОЖЛИВОСТІ ДЕТЕЙЛІНГУ</h3>
          <h6>Сучасні технології захисту та догляду за Вашим автомобілем</h6>
          <div className={styles.servicesBoxInfo}>
            {detailingServices.map((detailingService, index) => (
              <div
                key={index}
                className={`${styles.detailingServiceBox} ${
                  styles[`detailingServiceBox${index + 1}`]
                }`}
                onClick={() => toggleDrawer(index)}
              >
                <p>{detailingService.title}</p>
              </div>
            ))}
          </div>
          <div
            ref={drawerRef}
            className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
          >
            <div className={styles.drawerContent}>
              {selectedService !== null && (
                <>
                  <img
                    src={closeBtn}
                    alt="closeBtn"
                    className={styles.closeBtn}
                    onClick={closeDrawer}
                  />
                  <p>{detailingServices[selectedService].description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
