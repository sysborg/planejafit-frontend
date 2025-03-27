import React from "react"
import Sidebar from './Sidebar'

export default function Layout({children}) {
    return (
        <div className='relative min-h-screen bg-[#F5F6F8] flex gap-8'>
            <Sidebar />
            <main className='flex flex-col w-full gap-8'>
                {children}
            </main>
        </div>
    );
}