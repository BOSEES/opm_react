import React from "react";
import styles from "./sidebarMenu.module.css";
import List from "../list/list";
const SidebarMenu = () => {
  return (
    <>
    <container className={styles.container}>
      <div className={styles.sidebarMenu}>
        <List/>
      </div>
    </container>
    </>
  )
}

export default SidebarMenu;