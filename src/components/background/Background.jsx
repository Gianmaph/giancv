import "./background.css";
const Background = ({ num }) => {
  const rows = [];
  for (let i = 0; i < num; i++) {
    rows.push(i);
  }
  return (
    <div>
      <div className="area">
        <ul className="circles">
          {rows.map((item) => (
            <li key={item}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
