import styles from "./SlidingCounter.module.css"
import { useState, useEffect } from "react";
//goal: a counter-esque object that displays different strings
//and scrolls to different ones

let choiceArr = [
  "Software Dev in Training",
  "Math Person",
  "University Student",
  "Dragon",
  "Math Tutor",
  "CS/BBA Student",
  "Friend :)",
  "Nerd",
  "Bad Artist",
  "Archivist"
];
let maxLen = choiceArr.reduce((acc,x) => Math.max(x.length, acc), 0);

function SlideCounter() {
  const [ currEntry, setCurrEntry ] = useState(0);
  const fontSize = 14;
  const fontHangSize = 8;

  //go to a new, distinct entry every __ seconds
  useEffect( () => {
    const tickOver = setInterval(() => {
      let x = currEntry;
      while (x === currEntry) { x = Math.floor(Math.random() * choiceArr.length)}
      setCurrEntry(x);
    }, 3000);
    return () => clearInterval(tickOver);
  }, [currEntry])  


  const fontStyles = { "--font-height": fontSize + "px", "--maxlen": maxLen, "--font-hang-size": fontHangSize + "px" };
  const slideStyle = { "marginTop": (-1 * (currEntry * (fontHangSize + fontSize)))}

  return (
    <>
      <div style={fontStyles} className={styles.Counter}>
        <div className={styles.Entries} style={slideStyle}>
          {choiceArr.map((x,ind) => <div className={styles.Entry} key={ind}><p>{x}</p></div>)}
        </div>
      </div>
    </>
  )
}

export { SlideCounter };