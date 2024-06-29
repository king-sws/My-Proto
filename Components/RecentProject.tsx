import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa6'
import Link from 'next/link'

const RecentProject = () => {
  return (
    <div className="py-20" id='projects' >
        <h1 className='heading' >
            A small selection of {' '} <span className='text-purple' >recent projects</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-1 mt-10 p-4">
            {projects.map(({id , title , des, img, iconLists, link})=>(
                <div className="lg:min-h-[32.5rem] sm:h-[36rem] h-[32rem] sm:mb-24 lg:mb-0 flex items-center justify-center sm:w-[500px] w-[80vw] " key={id} >
                        <PinContainer title={link} href={link} >
                    <Link href={link} >
                                <div className="relative items-center justify-center mb-10 sm:h-[40vh] h-[30vh] overflow-hidden sm:w-[500px] w-[80vw] ">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                                        <Image fill src='/bg.png' alt='hello' />
                                    </div>
                                    <Image fill src={img} alt={title} className='z-10 absolute bottom-0' />
                                </div>
                                <h1 className='text-base font-bold lg:text-2xl md:text-xl line-clamp-1 ' > {title} </h1>
                                <p className='font-bold lg:text-2xl md:text-xl text-base line-clamp-2' > {des} </p>
                                <div className="flex justify-between items-center mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index)=>(
                                            <div className="border border-white/[0.2] bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full " key={icon} style={{transform: `translateX(-${5 * index * 2}px)`}}>
                                                <Image fill src={icon} alt="icon" className='p-2' />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <p className='flex text-purple lg:text-xl md:text-xs text-sm' >Check Now</p>
                                        <FaLocationArrow className='ms-3' color='#CBACF9' />
                                    </div>
                                </div>
                    </Link>
                            </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProject