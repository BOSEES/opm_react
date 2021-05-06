import React from "react";
import styles from "./house.module.css";
import {Link} from "react-router-dom";


const House = ({match}) => {
  return (
    <>
    <img className={styles.backImage} src="/images/banner.png"></img>
    <section className={styles.house}>
      <div className={styles.container}>
      <div className={styles.test}>
        <Link className={styles.cards} to={`${match.url}/dna`}>
          <img className={styles.img} src="/images/house/연구실.png" alt="사진"/>
          <h1 className={styles.description}>연구실</h1>
        </Link>
      </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/request`}>
              <img className={styles.img} src="/images/house/의뢰.png" alt="사진"/>
              <h1 className={styles.description}>의뢰</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/party`}>
              <img className={styles.img} src="/images/house/파티.png" alt="사진"/>
              <h1 className={styles.description}>파티</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/collection`}>
              <img className={styles.img} src="/images/house/피규어.png" alt="사진"/>
              <h1 className={styles.description}>피규어</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/training`}>
              <img className={styles.img} src="/images/house/훈련.png" alt="사진"/>
              <h1 className={styles.description}>훈련</h1>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default House;