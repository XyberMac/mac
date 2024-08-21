"use client"

import React from 'react'
import { Input } from './ui/input'
import { Textarea } from "@/components/ui/textarea"
import { useState } from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "951966d0-4c89-44d5-9994-141b01990e40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div  id='contact' className='min-h-[100vh] w-full flex flex-col pb-[10vh] overflow-hidden'>
        <img src="/bg2.jpg"  alt="" className="absolute z-[-1] w-full min-h-[130vh] lg:h-full" />
        <h1 className="font-bold mt-[50px] bg-gradient-to-r from-[springgreen] to-white bg-clip-text text-transparent lg:text-[4rem] text-center mb-6 text-3xl p-5">Contact me</h1>
        <div className="flex w-full max-[620px]:flex-col lg:min-h-[60vh] items-center justify-center gap-8">
            <div className="w-[40%] max-[620px]:w-[80%] max-[400px]:w-[95%] max-[785px]:gap-4 flex flex-col p-3 items-center justify-around gap-8">
                <div className="w-[70%] max-[785px]:w-[90%] h-[160px] flex flex-col border-2 border-gray-600 hover:scale-105 items-center justify-center transition backdrop-blur-sm bg-gradient-to-br from-[#000000e6] to-[#1a191952] rounded-lg  duration-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                    <div className="text-white text-lg font-bold w-full text-center my-3 ">email</div>
                    <div className="text-white text-sm font-bold w-full text-center my-3 ">makhosin27@gmail.com</div>
                </div>
                <div className="w-[70%] max-[785px]:w-[90%] h-[160px] flex flex-col border-2 border-gray-600 hover:scale-105 items-center justify-center transition backdrop-blur-sm bg-gradient-to-br from-[#000000e6] to-[#1a191952] rounded-lg  duration-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                    <div className="text-white text-lg font-bold w-full text-center my-3 ">call & whatsapp</div>
                    <div className="text-white text-sm font-bold w-full text-center my-3 ">+263 78 838 3289</div>
                </div>
                <div className="w-[70%] max-[785px]:w-[90%] h-[160px] flex flex-col border-2 border-gray-600 hover:scale-105 items-center justify-center transition backdrop-blur-sm bg-gradient-to-br from-[#000000e6] to-[#1a191952] rounded-lg  duration-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
                    <div className="text-white text-lg font-bold w-full text-center my-3 ">address</div>
                    <div className="text-white text-sm font-bold w-full text-center my-3 ">Bulawayo Zimbabwe</div>
                </div>
            </div>
            <div className="w-[45%] h-full max-[785px]:w-[55%] max-[785px]:mr-3 max-[620px]:w-[80%] max-[400px]:w-[95%] ">
            <form onSubmit={onSubmit} className='w-full h-full flex flex-col bg-gradient-to-br backdrop-blur-sm p-5 from-[#000000e6] to-[#1a191952] rounded-lg gap-5  duration-500 lg:pt-[5rem] md:pt-[2rem] min-h-[80vh] items-center justify-around max-[400px]:ml-1 '>
                <h1 className="text-4xl  bg-clip-text text-transparent font-extrabold  bg-gradient-to-r from-blue-700 via-fuchsia-600 to-fuchsia-400">Join forces with me!</h1>
                <p className="text-sm font-bold text-gray-300">Get your modern website with latest UI design.</p>
                <div className="grid grid-cols-2 m-5 gap-5  items-center justify-around max-[400px]:flex max-[400px]:flex-col">
                    <Input type='text' name='firstname' placeholder='First name' className='bg-gray-800 text-gray-200 border-2 border-gray-600 max-[400px]:w-full'/>
                    <Input type='text' name='lastname' placeholder='Last name' className='bg-gray-800 text-gray-200 border-2 border-gray-600 max-[400px]:w-full'/>
                    <Input type='text' name='phone' placeholder='Phone number' className='bg-gray-800 text-gray-200 border-2 border-gray-600 max-[400px]:w-full'/>
                    <Input type='text' name='email' placeholder='Your email' className='bg-gray-800 text-gray-200 border-2 border-gray-600 max-[400px]:w-full'/>
                    <Textarea  name='message' placeholder='Your message' className='bg-gray-800 col-span-2 text-gray-200 border-2 border-gray-600'/>
                    <button type='submit' className='h-[50px] grid content-center w-[200px] bg-fuchsia-700 text-white font-bold rounded-md border-0 transition duration-500 hover:shadow-lg hover:shadow-[aqua]'>Send</button>
                    <span className="text-sm text-white fony-b">{result}</span>
                </div>
            </form>
        </div>
        </div>
    </div>
  )
}
