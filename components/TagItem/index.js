import styles from './styles.module.scss'

function TagItem({children}) {
  return (
    <p className={styles.tagItem}>
      {children}
    </p>
  )
}

export default TagItem
