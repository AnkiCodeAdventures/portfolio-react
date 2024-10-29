import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>Ankita Agarwal · Front-End Developer</h3>
      <div className={styles.footerIcons}>
        <a
          href="https://www.linkedin.com/in/ankita1694/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.footerIcon} />
        </a>
        <a
          href="https://github.com/AnkiCodeAdventures"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.footerIcon} />
        </a>
        <a href="mailto:ankitaag94@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope className={styles.footerIcon} />
        </a>
      </div>
      <p>© 2024 Ankita Agarwal. All rights reserved.</p>
    </div>
  );
}

export default Footer;
