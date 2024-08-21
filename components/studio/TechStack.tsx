import React from 'react'
import { Title } from '../Title'
import { backend, frontend, languages } from '@/data'

export default function TechStack() {
  return (
    <div className='w-full overflow-hidden lg:p-5 min-h-[100vh]'>
      <Title/>
      <div className="flex w-full mt-[100px] justify-evenly max-[660px]:flex-col items-center">
        <div className="flex w-[30%] max-[660px]:w-[80%] mx-auto max-[660px]:grid my-3 flex-col bg-gradient-to-br from-[#000000de] to-[#141414e2] backdrop-blur-md rounded-xl transition duration-500 hover:to-[#9339fa88] hover:border-2 hover:border-gray-700">
          <h1 className="text-2xl w-full font-bold bg-gradient-to-r from-fuchsia-500 to-white p-3 bg-clip-text text-transparent text-center">Front End</h1>
          <div className="grid grid-cols-2 p-4 gap-6 text-purple-200 max-[950px]:flex max-[950px]:flex-col max-[660px]:grid-cols-2 w-w-full   ">
          {frontend.map((item,i)=>(
            <div key={i} className="w-[150px] p-3 font-bold text-center bg-gradient-to-r from-[springgreen] to-yellow-30 sm:w-[80%] transition duration-500 hover:scale-105 hover:bg-purple-600 rounded-md cursor-pointer ">{item}</div>
          ))}
          </div>
        </div>
        <div className="flex w-[30%] max-[660px]:w-[80%] mx-auto max-[660px]:grid my-3 flex-col bg-gradient-to-br from-[#000000de] to-[#141414e2] backdrop-blur-md rounded-xl transition duration-500 hover:to-[#9339fa88] hover:border-2 hover:border-gray-700">
          <h1 className="text-2xl w-full font-bold bg-gradient-to-r from-fuchsia-500 to-white p-3 bg-clip-text text-transparent text-center">Back End</h1>
          <div className="grid grid-cols-2 p-4 gap-6 text-purple-200 max-[950px]:flex max-[950px]:flex-col max-[660px]:grid-cols-2 w-w-full">
          {backend.map((item,i)=>(
            <div key={i} className="w-[150px] p-3 font-bold text-center bg-gradient-to-r from-[springgreen] to-yellow-30 sm:w-[80%] transition duration-500 hover:scale-105 hover:bg-purple-600 rounded-md cursor-pointer ">{item}</div>
          ))}
          </div>
        </div>
        <div className="flex w-[30%] max-[660px]:w-[80%] mx-auto max-[660px]:grid my-3 flex-col bg-gradient-to-br from-[#000000de]  to-[#141414e2] backdrop-blur-md rounded-xl transition duration-500 hover:to-[#9339fa88] hover:border-2 hover:border-gray-700">
          <h1 className="text-2xl w-full font-bold bg-gradient-to-r from-fuchsia-500 to-white p-3 bg-clip-text text-transparent text-center">Programming Languages</h1>
          <div className="grid grid-cols-2 p-4 gap-6 text-purple-200 max-[950px]:flex max-[950px]:flex-col max-[660px]:grid-cols-2 w-w-full">
          {languages.map((item,i)=>(
            <div key={i} className="w-[150px] p-3 font-bold text-center bg-gradient-to-r from-[springgreen] to-yellow-30 sm:w-[80%] transition duration-500 hover:scale-105 hover:bg-purple-600 rounded-md cursor-pointer ">{item}</div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
