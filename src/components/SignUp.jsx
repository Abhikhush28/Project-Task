import React from 'react'

const SignUp = () => {
  return (
    <div className='flex items-center justify-evenly p-5 flex-wrap'>

    {/* form */}
    <div className=' flex flex-col'>
        <h1 className='border-l-4 text-3xl border-orange-400 w-32 h-10 mb-12'>Sign Up</h1>
   
        <form action="" className='flex flex-col w-full space-y-2'>

            <div className='flex flex-col mb-9'>
                <label htmlFor="email" className='text-left text-orange-400 text-lg'>Email ID</label>
                <input
                className='border-b-2 outline-none border-black w-80 sm:w-96  p-2'
                type="text" />
            </div> 
            <div className='flex flex-col mb-10'>
                <label htmlFor="email" className='text-left text-orange-400 text-lg'>Password</label>
                <input
                className='border-b-2 outline-none border-black w-80 sm:w-96 p-2'
                type="password" />
            </div>

            <div className=''>
                <button type='submit' className='bg-orange-300 p-3 w-32 mt-9 text-white text-xl font-semibold hover:bg-orange-500'>Sign Up</button>
            </div>
            
        </form>
    </div>

    {/* image */}
    <div className=' hidden  md:flex justify-center items-center'>
        <img src="./img1.png" alt="" />
    </div>
    
  
</div>
  )
}

export default SignUp
