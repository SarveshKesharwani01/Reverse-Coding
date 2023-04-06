import { forwardRef, useRef, useState } from "react";
import { Calculate1 } from "../Logic/S1Q1";
import { Calculate2 } from "../Logic/S1Q2";
import React from "react";
const Question = () => {
  const [answer, setAnswer] = useState(null);
  const [warning, setWarning] = useState(false);
  const [value, setValue] = useState("");
  const inputref = useRef(null);
  const path = window.location.pathname;
  const slot = path.substring(12, 13);
  const qnum = path.substring(32);
  // console.log(slot, qnum);
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
      setAnswer(Calculate1(val));
    } else if (qnum === "2") {
      setAnswer(Calculate2(val));
    } else if (qnum === "3") {
      let output = "";
      for (let i = 0; i < val.length; i++) {
        if (val[i] === "1") output += "0";
        else output += "1";
      }
      function reverseString(str) {
        return str.split("").reverse().join("");
      }
      output = reverseString(output);
      setAnswer(output);
    } else if (qnum === "4") {
    } else if (qnum === "5") {
    }
  };
  // question 1
  const handleChange = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setValue(result);
  };
  // question 2
  const handleChange1 = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, "");
    setValue(result);
  };

  // question 3
  const handleChange2 = (e) => {
    const regex = /^[0-1\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setValue(e.target.value);
    }
  };
  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        {qnum === "1" ? (
          <input
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputref}
          ></input>
        ) : (
          <></>
        )}
        {qnum === "2" ? (
          <input
            type="text"
            value={value}
            onChange={handleChange1}
            ref={inputref}
          ></input>
        ) : (
          <></>
        )}
        {qnum === "3" ? (
          <input
            type="text"
            value={value}
            onChange={handleChange2}
            ref={inputref}
          ></input>
        ) : (
          <></>
        )}
        {qnum === "4" ? <input type="text"></input> : <></>}
        {qnum === "5" ? <></> : <></>}
        {warning ? "Empty input" : ""}
        <button type="submit" onClick={logic}>
          Submit
        </button>
      </form>
      <div>{answer}</div>
    </div>
  );
};
export default Question;
