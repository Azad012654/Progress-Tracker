import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email,setEmail]=useState('');
const [password,setPassword]=useState();
 
const Admin_login = async () => {
  alert('Hello')
  try{
  const response = await fetch('http://127.0.0.1:8080/signin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)

  }).then(()=>navigate('/admin'))
  console.log("Signup Check"+response)
} catch(error){
  console.log(error)
}
}

console.log(email+""+password)
  return (
    <>
    <div className='form'>
      <div className='loginbox'>
    <form action="#">
    <h3>Admin Log In</h3>
            <div className="input-boxes">
                
              <div className="input-box">
                <label htmlFor="name">Username:<br/>
                <input type="text" onChange={(event)=> setEmail(event.target.value)} className="signup_input-boxes" name='Username' placeholder="Enter username" required/>
                </label>
              </div>
              <div className="input-box">
              <label htmlFor="password">Password:<br/>
                <input type="password" className="signup_input-boxes" name='password' onChange={(event)=> setPassword(event.target.value)} placeholder="Enter password" required/>
                </label>
              </div>
              <div className="button input-box">
                <button type="button" className="submit_btn" value="Log In" onClick={Admin_login}>Log In</button>
              </div>
            </div>

      </form>
      </div>
      </div>
      </>
  )
}

export default Login
