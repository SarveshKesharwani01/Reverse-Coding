import { useRef, useState, React, useEffect } from "react";
import { ReactDOM } from "react-dom/client";
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
      const boolAnswer = CheckIsString(val);
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
      setConstraint("Enter a non-negative integer 'N' \n 0<=N<=1e9 ");
    } else if (qnum === "2") {
      setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
    } else if (qnum === "3") {
      setConstraint("Enter a binary String 'B' \n 0<=|B|<=1e6");
    } else if (qnum === "4") {
      setConstraint(
        "Enter an non-negative integer array 'A' \n 1<=|A|<=1e5 \n 0<=|A[i]|<=1e9"
      );
    } else if (qnum === "5") {
      setConstraint(
        "Enter an non-negative even integer array 'A' \n 4<=|A|<=1e6 \n |A| % 2 = 0 \n 0<=A[i]<=1e9 "
      );
    } else if (qnum === "6") {
      setConstraint(
        "Enter two non-negative integers 'A' and 'B' \n 0<=A,B<=1e9"
      );
    } else if (qnum === "7") {
      setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
    } else if (qnum === "8") {
      setConstraint("Enter a positive integer 'N' \n 1<=N<=9000");
    } else if (qnum === "9") {
      setConstraint(
        "Enter an non-negative integer array 'A' \n 2<=|A|<=1e5 \n 0<=A[i]<=1e9"
      );
    } else if (qnum === "10") {
      setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
    } else if (qnum === "11") {
      setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
    } else if (qnum === "12") {
      setConstraint("Enter a string 'S' \n 0<=|S|<=1e6");
    } else if (qnum === "13") {
      setConstraint(
        "Enter three non-negative integers 'A', 'B', 'C' \n 0<=A,B,C<=1e9"
      );
    } else if (qnum === "14") {
      setConstraint(
        "Enter a string of digits 'S' \n 1<=|S|<=1e5 \n '0'<=S[i]<='9'"
      );
    } else if (qnum === "15") {
      setConstraint(
        "Enter two non-negative integers 'A' and 'B' \n 0<=A,B<=1e9"
      );
    } else if (qnum === "16") {
      setConstraint("Enter a non-negative integer 'N' \n 0<=N<=1e9 ");
    } else if (qnum === "17") {
    } else if (qnum === "18") {
    } else if (qnum === "19") {
    } else if (qnum === "20") {
    }
  }, [qnum]);

  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div>Question {qnum}</div>
      <form onSubmit={formSubmit}>
        <div className={styles.display_linebreak}>{constraint}</div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputref}
        ></input>
        <button type="submit" onClick={logic}>
          Submit
        </button>
        {/* <div>{warning ? "Empty input" : ""}</div> */}
      </form>
      <div className={styles.output}>{warning ? "EMPTY INPUT" : answer}</div>
    </div>
  );
};
export default Question;
