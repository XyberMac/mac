import React from 'react'
import { Title } from './Title'
import { software, webprojects } from '@/data'
import { ThreeDCard } from './Card'

export default function CreativeServices() {
  return (
    <div className='w-full min-h-[100vh flex flex-col p-4 sm:p-1 overflow-hidden'>
      <Title title="Web Developnment"/>
      <div className="flex items-center justify-around max-[620px]:flex-col">
        {webprojects.map((project)=>(
          <ThreeDCard title={project.title} desc={project.desc} img={project.img} link={project.link} btn={project.btn} />
        ))}
      </div>
      <Title title="Software Developnment"/>
      <div className="flex items-center justify-around max-[620px]:flex-col">
        {software.map((project)=>(
          <ThreeDCard title={project.title} desc={project.desc} img={project.img} link={project.link} btn={project.btn} />
        ))}
      </div>
    </div>
  )
}
