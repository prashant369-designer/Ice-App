import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function HeroBanner() {
  const [showModal, setShowModal] = useState(false);
  const [banners, setBanners] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    maintitle: "",
    description: "",
    button: "",
    images: {
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
    },
  });

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/herobanners");
        setBanners(res.data);
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };
    fetchBanners();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("image")) {
      setFormData({
        ...formData,
        images: { ...formData.images, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/herobanners/${editingId}`,
          formData
        );
        setBanners(banners.map((b) => (b._id === editingId ? res.data : b)));
        setEditingId(null);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/herobanners",
          formData
        );
        setBanners([...banners, res.data]);
      }

      setFormData({
        title: "",
        maintitle: "",
        description: "",
        button: "",
        images: {
          image1: "",
          image2: "",
          image3: "",
          image4: "",
          image5: "",
          image6: "",
        },
      });
      setShowModal(false);
    } catch (err) {
      console.error("Error saving banner:", err);
    }
  };

  const handleEdit = (banner) => {
    setFormData({
      title: banner.title,
      maintitle: banner.maintitle,
      description: banner.description,
      button: banner.button,
      images: banner.images[0],
    });
    setEditingId(banner._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/herobanners/${id}`);
      setBanners(banners.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting banner:", err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Hero Banner Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-500">
              Dashboard
            </a>{" "}
            / Hero Banner
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add Hero Banner
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit Banner" : "Add Hero Banner"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="maintitle"
                  value={formData.maintitle}
                  onChange={handleChange}
                  placeholder="Main Title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="button"
                  value={formData.button}
                  onChange={handleChange}
                  placeholder="Button Text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                />
                {["image1", "image2", "image3", "image4", "image5", "image6"].map(
                  (imgKey, idx) => (
                    <input
                      key={imgKey}
                      name={imgKey}
                      value={formData.images[imgKey]}
                      onChange={handleChange}
                      placeholder={`Image ${idx + 1} URL`}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                    />
                  )
                )}
              </div>
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="submit"
                  className="cursor-pointer border border-pink-500 text-pink-500 px-4 py-2 rounded-md hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out"
                >
                  {editingId ? "Update" : "Submit"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingId(null);
                  }}
                  className="cursor-pointer border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full text-sm text-left border rounded-xl overflow-hidden bg-white shadow my-6">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Main Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Button</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners.length > 0 ? (
              banners.map((banner) => (
                <tr
                  key={banner._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-6">{banner.title}</td>
                  <td className="px-4 py-6">{banner.maintitle}</td>
                  <td className="px-4 py-6">{banner.description}</td>
                  <td className="px-4 py-6">{banner.button}</td>
                  {/* <td className="px-4 py-3">
                    <div className="grid grid-cols-3 gap-2">
                      {Object.values(banner.images[0]).map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`img-${i}`}
                          className="w-14 h-14 object-cover rounded"
                        />
                      ))}
                    </div>
                  </td> */}
                  <td className="px-4 py-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(banner)}
                      className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                    >
                      <FaRegEdit className="w-6 h-6 " />
                    </button>
                    <button
                      onClick={() => handleDelete(banner._id)}
                      className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                    >
                      <MdDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No banners found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HeroBanner;
