import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p>
            Hi, my name is
            <span>Ankita Agarwal</span>
          </p>
          <h2>I develop the frontend of websites</h2>
          <p>
            I&apos;m a passionate learner fueled by a dedication to advancing my
            skills in frontend technologies like HTML, CSS, JavaScript, and
            React.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Hero;
