import Button from "../Button/Button";
import styles from "./nav.module.css";
import { FaLinkedin, FaGithub, FaLeaf } from "react-icons/fa";

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a>
              <FaLeaf className={styles.icon} style={{ fontSize: "125%" }} />{" "}
              <h1>Ankita Agarwal</h1>
            </a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">
              <FaLinkedin className={styles.icon} />{" "}
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className={styles.icon} />
            </a>
          </li>
          <li>
            <Button>Resume</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
