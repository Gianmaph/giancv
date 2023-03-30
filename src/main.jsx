import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/content/Content";
import Background from "./components/background/Background";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Background />
      <div>
        <Content />
      </div>
    </div>
  </React.StrictMode>
);
