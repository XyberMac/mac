import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";

export default function CreativeHero() {
  return (
    <div  id="hero" className='w-full max-[940px]:pt-0 min-h-[100vh] flex relative max-[940px]:flex-col text-purple-200 pt-[90px] overflow-hidden'>
        <img src="/bg.jpg"  alt="" className="absolute z-[-1] w-full min-h-[90vh] lg:h-full" />
      <div className="absolute top-5 right-7 flex w-[400px] items-center justify-evenly">
        <a href="/" className='font-bold border-2 w-[150px] grid content-center h-[50px] text-center border-white text-white'>Home</a>
        <a href="/dashboard" className='font-bold border-2 w-[150px] grid content-center h-[50px] text-center border-[springgreen] text-[springgreen]'>Dashboard</a>
      </div>
      <div className="h-[70vh] w-350px text-sm text-nowrap max-[940px]:hidden max-[940px]:top-0 max-[940px]:left-0">
        <h1 className="font-bold m-3">Tech Rehalm</h1>
        <div className="flex flex-col h-[70%] items-center justify-around w-full mt-[120%]">
          <a href="/studio/#hero"><div className="bg-gradient-to-t from-[springgreen] to-purple-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/studio/#stack"><div className="bg-gradient-to-t from-[springgreen] to-purple-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/studio/#services"><div className="bg-gradient-to-t from-[springgreen] to-purple-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/studio/#"><div className="bg-gradient-to-t from-[springgreen] to-purple-500 rounded-[50%]  w-[20px] h-[20px] transition duration-500 hover:scale-125 "/></a>
          <a href="/studio/#footer" ><FaAnglesDown className="bg-gradient-to-t from-[springgreen] to-purple-500 rounded-[50%]  w-[40px] h-[40px]  text-center font-bold text-xl bg-clip-text transition duration-500 hover:scale-125 text-[springgreen]"/></a>
        </div>
      </div>
      <div className="flex flex-col text-purple-200 w-full py-[100px] px-8">
        <h6 className="text-sm font-bold ml-3">Wellcome to my</h6>
        <h1 className="text-[400%] font-bold max-[480px]:text-[200%]">Creative <br /><span className="text-[springgreen]">Studio</span></h1>
        <p className='w-full text-wrap mt-5 font-semibold max-[480px]:text-sm'>I offer several tech services including front-end and back-end website development, creating deskop applications with python PyQt framework and a junior ethical hacker.</p>
        <a href="/studio/#stack" className='w-[200px] border-2 cursor-pointer border-[springgreen] h-[50px] font-bold transition duration-500 backdrop-blur-md hover:scale-105 mt-8 text-[springgreen] grid content-center' target="_blank">
        <button >Take a tour</button></a>
      </div>
      <div className="lg:w-[70%] min-h-[70vh] max-[940px]:w-full backdrop-blur-lg flex flex-col items-center justify-center mr-[100px]">
        <h1 className="text-[20px] font-bold mb-[30px] max-[480px]:text-center max-[480px]:p-3">I create websites with latest tranding UI frameworks</h1>
      <iframe className='w-full max-[940px]:w-[60%] h-[40%] rounded-lg max-[940px]:h-[300px] max-[480px]:w-[90%]'  src="https://www.youtube.com/embed/sibm_ef2m4c?si=L12k2S2HZML5mUTN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}
