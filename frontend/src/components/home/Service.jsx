import React from 'react';
import Service1 from "../../images/service1.svg";
import Service2 from "../../images/service2.svg";
import Service3 from "../../images/service3.svg";
import Service4 from "../../images/service4.svg";
import Service5 from "../../images/service5.svg";
import ScrollReveal from '../common/duration';

const ServicesSection = () => {
  const services = [
    {
      img: Service1,
      title: "Handcrafted",
      description: "Premium ice cream & cookies",
    },
    {
      img: Service2,
      title: "Personalized",
      description: "Memorable gifting made easy",
    },
    {
      img: Service3,
      title: "Fast Shipping",
      description: "Nationwide for easy",
    },
    {
      img: Service4,
      title: "Guaranteed",
      description: "A+ customer service",
    },
    {
      img: Service5,
      title: "Women Owned",
      description: "Frozen delivery",
    },
  ];

  return (
    <ScrollReveal duration={2.6}>
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#faf3e7] flex items-center justify-center mb-4">
                <img src={service.img} alt={service.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-3xl capitalize mb-1" style={{fontFamily: "serif"}}>{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default ServicesSection;
