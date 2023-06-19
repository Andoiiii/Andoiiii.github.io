import styles from "./404.module.css";

function OhNo() {
  return (
    <>
      <div className={styles.all}>
        <h1>404</h1>
        <h2>Where'd the content go?</h2>
        <h2>:(</h2>
        <p>
          It seems that you got lost... either that or Andoiii was lazy and
          didn't finish this part of the website yet. Classic. Someone dock his
          payroll!
        </p>
        <p>Best if you just use the Navbar to try somewhere else...?</p>
      </div>
    </>
  );
}

export default OhNo;
