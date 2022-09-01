import Image from 'next/image'
import React from 'react'

const CardCategory = () => {
  return (
    <div className='h-[56px] md:h-[72px] w-[140px] md:w-52 rounded-md relative p-6 bg-gradient-to-t from-black via-black/70 overflow-hidden'>
      <Image src={'https://source.unsplash.com/random'} alt='category_image' layout='fill' objectFit='cover' className='absolute inset-0 opacity-100 -z-10' />
      <div className="inset-0 z-10 content abosolute ">
        <span className='text-sm font-bold text-white'>Women</span>
      </div>
    </div>
  )
}

export default CardCategory