import React from 'react'
import { formattedDate } from "../Utils/dateFormatter"
import IconBtn from "../Components/Core/Common/IconBtn"
import { RiEditBoxLine } from "react-icons/ri"

function Dashboard() {

  return (
    <div className='bg-purple-200 h-screen'>
        <div>
        <h1 className="mb-14 text-3xl font-medium flex flex-row justify-center">
        My Profile
      </h1>
        </div>
        <div className='px-16'>
        <div className="flex items-center justify-between rounded-md border-[1px] border-black  p-4 px-32">
        <div className="flex items-center gap-x-4">
         
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
             Gauri Behl
            </p>
            <p className="text-sm text-richblack-300">gauribehl02@gmail.com</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
         
        //   onclick={() => {
        //     navigate("/dashboard/settings")
        //   }}
        ></IconBtn>
   </div>

   <div className="flex w-full items-center justify-between rounded-md border-[1px] border-black mt-11  p-4 px-32">
          <p className="text-lg font-semibold text-richblack-5">About Yourself</p>

          <IconBtn
            text="Edit"
            // onclick={() => {
            //   navigate("/dashboard/settings")
            // }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        </div>
         
         <div className='px-16'>
         <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-black bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between px-20">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconBtn
            text="Edit"
            // onclick={() => {
            //   navigate("/dashboard/settings")
            // }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
           Gauri
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
               gauribehl02@gmail.com
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              Female
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
             Behl
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
               8976544567
              </p>
            </div>
             <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
               12 October 2003
              </p>
            </div> 
          </div>
        </div>
      </div>

         </div>
       

       
   </div>
  )
}




export default Dashboard