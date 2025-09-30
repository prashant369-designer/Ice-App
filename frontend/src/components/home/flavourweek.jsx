import React, { useEffect, useState } from "react";
import image1 from "../../images/flavour-weel_1.png";
import image2 from "../../images/flavour-weel_2.png";

function FlavourWeek() {
  // Initial countdown: 30 days, 24 hours
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(countdown);
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="bg-[#311C1A] relative flex items-center justify-center h-[600px] sm:h-[800px] md:h-[700px] lg:h-[900px] overflow-hidden">
      <img
        src={image2}
        className="absolute top-20 sm:top-24 left-0 w-98 sm:w-90 md:w-[400px] lg:w-[520px] h-auto"
        alt=""
      />
      <img
        src={image1}
        className="absolute right-2 sm:right-6 top-32 sm:top-36 w-56 sm:w-72 md:w-[300px] lg:w-[370px] h-auto hidden sm:block"
        alt=""
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-[90%] sm:w-[600px] md:w-[700px] lg:w-[750px] px-4"  style={{fontFamily:"-moz-initial"}}>
        <p className="uppercase tracking-[2.5px] text-xs sm:text-sm font-light text-red-600 mb-2 sm:mb-4">
          Flavor of the Week
        </p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Shop the sweetest
        </h1>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Gifts of the season
        </h1>
        <p className="tracking-wide text-xs sm:text-sm md:text-base font-light text-white mt-2">
          Inspired by strawberry rhubarb pie and reimagined into a 5 layer <br className="hidden md:block" /> indulgent dessert!
        </p>

        <div className="py-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic font-bold">
            {String(timeLeft.days).padStart(2, "0")} :{" "}
            {String(timeLeft.hours).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}
          </h1>
          <h1 className="text-white text-xs sm:text-sm md:text-lg mt-2 space-x-4">
            <span>Days</span>
            <span>Hours</span>
            <span>Mins</span>
            <span>Secs</span>
          </h1>
        </div>

        <a
          href="#"
          className="inline-block bg-red-500 text-white w-[200px] sm:w-[220px] md:w-[250px] text-center py-2 sm:py-3 mt-5 rounded-full transition-all duration-300 hover:tracking-[1.2px] group text-sm sm:text-base md:text-lg"
        >
          <i className="fa-solid fa-arrow-right mr-2 opacity-100 transition-all duration-300 group-hover:opacity-0"></i>
          Explore Products
          <i className="fa-solid fa-arrow-right ml-2 opacity-0 transition-all duration-300 group-hover:opacity-100"></i>
        </a>
      </div>
    </div>
  );
}

export default FlavourWeek;
