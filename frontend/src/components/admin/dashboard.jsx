import React, { useEffect, useState } from "react";
import axios from "axios";
import { TbChartBarPopular } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits, MdOutlineReviews } from "react-icons/md";
import { PiGitlabLogoSimple } from "react-icons/pi";
import { RiMenuSearchLine, RiMapPin2Line } from "react-icons/ri";
import { FaQuestion } from "react-icons/fa";
import { VscCodeReview } from "react-icons/vsc";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AdminDashboard() {
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [premium, setPremium] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [menus, setMenus] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [clientreviews, setClientReviews] = useState([]);
  const [restaurantLocation, setRestaurantLocation] = useState([]);

  // Fetch data functions
  const fetchBanners = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/herobanners");
      setBanners(response.data);
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchPremium = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/premium");
      setPremium(response.data);
    } catch (error) {
      console.error("Error fetching premium products:", error);
    }
  };

  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/reviews");
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/blog");
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchMenus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menu");
      setMenus(response.data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  const fetchFaqs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/faqs");
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching faqs:", error);
    }
  };

  const fetchClientReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/clientview");
      setClientReviews(response.data);
    } catch (error) {
      console.error("Error fetching client reviews:", error);
    }
  };

  const fetchRestaurantLocation = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/location");
      setRestaurantLocation(response.data);
    } catch (error) {
      console.error("Error fetching restaurant locations:", error);
    }
  };

  useEffect(() => {
    fetchBanners();
    fetchCategories();
    fetchPremium();
    fetchReviews();
    fetchBlogs();
    fetchMenus();
    fetchFaqs();
    fetchClientReviews();
    fetchRestaurantLocation();
  }, []);
// for charts view
  const chartData = {
    labels: [
      "Banners",
      "Categories",
      "Products",
      "Reviews",
      "Blogs",
      "Menus",
      "FAQs",
      "Client Reviews",
      "Locations",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          banners.length,
          categories.length,
          premium.length,
          reviews.length,
          blogs.length,
          menus.length,
          faqs.length,
          clientreviews.length,
          restaurantLocation.length,
        ],
        backgroundColor: "rgba(236, 72, 153, 0.6)",
        borderColor: "rgba(236, 72, 153, 1)",
        borderWidth: 1,
      },
    ],
  };
//charts options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Dashboard Overview" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "Count" } },
      x: { title: { display: true, text: "Entities" } },
    },
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-8 h-screen  ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Admin Dashboard
            </h2>
            <p className="text-gray-500 text-sm">
              <a href="/dashboard" className="hover:underline text-pink-500">
                Dashboard
              </a>{" "}
              / Overview
            </p>
          </div>

          <section className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Data Overview
            </h3>
            <div className="h-96">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                icon: <TbChartBarPopular className="h-10 w-10 text-pink-600" />,
                title: "Banners",
                count: banners.length,
              },
              {
                icon: <BiCategory className="h-10 w-10 text-pink-600" />,
                title: "Categories",
                count: categories.length,
              },
              {
                icon: (
                  <MdProductionQuantityLimits className="h-10 w-10 text-pink-600" />
                ),
                title: "Products",
                count: premium.length,
              },
              {
                icon: <MdOutlineReviews className="h-10 w-10 text-pink-600" />,
                title: "Reviews",
                count: reviews.length,
              },
              {
                icon: <PiGitlabLogoSimple className="h-10 w-10 text-pink-600" />,
                title: "Blogs",
                count: blogs.length,
              },
              {
                icon: <RiMenuSearchLine className="h-10 w-10 text-pink-600" />,
                title: "Menus",
                count: menus.length,
              },
              {
                icon: <FaQuestion className="h-10 w-10 text-pink-600" />,
                title: "FAQs",
                count: faqs.length,
              },
              {
                icon: <VscCodeReview className="h-10 w-10 text-pink-600" />,
                title: "Client Reviews",
                count: clientreviews.length,
              },
              {
                icon: <RiMapPin2Line className="h-10 w-10 text-pink-600" />,
                title: "Locations",
                count: restaurantLocation.length,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center"
              >
                <div className="p-3 bg-pink-100 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-700 mt-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Available: {item.count}
                </p>
              </div>
            ))}
          </div>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">Banners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {banners.map((banner) => (
                <div
                  key={banner._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-700">{banner.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {banner.description}
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {banner.images[0] &&
                      Object.values(banner.images[0])
                        .filter((img) => typeof img === "string")
                        .slice(0, 3)
                        .map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Banner ${idx}`}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                        ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">
              Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                  style={{ backgroundColor: cat.backgroundColor }}
                >
                  <h3 className="font-semibold text-gray-700">{cat.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {cat.description}
                  </p>
                  <img
                    src={cat.mainimage}
                    alt={cat.title}
                    className="w-full h-28 object-contain mt-2 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">
              Premium Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {premium.map((prod) => (
                <div
                  key={prod._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-700 mt-2">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {prod.description}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-sm text-gray-500 line-through">
                      ₹{prod.price}
                    </p>
                    <p className="text-lg font-bold text-green-600">
                      ₹{prod.afterdiscount}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-700 mt-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {blog.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    By {blog.createdBy}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">Menus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menus.map((menu) => (
                <div
                  key={menu._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <img
                    src={menu.category[0]?.image}
                    alt={menu.category[0]?.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-700 mt-2">
                    {menu.category[0]?.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {menu.category[0]?.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Price: {menu.category[0]?.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">
              Customer Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((rev) => (
                <div
                  key={rev._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-700">{rev.name}</h3>
                  <p className="text-yellow-500 mt-1">⭐ {rev.rating}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {rev.description}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(rev.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">FAQs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-700">{faq.question}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">
              Client Reviews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientreviews.map((client) => (
                <div
                  key={client._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <img
                    src={client.image}
                    alt={client.heading}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-700 mt-2">
                    {client.heading}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {client.message}
                  </p>
                  <p className="text-yellow-500 mt-1">⭐ {client.rating}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-cyan-600 mb-4">
              Restaurant Locations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantLocation.map((location) => (
                <div
                  key={location._id}
                  className="bg-white p-4 rounded-xl shadow hover:shadow-md transition-all"
                >
                  <img
                    src={location.image}
                    alt={location.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                  <h3 className="font-semibold text-gray-700 mt-2">
                    {location.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {location.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;