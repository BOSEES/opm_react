import React from "react";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
    <section className={styles.home}>
    <img className={styles.backImage} src="/images/banner2.png" alt="tathmaki"/>
    <div className={styles.description}>
      <img className={styles.avatar} src="/images/avatar.png" alt="genius" />
      <h2>
        안녕하세요. 24서버에서 간신히 생존중인 도깨비 길드원 "슈프림" 입니다.<br/>
        정보는 일방적이지만 제가 정리해서 제공해 드릴 예정입니다.<br/> 
        좀 더 궁금한 내용이나 추가해 주었으면 하는 내용은 따로 메일을 통해 알려주신다면 적극 반영 하겠습니다!!
      </h2>
    </div>
    <button className={styles.btn}>contact</button>
    </section>
    <section className={styles.intro}>
    <h2>홈페이지를 만들게 된 계기...</h2>
    <h2>공식홈페이지의 개떡같은 관리와 분류되지 않는 무분별한 게시글 때문에 일일이 검색하고 찾아다니는 수고스러움이 있었습니다.<br/>
      이 페이지를 통해 액기스만 모아놓고 모든 유저들이 좀더 편하게 게임 진행을 원활하게 할수 있도록 하기
      위해 만들었습니다.
    </h2>
    </section>
    <section className={styles.contact}>
    <h1>Talk to me</h1>
    <h3>rladuddlf3@naver.com</h3>
    <h4>24서버 도깨비 길드원 슈프림 작성 - All rights reserved</h4>
    </section>
    </>
  )
}

export default Home;