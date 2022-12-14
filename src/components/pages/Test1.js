import React, {useState, useEffect} from 'react'
import { useGlobalContext } from '../Context'
import {useNavigate} from 'react-router-dom'

const Test1 = () => {
 const [timerCount, setTimercount] = useState(true);
 const {quiz1, timer, score, setScore, onClickReset} = useGlobalContext()
 const navigate = useNavigate()
const disabled = () => {
  if (timer === "00:00:00") {
    setTimercount(false);
    navigate("/result");
  }
};

const onSubmit = (answer) => {
  if (answer === 'c' ) {
     setScore(score + 1);
  } 
 };

useEffect(() => {
disabled();
})

 const onSubmitForm = (e) => {
  e.preventDefault()
  navigate('/test/2')
  onClickReset()
 } 

 
  return (
    <div>
      <p>{timer}</p>
      {quiz1.map((quiz) => (
        <div>
          {timerCount && (
            <div>
              <form key={quiz.id} onSubmit={onSubmitForm}>
                <p>{quiz.question}</p>
                <input
                  type="radio"
                  id="question1"
                  name="quizQuestion2"
                  onClick={() => onSubmit("a")}
                />
                <label htmlFor="question1" onClick={() => onSubmit("a")}>
                  {quiz.choices.a}
                </label>
                <input
                  type="radio"
                  id="question2"
                  name="quizQuestion2"
                  onClick={() => onSubmit("b")}
                />
                <label htmlFor="question2" onClick={() => onSubmit("b")}>
                  {quiz.choices.b}
                </label>
                <input
                  type="radio"
                  id="question3"
                  name="quizQuestion2"
                  onClick={() => onSubmit("c")}
                />
                <label htmlFor="question3" onClick={() => onSubmit("c")}>
                  {quiz.choices.c}
                </label>
                <input
                  type="radio"
                  id="question4"
                  name="quizQuestion2"
                  onClick={() => onSubmit("d")}
                />
                <label htmlFor="question4" onClick={() => onSubmit("d")}>
                  {quiz.choices.d}
                </label>

                <button type="submit">submit</button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Test1