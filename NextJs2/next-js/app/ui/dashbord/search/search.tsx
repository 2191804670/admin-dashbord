import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import Link from "next/link";

interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch size={20} />
        <input type="text" placeholder={placeholder} className={styles.input} />
      </div>
    </div>
  );
}
