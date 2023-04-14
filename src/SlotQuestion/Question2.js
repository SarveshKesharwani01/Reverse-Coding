import { useRef, useState, React, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";

import { Q6 } from "../Q/Q6";
import { Q7 } from "../Q/Q7";
import { Q11 } from "../Q/Q11";
import { Q13 } from "../Q/Q13";
import { Q19 } from "../Q/Q19";

import { CheckIsString } from "../Logic/CheckIsString";
import { CheckIsIntegerArray } from "../Logic/CheckIsIntegerArray";
import { CheckIsTwoInteger } from "../Logic/CheckIsTwoInteger";
import { CheckIsThreeInteger } from "../Logic/CheckIsThreeInteger";
import styles from "../styles/question.module.css";
const Question2 = () => {
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
  const qnum = path.substring(32);
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
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q6(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "2") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q7(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "3") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q11(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "4") {
      const boolAnswer = CheckIsThreeInteger(val);
      if (boolAnswer !== null) setAnswer(Q13(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "5") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q19(boolAnswer));
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
        "A single line consists of two space-separated integers A and B "
      );
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B ≤ 1e9");
    } else if (qnum === "2") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("0 ≤ |S| ≤ 1e5");
    } else if (qnum === "3") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single string");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "4") {
      setInput(
        "A single line consists of three space-separated integers A,B,C"
      );
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B, C ≤ 1e9");
    } else if (qnum === "5") {
      setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput(
        "Print a single string consisting of lowercase letter of English Alphabets."
      );
      setConstraint("2 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
    }
  }, [qnum]);

  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.container}>
      <div className={styles.question_number}>Question {qnum}</div>
      <div className={styles.constraints}>
        <div className={styles.big_input_box}>
          <div className={styles.input_constraint1}>Input :</div>
          <div className={styles.input_constraint2}>{input}</div>
        </div>
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
            className={styles.submit_button}
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
  );
};
export default Question2;
