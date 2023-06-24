import styles from "./Callouts.module.css";

export function Links({ list }: { list: string[][] }) {
  return (
    <div className={`${styles.link} ${styles.callout}`}>
      {list.length > 1 ? "🔗" : <span>🔗</span>}
      {list.map((listItem) => (
        <a href={listItem[1]}>{listItem[0]}</a>
      ))}
    </div>
  );
}
export function Tools({ list }: { list: string[][] }) {
  return (
    <div className={`${styles.tool} ${styles.callout}`}>
      {list.length > 1 ? "🔨" : <span>🔨</span>}
      {list.map((listItem) => (
        <a href={listItem[1]}>{listItem[0]}</a>
      ))}
    </div>
  );
}
export function Star({ text }: { text: string }) {
  return (
    <div className={`${styles.star} ${styles.callout}`}>
      <span>⭐</span>
      {text}
    </div>
  );
}
export function Prompt({ text }: { text: string }) {
  return (
    <div className={`${styles.prompt} ${styles.callout}`}>
      <span>🔭</span>
      {text}
    </div>
  );
}
