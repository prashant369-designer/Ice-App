import React, { useEffect, useState } from "react";
import axios from "axios";
import Publiclayout from "../layouts/PublicLayout";
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCart(cart.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.productId.afterdiscount * item.quantity,
      0
    );
  };

  return (
    <Publiclayout>
      <section className="max-w-7xl mx-auto py-10 px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-red-500 italic">
            Your Cart items
          </h2>
          <p className="text-gray-600 mt-2">
            Review your items before checkout
          </p>
        </div>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Your cart is empty. Start shopping!
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="overflow-x-auto bg-white shadow rounded-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700 text-sm">
                      <th className="p-4">Product</th>
                      <th className="p-4 text-center">Price</th>
                      <th className="p-4 text-center">Quantity</th>
                      <th className="p-4 text-center">Subtotal</th>
                      <th className="p-4 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-4 flex items-center gap-4">
                          <img
                            src={item.productId.image}
                            alt={item.productId.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {item.productId.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.productId.category}
                            </p>
                          </div>
                        </td>

                        <td className="p-4 text-center text-gray-700 font-medium">
                          ₹{item.productId.afterdiscount}
                        </td>

                        <td className="p-4 text-center">{item.quantity}</td>

                        <td className="p-4 text-center font-bold text-red-500">
                          ₹{item.productId.afterdiscount * item.quantity}
                        </td>

                        <td className="p-4 text-center">
                          <button
                            onClick={() => handleRemove(item._id)}
                            className="cursor-pointer bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg transition-colors"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white shadow rounded-2xl p-6 h-fit">
              <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Subtotal</span>
                <span>₹{getTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-2">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr className="my-3" />
              <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
                <span>Total</span>
                <span>₹{getTotal()}</span>
              </div>
              <a href="/checkout">
              <button 
              className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors duration-300">
                Proceed to Checkout
              </button>
              </a>
            </div>
          </div>
        )}
      </section>
    </Publiclayout>
  );
};

export default Cart;
