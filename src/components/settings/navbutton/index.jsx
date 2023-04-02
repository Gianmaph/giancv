import styles from "./styles.module.scss";
const Navbutton = ({ text, selection, click }) => {
  return (
    <button
      onClick={click}
      className={selection ? styles.buttonActive : styles.button}
    >
      {text}
    </button>
  );
};

export default Navbutton;
