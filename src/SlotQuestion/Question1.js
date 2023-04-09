import { useRef, useState, React, useEffect } from "react";
// import { ReactDOM } from "react-dom/client";
import { Q1 } from "../Q/Q1";
import { Q2 } from "../Q/Q2";
import { Q3 } from "../Q/Q3";
import { Q4 } from "../Q/Q4";
import { Q5 } from "../Q/Q5";
import { Q6 } from "../Q/Q6";
import { Q7 } from "../Q/Q7";
import { Q8 } from "../Q/Q8";
import { Q9 } from "../Q/Q9";
import { Q10 } from "../Q/Q10";
import { Q11 } from "../Q/Q11";
import { Q12 } from "../Q/Q12";
import { Q13 } from "../Q/Q13";
import { Q14 } from "../Q/Q14";
import { Q15 } from "../Q/Q15";
import { Q16 } from "../Q/Q16";
import { Q17 } from "../Q/Q17";
import { Q18 } from "../Q/Q18";
import { Q19 } from "../Q/Q19";
import { Q20 } from "../Q/Q20";
import { CheckIsInteger } from "../Logic/CheckIsInteger";
import { CheckIsString } from "../Logic/CheckIsString";
import { CheckIsBinaryString } from "../Logic/CheckIsBinaryString";
import { CheckIsIntegerArray } from "../Logic/CheckIsIntegerArray";
import { CheckIsTwoInteger } from "../Logic/CheckIsTwoInteger";
import { CheckIsThreeInteger } from "../Logic/CheckIsThreeInteger";
import { CheckIsNumberString } from "../Logic/CheckIsNumberString";
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
      const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q1(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "2") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q2(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "3") {
      const boolAnswer = CheckIsBinaryString(val);
      if (boolAnswer !== null) setAnswer(Q3(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "4") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q4(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "5") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q5(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "6") {
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q6(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "7") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q7(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "8") {
      const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q8(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "9") {
      const boolAnswer = CheckIsIntegerArray(val);
      if (boolAnswer !== null) setAnswer(Q9(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "10") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q10(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "11") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q11(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "12") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q12(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "13") {
      const boolAnswer = CheckIsThreeInteger(val);
      if (boolAnswer !== null) setAnswer(Q13(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "14") {
      const boolAnswer = CheckIsNumberString(val);
      if (boolAnswer !== null) setAnswer(Q14(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "15") {
      const boolAnswer = CheckIsTwoInteger(val);
      if (boolAnswer !== null) setAnswer(Q15(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "16") {
      const boolAnswer = CheckIsInteger(val);
      if (boolAnswer !== null) setAnswer(Q16(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "17") {
      const boolAnswer = CheckIsThreeInteger(val);
      if (boolAnswer !== null) setAnswer(Q17(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "18") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q18(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "19") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q19(boolAnswer));
      else setAnswer(IP);
    } else if (qnum === "20") {
      const boolAnswer = CheckIsString(val);
      if (boolAnswer !== null) setAnswer(Q20(boolAnswer));
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
      setInput("A single line consists one integer N");
      setOutput(
        "Print a single string with characters ranging between '0' to '9'"
      );
      setConstraint("0 ≤ N ≤ 1e9");
    } else if (qnum === "2") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print 'YES' OR 'NO' ");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "3") {
      setInput("A single string S consisting of '0's and '1's");
      setOutput("Print a single string consisting '0's and '1's");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "4") {
      setInput(
        "A single line containing n+1 integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("1 ≤ n ≤ 1e5 \n 0 ≤ A[i] ≤ 1e9, for all i ");
    } else if (qnum === "5") {
      setInput(
        "A single line containing n+1 integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("2 ≤ n ≤ 1e5 \n n % 2 == 0 \n0 ≤ A[i] ≤ 1e9, for all i ");
    } else if (qnum === "6") {
      setInput("A single line consists of 2 integers A and B ");
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B ≤ 1e9");
    } else if (qnum === "7") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("0 ≤ |S| ≤ 1e5");
    } else if (qnum === "8") {
      setInput("A single line consists of an integer N");
      setOutput("Print a single integer");
      setConstraint("1 ≤ N ≤ 9000");
    } else if (qnum === "9") {
      setInput(
        "A single line containing n+1 integers, first integer will be size of the array A followed by array A of length n. "
      );
      setOutput("Print a single integer");
      setConstraint("2 ≤ n ≤ 1e5 \n0 ≤ A[i] ≤ 1e9, for all i");
    } else if (qnum === "10") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "11") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single string");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "12") {
      setInput(
        "A single string S consisting of lowercase letter of English Alphabets."
      );
      setOutput("Print a single string");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "13") {
      setInput("A single line consists of three integers A,B,C");
      setOutput("Print a single integer");
      setConstraint("0 ≤ A, B, C ≤ 1e9");
    } else if (qnum === "14") {
      setInput("A string S consisting of digits '0' to '9' ");
      setOutput("Print a single integer");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "15") {
      setInput("A single line consisting of two integers A and B");
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("0 ≤ A, B ≤ 1e9");
    } else if (qnum === "16") {
      setInput("A single line consisting of an integer A");
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("2 ≤ A ≤ 1e9");
    } else if (qnum === "17") {
      setInput("A single line consists of three integers A,B,C");
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("0 ≤ A, B, C ≤ 1e6");
    } else if (qnum === "18") {
      setInput(
        "A string S consisting of lowercase letter of English alphabet."
      );
      setOutput("Print 'YES' OR 'NO'");
      setConstraint("1 ≤ |S| ≤ 1e5");
    } else if (qnum === "19") {
    } else if (qnum === "20") {
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
          <div className={styles.input_constraint1}>INPUT :</div>
          <div className={styles.input_constraint2}>{input}</div>
        </div>
        <div className={styles.big_output_box}>
          <div className={styles.output_constraint1}>Output :</div>
          <div className={styles.output_constraint2}>{output}</div>
        </div>
        <div className={styles.big_input_title}>
          <div className={styles.input_title1}>Contraint :</div>
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
