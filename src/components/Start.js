import React from "react";
import logo from "../images/logo1.png";
import tree from "../images/pic2.png";
import {BiRotateLeft } from 'react-icons/bi'

function Start() {
  return (
    <div className="overflow-visible bg-[#f2efe5] flex justify-between mt-8">
      {/* Mount ai is a website that seeks to highlight various ai
images on the net.
design comes from : https://cdn.dribbble.com/users/98151/screenshots/20145514/downloads/House-and-Trees-6.png */}
      {/* Section one and section two */}
      <div className="leftsection w-1/3 ml-8 border-dark-200">
        <div>
          {/* logo */}
          <a href="#" ><img src={logo} alt="" className="w-2/4" /></a>

          {/* fancy text */}
          <div className="fancy-text w-1/1 text-[3rem] ml-6 m-20 ">
            <p style={{fontFamily: 'Serif'}}>Abstract Images Illustrations & Generation</p>
            <div className="next-linesmall text-base font-semibold m-2 mb-2 items-center">
            <p>
              We use technologies such as machine learning & neural networks to
              generate our amazing art. Leverage the power of AI
            </p>
          </div>
          <div className="ending-lines m-2 mt-6">
            <button className="gen-new-illusts 
             bg-orange-400 rounded-full font-bold text-[10px] p-2
              items-center justify-center flex">
             <BiRotateLeft className="mr "/><a href="#">GENERATE NEW ILLUSTRATION</a></button>
          </div>
          </div>
          
        </div>
      </div>
      {/*/*end of left*/}
      {/* right section */}
      <div className="rightsection w-2/3 mr-8">
        {/* nav bar */}
        <div className="Nav-bar w-1/1 flex justify-around text-sm font-bold  pt-4">
            <div classNme="div-1 ">
            <ul className="flex">
                <li ><a href="#about"></a>About</li>
                <li className="ml-6 text-black active:text-orange-400"><a href="#">Playground</a></li>
                <li className="ml-6"><a href="#">Gallery</a></li>
            </ul></div>
            <div className="login-request">
                <ul className="flex">
                    <li className="mr-6"><a href="#">Login</a></li>
                    <li><button><a href="#demo">Request Demo</a></button></li>
                </ul>
            </div>
        </div>

        <div className="">
            <img alt='' src={tree} className='p-8 w-full' />
        </div>
      </div>
    </div>
  );
}

export default Start;
