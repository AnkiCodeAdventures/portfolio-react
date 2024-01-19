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
      </div>
    </div>
  );
}

export default Projects;
