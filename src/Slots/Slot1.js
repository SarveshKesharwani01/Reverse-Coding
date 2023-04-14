import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/slot.module.css";
const Slot1 = () => {
  const navigate = useNavigate();
  const QuestionList = [];
  for (let i = 1; i <= 21; i++) {
    QuestionList.push(`Question${i}`);
  }
  let pathname = window.location.pathname;

  return (
    <>
      <div className={styles.center}>Slot {pathname.substring(12, 13)}</div>
      <div className={styles.container}>
        {QuestionList.map((question, index) => (
          <div key={index}>
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
