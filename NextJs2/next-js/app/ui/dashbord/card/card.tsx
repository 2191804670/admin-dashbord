import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MdSupervisedUserCircle size={24} />
        <span className={styles.title}>Total Users</span>
      </div>
      <div className={styles.amount}>10.273</div>
      <div className={styles.percent}>
        <span className={styles.positive}>12% </span>more than previous week
      </div>
    </div>
  );
}
