import React from 'react'

export default function Pagination() {
  return (
    <div className='absolute top-[1056px] left-[1034px] flex items-center gap-[10px]'>
      {/* Seta esquerda */}
      <button className='w-[26px] h-[24px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center text-[#404B52]'>
        {'<'}
      </button>

      {/* Números da paginação */}
      <button className='w-[26px] h-[24px] bg-[#5932EA] text-white rounded-[4px] flex items-center justify-center'>
        1
      </button>
      <button className='w-[26px] h-[24px] bg-[#F5F5F5] text-[#404B52] rounded-[4px] flex items-center justify-center'>
        2
      </button>
      <button className='w-[26px] h-[24px] bg-[#F5F5F5] text-[#404B52] rounded-[4px] flex items-center justify-center'>
        3
      </button>
      <button className='w-[26px] h-[24px] bg-[#F5F5F5] text-[#404B52] rounded-[4px] flex items-center justify-center'>
        4
      </button>

      <span className='text-black text-[12px] font-medium leading-[100%] tracking-[-1%]'>
        ...
      </span>

      <button className='w-[26px] h-[24px] bg-[#F5F5F5] text-[#404B52] rounded-[4px] flex items-center justify-center'>
        40
      </button>

      {/* Seta direita */}
      <button className='w-[26px] h-[24px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center text-[#404B52]'>
        {'>'}
      </button>
    </div>
  )
}
