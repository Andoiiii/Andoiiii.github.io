import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import { SlideCounter } from "../assets/SlidingCounter";
import { CounterImages } from "../assets/CounterImages";
import { genNewCounterEntry } from "../assets/CounterData";

function Home() {
  // State and Effect to change subtitle & img shown every __ seconds
  const [currEntry, setCurrEntry] = useState(0);
  useEffect(() => {
    const tickOver = setInterval(() => {
      setCurrEntry(genNewCounterEntry(currEntry));
    }, 5000);
    return () => clearInterval(tickOver);
  }, [currEntry]);

  return (
    <>
      <div className={styles.landing}>
        <div className={styles.left}>
          <p>Hi Friend :3</p>
          <h1>
            I am <span className={styles.color}>Andy Chang</span>!
          </h1>
          <h2>
            Or <span className={styles.color}>Andoiii</span>* on the Internet.
          </h2>
          <div className={styles.counterDeco}>
            <p>Your local...</p>
            <SlideCounter currEntry={currEntry} />
          </div>
          <p>Nice to meet you! :)</p>
          <p>* i's may vary.</p>
        </div>
        <CounterImages currEntry={currEntry} />
      </div>
    </>
  );
}

export default Home;
