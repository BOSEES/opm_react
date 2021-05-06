import React from "react";
import styles from "./house.module.css";
import {Link, Route} from "react-router-dom";
import Dna from "../dna/dna";

const House = ({match}) => {
  return (
    <>
    <section className={styles.house}>
    <Link to={`${match.url}/dna`}>
      <div className={styles.cards}>
        <img className={styles.img} src="/images/house/연구실.png" alt="사진"/>
        <h3 className={styles.description}>asdasasddasd</h3>
      </div>
    </Link>

    
    <Route path={`${match.url}/:contents`} component={Dna} />
    </section>
    </>
  )
}

export default House;