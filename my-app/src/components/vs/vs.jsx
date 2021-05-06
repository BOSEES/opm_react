import React from "react";
import {Link} from "react-router-dom";
import styles from "./vs.module.css";

const Vs = ({match}) => {
  return (
    <>
    <img className={styles.backImage} src="/images/banner4.png" alt="사진"></img>
    <section className={styles.vs}>
      <div className={styles.container}>
      <div className={styles.test}>
        <Link className={styles.cards} to={`${match.url}/battle`}>
          <img className={styles.img} src="/images/vs/대결.png" alt="사진"/>
          <h1 className={styles.description}>대결</h1>
        </Link>
      </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/tournament`}>
              <img className={styles.img} src="/images/vs/협회경기.png" alt="사진"/>
              <h1 className={styles.description}>협회경기</h1>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Vs;