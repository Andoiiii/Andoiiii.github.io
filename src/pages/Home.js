import styles from './Home.module.css';
import { SlideCounter } from '../assets/SlidingCounter';


function Home() {
  return (
    <>
    <div class={styles.landing}>
      <div class={styles.left}>
        <p>Hi Friend!</p>
        <h1>I am <span class={styles.color}>Andy Chang</span>!</h1>
        <h2>Or <span class={styles.color}>Andoiii</span> on the Internet.</h2>
        <div class={styles.counterDeco}>
          <p>Your local... </p>
          <SlideCounter />
        </div>
        <p>Nice to meet you! :)</p>
      </div>
      <img src="../ColorPalette.jpg" alt="TODO: add images" />
    </div>
    </>
    
  );
}

export default Home;
