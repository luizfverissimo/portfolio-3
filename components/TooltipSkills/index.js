import styles from './styles.module.scss';

function TooltipSkills({ children, tooltip }) {
  return (
    <div
      className={styles.tooltipSkills}
    >
      {children}
      <p>{tooltip}</p>
    </div>
  );
}

export default TooltipSkills;
