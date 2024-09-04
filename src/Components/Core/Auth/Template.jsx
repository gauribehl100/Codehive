import React from "react";
import { useSelector } from "react-redux";

import LoginForm from "../../../Components/Core/Auth/LoginForm";
import SignupForm from "../../../Components/Core/Auth/SignupForm";


function Template({ title, description1, description2, image, formType }) {
    const { loading } = useSelector((state) => state.auth)

  return (
    <div className="grid place-items-center bg-gradient-to-bl from-emerald-200 from-30% via-sky-200 via-50% to-purple-200 to-90%">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto h-screen flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
          <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-black">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
              <span className="text-black">{description1}</span>{" "}
              <span className="font-edu-sa font-bold italic text-yellow-500">
                {description2}
              </span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
          <img
              src={image}
              alt="Students"
              width={558}
              height={504}
              loading="lazy"
              className="absolute -top-4 right-4 z-10 mt-36 mr-11"
            />
        </div>
      )}
    </div>
  )
}

export default Template

