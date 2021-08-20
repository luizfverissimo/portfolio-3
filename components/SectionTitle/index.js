import styles from "./styles.module.scss"

function SectionTitle({children, isWhiteText}) {
  return (
    <h2 className={styles.sectionTitle} style={isWhiteText ? {color: "var(--white)"}: {}}>
      {children}
    </h2>
  )
}

export default SectionTitle
