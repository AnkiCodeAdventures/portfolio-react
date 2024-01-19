import styles from "./projectLayout.module.css";

function ProjectLayout({ type, name, description, tags, videoPath }) {
  return (
    <div className={styles.projectLayout}>
      <div className={styles.textInfo}>
        <h2 className={styles.projectInfo}>{type}</h2>
        <h2 className={styles.projectName}>{name}</h2>
        <article>{description}</article>
        <h2 className={styles.projectInfo}>Technologies used include:</h2>
        <h4 className={styles.tags}>{tags}</h4>
      </div>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop className={styles.tvVideo}>
          <source src={videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProjectLayout;
