import styles from "./styles.module.scss";
const AddJob = ({ back }) => {
  return (
    <>
      <button className={styles.backButton} onClick={back}>
        <img src="./back.png" alt="BACK" />
      </button>
      <button className={styles.addButton}>ADD WORK</button>
    </>
  );
};

export default AddJob;
