import React, { useState } from "react";
import './modal.css'

const Modal = ({isOpen,setOpen}) => {
  const[formData, setFormData] = useState({
    username:'',
    email:'',
    dob:'',
    phone:''
  })
  if(!isOpen){
    return null
  }
  const submitForm = (e) =>{
    e.preventDefault()
    const {dob,phone} = formData;
    if(phone.length !== 10){
      alert('Invalid phone number. Please enter a 10-digit phone number.')
    }else
    if(new Date(dob) > new Date()){
      alert('Invalid date of birth. Date of birth can not be in the future.')
    }else{
    alert('Form submitted successfully')
    setOpen(false)
    }
  }
  const handleChange = (e) =>{
    const{name,value} = e.target
    setFormData(prevValue => ({...prevValue,[name]:value}))
  }
  return (
    <div className="modal" onClick={() => setOpen(false)}> 
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={submitForm}>
          <h2>Fill Details</h2>
          <label>Username:
          <input type="text" id='username' name='username' onChange={handleChange} required />
          </label>
          <label>Email Address:
          <input type="text" id='email' name='email' onInvalid={(e) => e.currentTarget.setCustomValidity("Please include an '@' in the email address. "+formData.email+" is missing an '@'.")} onChange={handleChange} required />
          </label>
          <label>Phone Number:
          <input type="text" id='phone' name='phone' onChange={handleChange} required />
          </label>
          <label>Date of Birth:
          <input type="date" id='dob' name='dob' onChange={handleChange} required />
          </label>
         <button type="submit" className="btn" style={{margin:"10px auto"}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
