import Image from 'next/image'
import React from 'react'

const BigCompannies = () => {
  return (
    <div className='bg-[#FAFAFA] mt-10 py-16 px-4 sm:px-6 lg:px-8 w-full'>
        <div className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto">
            <h1 className="text-[32px] sm:text-[40px] font-bold text-[#252B42]">Big Companies Are Here</h1>
            <p className="text-[#737373] text-[14px] sm:text-[16px] mt-4">
              Problems trying to resolve the conflict between <br className="hidden sm:block" />
              the two major realms of Classical physics: Newtonian mechanics
            </p>
        </div>
        <div className='mt-12 sm:mt-16 flex justify-center items-center w-full max-w-6xl mx-auto'>
            <Image 
              src={"/companies.png"} 
              alt='companies' 
              width={1054} 
              height={175} 
              className="w-full max-w-[1054px] h-auto object-contain"
            />
        </div> 
    </div>
  )
}

export default BigCompannies