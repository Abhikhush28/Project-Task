import React from 'react'

const Summary = () => {
  return (
    <div className='w-full mx-auto'>
       <h1 className='border-l-4 text-3xl border-orange-400 pl-7 mt-5 mb-12'>Summary and Confirm</h1>
    <div className='pl-5 space-y-7 w-4/5 mx-auto'>
        <h2 className='mb-4'><span className='font-bold'>Deliver To :</span> 27A, Chunapukur Road, Delhi - 123234</h2>

        <div>
          <h1 className=' font-bold'>Your Order Summary</h1>
        </div>

        {/* Biriyani Masala */}
        <div className=' flex justify-between'>

            <div className='space-y-1'>
              <h3 className='font-semibold'>Biriyani Masala</h3>
              <p className='text-gray-400'>600 x 1 </p>
            </div>

            <span className='font-bold'>₹ 600</span>
        </div>

        <div className='border border-gray-400'></div>  {/* This is border line */}


         {/* Fresh Red Chilli */}
        <div className=' flex justify-between'>

            <div className='space-y-1'>
              <h3 className='font-semibold'>Fresh Red Chilli</h3>
              <p className='text-gray-400'>600 x 1 </p>
            </div>

            <span className='font-bold'>₹ 600</span>
        </div>

        <div className='border border-gray-400'></div>  {/* This is border line */}


          {/* Delivery Charges */}
          <div className=' flex justify-between'>

            <div className='space-y-2'>
              <h3 className=''>Delivery Charges</h3>
              <p className=''>Taxes</p>
              <p className='font-bold'>Total</p>
            </div>

          <div className='space-y-2'>
              <p className=''>₹ 30</p>
              <p className=''>₹ 150</p>
              <p className='font-bold'>₹ 600</p>
           </div>
           
          </div>





          {/* container ka endding point */}
    </div>

    {/* buttons */}
    <div className='w-1/2  mx-auto flex text-lg justify-center gap-y-5 gap-x-10 font-medium mt-5'>
        <button className=' w-52 px-3 py-2 border border-orange-400 rounded-full'>Cancel</button>
        <button className=' w-52 px-3 py-2 border border-orange-400 rounded-full bg-orange-400 text-white'>Checkout</button>
    </div>
      

    </div>
  )
}

export default Summary;
