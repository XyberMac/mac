import Link from 'next/link'
import React from 'react'

export default function Services() {
  return (
    <div id='services' className='min-h-[100vh] w-full flex flex-col  overflow-hidden'>
      <img src="/bg2.jpg"  alt="" className="absolute z-[-1] w-full min-h-[100vh] lg:h-full" />
      <h1 className="font-bold mt-[100px] bg-gradient-to-r from-[springgreen] to-white bg-clip-text text-transparent lg:text-[4rem] text-center text-4xl p-4">My Services</h1>
      <div className="flex w-full items-center justify-evenly max-[700px]:flex-col-reverse max-[700px]:mt-5">
        <div className="flex flex-col w-[40%] p-3  items-center justify-center max-[700px]:mt-7 max-[490px]:w-[90%]">
          <h1 className="font-bold bg-gradient-to-r from-[springgreen] to-white bg-clip-text text-transparent text-[1.5rem] ">A fullstack <br /> Web developer</h1>
          <div className=" lg:h-[300px] lg:w-[300px] overflow-hidden rounded-[50%]  flex items-center justify-center relative">
            <div className="absolute h-[50%]  w-full bg-gradient-to-t from-[springgreen] via-transparent to-transparent z-10 bottom-0 max-[700px]:h-[40vh] overflow-hidden"></div>
            <img src="/pp.jpg" className="h-[70vh] transition duration-500 hover:rotate-[360deg] cursor-pointer z-[2] " alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[50%] max-[900px]:w-[60%] text-purple-200 text-end min-h-[50vh] justify-around max-[700px]:text-center max-[630px]:w-full max-[630px]:p-4">
          <h1 className="font-bold text-2xl m-3">Creating seamless modern websites</h1>
          <p className="text-sm font-semibold bg-gradient-to-tr from-purple-500 backdrop-blur-lg rounded-lg p-4 to-white bg-clip-text text-transparent max-[350px]:font-extralight max-[350px]:w-full">Transform your online presence with expertly crafted websites that not only look stunning but also drive results! As a dedicated web developer, I specialize in creating custom digital solutions tailored to your unique needs. Whether you’re a small business looking to attract more customers, or an established brand seeking to enhance your online experience, I bring creativity, technical skill, and a passion for innovation to every project. Let’s collaborate to turn your vision into a powerful website that engages your audience and elevates your brand. Your success starts here!</p>
          <div className="flex w-full items-center justify-end max-[630px]:justify-center max-[340px]:flex-col max-[340px]:text-sm max-[400px]:gap-5">
            <button className="text-lg  transition duration-500 hover:scale-110 border-0 text-white font-bold bg-purple-600 h-[50px] w-[200px] text-center mx-4 rounded-lg"><Link className='block' href="/#projects">My Projects</Link></button>
            <button className="text-lg transition duration-500  hover:scale-110 border-0 text-white font-bold bg-[springgreen] h-[50px] w-[200px] text-center mx-4 rounded-lg"><Link className='block' href="/#contact">Hire Me</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}
