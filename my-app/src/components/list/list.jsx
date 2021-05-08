import React from "react";
import styles from "./list.module.css";

const List = ({title,description,link,maintitle}) => {

  return (
      <li className={styles.title}>{title}</li>
  )
}

export default List;