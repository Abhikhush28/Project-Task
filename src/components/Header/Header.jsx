import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="sticky top-0">
      <nav className='p-3 px-6 flex justify-between md:justify-around items-center shadow-md'>
      <div className="flex justify-center gap-4 md:gap-8 items-center">
        <a>
          <img src="./logo.png" className="h-10" alt=""/>
        </a>
      </div>
      <div className="hidden md:flex justify-center gap-8 items-center">
        <a>
          Home
        </a>
        <a>
        About Us
        </a>
        <a>
        Product
        </a>
        <a>
        Contact
        </a>
      </div>
      <div className="flex flex-row justify-center gap-4 md:gap-8 items-center">
        <a>
        <div className="relative  z-50">
        <span className="badge"></span>
          {/* <FaShoppingBag size={20}/> */}
          <img src="./cart.png" className='' alt="" />
          
        </div>
        </a>
         <button >
          <span className="flex justify-center items-center gap-3 text-white">Login
           </span>
        </button> 
      </div>
    </nav>
    </div>
    </div>
  )
}

export default Header;
