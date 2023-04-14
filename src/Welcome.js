import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/welcome.module.css";
const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <img
          src="https://i.imgur.com/DxqfH2n.png"
          alt="E-summit"
          className={styles.logo2}
        />
      </div>
      <div>
        <img
          src="https://i.imgur.com/UPzsKWH.png"
          alt="E-summit"
          className={styles.logo1}
        />
      </div>
      <div className={styles.heading}>Reverse Coding</div>
      <div className={styles.container}>
        <button
          className={styles.fancy_button}
          onClick={() => navigate("/round1/slot13bU6xKpR9j")}
        >
          Slot 1
        </button>
        {/* <button
          className={styles.fancy_button}
          onClick={() => navigate("/round1/slot27cE2hLmN5v")}
        >
          Slot 2
        </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot32tD9zGkQ1s")}
      >
        Slot 3
      </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot48wY4fXnJ6m")}
      >
        Slot 4
      </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot55rT7vFbK3a")}
      >
        Slot 5
      </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot61pZ6cMjH8s")}
      >
        Slot 6
      </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot79yS2dFgP5j")}
      >
        Slot 7
      </button> */}
        {/* <button
        className={styles.fancy_button}
        onClick={() => navigate("/round1/slot86qZ8wNtR1k")}
      >
        Slot 8
      </button> */}
        {/* <button
          className={styles.fancy_button}
          onClick={() => navigate("/finalround4vT9nGpJ7k")}
        >
          Final Round
        </button> */}
      </div>
    </>
  );
};
export default Welcome;
