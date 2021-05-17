import React from "react";
import styles from "./list.module.css";

<<<<<<< HEAD
const List = ({onClickList,title,description,link,maintitle}) => {
  const fooBarNode = useRef(null);

  return (
      <li ref={fooBarNode} onClick={onClickList} className={styles.title} data-name={title} >{title}</li>
=======
const List = ({onTarget,title,description,link,maintitle}) => {

  return (
      <li onClick={onTarget} className={styles.title} data-name={title} >{title}</li>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
  )
}

export default List;