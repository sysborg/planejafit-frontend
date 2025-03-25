import React from 'react'

const DashboardSidebar = () => {
  return (
    <div className='relative w-[306px] h-[1198px] bg-white text-black'>
      {/* Dashboard Top Icon + Text */}
      <div className='absolute top-[37px] left-[28px] flex items-center gap-2'>
        <img src='/setting-1.svg' width={37} height={37} alt='Dashboard Icon' />
        <span className='text-[26px] font-[600] leading-[100%] tracking-[1%] text-black w-[150px] h-[39px] font-poppins'>
          Dashboard
        </span>
      </div>

      {/* Menu Item - Dashboard */}
      <div className='absolute top-[139px] left-[39px] flex items-center gap-3'>
        <img src='/Key-square.svg' width={24} height={24} alt='Dashboard' />
        <span className='text-[#9197B3] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
          Dashboard
        </span>
      </div>

      {/* Menu Item - Product */}
      <div className='absolute top-[203px] left-[39px] flex items-center gap-3'>
        <img src='/3d-square-1.svg' width={24} height={24} alt='Product' />
        <span className='text-[#9197B3] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
          Product
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='absolute top-[207px] left-[254px]'
          alt='arrow'
        />
      </div>

      {/* Menu Item - Customers (selected) */}
      <div className='absolute top-[256px] left-[28px] w-[250px] h-[46px] rounded-[8px] bg-[#5932EA] flex items-center'>
        <img
          src='/user-square-1.svg'
          width={24}
          height={24}
          className='ml-[11px]'
          alt='Customers'
        />
        <span className='text-white font-poppins text-[14px] font-[500] leading-[100%] tracking-[-1%] ml-[15px]'>
          Customers
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='ml-auto mr-[16px]'
          alt='arrow'
        />
      </div>

      {/* Menu Item - Income */}
      <div className='absolute top-[331px] left-[39px] flex items-center gap-3'>
        <img src='/wallet-money-2.svg' width={24} height={24} alt='Income' />
        <span className='text-[#9197B3] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
          Income
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='absolute top-[335px] left-[254px]'
          alt='arrow'
        />
      </div>

      {/* Menu Item - Promote */}
      <div className='absolute top-[395px] left-[39px] flex items-center gap-3'>
        <img src='/discount-shape-1.svg' width={24} height={24} alt='Promote' />
        <span className='text-[#9197B3] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
          Promote
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='absolute top-[399px] left-[254px]'
          alt='arrow'
        />
      </div>

      {/* Menu Item - Help */}
      <div className='absolute top-[459px] left-[39px] flex items-center gap-3'>
        <img src='/message-question-1.svg' width={24} height={24} alt='Help' />
        <span className='text-[#9197B3] text-[14px] font-[400] leading-[100%] tracking-[-1%] font-poppins'>
          Help
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='absolute top-[463px] left-[254px]'
          alt='arrow'
        />
      </div>
    </div>
  )
}

export default DashboardSidebar
