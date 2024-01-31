import React from 'react'

const EachProduct = ({proName, proImg, price}) => {
  return (
    <div className='flex flex-col gap-3 p-5 justify-center items-center'>
      <img src={proImg} alt="" className='w-52' />
      <div className='flex gap-x-20 justify-between text-lg font-semibold'>
        <span className=''>{proName}</span>
        <span> ₹ {price}</span>
      </div>

      <div className='flex justify-between '>
        <button type='submit' className='bg-orange-400 px-7 py-2 mr-3 sm:mr-6 text-white text-lg font-semibold hover:bg-orange-500'>Details</button>

        <button type='submit' className='bg-orange-400 px-5 py-2 ml-3 sm:ml-6 text-white text-lg font-semibold hover:bg-orange-500'>Add to Cart</button>
      </div>
    </div>
  )
}

export default EachProduct;
