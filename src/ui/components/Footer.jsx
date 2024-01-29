import { Link } from "react-router-dom"

import { PiAppleLogoFill } from "react-icons/pi";
import { IoLogoGooglePlaystore } from "react-icons/io5";

// import './Footer.css'

export const Footer = () => {
  return (
    <footer className="w-full py-[20px] lg:mt-[40px] bg-menu-primary bottom-0 flex justify-center overflow-hidden">
      <div className="footer-container w-[90%] lg:w-[80%]">
      <div className="lg:flex lg:justify-between lg:py-[50px]">
        {/* Logo */}
        <div className='w-full py-4 lg:max-w-[25%]'>
          <Link className='h-[45px] border-2 flex items-center justify-center'>
            LOGO
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-2 lg:flex-nowrap lg: lg: lg:">
          <ul className="flex flex-col gap-2 lg:w-[33%] lg:justify-between">
            <span className="font-bold text-gray-200 text-[16px]">Shop</span>
            <li>
              <Link>Winter Collection</Link>
            </li>
            <li>
              <Link>Special Discount</Link>
            </li>
            <li>
              <Link>Affiliates</Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 lg:w-[33%] lg:justify-between">
            <span className="font-bold text-gray-200 text-[16px]">Payment Method</span>
            <li>
              <Link>Credit Card</Link>
            </li>
            <li>
              <Link>Bank Transfer</Link>
            </li>
            <li>
              <Link>Paypal</Link>
            </li>
          </ul>
          <ul className="w-full flex flex-col items-center py-[12.5px] gap-4 lg:w-[33%] lg:p-0 lg:">
            <span className="font-bold text-gray-200 text-[16px] px-6 lg:p-0">Get Online App</span>
            <div className="w-full flex justify-between lg:flex-wrap lg:gap-2 lg:justify-center">
            <li className="w-[160px] bg-gray-200 rounded-[8px]">
              <Link className="flex gap-1 items-center justify-center py-2 text-menu-primary">
                <PiAppleLogoFill className="text-[30px]"/>
              <div className="flex flex-col">
                <span className="text-[12px]">Download on the</span>
                <span className="text-[16px] font-semibold">App Store</span>
              </div>
              </Link>
            </li>
            <li className="w-[160px] bg-gray-200 rounded-[8px]">
              <Link className="flex gap-1 items-center justify-center py-2 text-menu-primary">
                <IoLogoGooglePlaystore className="text-[30px]"/>
              <div className="flex flex-col text">
                <span className="text-[12px]">GET IN ON</span>
                <span className="text-[16px] font-semibold">Google Play</span>
              </div>
              </Link>
            </li>
            </div>
          </ul>
        </div>
      </div>
      <hr className="border-[1.5px] border-gray-100"/>
      <div className="py-[10px] flex lg:pt-[40px] lg:pb-[20px] lg:justify-between">
        <span className="text-left">&copy; { new Date().getFullYear() } All Right Reserves Ecommerce</span>
        <span className="text-right">Design By Abrahan Villa</span>
      </div>
      </div>
    </footer>
  )
}
