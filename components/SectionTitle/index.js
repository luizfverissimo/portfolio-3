import styles from "./styles.module.scss"

function SectionTitle({children}) {
  return (
    <h2 className={styles.sectionTitle}>
      {children}
    </h2>
  )
}

export default SectionTitle
