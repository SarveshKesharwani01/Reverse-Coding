import React from "react";
import { useNavigate } from "react-router-dom";
const Slot1 = () => {
  const navigate = useNavigate();
  const QuestionList = [];
  for (let i = 1; i <= 20; i++) {
    QuestionList.push(`Question${i}`);
  }
  let pathname = window.location.pathname;
  return (
    <>
      {QuestionList.map((question, index) => (
        <div key={index}>
          <button
            key={index}
            onClick={() => navigate(`${pathname}/${question}`)}
          >
            {question}
          </button>
        </div>
      ))}
    </>
  );
};
export default Slot1;
