import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/slot.module.css";
const Slot1 = () => {
  const navigate = useNavigate();
  const QuestionList = [];
  for (let i = 1; i <= 6; i++) {
    QuestionList.push(`Question${i}`);
  }
  let pathname = window.location.pathname;

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
      <div className={styles.heading}>Final Round</div>
      <div className={styles.containers}>
        {QuestionList.map((question, index) => (
          <div className={styles.items} key={index}>
            <button
              className={styles.fancy_button}
              key={index}
              onClick={() => navigate(`${pathname}/${question}`)}
            >
              {question.substring(0, 8)} {question.substring(8)}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Slot1;
