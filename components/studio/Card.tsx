"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import React from 'react'

export default function Card() {
  return (
    <div className='w-[50%] h-full flex items-center justify-center'>
      <section className="w-[450px] relative h-[500px] flex items-center justify-center ">
        <div className="w-[200px] bg-gradient-to-r from-fuchsia-100 to-fuchsia-500 h-[200px] rounded-[50%] absolute top-2 left-7"></div>
        <div className="w-[200px] bg-gradient-to-r  from-fuchsia-500 to-fuchsia-100 h-[200px] rounded-[50%] absolute  bottom-9 right-1"></div>
        <div className="h-[225px] w-[395px] z-[100] relative">
            <div className="h-full w-full bg-[rgba(255,255,255,0.1)] rounded-[25px] backdrop-blur-[25px] shadow-md shadow-[rgba(0,0,0,0.25)] cursor-pointer absolute z-[1000] opacity-1 transition duration-500 hover:opacity-0 hover:translate-x-[180deg] ">
                <div className="flex items-center justify-between pt-4">
                    <div className="flex mx-2 items-center gap-2 font-semibold ">
                        <img src="/logo.png" className='w-[50px]' alt="" />
                        <div className="text-white font-semi-bold">Master Card</div>
                    </div>
                    <img src="/chip.png" className='w-[60px] mr-[12px]' alt="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col mt-[15px] ml-3">
                        <h5 className="font-semibold text-sm">Card Number</h5>
                        <h4 className="font-semibold text-lg ">8050 2030 3020 5040</h4>
                        <div className="text-md text-[17px] mt-[19px]">Prem Kumar Shahi</div>
                    </div>
                    <div className="flex flex-col m-2 justify-end h-[150px] pb-8">
                        <h6 className="text-lg">Valid Thru</h6>
                        <h5 className="font-semibold">05/28</h5>
                    </div>
                </div>
            </div>
            <div className="h-full  flex flex-col w-full bg-[rgba(255,255,255,0.1)] rounded-[25px] backdrop-blur-[25px] shadow-md shadow-[rgba(0,0,0,0.25)] cursor-pointer pt-2 absolute  transition duration-500 hover:opacity-1 hover:z-[10000]">
                <h5 className="text-[10px] font-semibold w-full px-1 text-center">For customer service call +977 4343 3433 or email at mastercard@gmail.com</h5>
                <div className="bg-black w-full h-[50px] mt-4"></div>
                <div className="flex mt-4 items-center justify-center">
                    <div className="w-[70%] h-[45px]   ">
                        <div className="w-full bg-[#ffffffcc] h-[8px]"></div>
                        <div className="w-full bg-[#fff] h-[8px]"></div>
                        <div className="w-full bg-[#ffffffcc] h-[8px]"></div>
                        <div className="w-full bg-[#fff] h-[8px]"></div>
                        <div className="w-full bg-[#ffffffcc] h-[8px]"></div>
                    </div>
                    <div className="h-[30px] w-[40px] bg-white text-black grid content-center mb-2 rounded-r-md">005</div>
                </div>
                <div className="text-[11px] pt-2  text-center font-semibold">Make online payments easy with mastercard</div>
            </div>
        </div>
      </section>
    </div>
  )
}

export const GlobeCard = ()=>{
    return(
        <div className="flex w-[40%] flex-col items-center justify-center">
            <a href='/' className="text-purple-200 font-semi-bold">Check out this hotel booking site.</a>
            <img src="/hotel.jpg" className='w-[80%] rounded-md transition mt-[30px] duration-500 hover:translate-x-[40px] cursor-pointer h-[400px]' alt="" />
        </div>
    )
}

export function ThreeDCard({title, desc, img, link, btn}:{title:string, desc:string, img:string, link:string, btn:string}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  w-[90% sm:w-full hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-gradient-to-r from-red-300 to-blue-400  border-black/[0.1]  h-auto rounded-xl p-6 sm:p-2 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-purple-950 "
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-purple-950"
        >
          {desc}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl border-white border-2 text-xs font-normal text-white"
          >
            {link}
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-white   text-black text-xs font-bold"
          >
            {btn}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
