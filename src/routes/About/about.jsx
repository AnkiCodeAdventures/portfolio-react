import Divider from "../../components/Divider/Divider";
import Nav from "../../components/Nav/Nav";
import SectionLayout from "../../components/SectionLayout/SectionLayout";
import styles from "./about.module.css";
import Footer from "../../containers/Footer/Footer";

function About() {
  return (
    <div className={styles.about}>
      <Nav />
      <Divider />
      <div className={styles.aboutSection}>
        <h1 className={styles.aboutHeading}>About Ankita</h1>

        <SectionLayout
          type="
          Ankita Agarwal 
        "
          name="From Molecules to Pixels"
          tagsHeading="My favorite technologies include:"
          tags="HTML | CSS | JavaScript | React"
          description={
            <p>
              My journey into frontend development has been a testament to the
              power of passion and curiosity. Armed with an Msc in Chemistry
              from IIT, I pursue excellence in all my endeveaours. <i>Coding</i>
              , much like <i>chemistry</i>, reflects the immense power that
              small building blocks hold when masterfully crafted together to
              create a magnificent whole. As I tread this path, my dedication is
              evident in the pursuit of best practices, impeccable code quality,
              and staying ahead of industry trends. This isn&apos;t merely a
              transition; <i>it&apos;s a transformation. </i>From deciphering
              molecular structures to crafting pixel-perfect designs, my journey
              reflects a passion for continuous learning and the pursuit of
              excellence.
            </p>
          }
          imagePath="/assets/ankita.jpg"
        />
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default About;
