import styles from "./sectionLayout.module.css";
import { clsx } from "clsx";

function SectionLayout({
  type,
  name,
  description,
  tags,
  videoPath,
  imagePath,
  reverse,
  tagsHeading,
}) {
  return (
    <div className={styles.sectionLayout}>
      <div className={clsx(styles.textInfo, reverse && styles.reverseText)}>
        <h2 className={styles.projectInfo}>{type}</h2>
        <h2 className={styles.projectName}>{name}</h2>
        <article>{description}</article>
        <h2 className={styles.projectInfo}>{tagsHeading}</h2>
        <h4 className={styles.tags}>{tags}</h4>
      </div>
      <div
        className={clsx(styles.mediaContainer, reverse && styles.reverseMedia)}
      >
        {imagePath ? (
          <img className={styles.media} src={imagePath} alt="image"></img>
        ) : (
          <video autoPlay muted loop className={styles.media}>
            <source src={videoPath} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}

export default SectionLayout;
