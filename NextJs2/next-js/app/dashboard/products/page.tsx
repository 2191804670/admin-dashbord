import Search from "@/app/ui/dashbord/search/search";
import styles from "../../ui/dashbord/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashbord/pagination/Pagination";
import { fetchProducts } from "@/app/lib/data";
interface PageProps {
  searchParams: { q?: string; page?: number };
}
export default async function products({ searchParams }: PageProps) {
  const q = searchParams.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(q, page);

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
          {products.map((el, index) => (
            <tr key={el._id} className={styles.tr}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={el.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {el.title}
                </div>
              </td>
              <td>{el.desc}</td>

              <td>{el.price}</td>

              <td></td>

              <td>{el.stock}</td>

              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${el.id}`}>
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
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
}
