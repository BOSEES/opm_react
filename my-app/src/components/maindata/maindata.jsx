<<<<<<< HEAD
import React, {useRef} from "react";
import styles from "./maindata.module.css";

const MainData = ({title, description, link}) => {
  const useTarget = useRef();

  return (
    <>
      <h2  className={`${styles.title}`}>{title}</h2>
      <hr></hr>
      <h3 className={styles.description}>{description}</h3>
      {link ? <h3 className={styles.link}>출처: {link}</h3> : <br/>}
    </>
  )
}

=======
import React from "react";
import styles from "./maindata.module.css";

const MainData = ({title, description, link}) => {

  return (
    <>
      <h2 className={`${styles.title} ${title}`}>{title}</h2>
      <hr></hr>
      <h3 className={styles.description}>{description}</h3>
      {link ? <h3 className={styles.link}>출처: {link}</h3> : <br/>}
    </>
  )
}

>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
export default MainData;