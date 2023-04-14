import { useRef, useState, React, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";

import { Q4 } from "../Q/Q4";
import { Q9 } from "../Q/Q9";
import { Q10 } from "../Q/Q10";
import { Q14 } from "../Q/Q14";
import { Q21 } from "../Q/Q21";
import { CheckIsString } from "../Logic/CheckIsString";
import { CheckIsBinaryString } from "../Logic/CheckIsBinaryString";
import { CheckIsIntegerArray } from "../Logic/CheckIsIntegerArray";
import { CheckIsNumberString } from "../Logic/CheckIsNumberString";
import styles from "../styles/question.module.css";

const Question3 = () => {
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
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q4(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "2") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q9(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "3") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q10(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "4") {
      const boolAnswer = CheckIsNumberString(val);
      if (boolAnswer !== null) setAnswer(Q14(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "5") {
      const boolAnswer = CheckIsBinaryString(val);
      if (boolAnswer !== null) setAnswer(Q21(boolAnswer));
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
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("1 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
    } else if (qnum === "2") {
      setInput(
        "A single line containing n+1 space-separated integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("2 ≤ n ≤ 1e5 \n0 ≤ A[i] ≤ 1e9, for all i");
    } else if (qnum === "3") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "4") {
      setInput("A string S consisting of digits '0' to '9' ");
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "5") {
      setInput("A single string S consisting of '0's and '1's");
      setOutput("Print a single string consisting '0's and '1's");
      setConstraint("1 ≤ |S| ≤ 1e5");
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
    </>
  );
};
export default Question3;
