import SectionLayout from "../../components/SectionLayout/SectionLayout";
import { sectionData } from "../../data/section-data";
import styles from "./projects.module.css";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.projectContainer}>
        <h1 className={styles.projectHeading}>Projects I&apos;m proud of</h1>
        {sectionData.map(
          ({
            id,
            type,
            name,
            tagsHeading,
            tags,
            description: { text: descriptionText, href, linkText },
            videoPath,
            imagePath,
            reverse,
          }) => {
            return (
              <SectionLayout
                key={id}
                type={type}
                name={name}
                tagsHeading={tagsHeading}
                tags={tags}
                description={
                  <p>
                    {descriptionText}{" "}
                    <a
                      className={styles.link}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {linkText}
                    </a>
                    .
                  </p>
                }
                videoPath={videoPath}
                imagePath={imagePath}
                reverse={reverse}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
