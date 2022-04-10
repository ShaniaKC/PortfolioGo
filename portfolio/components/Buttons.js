import styles from "../styles/Components.module.scss";

const Button = (color) => (props) => {
  return (
    <button className={styles[`${color}_button`]} {...props}>
      {props.text}
      {props.children}
    </button>
  );
};

export const BlackButton = Button("black");
export const WhiteButton = Button("white");
