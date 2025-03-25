export default function SearchMini() {
  return (
    <div className='absolute top-[352px] left-[915px] flex items-center gap-2 z-[999]'>
      {/* Ícone visível (escuro) */}
      <img
        src='/search-1.svg'
        alt='Mini search icon'
        className='w-[16px] h-[16px] filter brightness-0'
      />

      {/* Texto Search visível */}
      <span className='text-[#4B5563] text-[13px] font-semibold font-poppins tracking-[-0.01em]'>
        Search
      </span>
    </div>
  )
}
