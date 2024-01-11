import ProjectLayout from "../../components/ProjectLayout/ProjectLayout";
import styles from "./projects.module.css";

function Projects() {
  return (
    <div id={styles.projects}>
      <h1 className={styles.projectHeading}>Projects I&apos;m proud of</h1>

      <ProjectLayout
        type="Latest"
        name="1"
        // src="/src/assets/fem-gettingstartedcss-ch5-1 (1).webp"
        tags="HTML"
        description="This is an iPhone calculator made using JavaScript. It uses buttons
        for each calculator button."
        href="https://www.freecodecamp.org/news/how-to-use-props-in-react/"
        videoPath="/src/assets/Netflix India.mp4"
      />
      {/* <ProjectLayout
        type="Latest"
        name="2"
        src="/src/assets/fem-gettingstartedcss-ch5-1 (1).webp"
        tags="HTML"
        description="This is an iPhone calculator made using JavaScript. It uses buttons
        for each calculator button."
        href="https://www.freecodecamp.org/news/how-to-use-props-in-react/"
      /> */}
    </div>
  );
}

export default Projects;
