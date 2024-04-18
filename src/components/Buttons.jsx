import styles from "./Buttons.module.css";
const Buttons = ({ handleClick }) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "%",
    "7",
    "8",
    "*",
    "9",
    "0",
    "=",
  ];
  return (
    <>
      {buttons.map((btns) => (
        <button
          className={styles.button}
          key={btns}
          onClick={(e) => handleClick(e.target.textContent)}
        >
          {btns}
        </button>
      ))}
    </>
  );
};
export default Buttons;
