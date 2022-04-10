import { useEffect, useState } from "react";
import styles from "../../styles/Sliders.module.css";
import { BlackButton } from "../Buttons";

const InfoSlider = ({ data, ...rest }) => {
  const [state, setState] = useState(data);
  // const [counter]

  useEffect(() => {
    let count = 0;
    let intId = setInterval(() => {}, 2000);

    return clearInterval(intId);
  }, [state]);

  useEffect(() => {
    setState(data);
  }, [data]);

  return (
    <div className={styles.sliderWrapper}>
      {state.map((single) => (
        <div
          key={single.heading}
          style={{ backgroundImage: `url('${single.src}')` }}
          className={styles.infoSlider}
        >
          <div className={styles.glass}>
            <h4>{single.heading}</h4>
            <p>{single.description}</p>
            <a href="">
              <BlackButton>See More</BlackButton>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSlider;

export const useSlider = () => {};
