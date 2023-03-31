import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Settings = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleForm = e => {
    e.preventDefault();
    console.log("FORM: ", input);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Settingd</h1>
      <div className={styles.content}>
        <form onSubmit={handleForm}>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
