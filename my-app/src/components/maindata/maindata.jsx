import React, { useRef } from "react";
import styles from "./maindata.module.css";

const MainData = ({title, description, link}) => {
  const targetNode = useRef();

  return (
    <>
      <h2 className={`${styles.title} ${title}`}>{title}</h2>
      <hr></hr>
      <h3 className={styles.description}>{description}</h3>
      {link ? <h3 className={styles.link}>출처: {link}</h3> : <br/>}
    </>
  )
}

export default MainData;