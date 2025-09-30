import React, { useState, useEffect } from "react";
import axios from "axios";

function RestaurantLoc() {
  const [locations, setLocations] = useState([]);

  const fetchLocations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/location/");
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <section className="mb-12 px-4 sm:px-8 md:px-10 border-t-2 border-red-500 border-b-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div key={location._id} className="flex flex-col  p-4 rounded-lg">
            <h1 className="font-semibold text-4xl text-red-600 my-12 italic"
            style={{fontFamily: "serif"}}>
              Openings
            </h1>
            <h2 className="font-semibold text-6xl mb-5 italic">
              {location.title}
            </h2>
            <p className="text-base mb-4 text-gray-600">
              {location.description}
            </p>
            <img
              src={location.image}
              alt={location.title}
              className="w-full h-60 mb-8 object-cover rounded-md "
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantLoc;
