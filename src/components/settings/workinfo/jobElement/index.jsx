import styles from "./styles.module.scss";

const JobElement = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default JobElement;
