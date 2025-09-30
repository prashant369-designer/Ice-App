import React from 'react';
import Deal1 from "../../images/deal1.png"
import Deal2 from "../../images/deal2.png"
import DealBg from "../../images/Bgdeal.png"

const BestDealSection = () => {
  return (
    <section className="pb-12">
      <div className=" px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div 
              className=" bg-[#70424f] h-[690px] p-16 flex flex-col"
              data-aos="fade-up"
            >
              <img 
                src={Deal1}
                className="w-full object-cover" 
                alt="Deal 1"
                data-aos="fade-down"
              />
              <div className=" mt-4" data-aos="fade-up">
                <p className="text-white text-sm uppercase tracking-wider">
                  Enjoy our special offer!
                </p>
                <h2 className="text-white text-5xl lg:text-7xl mt-4 lg:mt-0 font-medium capitalize"  style={{fontFamily: "cursive"}}>
                  Today best deal
                </h2>
                <p className="font-[Tirelessly_Love_You] text-3xl lg:text-4xl text-center mt-4 text-white">
                  special delicious
                </p>
              </div>
              <div 
                className="flex items-center gap-5 mt-4 flex-col md:flex-row"
                data-aos="fade-right"
              >
                <a
                  href="#"
                  className="flex bg-white text-[#70424f] w-[305px] text-center py-2 px-4 rounded-full transition-all duration-400 hover:tracking-wider group"
                >
                  <span className="inline-flex items-center w-fit ml-20 lg:ml-0">
                     <i className="fa-solid fa-arrow-right mr-2 group-hover:opacity-0 transition-opacity duration-400"></i>
                    Shop Now
                    <i className="fa-solid fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></i>
                  </span>
                </a>
                <p className="text-white text-sm leading-7 m-0 ">
                  In the comfort of your home you can now order your favorite Lebagol ice cream with a click.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div 
              className="bg-[#83b771] h-[690px] p-16  flex flex-col bg-contain bg-top bg-repeat-x"
              data-aos="fade-up"
              style={{ backgroundImage: `url(${DealBg}) ` }}
            >
              <img 
                src={Deal2}
                className="w-full object-cover " 
                alt="Deal 2"
                data-aos="fade-down"
              />
              <div className="mt-4" data-aos="fade-up">
                <p className="text-white text-sm uppercase tracking-wider">
                  FASTEST DELIVERY
                </p>
                <h2 className="text-white text-6xl lg:text-7xl mt-6 lg:mt-0 font-medium capitalize"style={{fontFamily: "cursive"}}>
                  We door deliver
                </h2>
              </div>
              <div 
                className="flex items-center gap-4 mt-4 flex-col md:flex-row"
                data-aos="fade-right"
              >
                <i className="fa-solid fa-phone-volume bg-white text-red-500 w-12 h-12 p-4 rounded-full flex items-center justify-center text-lg"></i>
                <div className="flex flex-col">
                  <p className="m-0 text-white">For Home Delivery</p>
                  <p className="m-0 text-2xl text-white">(+91) 123456789</p>
                </div>
                <div>
                  <p className="text-white mb-2">Delivery time slots:</p>
                  <p className="text-white">11:30 - 1:30 / 3:30 - 5:30 / 7:30 - 9:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDealSection;