import React from "react";

import styles from "./style.module.css";

const AdaptiveContent = () => (
  <section className={styles.userInfo}>
    <div className={styles.container}>
      <div className={styles.name}>
        <p>Контент 1.1</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.telephone}>
          <p>Контент 2.1</p>
          <p>Контент 2.1</p>
          <p>Контент 2.1</p>
        </div>
        <div className={styles.email}>
          <p>Контент 3.1</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.skype}>
          <p>Контент 4.1</p>
        </div>
        <div className={styles.comments}>
          <p>Контент 5.1</p>
        </div>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.name}>
        <p>Контент 1.2</p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.telephone}>
          <p>Контент 2.2</p>
        </div>
        <div className={styles.email}>
          <p>Контент 3.2</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.skype}>
          <p>Контент 4.2</p>
        </div>
        <div className={styles.comments}>
          <p>Контент 5.2</p>
        </div>
      </div>
    </div>
  </section>
);

export default AdaptiveContent;
