"use client";
import { MdSearch } from "react-icons/md";
import styles from "./search.module.css";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder }: SearchProps) {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handlechange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const Vlaue = e.target.value;
      if (Vlaue.length > 0) {
        params.set("q", Vlaue);
      } else {
        params.delete("q");
      }
      replace(`${pathName}?${params}`);
    },
    300
  );

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <MdSearch size={20} />
        <input
          type="text"
          placeholder={placeholder}
          className={styles.input}
          onChange={handlechange}
        />
      </div>
    </div>
  );
}
