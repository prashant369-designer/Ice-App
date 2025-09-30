import React, { useEffect } from 'react';
import axios from 'axios';
import Bgimage from "../../images/download.svg"

function IceCategory() {
  const [icecreams, setIcecreams] = React.useState([]);
const fetcgIcecreams = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/category/');
    setIcecreams(response.data);
  } catch (error) {
    console.error(error);
  }
}
useEffect(() => {
  fetcgIcecreams();
}, []);

  return (
    <>
      <div className="text-black font-semibold text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl px-4 mt-10 mb-8" style={{fontFamily: "serif"}}>
        <h1 className=''>
          We’re talking rich, creamy,
          <br className="hidden md:block" />
          satisfyingly smooth with a tangy
          <br className="hidden md:block" />
          zip in every bite.
        </h1>
      </div>

      <div className="mb-20 lg:mb-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-10 my-16">
        {icecreams.map((icecream) => (
        <div 
        key={icecream._id}
        style={{ backgroundColor: icecream.backgroundColor }}
        className="shadow-lg odd:mb-6 lg:odd:mb-12 even:mb-6 lg:even:mb-0 lg:even:mt-12 h-full relative ">
          <img src={Bgimage} className="absolute top-0 left-0 w-full" alt="" />
          <img
            src={icecream.mainimage}
            alt="icecream"
            className="h-[200px] sm:h-[250px] md:h-[220px] lg:h-[250px] w-full object-contain mt-20 lg:mt-6"
          />
          <h2 className="text-white font-bold text-center text-xl mt-6 " style={{fontFamily: "cursive"}}>
           {icecream.title}
          </h2>
          <p className="text-white font-bold text-center text-2xl italic mt-4">
         {icecream.description}
          </p>
          <a
              href="#"
              className="mx-auto block mb-10 lg:mb-0 bg-white text-black w-fit text-center py-2 px-4 mt-5 rounded-full transition-all duration-400 hover:tracking-[1.2px] group"
            >
              <i className="fa-solid fa-arrow-right mr-2 opacity-100 transition-all duration-400 group-hover:opacity-0"></i>
              {icecream.btn}
              <i className="fa-solid fa-arrow-right ml-2 opacity-0 transition-all duration-400 group-hover:opacity-100"></i>
            </a>
        </div>
          ))}
      </div>
    </>
  );
}

export default IceCategory;
