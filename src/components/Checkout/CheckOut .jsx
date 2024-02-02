import { Link } from "react-router-dom";

import { useState } from "react";
import CustomRadioButton from "./CustomRadioButton ";
import Summary from "../Summary/Summary";

const CheckOut = () => {
  const deliveryType = [
    { id: 1, name: "Debit Card" },
    { id: 2, name: "Credit Card" },
    { id: 3, name: "Cash on Delivery" },
    { id: 4, name: "UPI" },
  ];

  const [selectedValue, setSelectedValue] = useState("");

  const handleOptionChange = (value,index) => {
    setSelectedValue(value);
    // console.log(value);
    console.log('Clicked on index:', index);
  };

  
  return (
    <div className="px-14 py-4">
      <div className="flex mt-4">
        <div className="h-10 border border-orange-400"></div>
        <h1 className="text-3xl h-10 mx-4 mb-4">Checkout</h1>
      </div>
      <div className="flex justify-center flex-wrap md:space-x-20 md:items-start items-center">
        <div className="md:w-[25rem]">
          <div className="w-[20rem] mt-5 border p-6 space-y-7 rounded-lg border-slate-800">
            <h1 className="text-center mb-10">Order Summary</h1>
            <div className="flex justify-between items-start">
              <p>Subtotal:</p>
              <p>0</p>
            </div>
            <div className="flex justify-between items-start">
              <p>Taxes:</p>
              <p>0</p>
            </div>
            <div className="flex justify-between items-start">
              <p>Delivery Charges:</p>
              <p>0</p>
            </div>
            <div className="flex text-lg font-bold mt-10 justify-between items-start">
              <p>Total:</p>
              <p>0</p>
            </div>
          </div>
          <a>
            <div className="flex mt-5 md:mr-20 justify-center">
              <button className="w-full p-3 hover:bg-[#FF9800] rounded-full bg-orange-400 text-center">
                Buy Now
              </button>
            </div>
          </a>
        </div>
        <div>
          <div className="">
            <div className="flex flex-col mt-10 text-left mb-10">
              <h1 className="border-l-2 md:text-3xl border-orange-400 pl-4 mb-4">
                Contact Information
              </h1>
            </div>
            <form action="" className="p-5">
              <div className="grid md:grid-cols-2 justify-items-center gap-5 mb-5 grid-cols-1">
                <div className="flex flex-col">
                  <label
                    htmlFor="fname"
                    className="text-left text-orange-400 text-lg"
                  >
                    First Name
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Last Name
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80  p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Email Id
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80  p-2"
                    type="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Contact No
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Delivery Address
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Pincode
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    City
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    State
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Add Nearby Landmark
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80 p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex mt-20 justify-center items-center">
                <button
                  type="submit"
                  className="bg-orange-300  p-2 w-60 rounded-full text-white text-xl font-semibold hover:bg-orange-500"
                >
                  Save and Next
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <div className="flex flex-col mt-10 text-left mb-10">
              <h1 className="border-l-2 md:text-3xl border-orange-400 pl-4 mb-4">
                Billing details
              </h1>
            </div>
            <div className="flex justify-start items-center gap-8">
            {deliveryType.map((e,index) => (
                  <CustomRadioButton
                    key={e.id}
                    label={e.name}
                    value={e.name}
                    checked={selectedValue === e.name}
                    onChange={() => handleOptionChange(e.name,index)}
                  />
                ))}
            </div>
            <form action="" className="p-5">
              <div className="grid md:grid-cols-2 justify-items-center gap-5 mb-5 grid-cols-1">
                <div className="flex flex-col">
                  <label
                    htmlFor="fname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Card Number
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Expiry Date
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80  p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    CVV
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80  p-2"
                    type="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-left text-orange-400 text-lg"
                  >
                    Card Holder Name
                  </label>
                  <input
                    required
                    className="border-b-2 outline-none border-black w-72 sm:w-80   p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex mt-20 justify-center items-center">
                <button
                  type="submit"
                  className="bg-orange-300  p-2 w-60 rounded-full text-white text-xl font-semibold hover:bg-orange-500"
                >
                  Save and Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <Summary/>
      </div>
    </div>
  );
};

export default CheckOut;