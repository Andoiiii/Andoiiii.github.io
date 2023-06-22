import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.flex}>
      <div className={styles.imgWrap}>
        <img src={"you.jpg"} alt="Me! (in a suit)" />
      </div>
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>
          So, hi! Welcome to this... place. I'm a first year{" "}
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
          contests. In 2019 I ranked Top 15 Nationally in Canada in the{" "}
          <a href="https://www.cemc.uwaterloo.ca/contests/csimc.html">CIMC</a>,
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
          That's about it from me - lets see what the future thinks!
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
    </div>
  );
}
