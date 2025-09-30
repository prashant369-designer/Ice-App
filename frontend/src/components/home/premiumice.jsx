import React, { useEffect, useState } from "react";
import { MoveRight, Handbag, Heart, Eye, Shuffle } from "lucide-react";
import axios from "axios";
import slideImage from "../../images/sideimage.svg";

const PremiumIce = () => {
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const [viewProduct, setViewProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});
  const [cartProducts, setCartProducts] = useState({});

  const [enquiry, setEnquiry] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/premium/");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart", {
        productId,
        quantity: 1,
      });
      console.log("Added to cart:", res.data);
      alert("Product added to cart!");
      setCartProducts((prev) => ({
        ...prev,
        [productId]: !prev[productId],
      }));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleAddToLike = async (productId) => {
    try {
      const res = await axios.post("http://localhost:5000/api/like", {
        productId,
        quantity: 1,
      });
      console.log("Added to like:", res.data);
      setLikedProducts((prev) => ({
        ...prev,
        [productId]: !prev[productId],
      }));
    } catch (error) {
      console.error("Error adding to liked:", error);
    }
  };

  const handleChange = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!modalProduct) return;

    try {
      const res = await axios.post("http://localhost:5000/api/enquiry/", {
        productId: modalProduct._id,
        name: enquiry.name,
        email: enquiry.email,
        number: enquiry.number,
        message: enquiry.message,
      });

      console.log("Enquiry submitted:", res.data);
      alert("Your enquiry has been submitted!");

      setEnquiry({ name: "", email: "", number: "", message: "" });
      setModalProduct(null);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-pink-100 ">
      <div className="max-w-7xl mx-2 lg:mx-20 md:mx-20 sm:mx-2 py-16 px-6 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-1 gap-8 relative">
          <div>
            <h2 className="text-4xl md:text-7xl lg:text-6xl sm:text-6xl font-semibold" style={{fontFamily: "serif"}}>
              Lebagol’s premium <br /> ice cream
            </h2>
          </div>
          <div className="hidden md:block absolute top-0 right-0 w-1/2">
            <img src={slideImage} alt="" />
          </div>
          <div className="ml-10 lg:ml-25 md:ml-25 sm:w-full">
            <h1 className="text-gray-600">
              Check out our creamiest, smoothest and most delicious flavors,{" "}
              <br />
              from classic favorites to original creations. It’s the best ice{" "}
              <br />
              cream you’ll ever taste!
            </h1>
            <a
              href="/"
              className="cursor-pointer group text-black text-lg font-bold mt-4 flex mt-6 ml-10 lg:ml-0"
            >
              <MoveRight className="mr-2 mt-2 text-red-600" size={16} />
              <span className="group-hover:text-red-600 group-hover:underline">View All Flavours</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {products.map((product) => (
            <div key={product._id} className="rounded-lg p-4 transition w-full">
              <div className="relative group">
                <img
                  src={product.image}
                  alt={product.title}
                  onClick={() => setModalProduct(product)}
                  className="cursor-pointer rounded-md w-full h-64 sm:h-72 md:h-70 lg:h-70 object-cover"
                />

                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="cursor-pointer absolute bottom-5 right-6 bg-white text-black p-2 rounded-full shadow-md transition"
                >
                  <Handbag size={22} className={cartProducts[product._id] ? "text-red-500 fill-red-500" : "text-red-500"} />
                </button>
                <button
                  onClick={() => handleAddToLike(product._id)}
                  className="cursor-pointer absolute top-2 right-3 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
                >
                  <Heart size={22} className={likedProducts[product._id] ? "text-red-500 fill-red-500" : "text-gray-500"} />
                </button>
                <button
                  onClick={() => setViewProduct(product)}
                  className="absolute cursor-pointer top-12 right-3 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition"
                >
                  <Eye size={22} className="text-gray-500" />
                </button>
                <button className="absolute cursor-pointer top-22 right-3 bg-white text-black p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition">
                  <Shuffle size={22} className="text-gray-500" />
                </button>
              </div>

              <h1 className="mt-4 font-bold text-center">Rating: {product.rating}</h1>
              <h3 className="mt-1 text-lg font-semibold text-center">{product.title}</h3>
              <h3 className="mt-2 text-sm font-semibold text-center">${product.price}</h3>
            </div>
          ))}
        </div>
      </div>

      {modalProduct && (
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-gray-900/70 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-6 transition-opacity duration-500 ease-out">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-8 sm:p-10 relative transform transition-all duration-500 ease-out scale-95 hover:scale-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalProduct(null)}
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-red-600 text-3xl font-semibold transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="w-full h-50 lg:h-[25rem] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.title}
                  className="object-cover w-full h-full rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between">
                <form className="space-y-2" onSubmit={handleEnquirySubmit}>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    Enquiry Form
                  </h3>
                  <h2 className="text-xl sm:text-2xl text-gray-900 mb-2 tracking-tight">
                    {modalProduct.title}
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Name *
                      </label>
                      <input
                        name="name"
                        value={enquiry.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={enquiry.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium text-gray-700">
                        Contact Number *
                      </label>
                      <input
                        name="number"
                        type="tel"
                        value={enquiry.number}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        required
                        className="px-4 mx-8 py-3 bg-gray-50 border border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={enquiry.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg resize-y"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-4 sm:mt-8">
                    <button
                      type="submit"
                      className="hover:tracking-[1.2px] group cursor-pointer bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalProduct(null)}
                      className="hover:tracking-[1.2px] group cursor-pointer bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {viewProduct && (
        <div className="fixed inset-0 bg-gradient-to-b from-black/70 to-gray-900/70 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-6 transition-opacity duration-500 ease-out">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl p-8 sm:p-10 relative transform transition-all duration-500 ease-out scale-95 hover:scale-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setViewProduct(null)}
              className="cursor-pointer absolute top-4 right-4 text-gray-400 hover:text-red-600 text-3xl font-semibold transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
              <div className="w-full h-50 lg:h-[25rem] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={viewProduct.image}
                  alt={viewProduct.title}
                  className="object-cover w-full h-full rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2 tracking-tight">
                    {viewProduct.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{viewProduct.description}</p>
                  <p className="text-gray-600 mb-4">{viewProduct.content}</p>
                  <p className="text-gray-900 font-semibold mb-2">Price: ${viewProduct.price}</p>
                  <p className="text-gray-900 font-semibold mb-2">Rating: {viewProduct.rating}</p>
                  <p className="text-gray-900 font-semibold mb-2">Category: {viewProduct.category}</p>
                  <p className="text-gray-900 font-semibold mb-2">SKU: {viewProduct.skutype}</p>
                  <p className="text-gray-900 font-semibold mb-2">Discount: {viewProduct.discountPercentage}%</p>
                  <p className="text-gray-900 font-semibold mb-2">Price after discount: ${viewProduct.afterdiscount}</p>
                </div>
                <div className="flex justify-end gap-4 mt-4 sm:mt-8">
                  <button
                    onClick={() => {
                      setViewProduct(null);
                      setModalProduct(viewProduct);
                    }}
                    className="hover:tracking-[1.2px] group cursor-pointer bg-pink-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium"
                  >
                    Make Enquiry
                  </button>
                  <button
                    onClick={() => setViewProduct(null)}
                    className="hover:tracking-[1.2px] group cursor-pointer bg-red-600 text-white px-6 sm:px-8 py-3 rounded-lg font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumIce;