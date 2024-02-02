import React from 'react'
import EachProduct from '../EachProduct'
import { listOfProduct } from '../../list'


const Filter = () => {
   

  return (
    <div className='container mx-auto w-4/5 mb-4 flex'>

        {/* <filter sction */}
        <div className='w-1/4 flex flex-col gap-y-4 '>
            <div className=' border shadow-sm shadow-gray-700 p-5 flex flex-col gap-y-10 h-full rounded-sm'>

                <h2 className='inline-flex items-center font-semibold text-xl gap-1'><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071Z"></path></svg></span>Filter for Spices</h2>


                {/* Filter by Cuisine */}
                <div className='flex flex-col gap-y-7'>
                    <span className='text-lg font-semibold'>Filter by Cuisine</span>
                    <div className='flex text-sm  gap-x-4 flex-wrap justify-start items-center gap-y-2'>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>South Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>North Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Chinese</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Punjabi</span>
                    </div>
                </div>

                {/* Filter by size */}
                <div className='flex flex-col gap-y-5'>
                    <span className='text-lg font-semibold'>Filter by size</span>
                    <div className='flex text-sm  gap-x-4 flex-wrap justify-start items-center gap-y-2'>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>South Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>North Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Chinese</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Punjabi</span>
                    </div>
                </div>

                {/* Filter by Product */}
                <div className='flex flex-col gap-y-5'>
                    <span className='text-lg font-semibold'>Filter by Product</span>
                    <div className='flex text-sm  gap-x-4 flex-wrap justify-start items-center gap-y-2'>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>South Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>North Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Chinese</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Punjabi</span>
                    </div>
                </div>
                
                {/* Filter by Category */}
                <div className='flex flex-col gap-y-5'>
                    <span className='text-lg font-semibold'>Filter by Category</span>
                    <div className='flex text-sm  gap-x-4 flex-wrap justify-start items-center gap-y-2'>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>South Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>North Indian</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Chinese</span>
                        <span className='border border-orange-300 rounded-full px-2 py-1 text-center '>Punjabi</span>
                    </div>
                </div>

            </div>

            {/* flter button below */}
            <button className=' font-semibold w-full py-3 rounded-sm shadow-sm shadow-gray-700'>Remove Filter</button>

        </div>


        {/* product secton below */}

        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-7'>
          {
            listOfProduct.map((pro)=>(
                <EachProduct key={pro.id} proName={pro.proName} proImg={pro.proImg} price={pro.price}/>
            ))
          }
        </div>
     
    </div>
  )
}

export default Filter;
