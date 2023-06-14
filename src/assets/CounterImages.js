import { counterData } from "./CounterData";
import styles from "./CounterImages.module.css";

const choiceArr = counterData.map((x) => {
  const { src } = x;
  return src;
});

function CounterImages({ currEntry }) {
  const show = { opacity: 1 };
  const hide = { opacity: 0 };

  return (
    <div className={styles.ImageWrapper}>
      {choiceArr.map((src, ind) => (
        <img
          src={src}
          key={ind}
          alt={"Representative thing here - just decoration don't worry"}
          style={ind === currEntry ? { ...show } : { ...hide }}
          className={styles.CounterImage}
        />
      ))}
    </div>
  );
}

export { CounterImages };
