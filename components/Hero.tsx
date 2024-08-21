import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import { FlipWord } from './Title';

export default function Hero() {
  
  return (
    <div id='hero' className='w-full flex flex-col relative overflow-hidden'>
       <img src="/bg2.jpg"  alt="" className="absolute z-[-1] w-full min-h-[100vh] h-full" />
    <div  id="hero" className='w-full  min-h-[100vh] flex items-center justify-center  text-purple-200 mb-0 max-[930px]:flex-col'>
      <div className="h-full  text-sm text-nowrap max-[930px]:absolute max-[930px]:top-0 max-[930px]:left-0 max-[930px]:w-[200px] max-[930px]:h-[100vh] ">
        <h1 className="font-bold m-3">Tech Rehalm</h1>
        <div className="flex flex-col h-[400px]  max-[930px]:mt-[50%] max-[930px]: items-center justify-around w-full mt-[120%] max-[600px]:hidden">
          <a href="/#hero"><div className="bg-gradient-to-t from-white to-fuchsia-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/#services"><div className="bg-gradient-to-t from-white to-fuchsia-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/#projects"><div className="bg-gradient-to-t from-white to-fuchsia-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/#contact"><div className="bg-gradient-to-t from-white to-fuchsia-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/#footer" ><FaAnglesDown className="bg-gradient-to-t from-white to-fuchsia-500 rounded-[50%]  w-[40px] h-[40px]  text-center font-bold text-xl bg-clip-text transition duration-500 hover:scale-125 text-fuchsia-500 overflow-hidden"/></a>
        </div>
      </div>
      <div className="flex flex-col max-[930px]:ml-[45%] max-[600px]:ml-[10%] text-purple-300 w-full py-[100px] px-8  max-[330px]:pb-0  min-h-[100vh] ">
        <h6 className="text-sm font-bold ml-3">A fullstack web developer</h6>
        <h1 className="text-[400%] font-bold text-fuchsia-500 max-[600px]:text-[200%]">Hi, i'm <br />Makhosi</h1>
        <p className='w-[450px] text-wrap mt-5 font-semibold max-[615px]:text-sm max-[330px]:w-full max-[330px]:font-extralight max-[600px]:w-[90%]' >Whether you’re a small business looking to create your online presence, a startup aiming to innovate, or an established company needing a digital refresh, you’ve come to the right place!.Sing up and to join my creative studio for free, exploring more tect services that i offer</p>
        <div className=" flex w-[400px] items-center justify-evenly lg:mt-[100px] md:mt-[80px] sm:mt-[50px] mt-[50px] max-[430px]:flex-col max-[430px]:justify-center max-[430px]:gap-6 max-[430px]:mb-5 max-[600px]:w-full">
        <a href="/studio" className='font-bold border-2 w-[150px] grid content-center h-[50px] text-center border-fuchsia-500 text-fuchsia-500 transitions duration-500 hover:scale-105'>Studio</a>
        <a href="/#contact" className='font-bold border-2 w-[150px] grid content-center h-[50px] text-center border-[springgreen] text-[springgreen] transitions duration-500 hover:scale-105'>Hire Me</a>
      </div>
      </div>
      <div className="w-[700px] max-[930px]:w-[100%] max-[930px]:mt-8 max-[930px]:mb-6 lg:mt-9  max-[930px]:text-center items-center  max-h-[100vh] flex flex-col  justify-center mr-[100px] max-[930px]:mr-0 ">
        <h1 className="text-[50px] font-bold mb-[30px] text-purple-100 w-[100%] lg:text-2xl" ><FlipWord words={["Aceternity", "Shadcn", "NextUI", "TailwindUI"]} title='I create modern websites with'/></h1>
        
      <img src="/pic.png" className='rounded-xl shadow-2xl max-[930px]:w-[70%] shadow-[aqua] ' alt="" />
      </div>
    </div>
    </div>
  )
}
