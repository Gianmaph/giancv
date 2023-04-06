import styles from "./styles.module.scss";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "../../../../firebase/firebase.config";
import { useState, useEffect } from "react";
import JobElement from "./jobElement";
import AddJob from "./addJob";
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
  const [showWork, setShowWork] = useState(true);
  const [showJob, setShowJob] = useState(false);

  const addJob = () => {
    if (showWork === true) {
      setShowWork(false);
      setShowJob(true);
    } else if (showWork === false) {
      setShowWork(true);
      setShowJob(false);
    }
  };

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
    <>
      <div className={select && showWork ? styles.workinfo : styles.noworkinfo}>
        <JobElement data={data} />
        <button onClick={addJob} className={styles.addButton}>
          ADD WORK
        </button>
      </div>
      <div className={select && showJob ? styles.addJob : styles.noaddJob}>
        <AddJob back={addJob} />
      </div>
    </>
  );
};

export default Workinfo;
