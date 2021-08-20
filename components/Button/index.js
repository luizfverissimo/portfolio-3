import styles from './styles.module.scss'

function Button({children, isBlackText}) {
  return (
    <button type="button" className={styles.button} style={isBlackText ? {color: "var(--black)"}: {}} >
      {children}
    </button>
  )
}

export default Button
