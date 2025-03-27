import React from 'react'

export default function Sidebar() {
  return (
    <aside className='h-screen bg-white text-black flex flex-col gap-6 p-8'>
      <div className='flex items-center gap-2'>
        <img src='/setting-1.svg' width={37} height={37} alt='Dashboard Icon' />
        <span className='text-2xl font-[600] text-black font-poppins'>
          PlanejaFit
        </span>
      </div>

      <div className='menu-item'>
        <img src='/key-square.svg' width={24} height={24} alt='Dashboard' />
        <span className='menu-label'>
          Dashboard
        </span>
      </div>

      <div className='menu-item'>
        <img src='/3d-square-1.svg' width={24} height={24} alt='Alimentos' />
        <span className='menu-label'>
          Alimentos
        </span>
        <img
          src='/chevron-right-2.svg'
          width={16}
          height={16}
          className='absolute top-[207px] left-[254px]'
          alt='arrow'
        />
      </div>

      <div className='menu-item bg-highlight flex items-center'>
        <img
          src='/user-square-1.svg'
          width={24}
          height={24}
          alt='Customers'
        />
        <span className='text-white menu-label'>
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

      <div className='menu-item'>
        <img src='/wallet-money-2.svg' width={24} height={24} alt='Income' />
        <span className='menu-label'>
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

      <div className='menu-item'>
        <img src='/discount-shape-1.svg' width={24} height={24} alt='Promote' />
        <span className='menu-label'>
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

      <div className='menu-item'>
        <img src='/message-question-1.svg' width={24} height={24} alt='Help' />
        <span className='menu-label'>
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
    </aside>
  )
}
