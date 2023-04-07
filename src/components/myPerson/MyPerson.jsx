import { MainContext, reducerCount } from "../content/Content";
import "./myPerson.css";
import { useContext, useEffect, useReducer, useState } from "react";

const MyPerson = ({ settings }) => {
  const count = useContext(MainContext);

  const [state, dispatch] = useReducer(reducerCount, count);

  const [index, setIndex] = useState(0);

  const [class1, setClass1] = useState(false);
  const [class2, setClass2] = useState(false);
  const [class3, setClass3] = useState(false);

  const [text, setText] = useState("Electronic Engineer");
  const sleepSync = ms => {
    const end = new Date().getTime() + ms;
    while (new Date().getTime() < end) {}
  };

  const testi = ["ciao", "ciao2", "ciao3"];

  useEffect(() => {
    setTimeout(() => {
      switch (index) {
        case 0:
          setClass1(true);
          setClass2(false);
          setClass3(false);
          setIndex(index + 1);
          break;
        case 1:
          setClass1(false);
          setClass2(true);
          setClass3(false);
          setIndex(index + 1);
          break;
        case 2:
          setClass1(false);
          setClass2(false);
          setClass3(true);
          setIndex(0);
          break;
      }
    }, 2000);
    console.log("ciao");
  }, [index]);

  const incrementa = () => {
    dispatch({ type: "incrementa" });
  };

  const testPayload = () => {
    dispatch({ type: "test", payload: 10 });
  };

  // useEffect(() => {
  // let sub = document.querySelector(".sub");
  // sub.style.opacity = 100;
  // sleepSync(500);
  // const timer = setTimeout(() => {
  //   if (text === "Electronic Engineer") {
  //     setText("Embedded System Developer");
  //     sub.style.opacity = 0;
  //     sleepSync(500);
  //   } else {
  //     setText("Electronic Engineer");
  //     sub.style.opacity = 0;
  //     sleepSync(500);
  //   }
  // }, 1000);
  // return () => clearTimeout(timer);
  // });

  return (
    <div className="myperson">
      <div className="profile-photo">
        <button onClick={incrementa}>+</button>
        <button onClick={testPayload}>aggiungi 10</button>
        <img src="./foto.jpg" alt="ProfilePhoto" />
      </div>
      <div className="title">
        <h1>
          {settings.name} {settings.subname}
        </h1>
        <p className="sub">{text}</p>
        <p className={`sub ${class1 ? "show" : ""}`}>{testi[0]}</p>
        <p className={`sub ${class2 ? "show" : ""}`}>{testi[1]}</p>
        <p className={`sub ${class3 ? "show" : ""}`}>{testi[2]}</p>
        <div className="social">
          <a
            target="_blank"
            href="https://it.linkedin.com/in/gianmarco-cricchio-a5b138200"
          >
            <svg
              className="linkedin"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="download">
        <button className=".mbutton">DOWNLOAD CV</button>{" "}
        <button className=".mbutton">CONTACT ME</button>
      </div>
    </div>
  );
};
export default MyPerson;
