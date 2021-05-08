import React from "react";
import styles from "./list.module.css";

const List = () => {
  return (
    <ul className={styles.lists}>
      <i className={styles.title}>길드 보스</i>
      <li className={styles.list}>asdas</li>
      <li className={styles.list}>asdas</li>
    </ul>
  )
}

export default List;