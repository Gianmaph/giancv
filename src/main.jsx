import React from "react";
import ReactDOM from "react-dom/client";
import Content from "./components/content/Content";
import Background from "./components/background/Background";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Background num="50" />
      <div className="context">
        <Content />
      </div>
    </div>
  </React.StrictMode>
);
