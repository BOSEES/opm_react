import React from "react";
import styles from "./house.module.css";
import SidebarMenu from "../sidebar_menu/sidebarMenu";

const House = (data) => {
  console.log(data)
  return (
    <>
    <img className={styles.backImage} src="/images/banner.png"></img>
    <SidebarMenu/>
      <section className={styles.house}>
      <div className={styles.container}>
        <h1></h1>
      </div>
    </section>
    </>
  )
}

export default House;