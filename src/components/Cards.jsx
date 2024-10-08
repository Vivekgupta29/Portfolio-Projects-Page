import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function Cards({ data, hoveredId, isHovered, onMouseEnterFunction, onMouseLeaveFunction }) {
    return (
        <div
            className='w-full rounded-xl font-Nunito relative z-[999] text-white cursor-pointer *:first-letter:'
            style={{ height: data.height }}

            onMouseEnter={onMouseEnterFunction}
            onMouseLeave={onMouseLeaveFunction}
        >
            <video
                src={data.previewlink}
                autoPlay
                loop
                muted
                playsInline
                className='absolute top-0 left-0 w-full h-full object-cover rounded-xl'
            />
            <div
                className={`absolute top-0 left-0 w-full h-full bg-black opacity-[80%]  rounded-xl transition-all ease-out duration-1000
                ${hoveredId === -1 ? "bg-transparent" : isHovered ? "bg-transparent" : "bg-black opacity-50"} z-[9999]
                     `}
            />
            <div className='absolute w-full h-[50%] bg-gradient-to-t from-slate-700 to-transparent bottom-0 left-0 rounded-b-xl overflow-hidden'>
                <div className={`absolute w-full flex items-center px-6 my-1  left-0 transition-all ease-in-out duration-500
                    ${isHovered ? "opacity-100 bottom-[3.5rem]" : "bottom-0 opacity-0"}
                    `}>
                    {data && data.tag.map((tag, tagindex) => (
                        <span key={tagindex} className="text-xs text-white bg-red-400 rounded-full px-2.5 py-1 mr-1">
                            {tag}
                        </span>
                    ))}
                    <button className='bg-white text-black rounded-[50%] ml-2 w-5 h-5 flex items-center justify-center rotate-[45deg] ' href={data.link}>
                        <FaArrowUp className="text-xs" />
                    </button>
                </div>
                <div className={`absolute w-full flex items-center justify-between px-6 py-3 bottom-0 left-0 transition-all duration-500 
                    ${isHovered ? "font-bold text-xl px-[5%] py-[5%]" : ""}
                    `}>
                    <div>{data && data.projectname}</div>
                    <div>{data && data.year}</div>
                </div>
            </div>
        </div >
    )
}

export default Cards
