import { ExternalLink } from 'react-feather';
import Image from "next/image"

import styles from './styles.module.scss';

import ButtonSecondary from '../ButtonSecondary';
import TagItem from "../TagItem"

function ProjectItem({ data }) {
  if (!data) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className={styles.projectItemContainer}>
      <div className={styles.imageContainer}>
        <a href={data.buttonLink} target="_blank" rel="noopener noreferrer">
          <Image src={data.image} alt={`${data.name} screenshot`} layout="fill"/>
        </a>
      </div>
      <div className={styles.projectItemInfos}>
        <p className={styles.subtitle}>{data.type}</p>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <div className={styles.projectItemTechTags}>
          {data.techs.map((tech, index) => {
            return <TagItem key={index}>{tech}</TagItem>;
          })}
        </div>
        <div className={styles.projectItemButtonsContainer}>
          <ButtonSecondary href={data.buttonLink}>
            {data.buttonText} <ExternalLink size={16} />
          </ButtonSecondary>
          <a
            className={styles.githubLink}
            href={data.githubLink}
            target='_blank'
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
