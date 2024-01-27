import { Link } from "react-router-dom";
import AnchorButton from "../AnchorButton/AnchorButton";
import styles from "./nav.module.css";
import { FaLinkedin, FaGithub, FaLeaf } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaLeaf className={styles.icon} style={{ fontSize: "125%" }} />{" "}
              <h1>Ankita Agarwal</h1>
            </Link>
          </li>
          <li>
            <HashLink to="/#projects">Projects</HashLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a
              href="https://forms.gle/bHYc4ThDfTxE5Qxy8"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ankita1694/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className={styles.icon} />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://github.com/AnkiCodeAdventures"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className={styles.icon} />
            </a>
          </li>
          <li>
            <AnchorButton link="https://drive.google.com/file/d/1m4BIfeKS_Yga1pAAdI7AeKtKBOUZJODE/view?usp=drive_link">
              Resume
            </AnchorButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
