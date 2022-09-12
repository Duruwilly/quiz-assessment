import React from 'react'
import { useGlobalContext } from '../Context'

const Result = () => {
 const {userName, score, QuizData} = useGlobalContext()
  return (
    <div>
     <h1>Total Result</h1>
     <p>{userName}, you got {score} out of {QuizData.length} correctly</p>
    </div>
  )
}

export default Result