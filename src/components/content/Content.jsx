import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { onValue, ref } from "firebase/database";
import "./content.css";
import MyPerson from "../myPerson/MyPerson";

const Content = () => {
  const [settings, setSettings] = useState({});
  useEffect(() => {
    const query = ref(db, "settings");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setSettings(data);
      console.log(data);
    });
  }, []);
  return (
    <div className="content">
      <MyPerson settings={settings} />
    </div>
  );
};

export default Content;
