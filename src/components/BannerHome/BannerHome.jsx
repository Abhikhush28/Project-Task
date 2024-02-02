import React from 'react'

const BannerHome = () => {
  return (
    <section className='flex  md:justify-between  items-center mt-2 flex-wrap sm:flex-nowrap justify-center'>
        <div className='p-1 space-y-6 flex flex-col items-center justify-center'>
            <h1 className='text-7xl font-bold'>बिहार का <span className='text-orange-400'>नंबर 1</span>  <br />मसाला ब्रांड</h1>
            <p className='leading-relaxed'>It all started when our founder Mr Jawahar used to acquire <br /> tin cans and use thenm to sell spices on his biscycle in the <br /> area he live. The path which he paved</p>

            <button className='bg-orange-400 text-xl font-semibold text-white p-3 rounded-full hover:bg-orange-500'>Shop Now</button>

            <div className='flex justify-around space-x-10 text-3xl text-white sm:text-black'>
            <i class="ri-facebook-box-line"></i>
            <i class="ri-instagram-line"></i>
            </div>
            <h1 className='text-gray-400 font-semibold'>Call Us at (+234) 345 654</h1>
        </div>

        <div className=' relative sm:w-1/2  top-[-23rem]  sm:top-[-8.5rem] lg:top-[-4.5rem] z-[-5] rotate-90 sm:rotate-0'>
            <img src="./bgbanner.jpeg" alt="" className='w-full' />
        </div>
    </section>
  )
}

export default BannerHome;
