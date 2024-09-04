import React from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export default function SignupForm({setIsloggedIn})
{  const navigate=useNavigate();

    
    const[signData,setSignData] =useState({firstName:"",lastName:"",Address:"",createPassword:"",confirmPassword:""})
      
    
   const[password,setPassword] =useState(false);


   function changeHandler(event)
 {
     setSignData((prevData)=>(
        {   ...prevData,
           [event.target.name] : event.target.value
        }
     ))
 }

 function submitHandler(event)  
    {  
             event.preventDefault();
             if(signData.createPassword != signData.confirmPassword)
                {
                    toast.error("passwaords dont match")
                    return;
                }
                setIsloggedIn(true);
                // toast.success("good");
                const Data ={
                    ...signData
                };
                console.log(Data);
                navigate("/");
    }
return (
    <div className="flex flex-col items-center max-h-screen py-3">

      <div className="flex flex-row justify-center mr-24 gap-x-7 mb-5 ">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Student</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Instructor</button>
      </div>

      <form onSubmit={submitHandler} className="w-full max-w-lg flex flex-col gap-y-6">
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-black">
              First Name <sup className="text-pink-800">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter first name"
              value={signData.firstName}
              onChange={changeHandler}
              name="firstName"
              className="w-full rounded-[0.5rem]  bg-yellow-200 p-[12px] text-richblack-5"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />
          </label>
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-800">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter last name"
              value={signData.lastName}
              onChange={changeHandler}
              name="lastName"
              className="w-full rounded-[0.5rem] bg-yellow-200 p-[12px] text-richblack-5"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />
          </label>
        </div>

        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-800">*</sup>
          </p>
          <input
            type="text"
            required
            placeholder="Enter Email Address"
            value={signData.Address}
            onChange={changeHandler}
            name="Address"
            className="w-full rounded-[0.5rem]  bg-yellow-200 p-[12px] text-richblack-5"
            style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
          />
        </label>

        <div className="flex gap-x-4">
          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-800">*</sup>
            </p>
            <input
              type={password ? "text" : "password"}
              required
              placeholder="Create Password"
              value={signData.createPassword}
              onChange={changeHandler}
              name="createPassword"
              className="w-full rounded-[0.5rem]  bg-yellow-200 p-[12px] pr-12 text-richblack-5"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />
            <span
              onClick={() => setPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {password ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>

          <label className="relative w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-800">*</sup>
            </p>
            <input
              type={password ? "text" : "password"}
              required
              placeholder="Confirm Password"
              value={signData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              className="w-full rounded-[0.5rem]  bg-yellow-200 p-[12px] pr-12 text-richblack-5"
              style={{ boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)" }}
            />
            <span
              onClick={() => setPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {password ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-yellow-100 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
    




