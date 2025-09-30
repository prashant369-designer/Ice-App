import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Category() {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    mainimage: "",
    btn: "",
    backgroundColor: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/category");
        setCategory(res.data);
      } catch (err) {
        console.error("Error fetching category:", err);
      }
    };
    fetchCategory();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/category/${editingId}`,
          formData
        );
        setCategory(
          category.map((cat) => (cat._id === editingId ? res.data : cat))
        );
        setEditingId(null);
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/category",
          formData
        );
        setCategory([...category, res.data]);
      }

      setFormData({
        title: "",
        description: "",
        mainimage: "",
        btn: "",
        backgroundColor: "",
      });
      setShowModal(false);
    } catch (err) {
      console.error("Error saving category:", err);
    }
  };

  const handleEdit = (cat) => {
    setFormData({
      title: cat.title,
      description: cat.description,
      mainimage: cat.mainimage,
      btn: cat.btn,
      backgroundColor: cat.backgroundColor,
    });
    setEditingId(cat._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;
    try {
      await axios.delete(`http://localhost:5000/api/category/${id}`);
      setCategory(category.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Category Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-500">
              Dashboard
            </a>{" "}
            / Category
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add Category
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit Category" : "Add Category"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <input
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <input
                  name="mainimage"
                  value={formData.mainimage}
                  onChange={handleChange}
                  placeholder="Main Image URL"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  name="btn"
                  value={formData.btn}
                  onChange={handleChange}
                  placeholder="Button Text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <input
                  name="backgroundColor"
                  value={formData.backgroundColor}
                  onChange={handleChange}
                  placeholder="Background Color"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
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
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Main Image</th>
              <th className="px-4 py-3">Button</th>
              <th className="px-4 py-3">Bg Color</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.length > 0 ? (
              category.map((cat, idx) => (
                <tr
                  key={cat._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-6">{idx + 1}</td>
                  <td className="px-4 py-6">{cat.title}</td>
                  <td className="px-4 py-6">{cat.description}</td>
                  <td className="px-4 py-6">
                    <img
                      src={cat.mainimage}
                      alt=""
                      className="w-14 h-14 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-6">{cat.btn}</td>
                  <td className="px-4 py-6">{cat.backgroundColor}</td>
                  <td className="px-4 py-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                    >
                      <FaRegEdit className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                    >
                      <MdDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
