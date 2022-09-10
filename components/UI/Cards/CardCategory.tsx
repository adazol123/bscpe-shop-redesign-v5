import Image from 'next/image'
import React from 'react'

interface Category {
  img_source: string,
  label: string,
  full?: boolean
}

const CardCategory = ({ img_source, label, full }: Category) => {
  return (
    <div className={`  rounded-md relative p-1 bg-gradient-to-t from-black via-black/70 overflow-hidden
      ${full ? "w-full h-20" : "w-[140px]  md:w-52 h-[56px] md:h-[72px]"}
    `}>
      <Image src={img_source} alt='category_image' layout='fill' objectFit='cover' className='absolute inset-0 opacity-100 -z-10' />

      <div className="left-4 z-10 bottom-2  absolute">
        <span className='text-xs md:text-sm font-bold text-white'>{label}</span>
      </div>
    </div>
  )
}

export default CardCategory