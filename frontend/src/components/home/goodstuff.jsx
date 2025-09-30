import React from "react";
import { Sparkle, PhoneOutgoing, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import GoodStuff1 from "../../images/goodstuff_1.png"; // red icecream
import GoodStuff2 from "../../images/goodstuff_2.png"; // chocolate icecream
import GoodStuff3 from "../../images/goodstuff_3.png"; // scoop caramel
import GoodStuff4 from "../../images/goodstuff_4.png"; // grapefruit
import ScrollImage from "../../images/scroll image.png";
import ScrollReveal from "../common/duration";

function GoodStuff() {
  return (
    <section className="mx-4 sm:mx-8 lg:mx-20 my-12 sm:my-16 lg:my-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-black text-4xl sm:text-4xl lg:text-6xl font-serif leading-snug"  style={{fontFamily: "sans-serif"}}>
            Made with only the <br /> good stuff
          </h1>
          <h2 className="italic text-2xl sm:text-3xl text-red-600 mt-4 sm:mt-6 ml-20 sm:ml-20">
            favorite flavor
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
            You can have your ice cream and eat it, too! These delicious,
            classic flavors are big in taste but lower in fat than regular ice
            cream.
          </p>

          <ul className="mt-6 sm:mt-8 space-y-3">
            <li className="flex items-center">
              <Sparkle size={20} strokeWidth={3} className="text-red-600" />
              <span className="ml-3 text-gray-800 text-lg sm:text-lg font-medium sm:text-base">
                Suger-restricted diet
              </span>
            </li>
            <li className="flex items-center">
              <Sparkle size={20} strokeWidth={3} className="text-red-600" />
              <span className="ml-3 text-gray-800 text-lg sm:text-lg font-medium sm:text-base">
                A reduced calorie dessert
              </span>
            </li>
            <li className="flex items-center">
              <Sparkle size={20} strokeWidth={3} className="text-red-600" />
              <span className="ml-3 text-gray-800 text-lg sm:text-lg font-medium sm:text-base">
                A reduced fat alternative
              </span>
            </li>
            <li className="text-gray-500 text-xs sm:text-sm">
              (as compared to regular ice cream)
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 sm:mt-8 gap-4 sm:gap-6">
            <a
              href="#"
              className="group flex items-center bg-red-600 text-white font-medium py-3 px-6 rounded-full shadow-md hover:shadow-lg hover:tracking-wide transition-all duration-300"
            >
              <i className="fa-solid fa-arrow-right mr-2 opacity-100 transition-all duration-400 group-hover:opacity-0"></i>
              Discover Now
              <i className="fa-solid fa-arrow-right ml-2 opacity-0 transition-all duration-400 group-hover:opacity-100"></i>

            </a>

            <a
              href="tel:+91123456789"
              className="flex items-center text-gray-800 hover:text-red-600 transition-colors"
            >
              <PhoneOutgoing size={22} className="text-red-600" />
              <span className="ml-3 font-bold text-lg sm:text-lg lg:text-lg">
                (+91) 123456789
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <motion.img
            src={ScrollImage}
            alt="Rotating Background"
            className="absolute -z-10  w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />

          <ScrollReveal duration={4.6}>
          <div className="flex gap-4 sm:gap-6 relative z-10">
            <img
              src={GoodStuff1}
              alt="Red Icecream"
              className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-auto object-contain"
            />
            <img
              src={GoodStuff2}
              alt="Chocolate Icecream"
              className="w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-auto object-contain"
            />
          </div>
          </ScrollReveal>

          <img
            src={GoodStuff3}
            alt="Ice scoop caramel"
            className="top-0 lg:top[452px] md:top-[452px] left-6 md:left-[-65px] lg:left-[-65px] absolute w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] hidden sm:block"
          />
          <img
            src={GoodStuff4}
            alt="Grapefruit"
            className="absolute bottom-0 right-6 top-0 lg:top[452px] md:top-[452px] w-[80px] sm:w-[100px] md:w-[110px] lg:w-[120px] hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}

export default GoodStuff;
