"use client";

import styles from "./pagination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface CountProps {
  count: number;
}

const Pagination = ({ count }: CountProps) => {
  const pathName = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || "1"; // Ensure `page` is a string
  const ITEM_PER_PAGE = 2;

  const currentPage = parseInt(page);
  const hasPrev = ITEM_PER_PAGE * (currentPage - 1) > 0;
  const hasNext = ITEM_PER_PAGE * currentPage < count;

  const handleChange = useDebouncedCallback((type: string) => {
    const newPage =
      type === "prev"
        ? (currentPage - 1).toString()
        : (currentPage + 1).toString();
    params.set("page", newPage);
    replace(`${pathName}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChange("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
