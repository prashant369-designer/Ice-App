import React, { useState, useEffect } from "react";
import Navbar from "../components/common/navbar";
import axios from "axios";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const orderData = {
    customer: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      pincode: formData.pincode,
    },
    payment: formData.payment,
    items: cart,
    total: getTotal(),
  };

  try {
    const res = await axios.post("http://localhost:5000/api/orders", orderData);
    alert("Order Placed Successfully!");
    console.log("Order Saved:", res.data);

    // Clear form and cart
    setCart([]);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
      payment: "cod",
    });
  } catch (err) {
    console.error("Error placing order:", err);
    alert("Failed to place order. Please try again.");
  }
};


  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.productId.afterdiscount * item.quantity,
      0
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Checkout</h2>
          </div>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-red-500">
              Dashboard
            </a>{" "}
            / Checkout
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Billing Details</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="Pin Code"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                  required
                />
              </div>

              <input
                type="text"
                name="address"
                placeholder="Full Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400"
                required
              />

              <div>
                <h4 className="font-semibold mb-2">Payment Method</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.payment === "cod"}
                      onChange={handleChange}
                    />
                    Cash on Delivery
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === "card"}
                      onChange={handleChange}
                    />
                    Credit/Debit Card
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={formData.payment === "upi"}
                      onChange={handleChange}
                    />
                    UPI / Netbanking
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
              >
                Place Order
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between text-gray-700"
                >
                  <span>
                    {item.productId.title} (x{item.quantity})
                  </span>
                  <span>
                    ₹{item.productId.afterdiscount * item.quantity}
                  </span>
                </div>
              ))}

              <hr />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{getTotal()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{getTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
