import styles from "./project.module.css";

function ProjectLayout(props) {
  return (
    <div className={styles.projectLayout}>
      <h2 className={styles.projectInfo}>{props.type}</h2>
      <h2 className={styles.projectName}>{props.name}</h2>
      <article>
        <p>{props.description}</p>
        <p>
          {" "}
          To take a look at it, <a href={props.href}>click here</a>.
        </p>
      </article>
      <h2 className={styles.projectInfo}>Technologies used include:</h2>
      <h4 className={styles.tags}>{props.tags}</h4>
      <div className={styles.videoContainer}>
        <video
          autoPlay
          muted
          loop
          className={styles.tvVideo}
          style={props.videoStyle}
        >
          <source src={props.videoPath} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default ProjectLayout;
