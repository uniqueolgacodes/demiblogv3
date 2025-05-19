import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>HOT!</span>
          <h3 className={styles.postTitle}>
            The NEW chat feature is coming!
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Demilade Akinsipe</span>
            <span className={styles.date}> - CEO</span>
          </div>
        </div>
      </Link>
      
    </div>
  );
};

export default MenuPosts;
