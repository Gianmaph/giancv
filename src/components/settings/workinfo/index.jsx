import styles from "./styles.module.scss";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "../../../../firebase/firebase.config";
import { useState, useEffect } from "react";

const Workinfo = ({ select }) => {
  //   const [activities, setActivities] = useState("");
  //   const [company, setCompany] = useState("");
  //   const [end, setEnd] = useState("");
  //   const [goals, setGoals] = useState("");
  //   const [img, setImg] = useState("");
  //   const [place, setPlace] = useState("");
  //   const [role, setRole] = useState("");
  //   const [start, setStart] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const query = ref(db, "settings/workInfo");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      //   setActivities(data.activities);
      //   setCompany(data.company);
      //   setEnd(data.end);
      //   setGoals(data.goals);
      //   setImg(data.img);
      //   setPlace(data.place);
      //   setRole(data.role);
      //   setStart(data.start);
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <div className={select ? styles.workinfo : styles.noworkinfo}>
      {data.map((i) => (
        <div className={styles.section} key={i}>
          <div className={styles.imgSection}>
            <div className={styles.order}>{i.id}</div>
            <div className={styles.content}>
              <p className={styles.title}>{i.company}</p>
              {i.img != "" ? (
                <img className={styles.jobImg} src={i.img} alt="" />
              ) : null}
            </div>
          </div>
          <div className={styles.infoContent}>
            {i.activities != "" ? <p>{i.activities}</p> : null}
          </div>
          <div className={styles.selection}>
            <img className={styles.selImg} src="./edit.png" alt="edit" />
            <hr />
            <img className={styles.selImg} src="./delete.png" alt="edit" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workinfo;
