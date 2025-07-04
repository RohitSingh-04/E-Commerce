import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '  >
                <div  >
                    <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Ground Floor - Asha Villa, Harhsoli, Bhowali,<br/> Nanital, Uttarakhand, India (263132)<br/> near Rajdeep General Store.</p>
                </div>

                <div>
                    <p className='textxl font-medium mb-5' >Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600' >
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5' >Get in Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600' >
                        <li>+91-9393939393</li>
                        <li>mail@example.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center' >Copyright 2025 @STYLEVERSE </p>
            </div>
        </div>
    )
}

export default Footer