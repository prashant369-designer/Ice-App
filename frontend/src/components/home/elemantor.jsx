import React from 'react'
import ElementroImage from "../../images/elementor2.png"

function elemantor() {  
  return (
  <>
  <section className="relative h-[30vh] lg:h-[40vh] overflow-hidden my-2 lg:my-8 ">
         <div
           className="absolute inset-0 transition-opacity duration-1000 ease-in-out mb-8"
         >
           {/* Background Image */}
           <img
             src={ElementroImage}
             alt="Slide"
             className="w-full h-full object-cover mt-8 "
           />
         </div>
     </section>
  </>
  )
}

export default elemantor
