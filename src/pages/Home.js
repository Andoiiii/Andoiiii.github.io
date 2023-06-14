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
      <hr />
      <div className={styles.about}>
        <h1>Formal About Me</h1>
        <p>
          So, hi! Welcome to my little corner of the internet. I'm a first year{" "}
          <a href="https://uwaterloo.ca/future-students/programs/business-administration-computer-science-double-degree">
            Computer Science and Business Administration Double Degree student
            at the University of Waterloo and Wilfrid Laurier University
          </a>
          {" 🎓 "}
          (yes I attend both) who is currently just trying to explore what's
          possible in the realms of my degrees. My previous experience in these
          fields are limited, but I am passionate and am eager to learn more!
        </p>
        <p>
          I love maths 🧮, and during high school I used to do a lot of Math
          contests. I remember this one time in Grade 10 I ranked Top 15
          Nationally in Canada in the{" "}
          <a href="https://www.cemc.uwaterloo.ca/contests/csimc.html">CSMC</a>,
          so that was neat. I also am very passionate about Math Tutoring and
          have been tutoring since I was 14.
        </p>
        <p>
          Outside of school I am a huge nerd and play{" "}
          <a href="https://oldschool.runescape.com/">Old School Runescape</a>,
          and sometimes I make drawings that look like they were drawn by a 10
          year old. (But hey, it's the passion that counts?). I also enjoy
          participating in Business Case Competitions 💼 with friends.
        </p>
        <p>
          I love hoarding knowledge - I am eager to learn about anything and
          everything, and meticulously take notes whenever I can 📝. Writing
          information down helps me learn the best, and over the years I strived
          to not throw away any of it. Thankfully, instead of paper, I now use
          Microsoft OneNote.
        </p>
        <p>
          That's about it from me - I'm eager to see where life takes me and
          what I'll learn along the way!
        </p>
        <span className={styles.emote} title="Former Hongkonger">
          {[0x1f1ed, 0x1f1f0].map((x) => String.fromCodePoint(x))}
        </span>{" "}
        <span
          className={styles.emote}
          title="More Chinese than Hongkongese though..."
        >
          {[0x1f1e8, 0x1f1f3].map((x) => String.fromCodePoint(x))}
        </span>{" "}
        <span className={styles.emote} title="Immgrated to Canada">
          {[0x1f1e8, 0x1f1e6].map((x) => String.fromCodePoint(x))}
        </span>{" "}
        <span
          className={styles.emote}
          title="Furry????????????????????????????????????????????"
        >
          🐉
        </span>{" "}
        <span
          className={styles.emote}
          title="Gay????????????????????????????????????????????"
        >
          🏳️‍🌈
        </span>
      </div>
    </>
  );
}

export default Home;
