import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (

    <div>
    <div className='flex flex-rows sm:flex gap-14 my-10 mt-40 text-sm'>
        
            <div className='w-full md:w-2/3'>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Aut optio enim officia quos quam cum minima ea quaerat a maxime!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className='w-full md:w-1/3'>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className='w-full md:w-1/3'>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                    <li>+12-2222-2138-868</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>

    </div>
    <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright @2024 forever.com - All Right Reserved</p>
    </div>
    </div>
  )
}

export default Footer