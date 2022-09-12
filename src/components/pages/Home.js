import { useState } from 'react'
import { useGlobalContext } from '../Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {
 const { userName, onChange, onClickReset } = useGlobalContext()

 const navigate = useNavigate()

 const onSubmit = (e) => {
  e.preventDefault()
  navigate('/test/1')
  onClickReset()
 }
  return (
    <div>
     <form action="" className='form' onSubmit={onSubmit}>
      <label>Full Name: </label>
      <input type="text" value={userName} id='userName' name='userName' onChange={onChange} placeholder='Enter Full Name' />
      <button type='submit'>START</button>
     </form>
    </div>
  )
}

export default Home