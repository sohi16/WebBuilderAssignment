import React from 'react'

const footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-4 bottom '>
        <div className='flex flex-row content-center justify-around'>
            <div className='flex flex-col gap-4 '>
                  <text className='text-lg text-white'>CATEGORIES</text>
                  <text className='text-lg text-[#B6BDC4]'>Web Builder</text>
                  <text className='text-lg text-[#B6BDC4]'>Hosting</text>
                  <text className='text-lg text-[#B6BDC4]'>Data Center</text>
                  <text className='text-lg text-[#B6BDC4]'>Robotic Automation</text>
            </div>
            <div className='flex flex-col gap-4'>
                  <text className='text-lg text-white'>CONTACT</text>
                  <text className='text-lg text-[#B6BDC4]'>Contact</text>
                  <text className='text-lg text-[#B6BDC4]'>Privacy Policy</text>
                  <text className='text-lg text-[#B6BDC4]'>Terms of Service</text>

                  <text className='text-lg text-[#B6BDC4]'>About</text>
            </div>
            <div className='flex flex-col gap-2'>
                  <text className='text-lg text-white'>Address</text>
                  <text className='text-lg text-[#B6BDC4]'>ABC Street 23 US</text>
                  <text className='text-lg text-[#B6BDC4]'>230111</text>
            </div>
        </div>
      </footer>
      
  )
}

export default footer