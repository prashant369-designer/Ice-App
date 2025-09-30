import React from "react";
import { Carousel } from "react-bootstrap";
import iceLeft from "../../images/leftice.png";
import iceRight from "../../images/rightice.png";
import centerLeft from "../../images/centerleft.png";
import centerRight from "../../images/centerright.png";
import leftBerry from "../../images/leftberry.png";
import rightLeaf from "../../images/rightleaf.png";
import ScrollReveal from "../common/duration";

// import iceRight2 from "../../images/rev_home2_08.png";
// import centerLeft2 from "../../images/rev_home2_03.png";
// import centerRight2 from "../../images/rev_home2_04.png";
// import leftBerry2 from "../../images/rev_home2_07.png";
// import rightLeaf2 from "../../images/rev_home2_05.png";

const HeroCarousel = () => {
  return (
    <main>
      <Carousel fade indicators={false} controls={false} interval={2000}>
        <Carousel.Item>
          <div className="bg-[#8b7ce1] h-[600px] lg:h-[900px] md:h-[800px] sm:h-[650px] [clip-path:ellipse(100%_90%_at_50%_10%)] relative overflow-hidden">
            {/* Left Icecream */}
            <ScrollReveal duration={1.6}>
            <img
              src={iceLeft}
              className="absolute left-4 lg:left-20 top-16 lg:top-30 w-[180px] h-[300px] md:w-[250px] md:h-[450px] lg:w-[350px] lg:h-[600px]"
              alt=""
            />
            <img
              src={iceRight}
              className="absolute right-0 lg:right-20 top-56 lg:top-30 w-[180px] h-[300px] md:w-[250px] md:h-[450px] lg:w-[350px] lg:h-[600px]"
              alt=""
            />
            </ScrollReveal>

            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[650px] lg:w-[750px] px-2">
               <ScrollReveal duration={3.6}>
             
              <p className="uppercase tracking-[2.5px] text-xs md:text-sm font-light text-white mb-4 md:mb-8">
                new flavours of joy
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold" style={{fontFamily: "serif"}}>
                The Rich Taste Of 100% Pure Milk
              </h1>
              <p className="tracking-[1.2px] text-sm md:text-base font-light text-white mt-2 md:mt-4 mb-10">
                Fresh And Tangy, Our Original Cream Cheese Spread Alternative
                Goes On Easy And Tastes Even Better
              </p>
              </ScrollReveal>
              <a
                href="#"
                className=" py-4 bg-red-600 text-white text-sm md:text-base font-bold w-[140px] md:w-[170px] py-1 lg:py-3 px-4 mt-6 md:mt-8 rounded-full transition-all duration-400 hover:tracking-[1.2px] group"
              >
                <i className="fa-solid fa-arrow-right mr-2 opacity-100 transition-all duration-400 group-hover:opacity-0"></i>
                <span className="group-hover:tracking-[1.2px]">Shop Now</span>
                <i className="fa-solid fa-arrow-right ml-2 opacity-0 transition-all duration-400 group-hover:opacity-100"></i>
              </a>
            </div>
          <ScrollReveal duration={1.6} delay={0.3}>
            <div className="">
              <img
                src={leftBerry}
                className="absolute top-6 -left-8 lg:-left-12 w-[80px] md:w-[120px] h-auto"
                alt=""
              />
              <img
                src={centerLeft}
                className=" absolute bottom-15 lg:bottom-40 left-[150px] lg:left-[350px] md:left-[350px] w-[60px] md:w-[90px] h-auto"
                alt=""
              />
              <img
                src={rightLeaf}
                className=" absolute top-6 right-3 w-[80px] md:w-[100px] h-auto"
                alt=""
              />
              <img
                src={centerRight}
                className=" hidden md:block absolute bottom-15 lg:bottom-40 right-[10px] lg:right-[350px] md:right-[300px] w-[60px] md:w-[90px] h-auto"
                alt=""
              />
            </div>
            
            </ScrollReveal>
          </div>
        </Carousel.Item>

        {/* ---------------- SLIDE 2 ---------------- */}
        {/* <Carousel.Item>
          <div className="bg-[#64a55f] h-[900px] [clip-path:ellipse(100%_90%_at_50%_10%)] relative overflow-hidden">
            <img
              src={centerLeft2}
              className="absolute left-2 md:left-10 top-20 w-[180px] h-[320px] md:w-[250px] md:h-[450px] lg:w-[350px] lg:h-[600px]"
              alt=""
            />
            <img
              src={centerRight2}
              className="absolute -right-10 bottom-0 w-[250px] h-[400px] md:w-[450px] md:h-[650px] lg:w-[650px] lg:h-[800px]"
              alt=""
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] md:w-[650px] lg:w-[750px] px-2">
              <p className="uppercase tracking-[2.5px] text-xs md:text-sm font-light text-white mb-4">
                new flavours of joy
              </p>
              <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-bold">
                Delight-Full Happiness
              </h1>
              <p className="tracking-[1.2px] text-xs md:text-base font-light text-white mt-2 md:mt-6">
                Find Your Favorite Product, Including Ones That Meet Your
                Dietary Requirements
              </p>
              <a
                href="#"
                className="inline-block bg-red-500 text-white text-sm md:text-base font-bold w-[140px] md:w-[170px] py-3 px-4 mt-6 rounded-full transition-all duration-400 hover:tracking-[1.2px] group"
              >
                <i className="fa-solid fa-arrow-right mr-2 opacity-100 transition-all duration-400 group-hover:opacity-0"></i>
                Shop Now
                <i className="fa-solid fa-arrow-right ml-2 opacity-0 transition-all duration-400 group-hover:opacity-100"></i>
              </a>
            </div>

            <div className="hidden md:block">
              <img
                src={leftBerry2}
                className="absolute top-12 left-4 md:left-10 w-[70px] md:w-[110px] h-auto"
                alt=""
              />
              <img
                src={rightLeaf2}
                className="absolute top-12 right-4 md:right-8 w-[70px] md:w-[90px] h-auto"
                alt=""
              />
              <img
                src={iceRight2}
                className="absolute bottom-16 left-[120px] md:left-[300px] w-[70px] md:w-[90px] h-auto"
                alt=""
              />
              <img
                src={centerRight}
                className="absolute bottom-28 right-[150px] md:right-[400px] w-[70px] md:w-[90px] h-auto"
                alt=""
              />
            </div>
          </div>
        </Carousel.Item> */}
      </Carousel>
    </main>
  );
};

export default HeroCarousel;
