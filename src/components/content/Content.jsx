import { createContext, useEffect, useReducer, useState } from "react";
import { db } from "../../../firebase/firebase.config";
import { onValue, ref } from "firebase/database";
import "./content.css";
import MyPerson from "../myPerson/MyPerson";

export const reducerCount = (state, action) => {
  switch (action.type) {
    case "incrementa":
      return {
        value: state.value + 1,
      };
    case "decrementa":
      return {
        value: state.value - 1,
      };
    case "reset":
      return {
        value: 0,
      };

    case "test":
      return {
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};

export const MainContext = createContext({});

export const initialState = {
  value: 0,
};

const Content = () => {
  const [state] = useReducer(reducerCount, initialState);

  const [settings, setSettings] = useState({});
  useEffect(() => {
    const query = ref(db, "settings");
    return onValue(query, snapshot => {
      const data = snapshot.val();
      setSettings(data);
      console.log(data);
    });
  }, []);
  return (
    <MainContext.Provider value={state}>
      <div className="content">
        <MyPerson settings={settings} />
      </div>
    </MainContext.Provider>
  );
};

export default Content;
