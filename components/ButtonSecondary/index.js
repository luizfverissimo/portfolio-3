import styles from './styles.module.scss'

function ButtonSecondary({children, onClick, href}) {
  return (
    <a href={href} className={styles.buttonSecondary} onClick={onClick}>
      {children}
    </a>
  )
}

export default ButtonSecondary
