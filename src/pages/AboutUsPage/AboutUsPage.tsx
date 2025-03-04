import styles from "./aboutUsPage.module.scss";

const AboutUsPage = () => {
  return (
    <div className={styles.aboutUsPage}>
      <h2>PROнас</h2>
      <h6>Fix&Go - автосервіс повного циклу у Києві!</h6>
      <h3>Ми обʼєднали всі послуги для вашого авто в одному місці:</h3>
      <div className={styles.infoBox}>
        <p>СТО: діагностика, ремонт, заміна</p>
        <p>Детейлінг: хімчистка, мийка, полірування</p>
        <p>Підтримка вашого авто на 100%</p>
      </div>
      <h3>Чому обирають нас?</h3>
      <div className={styles.infoBox}>
        <p>Професійний підхід</p>
        <p>Якісне обладнання</p>
        <p>Швидко та надійно</p>
      </div>
    </div>
  );
};

export default AboutUsPage;
