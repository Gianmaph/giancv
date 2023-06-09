import { useState } from "react";
import styles from "./styles.module.scss";

const JobElement = ({ data }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      {data.map((i) => (
        <div className={styles.section} key={i}>
          <div className={styles.imgSection}>
            <div className={styles.order}>{count}</div>
            <div className={styles.content}>
              <p className={styles.title}>{i.company}</p>
              {i.img != "" ? (
                <img className={styles.jobImg} src={i.img} alt="" />
              ) : null}
            </div>
          </div>
          <div className={styles.infoContent}>
            <p className={styles.title}>{i.role}</p>
            {i.activities != "" ? <p>{i.activities}</p> : null}
            {i.goals != "" ? <p>{i.goals}</p> : null}
          </div>
          <div className={styles.selection}>
            <img className={styles.selImg} src="./edit.png" alt="edit" />
            <hr />
            <img className={styles.selImg} src="./delete.png" alt="edit" />
          </div>
        </div>
      ))}
    </>
  );
};

export default JobElement;
