import styles from "./projectLayout.module.css";
import { clsx } from "clsx";

function ProjectLayout({ type, name, description, tags, videoPath, reverse }) {
  return (
    <div className={styles.projectLayout}>
      <div className={clsx(styles.textInfo, reverse && styles.reverseText)}>
        <h2 className={styles.projectInfo}>{type}</h2>
        <h2 className={styles.projectName}>{name}</h2>
        <article>{description}</article>
        <h2 className={styles.projectInfo}>Technologies used include:</h2>
        <h4 className={styles.tags}>{tags}</h4>
      </div>
      <div
        className={clsx(styles.videoContainer, reverse && styles.reverseMedia)}
      >
        <video autoPlay muted loop className={styles.tvVideo}>
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProjectLayout;
