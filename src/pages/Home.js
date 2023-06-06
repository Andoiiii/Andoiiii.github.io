import styles from './Home.module.css'
import { SlideCounter } from '../assets/SlidingCounter'

function Home () {
  return (
    <>
    <div className={styles.landing}>
      <div className={styles.left}>
        <p>Hi Friend!</p>
        <h1>I am <span className={styles.color}>Andy Chang</span>!</h1>
        <h2>Or <span className={styles.color}>Andoiii</span> on the Internet.</h2>
        <div className={styles.counterDeco}>
          <p>Your local...</p>
          <SlideCounter />
        </div>
        <p>Nice to meet you! :)</p>
      </div>
      <img className={styles.counterImg} src="../slide_counter_img/junior-software-dev.png" alt="TODO: add images" />
    </div>
    </>
  )
}

export default Home
