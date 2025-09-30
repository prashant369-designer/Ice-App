import React, { useState, useEffect } from "react";
import Elemantor from "../../images/elementor.png";
import axios from "axios";
import Leftimage from "../../images/reviewsLeftIce.png";
import RightImage from "../../images/reviewsRightLeaf.png";
import Slideimage from "../../images/sideimage.svg";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <img
        src={Leftimage}
        className="hidden sm:block absolute top-10 left-0 w-28 sm:w-40 md:w-56 lg:w-[220px] h-auto"
        alt=""
      />
      <img
        src={RightImage}
        className="hidden sm:block absolute bottom-10 right-0 w-24 sm:w-36 md:w-48 lg:w-[160px] h-auto"
        alt=""
      />
      <img
        src={Slideimage}
        className="hidden md:block absolute bottom-1/20 left-1/5 transform -translate-y-1/2 h-24 sm:h-32 md:h-40 lg:h-1/3"
        alt=""
      />
      <img
        src={Slideimage}
        className="hidden md:block absolute bottom-1/20 right-1/5 transform -translate-y-1/2 h-24 sm:h-32 md:h-40 lg:h-1/3"
        alt=""
      />

      {/* Elementor Image */}
      <div className="flex justify-center mb-10">
        <img
          src={Elemantor}
          alt="Reviews Title"
          className="w-full max-w-[60%] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[300px] h-auto"
        />
      </div>

      {/* Reviews Section */}
      <div className="space-y-12 sm:space-y-16">
        {reviews.map((review) => (
          <div key={review._id} className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
              {review.description}
            </h1>
            <h1 className="text-lg sm:text-xl mt-3">⭐⭐⭐⭐⭐</h1>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mt-2 text-gray-900">
              {review.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
