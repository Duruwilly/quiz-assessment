import React, { useState, useContext, createContext, useEffect, useRef } from "react";
import { QuizData } from "./QuizData";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
 const Ref = useRef(null);

  const [score, setScore] = useState(0);
  const [quiz1, setQuiz1] = useState([QuizData[0]]);
  const [quiz2, setQuiz2] = useState([QuizData[1]]);
  const [quiz3, setQuiz3] = useState([QuizData[2]]);
  const [quiz4, setQuiz4] = useState([QuizData[3]]);
  const [quiz5, setQuiz5] = useState([QuizData[4]]);
  const [userName, setuserName] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(false)

  const onChange = (e) => {
   setuserName(e.target.value)
  }

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:01:30");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 90);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, [quiz1]);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <QuizContext.Provider
    value={{
     userName,
     onChange,
     quiz1,
     quiz2,
     quiz3,
     quiz4,
     quiz5,
     timer,
     score,
     QuizData,
     btnDisabled,
     setBtnDisabled,
     setScore,
     getDeadTime,
     clearTimer,
     onClickReset
    }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useGlobalContext = () => useContext(QuizContext);
