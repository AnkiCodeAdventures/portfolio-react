import styles from "./footer.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <h3>Ankita Agarwal · Creater</h3>
      <div className={styles.footerIcons}>
        <FaLinkedin className={styles.footerIcon} />{" "}
        <FaGithub className={styles.footerIcon} />
        <FaEnvelope className={styles.footerIcon} />
      </div>
      <p>© 2023 Ankita Agarwal. All rights reserved.</p>
    </div>
  );
}

export default Footer;
