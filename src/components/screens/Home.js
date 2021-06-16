import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Home = () => {
  return (
    <div className={styles.app}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.buttonsContainer}>
        <Link to="/newGuest" className={`${styles.btn} ${styles.green}`}>
          New Guest
        </Link>
        <Link to="/oldGuest" className={`${styles.btn} ${styles.blue}`}>
          Returning Guest
        </Link>
        <Link to="/prebookedGuest" className={`${styles.btn} ${styles.yellow}`}>
          Prebooked Guest
        </Link>
        <Link to="/signout" className={`${styles.btn} ${styles.red}`}>
          Signout
        </Link>
      </div>
    </div>
  );
};

export default Home;
