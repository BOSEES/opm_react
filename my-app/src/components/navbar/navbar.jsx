import React from "react";
import {Link} from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
    <div className={styles.logo}>
      {/* <img className={styles.img} src="/images/logo.png" alt=" "/> */}
      <p className={styles.title}>진화의 집</p>
    </div>
    <ul className={styles.lists}>
      <li className={styles.list}><Link className={styles.btn} to="/">Home</Link></li>
      <li className={styles.list}><Link className={styles.btn} to="/house">하우스</Link></li>
      <li className={styles.list}><Link className={styles.btn} to="/guild">길드</Link></li>
      <li className={styles.list}><Link className={styles.btn} to="/vs">대결</Link></li>
      <li className={styles.list}><Link className={styles.btn} to="/challenge">도전</Link></li>
      <li className={styles.list}><Link className={styles.btn} to="/etc">깨알 꿀팁</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar;