import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
  const items = [
    { type: 'text', content: '★ do-good' },
    { type: 'text', content: 'taste-good★' },
    { type: 'text', content: 'feel-good★' },
    { type: 'text', content: 'ice-cream★' },
  ];

  return (
    <>
      <div className="pt-[50px]">
        <Marquee speed={100} gradient={false}>
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
            
                <span className="px-5 mb- [font-family:'Kalnia',sans-serif] text-[96px] text-red-500 font-bold italic uppercase ">
                  {item.content}
                </span>
            
            </div>
          ))}
        </Marquee>
      </div>
      <hr className="border-[var(--primary)] opacity-100 m-0" />
    </>
  );
};

export default MarqueeComponent;