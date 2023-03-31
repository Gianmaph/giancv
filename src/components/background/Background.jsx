import { useEffect, useState } from "react";
import "./background.css";
const Background = ({ num }) => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const rows = [];
    for (let i = 0; i < num; i++) {
      rows.push(i);
    }
    setTest(rows);
  }, []);

  return (
    <div>
      <div className="area">
        <ul className="circles">
          {test.map(item => (
            <li key={item}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
