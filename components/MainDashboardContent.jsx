// components/MainDashboardContent.js

import React from 'react'

export default function MainDashboardContent() {
  return (
    <div className='flex flex-col'>
      {/* Sidebar */}
      <div className='w-64 bg-white h-auto p-6 mt-24'>
        <div className='mb-4'>
          <span className='font-semibold text-lg'>Dashboard</span>
        </div>
        <div className='mb-4'>
          <span className='font-semibold text-lg'>Product</span>
        </div>
        <div className='mb-4'>
          <span className='font-semibold text-lg'>Income</span>
        </div>
        <div className='mb-4'>
          <span className='font-semibold text-lg'>Promote</span>
        </div>
        <div className='mb-4'>
          <span className='font-semibold text-lg'>Help</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className='ml-64 p-8 w-full flex flex-col'>
        {/* Search Bar */}
        <div className='relative w-72 mb-6'>
          <input
            type='text'
            placeholder='Search'
            className='w-full pl-10 pr-4 py-2 text-sm text-[#B5B7C0] border border-gray-200 rounded-md bg-[#F9FBFF] focus:outline-none focus:ring-1 focus:ring-gray-300'
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#B5B7C0]'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z'
            />
          </svg>
        </div>

        {/* Title and Subtitle */}
        <h2 className='text-xl font-semibold text-gray-800 mb-1'>
          All Customers
        </h2>
        <p className='text-green-600 text-sm'>Active Members</p>

        {/* Table */}
        <div className='overflow-x-auto w-full'>
          <table className='min-w-full table-auto'>
            <thead>
              <tr className='text-left text-gray-500 border-b'>
                <th className='px-4 py-3 w-[180px]'>Customer Name</th>
                <th className='px-4 py-3 w-[140px]'>Company</th>
                <th className='px-4 py-3 w-[160px]'>Phone Number</th>
                <th className='px-4 py-3 w-[220px]'>Email</th>
                <th className='px-4 py-3 w-[140px]'>Country</th>
                <th className='px-4 py-3 w-[100px]'>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Example customer row */}
              <tr className='border-t border-[#EEE]'>
                <td className='px-4 py-4'>Jane Cooper</td>
                <td className='px-4 py-4'>Microsoft</td>
                <td className='px-4 py-4'>(225) 555-0118</td>
                <td className='px-4 py-4'>jane@microsoft.com</td>
                <td className='px-4 py-4'>United States</td>
                <td className='px-4 py-4'>
                  <span className='bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full'>
                    Active
                  </span>
                </td>
              </tr>
              {/* Add more customer rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
