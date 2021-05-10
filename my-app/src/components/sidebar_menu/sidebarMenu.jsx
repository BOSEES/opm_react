import React from "react";
import styles from "./sidebarMenu.module.css";
import List from "../list/list";

const SidebarMenu = ({data}) => {
  return (
      <div className={styles.sidebarMenu}>
        <h2 className={styles.miniTitle}>길드 보스</h2>
          {data.map((data)=> {
            if (data.maintitle === "길드 보스") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
          <h2 className={styles.miniTitle}>경기</h2>
          {data.map((data)=> {
            if (data.maintitle === "경기") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
          <h2 className={styles.miniTitle}>임무</h2>
          {data.map((data)=> {
            if (data.maintitle === "임무") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
          <h2 className={styles.miniTitle}>정보</h2>
          {data.map((data)=> {
            if (data.maintitle === "정보") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
          <h2 className={styles.miniTitle}>협력</h2>
          {data.map((data)=> {
            if (data.maintitle === "협력") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
          <h2 className={styles.miniTitle}>게임</h2>
          {data.map((data)=> {
            if (data.maintitle === "게임") {
              return <List key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
            }
          })}
      </div>
  )
}

export default SidebarMenu;