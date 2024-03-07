import React from 'react'
import { AiOutlineCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const topsection = () => {
  return (
    <div>
    <text className='text-5xl text-gray-700 text-left'>Best Website Builders in the US</text>
          <hr className='w-full text-bold'></hr>
          <div className='flex flex-row py-2 justify-between gap-40 text-gray-600 text-lg'>
            <div className='flex flex-row items-center '>
              <AiOutlineCheckCircle className="mr-2" />
              <text className='text-center'>Last Updated - February 22, 2020</text>
              <AiOutlineInfoCircle className="ml-6 mr-2" />
              <text className='text-center'>Advertising Disclosure</text>
            </div>
            <div className='flex flex-row items-center order-last'>

              <text className='text-center'>Top Relevant</text>
              <FaChevronDown className='ml-2 text-lg'></FaChevronDown>
            </div>
          </div>
          <hr className='w-full text-bold'></hr>
          <div className='flex flex-row gap-8 py-2'>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>Tools</text>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>AWS Builder</text>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>Start Build</text>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>Build Supplies</text>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>Tooling</text>
            <text className='text-[14px] text-gray-600 bg-white pl-2 rounded-xl pr-8 py-2'>Blue Hosting</text>
          </div>
          <div className='flex flex-row items-center text-gray-600'>
            <text className='text-[14px] text-gray-600 rounded-xl px-2 py-2'>Home</text>
            <FaChevronRight className='my-2 text-sm  text-gray-600'></FaChevronRight>
            <text className='text-[14px] text-gray-600 rounded-xl px-2 py-2'>Hosting for all</text>
            <FaChevronRight className='my-2 text-sm  text-gray-600'></FaChevronRight>
            <text className='text-[14px] text-gray-600 rounded-xl px-2 py-2'>Hosting</text>
            <FaChevronRight className='my-2 text-sm  text-gray-600'></FaChevronRight>
            <text className='text-[14px] text-gray-600 rounded-xl px-2 py-2'>Hosting6</text>
            <FaChevronRight className='my-2 text-sm  text-gray-600'></FaChevronRight>
            <text className='text-[14px] text-gray-600 rounded-xl px-2 py-2'>Hosting5</text>
            <FaChevronRight className='my-2 text-sm  text-gray-600'></FaChevronRight>
          </div>
          </div>
  )
}

export default topsection