import React from 'react'
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineTrophy } from 'react-icons/ai';
import { FaChevronDown } from "react-icons/fa";
import { GiCutDiamond } from 'react-icons/gi';

const hostingcards = () => {
  return (
    <div className='flex flex-col py-8 gap-8'>
            {/* 1st builder card */}
            <div className='flex felx-row bg-white rounded-xl w-[1024px] h-[255px]'>
              <div className='flex flex-col basis-1/4'>
                <text className='flex flex-row gap-2 items-center bg-[#FF7724] h-8 w-36 mt-[-16px] ml-[-6px] p-3 text-white align-middle rounded-s-none rounded-e-lg'>
                  <AiOutlineTrophy className='text-white text-xl'></AiOutlineTrophy>
                  Best Choice</text>
                <text className='text-gray-500 text-2xl bg-white ml-[-20px] p-1 align-middle text-center border w-12 h-12 mt-[16px] rounded-full'>1</text>
                <div className='flex flex-col items-center mt-[-16px]' >
                  <img src={require('./img.png')} className='w-40 items-center' alt='Description' />
                  <text className='text-base order-2nd text-gray-500 text-center items-center align-middle mt-2'>Builder 1</text>
                </div>
              </div>
              <div className='flex felx-col basis-1/2'>
                <div className='flex flex-col gap-2 mt-4'>
                  <text className='text-gray-600 text-[16px] font-medium'><text className='text-gray-600 text-[16px] font-bold'>WixPro 72-Inch Responsive Website Builder- </text>
                    Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</text>
                  <text className='text-gray-600 text-[16px] font-bold'>Main highlights</text>
                  <text className='text-gray-600 text-[16px] font-medium ml-4 mr-8'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</text>
                  <text className='flex flex-row items-center gap-2 text-[#1B88F4] text-[16px] mt-2'>Show more <FaChevronDown className='text-[12px]'></FaChevronDown></text>
                </div>

              </div>
              <div className='flex flex-col basis-1/4 justify-between items-center pb-2'>
                <div className='flex flex-col bg-[#F3F9FF] mx-16 items-center rounded-t-none rounded-b-xl px-8 pb-4 pt-0.5'>
                <AiOutlineInfoCircle className='text-[10px] ml-16 text-gray-500'></AiOutlineInfoCircle>
                <text className='text-[#074786] text-[32px] font-medium mt-[-8px]'>9.8</text>
                <text className='text-[#074786] text-[14px] font-medium mt-1'>Exceptional</text>
                <img src={require('./star.png')} alt='star' className='mt-2'></img>
                </div>
                <button className='bg-[#1B88F4] text-white rounded-xl w-[232px] h-[48px] items-center text-center order-last mx-4 my-2'>View</button>
              </div>
            </div>
            {/* 2nd Builder Card */}
            
            <div className='flex felx-row bg-white rounded-xl w-[1024px] h-[255px]'>
              <div className='flex flex-col basis-1/4'>
                <text className='flex flex-row gap-2 items-center bg-[#FF7724] h-8 w-36 mt-[-16px] ml-[-6px] p-3 text-white align-middle rounded-s-none rounded-e-lg'>
                  <GiCutDiamond className='text-white text-xl'></GiCutDiamond>
                  Best Value</text>
                <text className='text-gray-500 text-2xl bg-white ml-[-20px] p-1 align-middle text-center border w-12 h-12 mt-[16px] rounded-full'>2</text>
                <div className='flex flex-col items-center mt-[-16px]' >
                  <img src={require('./img.png')} className='w-40 items-center' alt='Description' />
                  <text className='text-base order-2nd text-gray-500 text-center items-center align-middle mt-2'>Builder 2</text>
                </div>
              </div>
              <div className='flex felx-col basis-1/2'>
                <div className='flex flex-col gap-2 mt-4'>
                  <text className='text-gray-600 text-[16px] font-medium'><text className='text-gray-600 text-[16px] font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio- </text>
                  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)</text>
                  <text className='text-gray-600 text-[16px] font-bold'>Main highlights</text>
                  <text className='text-gray-600 text-[16px] font-medium ml-4 mr-8'>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.</text>
                  <text className='flex flex-row items-center gap-2 text-[#1B88F4] text-[16px] mt-2'>Show more <FaChevronDown className='text-[12px]'></FaChevronDown></text>
                </div>

              </div>
              <div className='flex flex-col basis-1/4 justify-between items-center pb-2'>
                <div className='flex flex-col bg-[#F3F9FF] mx-16 items-center rounded-t-none rounded-b-xl px-8 pb-4 pt-0.5'>
                <AiOutlineInfoCircle className='text-[10px] ml-16 text-gray-500'></AiOutlineInfoCircle>
                <text className='text-[#074786] text-[32px] font-medium mt-[-8px]'>9.5</text>
                <text className='text-[#074786] text-[14px] font-medium mt-1'>Very Good</text>
                <img src={require('./star.png')} alt='star' className='mt-2'></img>
                </div>
                <button className='bg-[#1B88F4] text-white rounded-xl w-[232px] h-[48px] items-center text-center order-last mx-4 my-2'>View</button>
              </div>
            </div>
            {/* 3rd Builder Card */}
            
            <div className='flex felx-row bg-white rounded-xl w-[1024px] h-[255px]'>
              <div className='flex flex-col basis-1/4'>
                
                <text className='text-gray-500 text-2xl bg-white ml-[-20px] p-1 align-middle text-center border w-12 h-12 mt-[16px] rounded-full'>3</text>
                <div className='flex flex-col items-center mt-[-16px]' >
                  <img src={require('./img.png')} className='w-40 items-center' alt='Description' />
                  <text className='text-base order-2nd text-gray-500 text-center items-center align-middle mt-2'>Builder 3</text>
                </div>
              </div>
              <div className='flex felx-col basis-1/2'>
                <div className='flex flex-col gap-2 mt-4'>
                  <text className='text-gray-600 text-[16px] font-medium'><text className='text-gray-600 text-[16px] font-bold'>WixPro 72-Inch Responsive Website Builder- </text>
                    Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)</text>
                  <text className='text-gray-600 text-[16px] font-bold'>Main highlights</text>
                  <text className='text-gray-600 text-[16px] font-medium ml-4 mr-8'>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</text>
                  <text className='flex flex-row items-center gap-2 text-[#1B88F4] text-[16px] mt-2'>Show more <FaChevronDown className='text-[12px]'></FaChevronDown></text>
                </div>

              </div>
              <div className='flex flex-col basis-1/4 justify-between items-center pb-2'>
                <div className='flex flex-col bg-[#F3F9FF] mx-16 items-center rounded-t-none rounded-b-xl px-8 pb-4 pt-0.5'>
                <AiOutlineInfoCircle className='text-[10px] ml-16 text-gray-500'></AiOutlineInfoCircle>
                <text className='text-[#074786] text-[32px] font-medium mt-[-8px]'>9.3</text>
                <text className='text-[#074786] text-[14px] font-medium mt-1'>Good</text>
                <img src={require('./star.png')} alt='star' className='mt-2'></img>
                </div>
                <button className='bg-[#1B88F4] text-white rounded-xl w-[232px] h-[48px] items-center text-center order-last mx-4 my-2'>View</button>
              </div>
            </div>
            {/* 4th Builder Card */}
            
            <div className='flex felx-row bg-white rounded-xl w-[1024px] h-[420px]'>
              <div className='flex flex-col basis-1/4'>
                
                <text className='text-gray-500 text-2xl bg-white ml-[-20px] p-1 align-middle text-center border w-12 h-12 mt-[16px] rounded-full'>4</text>
                <div className='flex flex-col items-center mt-[-16px]' >
                  <img src={require('./img.png')} className='w-40 items-center' alt='Description' />
                  <text className='text-base order-2nd text-gray-500 text-center items-center align-middle mt-2'>CDK</text>
                </div>
              </div>
              <div className='flex felx-col basis-1/2'>
                <div className='flex flex-col gap-2 mt-4'>
                  <text className='text-gray-600 text-[16px] font-medium'><text className='text-gray-600 text-[16px] font-bold'>CDK Resposive Builder: </text>
                  An extensive library of widgets and apps, and detailed step-by-step guides</text>
                  <text className='text-[#074786] bg-blue-50 text-[13px] w-[60px] text-center rounded-sm font-medium'>26% Off</text>
                  <text className='text-gray-600 text-[16px] font-bold'>Main highlights</text>
                  <div className='flex flex-col gap-2 bg-[#FFF4ED] rounded-xl p-4 ml-4'>
                  <text className='text-gray-600 text-[16px] font-medium mr-8'><text className='text-[#1B88F4] text-lg bg-white px-2 py-1 rounded-md mr-2'>9.9</text> Building responsive</text>
                  <text className='text-gray-600 text-[16px] font-medium mr-8'><text className='text-[#1B88F4] text-lg bg-white px-2 py-1 rounded-md mr-2'>8.9</text>Cool</text>
                  <text className='text-gray-600 text-[16px] font-medium mr-8'><text className='text-[#1B88F4] text-lg bg-white px-2 py-1 rounded-md mr-2'>8.9</text>Docs</text>
                  </div>
                  <text className='text-gray-600 text-[16px] font-normal'>Why we love it</text>
                  <div className='flex flex-col gap-2-4 '>
                    <div className='flex flex-row items-center gap-2'>
                    <AiOutlineCheckCircle className=''></AiOutlineCheckCircle><text className='text-gray-600 text-[16px] font-medium'>Documentation</text>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                    <AiOutlineCheckCircle className=''></AiOutlineCheckCircle><text className='text-gray-600 text-[16px] font-medium'>Easy Use</text>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                    <AiOutlineCheckCircle className=''></AiOutlineCheckCircle><text className='text-gray-600 text-[16px] font-medium'>Out Of Box</text>
                    </div>
                  </div>
                  <text className='flex flex-row items-center gap-2 text-[#1B88F4] text-[16px] mt-2'>Show more <FaChevronDown className='text-[12px]'></FaChevronDown></text>
                </div>

              </div>
              <div className='flex flex-col basis-1/4 justify-between items-center pb-2'>
                <div className='flex flex-col bg-[#F3F9FF] mx-16 items-center rounded-t-none rounded-b-xl px-8 pb-4 pt-0.5'>
                <AiOutlineInfoCircle className='text-[10px] ml-16 text-gray-500'></AiOutlineInfoCircle>
                <text className='text-[#074786] text-[32px] font-medium mt-[-8px]'>9.1</text>
                <text className='text-[#074786] text-[14px] font-medium mt-1'>Good</text>
                <img src={require('./star.png')} alt='star' className='mt-2'></img>
                </div>
                <button className='bg-[#1B88F4] text-white rounded-xl w-[232px] h-[48px] items-center text-center order-last mx-4 my-2'>View</button>
              </div>
            </div>
          </div>
  )
}

export default hostingcards