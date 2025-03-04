import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

import styles from "./rootLayout.module.scss";

const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <MainNavigation />
      <ScrollToTop />
      <main className={styles.MainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
