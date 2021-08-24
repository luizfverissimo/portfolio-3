import styles from './styles.module.scss';

function Button({ children, isBlackText, href, blank, id }) {
  return (
    <a
      id={id}
      type='button'
      href={href}
      target={blank ? '_blank' : ''}
      className={styles.button}
      style={isBlackText ? { color: 'var(--black)' } : {}}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default Button;
