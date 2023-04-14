import { useRef, useState, React, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";

import { Q3 } from "../Q/Q3";
import { Q5 } from "../Q/Q5";
import { Q12 } from "../Q/Q12";
import { Q16 } from "../Q/Q16";
import { Q23 } from "../Q/Q23";
import { CheckIsInteger } from "../Logic/CheckIsInteger";
import { CheckIsString } from "../Logic/CheckIsString";
import { CheckIsBinaryString } from "../Logic/CheckIsBinaryString";
import { CheckIsIntegerArray } from "../Logic/CheckIsIntegerArray";
import { CheckIsTwoInteger } from "../Logic/CheckIsTwoInteger";
import styles from "../styles/question.module.css";
const Question = () => {
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
      const boolAnswer = CheckIsBinaryString(val);
      if (boolAnswer !== null) setAnswer(Q3(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "2") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q5(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "3") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q12(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "4") {
      const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q16(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "5") {
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q23(boolAnswer));
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
      setInput("A single string S consisting of '0's and '1's");
      setOutput("Print a single string consisting '0's and '1's");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "2") {
      setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("4 ≤ n ≤ 1e5 \n n % 2 == 0 \n0 ≤ A[i] ≤ 1e9, for all i ");
    } else if (qnum === "3") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single string");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "4") {
      setInput("A single line consisting of an integer A");
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("2 ≤ A ≤ 1e9");
    } else if (qnum === "5") {
      setInput(
        "A single line consisting of two space-separated integers A and B"
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ A, B ≤ 1e9");
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
export default Question;
