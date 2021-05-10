import React, { useRef } from "react";
import styles from "./list.module.css";

const List = ({title,description,link,maintitle}) => {
  const fooBarNode = useRef(null);

  const handleList = (event) => {
    event.preventDefault();
    console.log(event.target.dataset.name);
  }


  return (
      <li ref={fooBarNode} onClick={handleList} className={styles.title} data-name={title} >{title}</li>
  )
}

export default List;