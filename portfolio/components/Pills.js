import styles from "../styles/Components.module.scss";

export const SinglePill = ({ content, ...props }) => {
  return (
    <div className={styles.pill} {...props}>
      {content}
    </div>
  );
};

export const MultiPills = ({ contentArray, ...props }) => {
  return (
    <div className={styles.multi_pill} {...props}>
      {contentArray.map((pill) => (
        <SinglePill content={pill} />
      ))}
    </div>
  );
};
