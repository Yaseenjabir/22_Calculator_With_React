import styles from "./Input.module.css";

const Input = ({ output }) => {
  return (
    <>
      <input
        className={styles.input}
        placeholder="0"
        value={output}
        readOnly
      ></input>
    </>
  );
};
export default Input;
