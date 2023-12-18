import clsx from "clsx";
import styles from "./button.module.css";

function Button(props) {
  return (
    <button
      className={clsx(styles.button, props.size === "lg" && styles.buttonLG)}
    >
      {props.children}
    </button>
  );
}

export default Button;
