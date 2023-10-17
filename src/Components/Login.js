import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();
  const payload = {
    email : 'email',
    password : 'passsword'
  }

  const logInFunc = async () => {
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


  return (
    <>
    <div className='form'>
      <div className='loginbox'>
    <form action="#">
    <h3>Log In</h3>
            <div class="input-boxes">
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" onChange={(event) => { setEmail(event.target.value)}} class="signup_input-boxes" name='Username' placeholder="Enter username" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" className="signup_input-boxes" onChange={(event) => { setPassword(event.target.value)}} name='password' placeholder="Enter password" required/>
                </label>
              </div>
              <div class="button input-box">
                <input type="submit" className="submit_btn" onClick={logInFunc} value="Log In"/>
              </div>
            </div>

      </form>
      </div>
      </div>
      </>
  )
}

export default Login
