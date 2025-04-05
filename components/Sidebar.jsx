import React from 'react'
import {useRouter} from 'next/router'
import {MENU} from '../config/app'
import classNames from 'classnames'
import Image from 'next/image'

export default function Sidebar() {
  const router = useRouter()

  return (
    <aside className='h-screen bg-white text-black flex flex-col gap-6 p-8'>
      <div className='flex items-center gap-2'>
        <img src='/assets/brand.svg' width={37} height={37} alt='Dashboard Icon' />
        <span className='text-2xl font-[600] text-black font-poppins'>
          PlanejaFit
        </span>
      </div>

      { MENU.map((menu, index) => {
        const isActive = router.pathname === menu.path
        return (
          <a
            href={menu.path}
            className={classNames('menu-item', 'items-center', {"bg-highlight": isActive})}
            key={index}
          >
            <Image src={menu.icon} width={24} height={24} alt={menu.label} />
            <span className={classNames({'text-white': isActive})}>
              {menu.label}
            </span>
            {isActive && (
              <div className="w-0 h-0 border-t-[.4rem] border-b-[.4rem] border-l-[.4rem] border-transparent border-l-white ml-auto mr-4"></div>
            )}
          </a>
        );
      })}
    </aside>
  )
}
