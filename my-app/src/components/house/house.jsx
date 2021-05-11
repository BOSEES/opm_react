<<<<<<< HEAD
import React, { useState } from "react";
import styles from "./house.module.css";
import SidebarMenu from "../sidebar_menu/sidebarMenu";
import Description from "../description/description";

const House = ({data}) => {
  const [textValue, setTextValue] = useState();

  return (
    <>
    <img className={styles.backImage} src="/images/banner.png" alt="사진"></img>
      <section className={styles.house}>
      <SidebarMenu data={data}/>
      <div className={styles.description}>
      <Description data={data} setTextValue={setTextValue}/>
      </div>
    </section>
    </>
  )
}

=======
import React from "react";
import styles from "./house.module.css";
import SidebarMenu from "../sidebar_menu/sidebarMenu";
import Description from "../description/description";

const House = ({data}) => {
  return (
    <>
    <img className={styles.backImage} src="/images/banner.png" alt="사진"></img>
      <section className={styles.house}>
      <SidebarMenu data={data}/>
      <div className={styles.description}>
      <Description data={data}/>
      </div>
    </section>
    </>
  )
}

>>>>>>> b0452dc9184526371c6f72c5ad6d06c71259bcba
export default House;