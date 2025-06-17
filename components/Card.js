import Link from 'next/link';
import styles from './Card.module.css'
export default function Card({title , body , category}) {
  return (
    <div className={styles["card-body"]}>
      <div className={styles["card-title"]}>{title}</div>
      <p>{body}</p>
      <h4><Link href={`/category/${category}`}>{category}</Link></h4>
    </div>
  );
}
