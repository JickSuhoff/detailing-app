import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import arrowIcon from "../../images/universal-arrow.svg";
import callImg from "../../images/call.svg";
import styles from "./scrollToTop.module.scss";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(isMobile && window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className={styles.scrollingButtonsWrapper}>
      <button onClick={scrollToTop} className={styles.scrollingButton}>
        <img src={arrowIcon} alt="SarrowIcon" />
      </button>
      <button
        onClick={() => (window.location.href = "tel:+380661819991")}
        className={styles.callBtn}
      >
        <img src={callImg} alt="callImg" />
      </button>
    </div>
  );
};

export default ScrollToTop;
