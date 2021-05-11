import React from "react";
import styles from "./list.module.css";

const List = ({onTarget,title,description,link,maintitle}) => {

  return (
      <li onClick={onTarget} className={styles.title} data-name={title} >{title}</li>
  )
}

export default List;