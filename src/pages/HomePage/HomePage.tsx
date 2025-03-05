import callImg from "../../images/call.svg";
import styles from "./homePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePage}>
        <div className={styles.hero}>
          <h1>FIX&GO</h1>
          <h3>АВТОСЕРВІС</h3>
          <p>СТО (РЕМОНТ, ДІАГНОСТИКА, ЗАМІНА)</p>
          <p>ПЕРЕТЯЖКА КЕРМА, РУЧОК КПП</p>
          <p>ДЕТЕЙЛІНГ (МИЙКА, ХІМЧИСТКА, ПОЛІРУВАННЯ)</p>
        </div>
      </div>
      <p className={styles.addres}>м.КИЇВ, ФОРМЕТІВСЬКИЙ УЗВІЗ, 22</p>
      <div className={styles.heroContactBox}>
        <h3>Зацікавлені?</h3>
        <p>
          За детальною інформацією телефонуйте нам і наш менеджер допоможе вам у
          вирішенні Вашого питання
        </p>
        <button onClick={() => (window.location.href = "tel:+380661819991")}>
          <img src={callImg} alt="callImg" />
        </button>
      </div>
    </div>
  );
};

export default HomePage;
