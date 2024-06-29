import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' >
        <BentoGrid  >
            {gridItems.map((item)=>(
                <BentoGridItem id={item.id} key={item.id} title={item.title} description={item.description} img={item.img} imgClassName={item.imgClassName} titleClassName={item.titleClassName} spareImg={item.spareImg} className={item.className} />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid