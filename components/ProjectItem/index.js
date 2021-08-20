import { ExternalLink } from 'react-feather';

import styles from './styles.module.scss';

import ButtonSecondary from '../ButtonSecondary';
import Button from '../Button';

function ProjectItem() {
  const techs = ['React', 'Next', 'Node', 'Sass', 'Prisma'];

  return (
    <div className={styles.projectItemContainer}>
      <div className={styles.imageContainer}>
        <img src='/prints/offers.png' alt='Project screenshot' />
      </div>
      <div className={styles.projectItemInfos}>
        <p className={styles.subtitle}>Fullstack project</p>
        <h3>Offers Aggregator</h3>
        <p>
          FullStack application of an offers/deal/coupons aggregator with
          administrator panel.
        </p>
        <div className={styles.projectItemTechTags}>
          {techs.forEach((tech, index) => {
            return <spam key={index}>{tech}</spam>;
          })}
        </div>
        <div className={styles.projectItemButtonsContainer}>
          <ButtonSecondary>
            Open the project <ExternalLink size={16} />
          </ButtonSecondary>
          <a>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
