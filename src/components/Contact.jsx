import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-evenly mt-10 flex-wrap-reverse'>
        <div className='w-full sm:w-1/2 xl:w-1/3 relative'>
            <img src="img2.png" alt=""  className='w-full relative'/>
            <div className='flex flex-col  items-start absolute  top-20 md:top-72 text-white px-5 pb-5 gap-y-2 bottom-3'>
                <span className='text-2xl font-bold'>CONTACT INFORMATION</span>
                <span>Address : 27A, Mahogini Road Bengaluru </span>
                <span>Email ID : abc@mail.com </span>
                <span>Mobile Number : 9765432213 </span>
            </div>
        </div>

        <div className=''>
            <div className='flex flex-col text-left mb-10'>
                <h1 className='border-l-4 text-3xl border-orange-400 pl-4 mb-4'>GET IN TOUCH</h1>
                <p className='pl-4'>We are eager to hear from you</p>
            </div>



            <form action="" className='p-5'>
                    <div className='grid md:grid-cols-2 justify-items-center gap-5 mb-5 grid-cols-1'>
                        <div className='flex flex-col'>
                            <label htmlFor="fname" className='text-left text-orange-400 text-lg'>First Name</label>
                            <input
                                className='border-b-2 outline-none border-black w-72 sm:w-80   p-2'
                                 type="text" 
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="lname" className='text-left text-orange-400 text-lg'>Last Name</label>
                            <input
                                className='border-b-2 outline-none border-black w-72 sm:w-80  p-2'
                                 type="text" 
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="lname" className='text-left text-orange-400 text-lg'>Email Id</label>
                            <input
                                className='border-b-2 outline-none border-black w-72 sm:w-80  p-2'
                                 type="email" 
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="lname" className='text-left text-orange-400 text-lg'>Contact No</label>
                            <input
                                className='border-b-2 outline-none border-black w-72 sm:w-80   p-2'
                                 type="text" 
                            />
                        </div>
                    </div>

                    <div className='flex flex-col mb-9'>
                        <label htmlFor="email" className='text-left text-orange-400 text-lg'>Subject</label>
                        <input
                        className='border-b-2 outline-none border-black w-72 sm:w-full p-2'
                        type="text" />
                    </div> 

                    <div className='flex flex-col mb-9'>
                        <label htmlFor="email" className='text-left text-orange-400 text-lg'>Message</label>
                        <input
                        className='border-b-2 outline-none border-black  w-72 sm:w-full p-2'
                        type="text" />
                    </div> 

                    <div className=''>
                        <button type='submit' className='bg-orange-300 p-3 w-32 mt-9 text-white text-xl font-semibold hover:bg-orange-500'>Send</button>
                    </div>


            </form>
           
        </div>
        
    </div>
  )
}

export default Contact;
