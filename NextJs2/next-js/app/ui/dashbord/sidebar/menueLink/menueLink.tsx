"use client";
import Link from "next/link";
import styles from "./menueLink.module.css";
import { usePathname } from "next/navigation";

interface Item {
  title: string;
  path: string;
  icon: any;
}

export default function MenueLink({ item }: { item: Item }) {
  const pathname = usePathname();

  const isActive = pathname === item.path;

  return (
    <Link href={item.path}>
      <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
        <div>{item.icon}</div>
        <span>{item.title}</span>
      </div>
    </Link>
  );
}
