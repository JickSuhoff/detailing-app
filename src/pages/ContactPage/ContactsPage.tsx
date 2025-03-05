import { NavLink } from "react-router-dom";
import instagramLogo from "../../images/instagram.svg";
import styles from "./contactsPage.module.scss";

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <h2>Ми знаходимось</h2>
      <div className={styles.infoBox}>
        <p className={styles.address}>м.КИЇВ, ФОРМЕТІВСЬКИЙ УЗВІЗ, 22</p>
        <a href="tel:+380661819991" className={styles.phone}>
          +380661819991
        </a>
        <NavLink
          to="https://www.instagram.com/fixandgo_kyiv/#"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.instagramLink}
        >
          <img src={instagramLogo} alt="Instagram" />
        </NavLink>
      </div>
      <div className={styles.mapBox}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.669269241136!2d30.508827600000004!3d50.410001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf5ed792b473%3A0xb87e502c7a8ef77d!2zRklYJkdPIC0g0KHQotCeIC8g0JTQldCi0JXQmdCb0IbQndCTIC8g0JDQktCi0J7QodCV0KDQktCG0KE!5e0!3m2!1suk!2sua!4v1740683374254!5m2!1suk!2sua"
          width="100%"
          height="1000px"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
          style={{ border: "none" }}
          className={styles.mapBox}
        />
      </div>
    </div>
  );
};

export default ContactsPage;
