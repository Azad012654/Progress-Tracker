import React, { useState } from 'react'
import '../UserPage.css';
import Range from './Range';

const UserPage = () => {
    const [status_code,setStatus_code]=useState(false)
    let task_percentage=0;
    function updateTextInput(event) {
        task_percentage=event.target.value;
        console.log(event.target.value);
        // document.getElementById('taskprogress').value=val;
        // range=val; 
      }
      function submitHandler(){
        console.log(status_code)

        setStatus_code(true)
         console.log("Add Task Btn Working Fine")

      }
  return (
    <div>
        {/* <h3>{username}</h3> */}
        <h3 id="user_profile_name">Hi Charan!</h3> 
        <form className='userpage_form'>
        <div className="input-box">
                <label htmlFor="name" className='user_project_details'>ProjectName:<br/>
                <input type="text" className="signup_input-boxes" name='ProjectName'  required/>
                </label>
              </div>
        <div className="input-box">
                <label htmlFor="name" className='user_project_details'>Progress:<br/>
                <textarea name='Progress' defaultValue=""/>
                </label>
              </div>
        <div className="input-box">
                <label htmlFor="name" className='user_project_details'>No of Days:<br/>
                <input type="number" className="signup_input-boxes" name='No_of_days' required/>
                </label>
              </div>
              <div className="button input-box">
                <button type="button" className="submit_btn" value="Add Task" onClick={submitHandler}>Add Task</button>
              </div>
              {/* <Range /> */}
              {
                status_code ? <div className='card'><h4>Demo Card</h4>
                <h5>Project Name</h5>
                <p>Project Progress</p>
                <Range />
                <div className="button input-box">
                <button type="button" className="submit_btn" value="Add Task" onClick={submitHandler}>Update Task</button>
              </div></div>:null
              }
              </form>
             
    </div>
  )
}

export default UserPage
