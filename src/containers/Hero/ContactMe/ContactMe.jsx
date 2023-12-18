import AnchorButton from "../../../components/AnchorButton/AnchorButton";
import styles from "./contactMe.module.css";

function ContactMe() {
  return (
    <div className={styles.contactContainer}>
      <section className={styles.contact}>
        <h3>Contact Me</h3>
        <p className={styles.contactText}>
          Hello there! I'm passionate about continuous learning, exploring
          diverse resources, and bringing new ideas to life through creative
          projects. Whether you have an exciting opportunity, a collaboration
          proposal, or simply want to connect, I'd love to hear from you.
        </p>
        <AnchorButton size="lg" link="mailto:ankitaag94@gmail.com">
          Email Me
        </AnchorButton>
      </section>
    </div>
  );
}

export default ContactMe;
