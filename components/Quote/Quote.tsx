import styles from "./Quote.module.css";

function Quote({ text, author }: { text: string; author?: string }) {
  return (
    <div className={styles.quote}>
      <blockquote>{text}</blockquote>
      {author ? <div className={styles.author}> - {author}</div> : null}
    </div>
  );
}

export default Quote;
