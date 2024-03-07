import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
const header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto">
      <div className="flex items-center justify-center gap-24 ">
        <div className='flex items-center relative'>
        <AiOutlineSearch className="text-gray-600 w-[20px] h-[20px] absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            className="w-64 h-10 px-10 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search"
          />
        </div>
        <div className='flex order-last gap-24'>
          <text className='text-[#D1D6DA] text-md'>Categories</text>
          <text className='text-[#D1D6DA] text-md'>Website Builders</text>
          <text className='text-[#D1D6DA] text-md'>Today's Deals</text>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default header