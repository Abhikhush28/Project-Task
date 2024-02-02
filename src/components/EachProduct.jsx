import React from 'react'

const EachProduct = ({proName, proImg, price}) => {
  return (
    <div className='flex flex-col gap-2 p-5 justify-center items-center'>
      <img src={proImg} alt="" className='w-48' />
      <div className='flex gap-x-20 justify-between text-sm font-semibold'>
        <span className='inline-block'>{proName}</span>
        <span className='inline-flex'> ₹{price}</span>
      </div>

      <div className='flex justify-between '>
        <button type='submit' className='bg-orange-400 px-3 py-1 rounded-full mr-3 sm:mr-6 text-white text-lg font-semibold hover:bg-orange-500'>Details</button>

        <button type='submit' className='bg-orange-400 px-2 rounded-full py-1 ml-3 sm:ml-6 text-white text-lg font-semibold hover:bg-orange-500'>Add to Cart</button>
      </div>
    </div>
  )
}

export default EachProduct;
