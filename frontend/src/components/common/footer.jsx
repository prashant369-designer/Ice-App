import React from 'react';
import PaymentMethod from "../../images/paymentmethod.png"

const Footer = () => {
  return (
    <footer className="relative bg-black mt-0 pt-4 lg:pt-36 pb-6 clip-path-ellipse [clip-path:ellipse(180%_100%_at_50%_100%)] lg:[clip-path:ellipse(100%_90%_at_50%_100%)]">
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center">
          <h3 className="text-white text-4xl font-medium capitalize leading-tight">
            Door-to-door delivery +1834 123 456 789
          </h3>
          <p className="text-gray-300 text-base mt-4">
            Sign up to our newsletter today and get 10% off your very first online order with Lebagol.
          </p>
        </div>

        <div className="relative pb-12 mt-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <input
                type="email"
                className="w-full p-4 rounded-full bg-white text-gray-700  "
                placeholder="Enter your email..."
              />
              <a
                href="#"
                className="group absolute top-0 right-0 flex items-center gap-1 bg-red-500 text-white w-[170px] py-4 px-5 rounded-full transition-all duration-400 hover:gap-2"
              >
                 <i className="fa-solid fa-arrow-right mr-2 group-hover:opacity-0 transition-opacity duration-400"></i>
                <span className="text-base tracking-wide">Subscribe</span>
                <i className="fa-solid fa-arrow-right mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-800" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 py-12 mx-10 ">
            {/* center Information */}
            <div className=''>
              <h6 className="text-white text-lg font-semibold text-center md:text-left">Information</h6>
              <p className="text-gray-300 text-sm tracking-wide text-center md:text-left">
                5609 E Sprague Ave, Spokane Valley, WA 99212, USA
              </p>
              <p className="text-gray-300 text-sm tracking-wide mt-2 text-center md:text-left">Follow Us:</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href="#">
                  <i className="fa-brands fa-facebook-f text-gray-300 text-base"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter text-gray-300 text-base"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram text-gray-300 text-base"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest text-gray-300 text-base"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube text-gray-300 text-base"></i>
                </a>
              </div>
            </div>
            {/* first information */}
            <div className='hidden sm:block '>
              <h6 className="text-white text-lg font-semibold">Information</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Help Center
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Shipping
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Returns
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Policies
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Gift Cards
                </a>
              </p>
            </div>           
            {/* useful links */}
            <div className='hidden sm:block '>
              <h6 className="text-white text-lg font-semibold">Useful Links</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  My Accounts
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Order Tracking
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  All Products
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Ingredients
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Wholesale
                </a>
              </p>
            </div>
            {/* about us */}
            <div  className='hidden sm:block '>
              <h6 className="text-white text-lg font-semibold">About Us</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Our Story
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Contact
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Affiliate Program
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Referral Program
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Careers
                </a>
              </p>
            </div>
            {/* categories */}
            <div  className='hidden sm:block '>
              <h6 className="text-white text-lg font-semibold">Categories</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Gelato
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Kulfi
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Shorbet
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Sorbet
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Frozen YoGurt
                </a>
              </p>
            </div>

             {/* mobile devices */}
            <div className='grid grid-cols-2 md:hidden'>
              {/* first information  */}
              <div className='text-center'>
              <h6 className="text-white text-lg font-semibold">Information</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Help Center
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Shipping
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Returns
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Policies
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Gift Cards
                </a>
              </p>
            </div>
            {/* useful links */}
              <div className='text-center'>
              <h6 className="text-white text-lg font-semibold">Useful Links</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  My Accounts
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Order Tracking
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  All Products
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Ingredients
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Wholesale
                </a>
              </p>
            </div>
            </div>
            <div className='grid grid-cols-2 md:hidden'>
                {/* about us */}
             <div  className='text-center'>
              <h6 className="text-white text-lg font-semibold">About Us</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Our Story
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Contact
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Affiliate Program
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Referral Program
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Careers
                </a>
              </p>
            </div>
              {/* categories */}
             <div  className='text-center'>
              <h6 className="text-white text-lg font-semibold">Categories</h6>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Gelato
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Kulfi
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Shorbet
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Sorbet
                </a>
              </p>
              <p className="mb-1">
                <a href="#" className="text-gray-300 text-sm hover:text-[#a1d08e] transition-colors duration-300">
                  Frozen YoGurt
                </a>
              </p>
            </div>
            </div>
          </div>

        <hr className="border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 ">
          <p className="text-gray-300 text-sm m-0">&copy;2025 All Right Reserved By CodeGenIt</p>
          <img src={PaymentMethod} className="h-8 mt-4 md:mt-0" alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;