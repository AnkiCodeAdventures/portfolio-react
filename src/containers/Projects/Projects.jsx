import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import styles from "./projects.module.css";

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projectContainer}>
        <h1 className={styles.projectHeading}>Projects I&apos;m proud of</h1>
        <ProjectLayout
          type="Latest"
          name="Netflix Clone"
          tags="HTML | CSS Modules | JavaScript | React"
          description={
            <p>
              Witness a futuristic streaming experience with a Netflix-inspired
              landing page clone. Authenticated via Auth0, it features a custom
              typography system and reusable components for a seamless and
              visually striking user interface. With a focus on clean code
              practices and a robust CI/CD setup, the platform ensures a fast
              and secure streaming experience.. Explore it{" "}
              <a
                className={styles.link}
                href="https://netflix-clone-anki.netlify.app/"
              >
                here
              </a>
              .
            </p>
          }
          videoPath="/src/assets/Netflix clone .mp4"
        />

        <ProjectLayout
          type="30 days of JavaScript Project"
          reverse="true"
          name="Drumkit"
          tags="HTML | CSS | JavaScript"
          description={
            <p>
              In the realm of 30 Days JavaScript, behold my Drum Kit&apos;s
              allure, Responsive beats, a rhythmic interface to explore. Dynamic
              keys, each sound meticulously mapped, Visual echoes dance, as
              drums are aptly tapped. A harmony of code, where music and coding
              unite, A symphony of skills, in this JavaScript delight.{" "}
              <a
                href="https://melodious-drums.netlify.app/"
                className={styles.link}
              >
                Explore the beats...
              </a>
            </p>
          }
          videoPath="/src/assets/2024011915343. (1).mp4"
        />
        <ProjectLayout
          type="Frontend Masters Project"
          name="iPhone Calculator"
          tags="HTML | CSS | JavaScript"
          description={
            <p>
              Introducing iPhone Calculator developed with HTML, CSS, and
              JavaScript as part of the Brian Holt&apos;s Frontend Masters
              course. This sleek web application replicates the familiar iPhone
              calculator interface, showcasing a clean and minimalist design.
              With a focus on user-friendly design and modern technologies, this
              project reflects my proficiency in front-end development. Explore
              it{" "}
              <a
                className={styles.link}
                href="https://celadon-sfogliatella-aab46a.netlify.app/"
              >
                here
              </a>
              .
            </p>
          }
          videoPath="/src/assets/Iphone Calculator.mp4"
        />
      </div>
    </div>
  );
}

export default Projects;
