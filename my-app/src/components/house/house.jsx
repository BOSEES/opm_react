import React from "react";
import styles from "./house.module.css";
import SidebarMenu from "../sidebar_menu/sidebarMenu";
import Description from "../description/description";

const House = ({data}) => {

  const onTarget = (event) =>{
    event.preventDefault();
    const text = event.target.dataset.name;
    let move = document.getElementsByClassName(text);
    move[0].scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
    <img className={styles.backImage} src="/images/banner.png" alt="사진"></img>
      <section className={styles.house}>
      <SidebarMenu onTarget={onTarget} data={data}/>
      <div className={styles.description}>
      <Description data={data}/>
      </div>
    </section>
    </>
  )
}

export default House;