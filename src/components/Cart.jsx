import React from 'react'

const Cart = () => {
  return (
    <section>
         <h1 className=' mt-5 border-l-4 text-3xl border-orange-400 px-10 text-start'>Your Cart</h1>

        <div className='grid lg:grid-cols-2 mt-20 gap-24 p-2'>
            <div className='flex flex-wrap lg:flex-nowrap gap-4'>
                <img src="./p2.png" alt="" className='w-1/2 h-1/2 ' />

                <div className='flex flex-col text-start text-lg space-y-2 mx-1'>
                    <h1 className='text-xl font-semibold'>Biriyani Masala</h1>
                    <p className='text-base'>Cinnamon, Cloves, Cardamom, <br />Mace, Black Stone Flower, Fennel,<br /> Star Anise, Bayleaf, Nutmeg, Dried Kapok Buds</p>

                    <div className='flex justify-between flex-wrap lg:flex-nowrap gap-3'>
                        <div className='flex gap-x-1'>
                            <span className='bg-orange-400 px-2'><i class="ri-subtract-line"></i></span>
                            <span className='bg-gray-400 px-4'>1</span>
                            <span className='bg-orange-400 px-2'><i class="ri-add-fill"></i></span>
                        </div>

                        <button className='bg-gray-300 px-2'>Remove</button>
                        <span className='font-bold'>₹600</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center justify-between'>

                <div className='border-2 border-black w-full md:w-80 p-1 text-xl flex flex-col gap-y-10'>
                    <span className='font-bold'>Order Summary</span>
                    <div className='flex flex-col w-full gap-y-3'>
                        <div className='flex justify-around gap-x-5 text-left'>
                            <span>Subtotal</span>
                            <span>1200</span>
                        </div>

                        <div className='flex justify-around gap-x-5 text-left'>
                            <span>Taxes</span>
                            <span>150</span>
                        </div>

                        <div className='flex justify-around gap-x-5'>
                            <span>Delivery Charges</span>
                            <span>30</span>
                        </div>

                        <div className='flex justify-around gap-x-5'>
                            <span>Coupons</span>
                            <span>-150</span>
                        </div>     
                    </div>

                    <div className='flex justify-around gap-y-5 font-bold'>
                            <span>Total</span>
                            <span>1230</span>
                    </div> 

                </div>
                <button type='submit' className='bg-orange-300 w-full md:w-80 p-3 mt-3  text-white text-xl font-semibold hover:bg-orange-500'>Buy Now</button>

            </div>
         </div>
    
    
    </section>
  )
}

export default Cart;
