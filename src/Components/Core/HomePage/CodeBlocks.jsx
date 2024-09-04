import React from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    
    <div className={` my-24 flex ${position} mt-20 flex-col items-center lg:gap-8 gap-10 ml-11`}>

      {/* Section 1  */}
      <div className= "pl-11 w-[150%] lg:w-[140%] flex flex-col items-center gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[118%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex  items-start gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>
      </div>
      
      )
      }

      export default CodeBlocks;