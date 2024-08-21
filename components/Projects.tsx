import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <div id='projects' className='w-full min-h-[100vh flex flex-col overflow-hidden'>
      <img src="/bg2.jpg"  alt="" className="absolute z-[-1] w-full min-h-[230vh] lg:h-full" />
      <h1 className="font-bold mt-[100px] bg-gradient-to-r from-[springgreen] to-white bg-clip-text text-transparent lg:text-[4rem] text-center text-3xl p-5">Few Completed Projects</h1>
      <div className="grid lg:grid-cols-3 gap-9 lg:p-9 mt-8 max-[625px]:flex max-[625px]:flex-col">
        <div className="col-span-2  rounded-lg text-[springgreen] p-5 backdrop-blur-sm">
            <h1 className="font-bold text-lg my-3">E-commerce Website</h1>
            <img src="/com2.jpg" className=' rounded-lg w-[60%] max-[500px]:w-[90%] transition duration-500 hover:translate-x-3' alt="" />
            <p className="text-sm font-bold my-3">A full functioning e-commerce website with great user interface.Integrated with a lot of functionality suited for online shopping</p>
            <button className="text-lg my-3 transition duration-500  hover:scale-110 border-0 text-white font-bold bg-purple-500 h-[50px] w-[200px] text-center mx-4 rounded-lg max-[260px]:text-sm max-[260px]:w-[130px]"><Link href="/#contact" className='block'>Get yours now</Link></button>
        </div>
        <div className="col-span-1  rounded-lg text-fuchsia-400 p-5 backdrop-blur-sm justify-evenly flex flex-col">
            <h1 className="font-bold text-lg my-3">Portfolio Website</h1>
            <img src="/com2.jpg" className=' rounded-lg w-[90%] transition duration-500 hover:translate-x-3' alt="" />
            <p className="text-sm font-bold my-3">A full functioning e-commerce website with great user interface.Integrated with a lot of functionality suited for online shopping</p>
            <button className="text-lg my-3 transition duration-500  hover:scale-110 border-0 text-white font-bold bg-[springgreen] h-[50px] w-[200px] text-center mx-4 rounded-lg max-[260px]:text-sm max-[260px]:w-[130px]"><Link href="/#contact" className='block'>Get yours now</Link></button>
        </div>
        <div className="col-span-1  rounded-lg text-fuchsia-400 p-5 backdrop-blur-sm justify-evenly flex flex-col">
            <h1 className="font-bold text-lg my-3">Portfolio Website</h1>
            <img src="/com2.jpg" className=' rounded-lg w-[90%] transition duration-500 hover:translate-x-3' alt="" />
            <p className="text-sm font-bold my-3">A full functioning e-commerce website with great user interface.Integrated with a lot of functionality suited for online shopping</p>
            <button className="text-lg my-3 transition duration-500  hover:scale-110 border-0 text-white font-bold bg-[springgreen] h-[50px] w-[200px] text-center mx-4 rounded-lg max-[260px]:text-sm max-[260px]:w-[130px]"><Link href="/#contact" className='block'>Get yours now</Link></button>
        </div>
        <div className="col-span-2  rounded-lg text-[springgreen]  p-5 backdrop-blur-sm">
            <h1 className="font-bold text-lg my-3">E-commerce Website</h1>
            <img src="/com2.jpg" className=' rounded-lg w-[60%] max-[500px]:w-[90%] transition duration-500 hover:translate-x-3' alt="" />
            <p className="text-sm font-bold my-3">A full functioning e-commerce website with great user interface.Integrated with a lot of functionality suited for online shopping</p>
            <button className="text-lg my-3 transition duration-500  hover:scale-110 border-0 text-white font-bold bg-purple-500 h-[50px] w-[200px] text-center mx-4 rounded-lg max-[260px]:text-sm max-[260px]:w-[130px]"><Link href="/#contact" className='block'>Get yours now</Link></button>
        </div>
      </div>
    </div>
  )
}
