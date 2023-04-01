import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "../../../firebase/firebase.config";
const Settings = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [roles, setRoles] = useState([]);

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  const handleForm = (e) => {
    let form = {
      name: name,
      surname: surname,
      age: age,
      roles: roles,
    };
    e.preventDefault();
    writeSettings(form);
  };

  function writeSettings(form) {
    const db = getDatabase();
    set(ref(db, "settings"), {
      name: form.name,
      surname: form.surname,
      age: form.age,
      roles: form.roles,
    });
  }
  useEffect(() => {
    const query = ref(db, "settings");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setName(data.name);
      setSurname(data.surname);
      setAge(data.age);
      setRoles(data.roles);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.settings}>
        <h1 className={styles.title}>Impostazioni Profilo</h1>
        <form onSubmit={handleForm}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            value={roles}
            onChange={(e) => setRoles([e.target.value])}
          />
          <button type="submit">Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
