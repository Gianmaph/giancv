import "./background.css";
const Background = ({ num }) => {
  const rows = [];
  for (let i = 0; i < num; i++) {
    rows.push("");
  }
  return (
    <div>
      <div className="area">
        <ul className="circles">
          {rows.map(() => (
            <li></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
