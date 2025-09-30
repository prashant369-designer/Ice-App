import React, { useState } from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Marquee from "react-fast-marquee";
import ContactBg from "../images/contactbgimage.jpg";
import { Mail, Clock, MapPin, Send } from "lucide-react";
import Image1 from "../images/deliveryicon.png";
import Image2 from "../images/scoopice.png";
import Image3 from "../images/homeicon.png";
import Slideimage from "../images/sideimage.svg";

function ContactUs() {
  const items = [
    { type: "text", content: "🍨 Free shipping on orders above $50" },
    { type: "text", content: "Subscribe and get 20% off + FREE shipping 🍨" },
    { type: "text", content: "🍨 Free shipping on orders above $50" },
    { type: "text", content: "Subscribe and get 20% off + FREE shipping 🍨" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* marquee  */}
      <div className="pt-[10px] bg-red-600">
        <Marquee speed={100} gradient={false}>
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="px-5 text-lg text-white">{item.content}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <hr className="border-[var(--primary)] opacity-100 m-0" />
      <Navbar />
      {/* image section  */}
      <div className="relative">
        <img
          src={ContactBg}
          alt="Contact Background"
          className="w-full h-[360px] object-cover brightness-50"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-white text-center">
          Contact Us
        </h1>
        <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-xl text-white">
          Home / Contact Us
        </p>
      </div>
      {/* form  */}
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row gap-10 lg:gap-30">
        {/* Form Section */}
        <div className="lg:w-3/5 w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-6">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <textarea
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message*"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium shadow-md"
            >
              <Send size={18} /> {loading ? "Sending..." : "Post Message"}
            </button>

            {success && <p className="text-green-500 mt-2">{success}</p>}
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8 lg:w-2/5 w-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center">
              <Mail className="text-red-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <p className="font-medium">
                Call Us : (+91) 123456789
              </p>
              <p className="">abcd@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center">
              <Clock className="text-red-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Opening Hours</h4>
              <p>Mon – Fri : 09:30 – 06:30</p>
              <p>Sat – Sun : Holiday</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border flex items-center justify-center">
              <MapPin className="text-red-500" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Our Office</h4>
              <p>C – 108, Noida One Building, Sector 62, UP</p>
            </div>
          </div>
        </div>
      </div>
      {/* map  */}
      <div className="w-full mx-auto">
        <div className="relative h-[400px] lg:h-[800px] w-full overflow-hidden mb-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.246680541373!2d77.36346097437867!3d28.622367984544184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce506afcf5f5d%3A0xe15b28be98e266c9!2sCodeGenIT%20Private%20Limited!5e0!3m2!1sen!2sin!4v1759208967598!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
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
      <Footer />
    </>
  );
}

export default ContactUs;
