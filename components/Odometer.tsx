import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

export const Stamps = () => {
    const [exp, setExp] = useState(0);
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setExp(2.8)
            setClients(124)
            setProjects(57)
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="flex w-full items-center justify-evenly flex-wrap font-bold ">
            <div className="flex flex-col forn-bold w-[24%] rounded-md cursor-pointer backdrop-blur-xl items-center justify-center h-[150px] shadow-xl shadow-[#00ff8061]">
                <h1 className="text-lg">Clients World Wide</h1>
                <h3 className='font-extrabold text-4xl text-[springgreen]'><Odometer value={clients} format="(.ddd),dd" /> +</h3>
            </div>

            <div className="flex flex-col forn-bold w-[24%] rounded-md cursor-pointer backdrop-blur-xl items-center justify-center h-[150px] shadow-xl shadow-[#00ff8069]">
                <h1 className="text-lg">Years of Experience</h1>
                <h3 className='font-extrabold text-4xl text-[springgreen]'><Odometer value={exp} format="(.ddd),dd" /> +</h3>
            </div>

            <div className="flex flex-col forn-bold w-[24%] rounded-md cursor-pointer backdrop-blur-xl items-center justify-center h-[150px] shadow-xl shadow-[#00ff805f]">
                <h1 className="text-lg">Completed Projects</h1>
                <h3 className='font-extrabold text-4xl text-[springgreen]'><Odometer value={projects} format="(.ddd),dd" /> +</h3>
            </div>

        </div>
    )
}