import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function HighlightableLink({
  highlight,
  href,
  display,
  clickHandler = () => {},
}) {
  if (highlight) {
    return (
      <Link href={href} className={`${styles.onPage} ${styles.link}`}>
        {display}
      </Link>
    );
  } else {
    return (
      <Link to={href} className={` ${styles.link}`} onClick={clickHandler}>
        {display}
      </Link>
    );
  }
}

export default function Navbar({ openPage }) {
  const [dropDownOn, setDropDownOn] = useState(false);
  const handleMenuOn = () => setDropDownOn((prev) => !prev);
  const handleSwitchPage = () => setDropDownOn(false);
  return (
    <div id={styles.Navbar}>
      <div id={styles.title}>
        <HighlightableLink
          highlight={openPage === "Home"}
          href="/"
          display="~ Andy Chang :) ~"
        />
      </div>
      <div id={styles.links}>
      <ul className={styles.navUl}>
          <HighlightableLink
            highlight={openPage === "About"}
            href="/about"
            display="About"
          />
        </ul>
        <div className={styles.divider}></div>
        <ul className={styles.navUl}>
          <HighlightableLink
            highlight={openPage === "Projects"}
            href="/projects"
            display="Projects"
          />
          <HighlightableLink
            highlight={openPage === "Resume"}
            href="/resume"
            display="Resume"
          />
        </ul>
        <div className={styles.divider}></div>

        <ul className={styles.navUl}>
          <HighlightableLink
            highlight={openPage === "Art"}
            href="/art"
            display="Art Things"
          />
          <HighlightableLink
            highlight={openPage === "Notes"}
            href="/notes"
            display="BU Stuff"
          />
        </ul>
        <div className={styles.divider}></div>
        <ul className={styles.navUl}>
          <HighlightableLink
            highlight={openPage === "Contact"}
            href="/contact"
            display="Contact"
          />
        </ul>
      </div>
      <div id={styles.DropDown}>
        <button id={styles.menuButton} onClick={handleMenuOn}>
          <FontAwesomeIcon icon={faBars} id={styles.inner} />
        </button>
        {dropDownOn ? (
          <div id={styles.ddLinks}>
            <HighlightableLink
            highlight={openPage === "About"}
            href="/about"
            display="About"
            clickHandler={handleSwitchPage}
          />
            <HighlightableLink
              highlight={openPage === "Projects"}
              href="/projects"
              display="Projects"
              clickHandler={handleSwitchPage}
            />
            <HighlightableLink
              highlight={openPage === "Resume"}
              href="/resume"
              display="Resume"
              clickHandler={handleSwitchPage}
            />
            <HighlightableLink
              highlight={openPage === "Art"}
              href="/art"
              display="Art Things"
              clickHandler={handleSwitchPage}
            />
            <HighlightableLink
              highlight={openPage === "Notes"}
              href="/notes"
              display="BU Stuff"
              clickHandler={handleSwitchPage}
            />
            <HighlightableLink
              highlight={openPage === "Contact"}
              href="/contact"
              display="Contact"
              clickHandler={handleSwitchPage}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
