import React from 'react'
import EachProduct from './EachProduct';

const DealOfDay = () => {

    const listOfProduct = [
        {
            id:1,
            proImg: "./p1.png",
            proName: "Broast Chicken Mix",
            price: 300
        },
        {
            id:2,
            proImg: "./p1.png",
            proName: "Broast Chicken Mix -2",
            price: 600
        },

        {
            id:3,
            proImg: "./p1.png",
            proName: "Broast Chicken Mix - 3",
            price: 900
        },

        {
            id:4,
            proImg: "./p1.png",
            proName: "Broast Chicken Mix -4",
            price: 1200
        },
    ]
  return (
    <div className='flex flex-col justify-center  items-center'>
        <h1 className='border-l-4 text-3xl border-orange-400 pl-7 mt-5 mb-12'>Deals for the day</h1>

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

export default DealOfDay;
