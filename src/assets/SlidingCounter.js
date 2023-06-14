import styles from "./SlidingCounter.module.css";
import { counterData } from "./CounterData";

const choiceArr = counterData.map((x) => {
  const { tag } = x;
  return tag;
});

function SlideCounter({ currEntry }) {
  
  // Variables needed to Achieve CSS Sliding Effect
  const fontSize = 14;
  const fontHangSize = 8;
  const fontStyles = {
    "--font-height": fontSize + "px",
    "--font-hang-size": fontHangSize + "px",
  };
  const slideStyle = {
    marginTop: -1 * (currEntry * (fontHangSize + fontSize)),
  };

  return (
    <>
      <div style={fontStyles} className={styles.Counter}>
        <div className={styles.Entries} style={slideStyle}>
          {choiceArr.map((x, ind) => (
            <div className={styles.Entry} key={ind}>
              <p>{x}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export { SlideCounter };
