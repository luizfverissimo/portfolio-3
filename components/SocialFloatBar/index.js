import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss';

function SocialFloatBar() {
  return (
    <div className={styles.socialWrapper}>
      <div className={styles.socialContainer}>
        <a href='https://github.com/luizfverissimo' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/lfverissimo/' target='_blank' rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://play.google.com/store/apps/developer?id=LF+Verissimo'
          target='_blank'
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGooglePlay} />
        </a>
      </div>
    </div>
  );
}

export default SocialFloatBar;
