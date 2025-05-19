import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=webdev"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        Web Dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.fashion}`}>
        Mobile Dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.food}`}>
        Data Science
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.travel}`}>
        Game Dev
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.culture}`}>
        DevOps
      </Link>
      <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>
        Systems Prog
      </Link>
    </div>
  );
};

export default MenuCategories;
