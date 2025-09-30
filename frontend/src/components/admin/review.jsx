import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Reviews() {
  const [showModal, setShowModal] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    rating: "",
    description: "",
    timestamp: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews(res.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
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
          `http://localhost:5000/api/reviews/${editingId}`,
          formData
        );
        setReviews(
          reviews.map((review) =>
            review._id === editingId ? res.data : review
          )
        );
        setEditingId(null);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/reviews",
          formData
        );
        setReviews([...reviews, res.data]);
      }

      setFormData({ name: "", rating: "", description: "", timestamp: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error saving review:", error);
    }
  };

  const handleEdit = (review) => {
    setFormData({
      name: review.name,
      rating: review.rating,
      description: review.description,
      timestamp: review.timestamp,
    });
    setEditingId(review._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      setReviews(reviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Reviews Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-600">
              Dashboard
            </a>{" "}
            / Reviews
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add Review
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit Review" : "Add Review"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={formData.rating}
                  onChange={handleChange}
                  placeholder="Rating (0-5)"
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
                <input
                  name="timestamp"
                  type="datetime-local"
                  value={formData.timestamp}
                  onChange={handleChange}
                  placeholder="Timestamp"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB] col-span-2"
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
                    setFormData({
                      name: "",
                      rating: "",
                      description: "",
                      timestamp: "",
                    });
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
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Rating</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Timestamp</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((review) => (
                <tr
                  key={review._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-6">{review.name}</td>
                  <td className="px-4 py-6">{review.rating} ⭐</td>
                  <td className="px-4 py-6">{review.description}</td>
                  <td className="px-4 py-6">
                    {new Date(review.timestamp).toLocaleString()}
                  </td>
                  <td className="px-4 py-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(review)}
                      className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                    >
                      <FaRegEdit className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                    >
                      <MdDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reviews;
