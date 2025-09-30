import React, { useEffect, useState } from "react";
import axios from "axios";
import Publiclayout from "../layouts/publiclayout";
import ContactBg from "../images/contactbgimage.jpg";
import Image1 from "../images/deliveryicon.png";
import Image2 from "../images/scoopice2.png";
import Image3 from "../images/homeicon.png";
import Slideimage from "../images/sideimage.svg";

const Like = () => {
  const [Like, setLike] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // For modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/like")
      .then((res) => setLike(res.data))
      .catch((err) => console.error("Error fetching Like:", err));
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/like/${id}`);
      setLike(Like.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <Publiclayout>

      <div className="relative">
              <img
                src={ContactBg}
                alt="Contact Background"
                className="w-full h-[360px] object-cover brightness-50"
              />
              <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white text-center">
               Your Wishlist
              </h1>
              <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xl text-white">
                Home / LikePage
              </p>
            </div>
      <div className="max-w-7xl mx-auto py-10 px-6 mt-4 mb-10 ">
        {Like.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your wishlist is empty. Start exploring!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Like.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative group">
                  <img
                    src={item.productId.image}
                    alt={item.productId.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.productId.discount > 0 && (
                    <span className="absolute top-3 left-3 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      -{item.productId.discountPercentage}%
                    </span>
                  )}
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 text-center line-clamp-2">
                      {item.productId.title}
                    </h3>
                    <p className="text-sm text-gray-500 text-center mt-1">
                      {item.productId.category}
                    </p>
                    <div className="flex items-center justify-center mt-3 space-x-2">
                      <span className="text-lg font-bold text-red-500">
                        ₹{item.productId.afterdiscount}
                      </span>
                      {item.productId.discount > 0 && (
                        <span className="line-through text-gray-400 text-sm">
                          ₹{item.productId.price}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-5">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-medium py-2 rounded-lg transition-colors duration-300"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => openModal(item.productId)}
                      className="border border-gray-300 cursor-pointer hover:border-red-500 hover:text-red-500 text-gray-600 font-medium py-2 rounded-lg transition-colors duration-300"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl mx-4 p-6 relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="cursor-pointer absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl hover:text-3xl"
              >
                &times;
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-gray-500 mt-2">{selectedProduct.category}</p>
                  <p className="mt-3 text-gray-700">{selectedProduct.description}</p>
                  <p className="mt-3 text-sm text-gray-500">
                    {selectedProduct.content}
                  </p>

                  <div className="mt-4 flex items-center space-x-3">
                    <span className="text-2xl font-bold text-red-500">
                      ₹{selectedProduct.afterdiscount}
                    </span>
                    {selectedProduct.discount > 0 && (
                      <span className="line-through text-gray-400 text-lg">
                        ₹{selectedProduct.price}
                      </span>
                    )}
                  </div>

                  <div className="mt-4">
                    <span className="text-yellow-500 font-semibold">
                      ⭐ {selectedProduct.rating}
                    </span>
                  </div>

                  <div className="mt-6">
                    {/* <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
       {/* need lebagol section  */}
            <div className="flex container justify-between hidden lg:flex">
              <div className="w-1/4 ml-20 mt-10">
                {" "}
                <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center lg:text-left">
                  Need Lebagol Now?
                </h2>
              </div>
              <div className="flex  gap-20">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={Image1}
                      alt="Local Delivery"
                      className="w-14 h-14 mb-3"
                    />
                    <p className="text-sm font-semibold tracking-wide">
                      LOCAL DELIVERY
                    </p>
                  </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                  {" "}
                  <img src={Slideimage} alt="" />
                </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={Image2}
                      alt="Local Delivery"
                      className="w-14 h-14 mb-3"
                    />
                    <p className="text-sm font-semibold tracking-wide">SCOOP SHOPS</p>
                  </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
                  {" "}
                  <img src={Slideimage} alt="" />
                </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={Image3}
                      alt="Local Delivery"
                      className="w-14 h-14 mb-3"
                    />
                    <p className="text-sm font-semibold tracking-wide">
                      GROCERY LOCATOR
                    </p>
                  </div>
              </div>
            </div>
             {/* need lebagol section for mobile device  */}
            <div className="grid grid-cols-1 container justify-between md:hidden space-y-8 mb-10">
              <div>
                {" "}
                <h2  className="text-3xl md:text-3xl font-semibold text-center lg:text-left">
                  Need Lebagol Now?
                </h2>
              </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Image1}
                    alt="Local Delivery"
                    className="w-14 h-14 mb-3"
                  />
                  <p className="text-sm font-semibold tracking-wide">
                    LOCAL DELIVERY
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Image2}
                    alt="Local Delivery"
                    className="w-14 h-14 mb-3"
                  />
                  <p className="text-sm font-semibold tracking-wide">SCOOP SHOPS</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Image3}
                    alt="Local Delivery"
                    className="w-14 h-14 mb-3"
                  />
                  <p className="text-sm font-semibold tracking-wide">
                    GROCERY LOCATOR
                  </p>
                </div>
            </div>
    </Publiclayout>
  );
};

export default Like;
