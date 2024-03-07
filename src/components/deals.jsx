import React from 'react'

const deals = () => {
  return (
    <div className='flex flex-col'>
            <text className='text-gray-600 text-[32px]'>Related deals you might like for</text>
            <div className='flex flex-row content-center justify-around gap-4 py-4'>
                  <div className='flex flex-col w-[333px] bg-white p-4 gap-4 h-[425px] rounded-xl'>
                    <div className='flex flex-col items-center'>
                    <img src={require('./img.png')} className='w-32 h-24 mt-6' alt='Description' />
                    </div>
                    <div className='flex flex-row gap-2 items-left mt-6'>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-left text-[14px] rounded-lg'>20% off</text>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-[14px] rounded-lg'>Limited time</text>
                    </div>
                    <text className='text-center font-bold text-gray-600 text-[16px]'>WebBuilder 1</text>
                    <text className='text-left text-gray-500 mx-2 text-[16px]'>Computer  Modern clasic with wix support</text>
                    <div className='flex flex-row gap-2 items-left mx-2'>
                      <text className='text-[20px] text-gray-600'>$39.96</text>
                      <text className='text-[14px] align-text-bottom mt-2 text-gray-400'>$49.96</text>
                      <text className='text-[#EF4C5D] text-[13px] mt-2 '>(20% off)</text>
                    </div>
                    <button className='w-[292px] h-[48px] bg-[#1B88F4] text-white text-[16px] rounded-xl text-center align-middle'>View Deal</button>
                  </div>
                  <div className='flex flex-col w-[333px] bg-white p-4 gap-4 h-[425px] rounded-xl'>
                    <div className='flex flex-col items-center'>
                    <img src={require('./img.png')} className='w-32 h-24 mt-6' alt='Description' />
                    </div>
                    <div className='flex flex-row gap-2 items-left mt-6'>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-left text-[14px] rounded-lg'>20% off</text>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-[14px] rounded-lg'>Limited time</text>
                    </div>
                    <text className='text-center font-bold text-gray-600 text-[16px]'>WebBuilder 1</text>
                    <text className='text-left text-gray-500 mx-2 text-[16px]'>Computer  Modern clasic with wix support</text>
                    <div className='flex flex-row gap-2 items-left mx-2'>
                      <text className='text-[20px] text-gray-600'>$39.96</text>
                      <text className='text-[14px] align-text-bottom mt-2 text-gray-400'>$49.96</text>
                      <text className='text-[#EF4C5D] text-[13px] mt-2 '>(20% off)</text>
                    </div>
                    <button className='w-[292px] h-[48px] bg-[#1B88F4] text-white text-[16px] rounded-xl text-center align-middle'>View Deal</button>
                  </div>
                  <div className='flex flex-col w-[333px] bg-white p-4 gap-4 h-[425px] rounded-xl'>
                    <div className='flex flex-col items-center'>
                    <img src={require('./img.png')} className='w-32 h-24 mt-6' alt='Description' />
                    </div>
                    <div className='flex flex-row gap-2 items-left mt-6'>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-left text-[14px] rounded-lg'>20% off</text>
                    <text className='text-[#074786] bg-[#F2F4F7] px-2 py-0.5 h-[28px] text-[14px] rounded-lg'>Limited time</text>
                    </div>
                    <text className='text-center font-bold text-gray-600 text-[16px]'>WebBuilder 1</text>
                    <text className='text-left text-gray-500 mx-2 text-[16px]'>Computer  Modern clasic with wix support</text>
                    <div className='flex flex-row gap-2 items-left mx-2'>
                      <text className='text-[20px] text-gray-600'>$39.96</text>
                      <text className='text-[14px] align-text-bottom mt-2 text-gray-400'>$49.96</text>
                      <text className='text-[#EF4C5D] text-[13px] mt-2 '>(20% off)</text>
                    </div>
                    <button className='w-[292px] h-[48px] bg-[#1B88F4] text-white text-[16px] rounded-xl text-center align-middle'>View Deal</button>
                  </div>
            </div>
          </div>
  )
}

export default deals