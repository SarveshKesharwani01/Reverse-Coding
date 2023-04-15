import { useRef, useState, React, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";
import { Q2 } from "../Q/Q2";
import { Q15 } from "../Q/Q15";
import { Q18 } from "../Q/Q18";
import { Q9 } from "../Q/Q9";
import { Q20 } from "../Q/Q20";
import { Q22 } from "../Q/Q22";
import { CheckIsThreeInteger } from "../Logic/CheckIsThreeInteger";
import { CheckIsString } from "../Logic/CheckIsString";
import { CheckIsTwoInteger } from "../Logic/CheckIsTwoInteger";
import { CheckIsIntegerArray } from "../Logic/CheckIsIntegerArray";
import styles from "../styles/question.module.css";
const QuestionFinal = () => {
  const [answer, setAnswer] = useState(null);
  const [warning, setWarning] = useState(false);
  const [value, setValue] = useState("");
  const [constraint, setConstraint] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const inputref = useRef(null);
  const path = window.location.pathname;
  const IP = "INVALID INPUT";
  // const slot = path.substring(12, 13);
  const qnum = path.substring(30);
  // console.log(qnum);
  const logic = () => {
    let val = inputref.current.value;
    if (val.trim().length === 0) {
      setWarning((prev) => {
        return !prev;
      });
      setAnswer("");
      setTimeout(() => {
        setWarning(false);
      }, 2000);
    } else if (qnum === "1") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q2(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "2") {
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q15(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "3") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q18(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "4") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q9(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "5") {
      const boolAnswer = CheckIsThreeInteger(val);
      if (boolAnswer !== null) setAnswer(Q20(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "6") {
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q22(boolAnswer));
      else setAnswer(IP);
    }
  };

  if (answer === "INVALID INPUT") {
    setTimeout(() => {
      setAnswer("");
    }, 2000);
  }

  useEffect(() => {
    if (qnum === "1") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print 'YES' OR 'NO' ");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "2") {
      setInput(
        "A single line consisting of two space-separated integers A and B"
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("0 ≤ A, B ≤ 1e9");
    } else if (qnum === "3") {
      setInput(
        "A string S consisting of lowercase letter of English alphabet."
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "4") {
      setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("2 ≤ n ≤ 1e5 \n0 ≤ A[i] ≤ 1e9, for all i");
    } else if (qnum === "5") {
      setInput(
        "A single line consists of three space-separated integers A, B, C"
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("0 ≤ A, B, C ≤ 1e6");
    } else if (qnum === "6") {
      setInput(
        "A single line consisting of two space-separated integers A and B"
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ A, B ≤ 1e6");
    }
  }, [qnum]);

  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <img
          src="https://i.imgur.com/DxqfH2n.png"
          alt="E-summit"
          className={styles.logo2}
        />
      </div>
      <div className={styles.heading}>Question {qnum}</div>
      <div>
        <img
          src="https://i.imgur.com/UPzsKWH.png"
          alt="E-summit"
          className={styles.logo1}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.constraints}>
          <div className={styles.big_input_box}>
            <div className={styles.input_constraint1}>Input :</div>
            <div className={styles.input_constraint2}>{input}</div>
          </div>
          {qnum === "3" ? (
            <div className={styles.big_input_box}>
              <div className={styles.input_constraint1}>Hint :</div>
              <div className={styles.input_constraint2}>Vowels</div>
            </div>
          ) : (
            <></>
          )}
          <div className={styles.big_output_box}>
            <div className={styles.output_constraint1}>Output :</div>
            <div className={styles.output_constraint2}>{output}</div>
          </div>
          <div className={styles.big_input_title}>
            <div className={styles.input_title1}>Constraint :</div>
            <div className={styles.input_title2}>{constraint}</div>
          </div>
        </div>
        <div className={styles.form}>
          <form onSubmit={formSubmit}>
            <input
              type="text"
              className={styles.input_box}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              ref={inputref}
            ></input>
            <button
              className={styles.fancy_button}
              type="submit"
              onClick={logic}
            >
              Submit
            </button>
            {/* <div>{warning ? "Empty input" : ""}</div> */}
          </form>
          <div className={styles.output_box}>
            {warning ? "EMPTY INPUT" : answer}
          </div>
        </div>
      </div>
    </>
  );
};
export default QuestionFinal;
