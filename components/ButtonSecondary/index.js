import styles from './styles.module.scss'

function ButtonSecondary({children, onClick, href}) {
  return (
    <a href={href} className={styles.buttonSecondary} onClick={onClick} target="_blank">
      {children}
    </a>
  )
}

export default ButtonSecondary
