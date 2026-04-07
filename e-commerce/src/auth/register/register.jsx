import React from 'react'
import { Link } from 'react-router'

const register = () => {
  return (
   <>
    <div >
         Register
    </div>
    <span>Have an account? <a href="/login">Login</a>   </span>
    <span>Have an account from edu <Link to="/login">Login</Link></span>
    </>
  )
}

export default register
