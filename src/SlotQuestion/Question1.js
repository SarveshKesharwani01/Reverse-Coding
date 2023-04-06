import { useRef, useState, React } from "react";
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
const Question = () => {
  const [answer, setAnswer] = useState(null);
  const [warning, setWarning] = useState(false);
  const [value, setValue] = useState("");
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

  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <div></div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputref}
        ></input>
        <button type="submit" onClick={logic}>
          Submit
        </button>
        <div>{warning ? "Empty input" : ""}</div>
      </form>
      <div>{answer}</div>
    </div>
  );
};
export default Question;
