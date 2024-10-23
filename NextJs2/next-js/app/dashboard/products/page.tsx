import Search from "@/app/ui/dashbord/search/search";
import styles from "../../ui/dashbord/users/users.module.css";
import Link from "next/link";
import Image from "next/image";

export default function products() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.add}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noproduct.jpg"}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Iphone
              </div>
            </td>
            <td>it comes with four Camera </td>
            <td>300$</td>
            <td>2024/10/20</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/products/add`}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>

                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
