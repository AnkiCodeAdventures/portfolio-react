import clsx from "clsx";
import styles from "./anchorButton.module.css";

function AnchorButton(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.button, props.size === "lg" && styles.buttonLG)}
    >
      {props.children}
    </a>
  );
}

export default AnchorButton;
