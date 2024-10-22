"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
const NavBar = () => {
  const pathName = usePathname();

  // Split the pathname by "/" and get the last non-empty segment
  const cleanedPathName = pathName.split("/").filter(Boolean).pop();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{cleanedPathName}</div>
      <div className={styles.menue}>
        <div className={styles.search}>
          <MdSearch size={20} />
          <input type="text" placeholder="search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
