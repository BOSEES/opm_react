import styles from "./description.module.css";
import MainData from "../maindata/maindata";

const Description = ({data}) => {
  return (
    <div className={styles.container}>
      {data.map((data) => {
        if(data.maintitle === "길드 보스") {
          return <MainData key={data.id} title={data.title} description={data.description} link={data.link} />
        }
      })}
    </div>
  )
}

export default Description;