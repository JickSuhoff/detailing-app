import { useState, useRef, useEffect } from "react";
import kuzovImg from "../../images/kuzov.jpg";
import leather1Img from "../../images/leather1.jpg";
import polishimgImg from "../../images/polishing.jpg";
import tiers2Img from "../../images/tiers2.jpg";
import closeBtn from "../../images/close-icon.svg";
import styles from "./portfolioPage.module.scss";

const images = [kuzovImg, leather1Img, polishimgImg, tiers2Img];

const services = [
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

const PortfolioPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = (serviceIndex: number) => {
    setSelectedService(serviceIndex);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
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
  }, [isDrawerOpen]);

  return (
    <div className={styles.portfolioPage}>
      <h2>ДЕТЕЙЛІНГ</h2>
      <h4>ЗАХИСТ І ДОГЛЯД ЗА ВАШИМ АВТО</h4>
      <div className={styles.servicesCaruousel}>
        <div className={styles.carouselTrack}>
          {[...images, ...images].map((image, index) => (
            <img key={index} src={image} alt={`carousel-image-${index}`} />
          ))}
        </div>
      </div>
      <h3>МОЖЛИВОСТІ ДЕТЕЙЛІНГУ</h3>
      <h6>Сучасні технології захисту та догляду за Вашим автомобілем</h6>
      <div className={styles.servicesBoxInfo}>
        {services.map((service, index) => (
          <div
            key={index}
            className={`${styles.serviceBox} ${
              styles[`serviceBox${index + 1}`]
            }`}
            onClick={() => toggleDrawer(index)}
          >
            <p>{service.title}</p>
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
              <p>{services[selectedService].description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
