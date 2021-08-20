import styles from './styles.module.scss'

function ButtonSecondary({children}) {
  return (
    <button type="button" className={styles.buttonSecondary}>
      {children}
    </button>
  )
}

export default ButtonSecondary
