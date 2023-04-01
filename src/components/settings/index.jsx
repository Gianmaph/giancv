import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { db } from "../../../firebase/firebase.config";

const Settings = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [birth, setBirth] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cap, setCap] = useState("");
  const [address, setAddress] = useState("");

  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  const handleForm = (e) => {
    let form = {
      name: name,
      surname: surname,
      age: age,
      birth: birth,
      email: email,
      number: number,
      country: country,
      city: city,
      cap: cap,
      address: address,
    };
    e.preventDefault();
    writeSettings(form);
  };

  function writeSettings(form) {
    const db = getDatabase();
    set(ref(db, "settings/userInfo"), form);
  }
  useEffect(() => {
    const query = ref(db, "settings/userInfo");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setName(data.name);
      setSurname(data.surname);
      setAge(data.age);
      setBirth(data.birth);
      setEmail(data.email);
      setNumber(data.number);
      setCountry(data.country);
      setCity(data.city);
      setCap(data.cap);
      setAddress(data.address);
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.settings}>
        <h1 className={styles.title}>Edit Profile</h1>
        <form onSubmit={handleForm}>
          <div className={styles.section}>
            <div className={styles.subsection}>
              <div className={styles.textbox}>
                <p>Name</p>
                <input
                  className={styles.box}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Surname</p>
                <input
                  className={styles.box}
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Age</p>
                <input
                  className={styles.box}
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Birth</p>
                <input
                  className={styles.box}
                  type="text"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Email</p>
                <input
                  className={styles.box}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.subsection}>
              <div className={styles.textbox}>
                <p>Number</p>
                <input
                  className={styles.box}
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Country</p>
                <input
                  className={styles.box}
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>City</p>
                <input
                  className={styles.box}
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Cap</p>
                <input
                  className={styles.box}
                  type="text"
                  value={cap}
                  onChange={(e) => setCap(e.target.value)}
                />
              </div>
              <div className={styles.textbox}>
                <p>Address</p>
                <input
                  className={styles.box}
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className={styles.button} type="submit">
            Update info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
