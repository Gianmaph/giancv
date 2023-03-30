import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/content/Content";
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
