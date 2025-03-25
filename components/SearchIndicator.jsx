import React from 'react'

export default function SearchBar() {
  return (
    <div className='absolute top-[47px] left-[1137px] flex items-center gap-2'>
      <img
        src='/search-1.svg'
        alt='Vector Icon'
        className='w-[24px] h-[24px] invert-[30%] sepia-[10%] saturate-[1000%] hue-rotate-[180deg] brightness-[0.9] contrast-[90%]'
      />
      <span className='text-[#B5B7C0] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
        Search
      </span>
    </div>
  )
}
