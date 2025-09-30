import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function RestaurantLocationAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/location");
      setLocations(res.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/location/${editingId}`,
          formData
        );
        setLocations(
          locations.map((loc) => (loc._id === editingId ? res.data : loc))
        );
        setEditingId(null);
      } else {
        const res = await axios.post("http://localhost:5000/api/location", formData);
        setLocations([...locations, res.data]);
      }

      // Reset form
      setFormData({ title: "", description: "", image: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error saving location:", error);
    }
  };

  const handleEdit = (loc) => {
    setFormData({
      title: loc.title,
      description: loc.description,
      image: loc.image,
    });
    setEditingId(loc._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this location?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/location/${id}`);
      setLocations(locations.filter((loc) => loc._id !== id));
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Restaurant Locations Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-500">
              Dashboard
            </a>{" "}
            / Locations
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add Location
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit Location" : "Add Location"}
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
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB] col-span-2"
                  required
                />
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
                    setFormData({ title: "", description: "", image: "" });
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
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.length > 0 ? (
              locations.map((loc) => (
                <tr
                  key={loc._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-6">{loc.title}</td>
                  <td className="px-4 py-6">{loc.description}</td>
                  <td className="px-4 py-6">
                    <img
                      src={loc.image}
                      alt={loc.title}
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(loc)}
                      className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                    >
                      <FaRegEdit className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleDelete(loc._id)}
                      className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                    >
                      <MdDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No locations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RestaurantLocationAdmin;