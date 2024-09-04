import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUsForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        Message: "",
       
      });
    
      // console.log(formData);
    
      function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prevFormData) => {
          // console.log(prevFormData);
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
          };
        });
      }
    
      function submitHandler(event)
      {
        event.preventDefault();
        console.log("Form Give DAta")
        console.log(formData);
      }
       
      const nav = useNavigate();
      function clickHandler()
      {
         nav("/");
      }
    
      return (
        <div  className="flex flex-row justify-center ">
          <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter First name"
                // onChange={changeFirstNameHandler}
                onChange={changeHandler}
                name="firstName"
                value={formData.firstName}
                className='w-72 h-10'
              />
    
              <br />
              <br />
              <br />
        
              <input
                type="text"
                placeholder="Enter Last name"
                // onChange={changeLastNameHandler}
                onChange={changeHandler}
                name="lastName"
                value={formData.lastName}
                className='w-72 h-10'
              />
    
              <br />
              <br />
              <br />
              <input
                type="email"
                placeholder="Enter Email"
                onChange={changeHandler}
                name="email"
                value={formData.email}
                className='w-72 h-10'
              />
    
              <br />
              <br />
              <br />
            
              <input
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your Message"
                onChange={changeHandler}
                value={formData.value}
                className='w-72 h-10'
              />
    
              <br />
              <br />
              <br />
          
    
            <input  className="ml-28"onClick={clickHandler} type="submit" value="Submit" />
          </form>
        </div>
      )    
 
}

export default ContactUsForm


