"use client";

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [throttle, setThrottle] = useState(false);

  const fetchArticles = async () => {
    if (throttle) return;

    setThrottle(true);
    setLoading(true);
    try {
      const res = await fetch("https://dev.to/api/articles?username=tolgee_i18n");
      const data = await res.json();
      setArticles(data.slice(0, 4)); // Limit to 4 articles
      setShowModal(true);
    } catch (error) {
      console.error("Failed to fetch articles", error);
    } finally {
      setLoading(false);
      setTimeout(() => setThrottle(false), 5000); // Throttle for 5 seconds
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>CodeHub is live!</b> Discover projects and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/daily.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Get the latest news!</h1>
          <p className={styles.postDesc}>
            In association with dev.to and daily.dev, we offer you fast and reliable news services right at your fingertips to keep you updated
          </p>
          <button className={styles.button} onClick={fetchArticles}>
            {loading ? "Loading..." : "Fetch News"}
          </button>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setShowModal(false)}>X</button>
            <h2 className={styles.modalTitle}>Latest News from dev.to</h2>
            <ul className={styles.articleList}>
              {articles.map((article) => (
                <li key={article.id} className={styles.articleItem}>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <strong>{article.title}</strong>
                    <p>{article.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
