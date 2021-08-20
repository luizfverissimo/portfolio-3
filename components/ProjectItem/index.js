import { ExternalLink } from 'react-feather';

import styles from './styles.module.scss';

import ButtonSecondary from '../ButtonSecondary';

function ProjectItem({data}) {
  if(!data) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <div className={styles.projectItemContainer}>
      <div className={styles.imageContainer}>
        <img src={data.image} alt={`${data.name} screenshot`} />
      </div>
      <div className={styles.projectItemInfos}>
        <p className={styles.subtitle}>{data.type}</p>
        <h3>{data.name}</h3>
        <p>
          {data.description}
        </p>
        <div className={styles.projectItemTechTags}>
          {data.techs.map((tech, index) => {
            return <p key={index}>{tech}</p>;
          })}
        </div>
        <div className={styles.projectItemButtonsContainer}>
          <ButtonSecondary href={data.buttonLink}>
            {data.buttonText} <ExternalLink size={16} />
          </ButtonSecondary>
          <a className={styles.githubLink} href={data.githubLink} target="_blank">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;