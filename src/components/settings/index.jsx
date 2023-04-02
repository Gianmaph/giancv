import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Navbutton from "./navbutton";
import Userinfo from "./userinfo";

const Settings = () => {
  const [button1Select, setButton1Select] = useState(false);
  const [button2Select, setButton2Select] = useState(false);
  // useEffect(() => {
  //   console.log(input);
  // }, [input]);

  useEffect(() => {
    setButton1Select(true);
  }, []);

  const button1Click = () => {
    setButton1Select(true);
    setButton2Select(false);
  };

  const button2Click = () => {
    setButton1Select(false);
    setButton2Select(true);
  };

  return (
    <div className={styles.main}>
      <div className={styles.settings}>
        <div className={styles.header}>
          <h1 className={styles.title}>Edit Profile</h1>
          <nav>
            <Navbutton
              text="User info"
              selection={button1Select}
              click={button1Click}
            />
            <Navbutton
              text="Work info"
              selection={button2Select}
              click={button2Click}
            />
          </nav>
        </div>
        <Userinfo select={button1Select} />
      </div>
    </div>
  );
};

export default Settings;
