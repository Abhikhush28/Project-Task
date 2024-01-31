import React from 'react'
import Product from './Product';

const Home = () => {

    const productDetails = [
        {
            id: 1,
            productName : "Star Anies",
            proDesc: "It all started when our founder Mr Jawahar used to acquire tin cans and use thenm to sell spices on his biscycle in the area he   live. The path which he paved",
            price: 200,
        }, 
        {
            id: 2,
            productName : "Star Anies2",
            proDesc: "It all started when our founder Mr Jawahar used to acquire tin cans and use thenm to sell spices on his biscycle in the area he   live. The path which he paved",
            price: 400,
        }, 
        
        {
            id: 3,
            productName : "Star Anies3",
            proDesc: "It all started when our founder Mr Jawahar used to acquire tin cans  and use thenm to sell spices on his biscycle in the area he   live. The path which he paved",
            price: 600,
        },
        {
            id: 4,
            productName : "Star Anies4",
            proDesc: "It all started when our founder Mr Jawahar used to acquire tin cans and use thenm to sell spices on his biscycle in the area he   live. The path which he paved",
            price: 800,
        }
    ]
  return (
    <div className="bg-black w-full">

        <div className="flex justify-center">
                <img src="https://kashishmasala.com/assets/group-CZg3UZET.png" alt="" />
        </div>

        <div className="flex flex-wrap justify-center items-start">
                
            <div className="flex flex-col mt-10 p-10 gap-10 justify-center items-start">
                    <h2 className="border-l text-3xl px-3 text-white border-[#FF9800]">
                    Our Collection
                    </h2>
                    <p className="text-white text-sm">
                    It all started when our founder Mr Jawahar <br /> used to acquire
                    tin cans and use thenm to <br /> sell spices on his biscycle in
                    the area he live.
                    <br />
                    The path which he paved
                    </p>
            </div>


                
            <div className='w-1/2'>

                    {
                      productDetails.map((product) => (
                        <Product key={product.id} productName={product.productName} proDesc={product.proDesc} price={product.price}/>
                      ))  
                    }

            </div>
        </div>
    </div>
  )
}

export default Home;
