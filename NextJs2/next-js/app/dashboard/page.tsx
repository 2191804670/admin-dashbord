import Card from "../ui/dashbord/card/card";
import Chart from "../ui/dashbord/chart/chart";
import Rightbar from "../ui/dashbord/rightbar/rightbar";
import Transaction from "../ui/dashbord/transaction/transaction";
import styles from "../ui/dashbord/dashbord.module.css";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart />
      </div>

      <div className={styles.sidebar}>
        <Rightbar />
      </div>
    </div>
  );
}
