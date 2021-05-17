import React from "react";
import styles from "./sidebarMenu.module.css";
import List from "../list/list";

<<<<<<< HEAD
const SidebarMenu = ({onClickList, data}) => {
=======
const SidebarMenu = ({onTarget,data}) => {
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
  return (
      <div className={styles.sidebarMenu}>
        <h2 className={styles.miniTitle}>길드 보스</h2>
          {data.map((data)=> {
            if (data.maintitle === "길드 보스") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
          <h2 className={styles.miniTitle}>경기</h2>
          {data.map((data)=> {
            if (data.maintitle === "경기") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
          <h2 className={styles.miniTitle}>임무</h2>
          {data.map((data)=> {
            if (data.maintitle === "임무") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
          <h2 className={styles.miniTitle}>정보</h2>
          {data.map((data)=> {
            if (data.maintitle === "정보") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
          <h2 className={styles.miniTitle}>협력</h2>
          {data.map((data)=> {
            if (data.maintitle === "협력") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
          <h2 className={styles.miniTitle}>게임</h2>
          {data.map((data)=> {
            if (data.maintitle === "게임") {
<<<<<<< HEAD
              return <List key={data.id} title={data.title} onClickList={onClickList} description={data.description} maintitle={data.maintitle}/>
=======
              return <List onTarget={onTarget} key={data.id} title={data.title} description={data.description} maintitle={data.maintitle}/>
>>>>>>> 952b72d5a09182a78a43e9e7b357cc60e967df07
            }
          })}
      </div>
  )
}

export default SidebarMenu;