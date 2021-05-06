import React from "react";
import {Link} from "react-router-dom";
import styles from "./guild.module.css";

const Guild = ({match}) => {
  return (
    <>
    <img className={styles.backImage} src="/images/banner3.png"></img>
    <section className={styles.guild}>
      <div className={styles.container}>
      <div className={styles.test}>
        <Link className={styles.cards} to={`${match.url}/info`}>
          <img className={styles.img} src="/images/guild/정보.png" alt="사진"/>
          <h1 className={styles.description}>정보</h1>
        </Link>
      </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/bond`}>
              <img className={styles.img} src="/images/guild/협력.png" alt="사진"/>
              <h1 className={styles.description}>협력</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/mission`}>
              <img className={styles.img} src="/images/guild/임무.png" alt="사진"/>
              <h1 className={styles.description}>임무</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/navi`}>
              <img className={styles.img} src="/images/guild/탐색.png" alt="사진"/>
              <h1 className={styles.description}>탐색</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/guild_vs`}>
              <img className={styles.img} src="/images/guild/경기.png" alt="사진"/>
              <h1 className={styles.description}>경기</h1>
          </Link>
        </div>
        <div className={styles.test}>
          <Link className={styles.cards} to={`${match.url}/game`}>
              <img className={styles.img} src="/images/guild/게임.png" alt="사진"/>
              <h1 className={styles.description}>게임</h1>
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Guild;