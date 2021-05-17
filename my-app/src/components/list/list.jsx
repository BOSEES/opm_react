import React, { useRef } from "react";
import styles from "./list.module.css";

const List = ({onClickList,title,description,link,maintitle}) => {
  const fooBarNode = useRef(null);

  return (
      <li ref={fooBarNode} onClick={onClickList} className={styles.title} data-name={title} >{title}</li>
  )
}

export default List;