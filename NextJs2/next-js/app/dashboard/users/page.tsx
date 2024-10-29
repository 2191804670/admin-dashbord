import Search from "@/app/ui/dashbord/search/search";
import styles from "../../ui/dashbord/users/users.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashbord/pagination/Pagination";
import { fetchUsers } from "@/app/lib/data";
import { Suspense } from "react";
import LoadingAlert from "@/app/ui/dashbord/LoadingAlert/LoadingAlert";

interface PageProps {
  searchParams: { q?: string; page?: number };
}

export default async function page({ searchParams }: PageProps) {
  const q = searchParams.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <Suspense fallback={<LoadingAlert />}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a user..." />
          <Link href="/dashboard/users/add">
            <button className={styles.add}>Add New</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((el, index) => (
              <tr key={index}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src={el.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    {el.username}
                  </div>
                </td>
                <td>{el.email}</td>
                <td>{el.createdAt}</td>
                <td>
                  {el.isActive === false && el.isAdmin ? "Admin" : "User"}
                </td>
                <td>{el.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${el.id}`}>
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
    </Suspense>
  );
}
