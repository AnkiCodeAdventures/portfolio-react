import Nav from "../../components/Nav/Nav";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <section className={styles.hero}>
        <Nav />
      </section>
    </div>
  );
}

export default Hero;
