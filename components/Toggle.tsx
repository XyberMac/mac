"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";



export default function Toggle() {
    const [visible, setVisible] = useState(false)
  return (
    <div className='w-full  text-purple-100'>
      <CiMenuBurger onClick={()=>{
        setVisible(!visible)
      }} className='w-[40px] h-[40px] font-bold text-white absolute top-2 left-3 hidden max-[810px]:block max-[810px]:fixed max-[810px]:top-2 max-[810px]:left-3 z-[4645636]'/>
      <div className={`flex items-center justify-evenly full max-[810px]:flex-col max-[810px]:w-[150px] max-[810px]:h-[100vh] max-[810px]:fixed max-[810px]:top-0 max-[810px]:left-0 max-[810px]:bg-[#100e1af0] max-[810px]:backdrop-blur-[50px] z-[464563] ${visible && "max-[810px]:translate-x-[-500px]"} transition duration-500 `}>
        <Link href="/#services" className="font-semibold hover:text-[springgreen] transition duration-500 hover:scale-110">Services</Link>
        <Link href="/#projects" className="font-semibold hover:text-[springgreen] transition duration-500 hover:scale-110">Projects</Link>
        <Link href="/#contact" className="font-semibold hover:text-[springgreen] transition duration-500 hover:scale-110">Contact</Link>
        <Link href="/studio" className="font-semibold hover:text-[springgreen] transition duration-500 hover:scale-110 text-fuchsia-500">Creative Studio</Link>
      </div>
    </div>
  )
}
