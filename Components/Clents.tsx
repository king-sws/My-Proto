import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clents = () => {
  return (
    <div className="py-20" id='testimonials' >
        <h1 className='heading' >
           Kind word from {' '} <span className='text-purple' >satisfied clients</span>
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-x-24 gap-y-1 mt-10 p-4">
            <InfiniteMovingCards items={testimonials}  direction='right' speed='slow' />
        </div>
        <div className="flex mt-5 flex-wrap items-center justify-center gap-4 mf:gap-16 max-lg:mt-10 ">
            {companies.map(({id, name, img, nameImg})=>(
                <div className="flex gap-4  max-w-32 md:max-w-60 " key={id}>
                    <img src={img} alt="hello" className='md:w-10 w-5 gap-x-6' />
                    <img src={nameImg} alt="hello" className='md:w-24 w-20 ' />
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clents