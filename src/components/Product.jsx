import React from 'react'

const Product = ({productName, proDesc, price }) => {
    console.log(productName);
  return (
    <>
             <div className="p-10 flex justify-center gap-5 text-white items-start">
                <img src="https://kashishmasala.com/assets/product--GobFSL3.png" className="h-52" alt="" />
                <div className="space-y-3 w-1/2 text-left">
                    <h2 className="text-base font-semibold">{productName}</h2>
                    <p className="text-white text-sm">
                        {proDesc}
                    </p>
                    <p>price: ₹ {price}</p>
                    <button className="mt-20 p-2 px-4 hover:bg-slate-800 rounded-full text-white font-semibold text-center bg-[#FF9800]">
                    Add to Cart
                    </button>
                </div>
                </div>
    </>
  )
}

export default Product;
