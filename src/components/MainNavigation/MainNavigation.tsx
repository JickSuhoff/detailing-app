import { useState, useRef, useEffect } from "react";
import mainLogo from "../../images/main-logo-one.svg";
import styles from "./mainNavigation.module.scss";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const SCREEN_WIDTH = 768;

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= SCREEN_WIDTH);
  };

  const toggleDrawer = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    checkScreenWidth();

    const handleResize = () => {
      checkScreenWidth();
    };

    const handleOutsideClick = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      const isTargetBurgerButton = targetElement.closest(
        `.${styles.burgerButton}`
      );

      if (
        drawerRef.current &&
        !drawerRef.current.contains(targetElement) &&
        !isTargetBurgerButton
      ) {
        closeDrawer();
      }
    };

    window.addEventListener("resize", handleResize);

    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen]);
  const navList = [
    { to: "/", label: "Головна", end: true },
    { to: "/services", label: "Послуги" },
    { to: "/portfolio", label: "Портфоліо" },
    { to: "/about", label: "Про нас" },
    { to: "/contacts", label: "Контакти" },
  ];
  return (
    <nav className={styles.navWrapperBox}>
      <img
        src={mainLogo}
        alt="mainLogo"
        width={100}
        height={100}
        className={styles.mainLogo}
      />
      {isMobile ? (
        <>
          <button className={styles.burgerButton} onClick={toggleDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            ref={drawerRef}
            className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
          >
            <ul className={styles.dialogList}>
              {navList.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? styles.active : ""
                    }
                    end={end}
                    onClick={closeDrawer}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <ul className={styles.list}>
            {navList.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  end={end}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <a href="tel:+380661819991" className={styles.phoneNum}>
              +380661819991
            </a>
          </ul>
        </>
      )}
    </nav>
  );
};

export default MainNavigation;
