import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import {NavbarLinks} from"../../../data/navbar-links"
import { Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-black bg-slate-100">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        <div className="text-3xl flex gap-0 ml-4 sm:ml-11">
          <b>CODE</b>
          <HighlightText text={"Hive"} />
        </div>
        <nav className="flex flex-row justify-center gap-3">
          <ul className="flex flex-row gap-x-3 items-center mr-[20vh] sm:mr-[60vh]">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={link?.path}>
                    <p className="text-black">{link.title}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Link to="/login">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[8px] py-[4px] sm:px-[12px] sm:py-[8px] text-black">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[8px] py-[4px] sm:px-[12px] sm:py-[8px] text-black">
                Sign up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

