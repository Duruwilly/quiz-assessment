import React from 'react'
import { useGlobalContext } from '../Context'

const Result = () => {
 const {userName, score} = useGlobalContext()
  return (
    <div>
     <h1>Total Result</h1>
     <p>{userName}, you got {score} out of 5 correctly</p>
    </div>
  )
}

export default Result