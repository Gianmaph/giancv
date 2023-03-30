import "./myPerson.css";

const MyPerson = () => {
  return (
    <div className="myperson">
      <div className="profile-photo">
        <img src="./foto.jpg" alt="ProfilePhoto" />
      </div>
      <div className="title">
        <h1>Gianmarco Cricchio</h1>
        <p>Software Developer</p>
      </div>
      <div className="download">
        <button>DOWNLOAD CV</button> <button>CONTACT ME</button>
      </div>
    </div>
  );
};
export default MyPerson;
