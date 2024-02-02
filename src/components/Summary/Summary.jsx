import React from 'react'

const Summary = () => {
  return (
    <div className='w-full mx-auto'>
       <h1 className='border-l-4 text-3xl border-orange-400 pl-7 mt-5 mb-12'>Summary and Confirm</h1>
    <div className='pl-5'>
        <h2 className='mb-4'><span>Deliver To :</span> 27A, Chunapukur Road, Delhi - 123234</h2>
        <table className='w-full text-center mb-4'>
            
                <tr className=''>
                    <th>S. No</th>
                    <th>Item Type</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                <tr className='h-10'>
                    <td>1</td>
                    <td>Biriyani Masala</td>
                    <td>1</td>
                    <td>600</td>
                </tr>
                <tr className='h-10'>
                    <td>2  </td>
                    <td>Fresh Red Chilli </td>
                    <td>1</td>
                    <td>600</td>
                </tr>
               
            </table>
            <div className='w-3/5 border border-gray-200 mx-auto m-5'></div>
            <table className='w-full mx-auto text-center mb-4 relative right-0'>
            
                <tr className='h-10'>
                    <td>Delivery Charges</td>
                    <td>30</td>
                </tr>
                <tr className='h-10'>
                    <td> Coupons</td>
                    <td>-150</td>
                </tr> 
                <tr className='h-10'>
                    <td> Taxes</td>
                    <td>150</td>
                </tr>

                <tr className='h-10 font-bold'>
                    <td> Total</td>
                    <td>1230</td>
                </tr>
               
            </table>

    </div>
    <div className='w-full flex text-lg justify-center gap-y-5 gap-x-10 font-medium flex-wrap'>
        <button className=' px-20 py-2 border border-orange-400 rounded-full'>Cancel</button>
        <button className='px-20 py-2 border border-orange-400 rounded-full bg-orange-400 text-white'>Checkout</button>
    </div>
      

    </div>
  )
}

export default Summary;
