
import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';
import HighlightText from '../Components/Core/HomePage/HighlightText';
import CTAButton from '../Components/Core/HomePage/Button';
import CodeBlocks from '../Components/Core/HomePage/CodeBlocks';
import Banner from "../assets/Images/banner.mp4";
import TimelineSection from '../Components/Core/HomePage/TimelineSection';
import LearningLanguageSection from '../Components/Core/HomePage/LearningLanguageSection';
import InstructorSection from '../Components/Core/HomePage/InstructorSection';
import Js from '../assets/Images/js.png';
import Reactt from "../assets/Images/react.png";
import Web from "../assets/Images/web.png";
import Footer from '../Components/Core/Common/Footer';


function Hero() {
  return (
    <div>
    <div className=' h-full bg-gradient-to-r from-emerald-200 from-30% via-sky-200 via-50% to-purple-200 to-90%'>

      <div className='flex flex-col justify-center items-center'>
      <Link to={"/signup"}>
      <div className=' group p-1 mt-16 mx-auto rounded-full bg-emerald-400 font-bold transition-all duration-200 hover: scale-95 w-fit max-w-maxContent '>
                <div className=' flex flex-row items-center justify-center gap-2 rounded-full px-10 py-[5px]  transition-all duration-200 group-hover:bg-richblack-900 '>
              <p>Become an Instructor</p><FaArrowRight/>
                </div>
            </div>
            </Link>


            <div className='text-center text-3xl md:text-4xl font-semibold  text-gray-700'>  
         Empower Your Future With Coding Skills
           </div>

      <div className='mt-4 w-[90%] g-5 text-left md:text-center text-sm md:text-lg font-bold text-gray-800'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
           </div>
     
           </div>

           <div className="mt-8 flex flex-row justify-center gap-7">
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>


<div className='flex flex-row py-8'>
        <div>
          <CodeBlocks 
             position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your
                <HighlightText text={"coding potential"} /> with our online
                courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
        //     codeColor={"text-yellow-25"}
        //     codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
        //     backgroundGradient={<div className="codeblock1 absolute"></div>}

          />
          </div>



           <div className='flex flex-row items-center justify-end mr-11 w-9/12'>
           <img
        className="title-img "
        src="https://codess.cafe/images/title-logo.png"
        alt="iphone-mockup"

      />
        </div>

       </div>
         
        </div>

<div className='bg-gray-300 h-[65vh] flex flex-row justify-center items-center'>
<div className=" shadow-[10px_-5px_30px_-5px] shadow-gray-300 ">
          <video
            className="w-9/12 ml-11"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

      
      <div className="w-[100%] text-4xl font-semibold lg:w-[90%] ">
                Start
                <HighlightText text={"coding in seconds"} />
                <p className='text-2xl'> "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."</p>
              
              
      </div>

      
</div>

<TimelineSection/>

<LearningLanguageSection/>

<InstructorSection/>

      <div className='h-[55vh]'>
       <div className="text-4xl font-semibold text-center my-10">
          Unlock the
          <HighlightText text={"Power of Code"} />
          <p className="text-center text-richblack-300 text-lg font-semibold mt-1">
            Learn to Build Anything You Can Imagine
          </p>
        </div>
       
      
        <div className="flex flex-wrap justify-around">
  <img
    src={Js}
    alt="JavaScript"
    className="w-2/6 lg:w-1/6 md:w-1/5 sm:w-1/3 hover:scale-110 transition-transform duration-300"
  />
  <img
    src={Reactt}
    alt="React"
    className="w-1/4 lg:w-1/6 md:w-1/5 sm:w-1/3 hover:scale-110 transition-transform duration-300"
  />
  <img
    src={Web}
    alt="Web Development"
    className="w-1/4 lg:w-1/6 md:w-1/5 sm:w-1/3 hover:scale-110 transition-transform duration-300"
  />
</div>


<div className="homepage_bg h-[250px] lg:h-[350px]">
  {/* Explore Full Category Section */}
  <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-center lg:justify-between">
    <div className="lg:h-[150px] h-[100px]"></div>
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 text-black lg:mt-8 mt-4">
      <CTAButton active={true} linkto={"catalog"}>
        <div className="flex items-center gap-2">
          Explore Full Catalog
          <FaArrowRight />
        </div>
      </CTAButton>
      <CTAButton active={false} linkto={"login"}>
        Learn More
      </CTAButton>
    </div>
  </div>
</div>
<div className="mt-24 lg:mt-36">
  <Footer />
</div>
</div>
</div>
  );
}

export default Hero;


