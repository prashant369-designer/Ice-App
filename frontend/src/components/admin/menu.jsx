import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [menus, setMenus] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    main_heading: "",
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/menu");
        setMenus(res.data);
      } catch (err) {
        console.error("Error fetching menus:", err);
      }
    };
    fetchMenus();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/menu/${editingId}`,
          {
            main_heading: formData.main_heading,
            category: [{
              title: formData.title,
              description: formData.description,
              image: formData.imageUrl,
              price: formData.price,
            }],
          }
        );
        setMenus(
          menus.map((menu) =>
            menu._id === editingId ? res.data : menu
          )
        );
        setEditingId(null);
      } else {
        const res = await axios.post("http://localhost:5000/api/menu", {
          main_heading: formData.main_heading,
          category: [{
            title: formData.title,
            description: formData.description,
            image: formData.imageUrl,
            price: formData.price,
          }],
        });
        setMenus([...menus, res.data]);
      }

      setFormData({
        main_heading: "",
        title: "",
        description: "",
        imageUrl: "",
        price: "",
      });
      setShowModal(false);
    } catch (err) {
      console.error("Error saving menu:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this menu?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      setMenus(menus.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Error deleting menu:", err);
    }
  };

  const handleEdit = (menuItem, catItem) => {
    setFormData({
      main_heading: menuItem.main_heading,
      title: catItem.title,
      description: catItem.description,
      imageUrl: catItem.image,
      price: catItem.price,
    });
    setEditingId(menuItem._id);
    setShowModal(true);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            Menus Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-500">
              Dashboard
            </a>{" "}
            / Menus
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add Menu
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit Menu" : "Add Menu"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="main_heading"
                  value={formData.main_heading}
                  onChange={handleChange}
                  placeholder="Main Heading"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Title"
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
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Image URL"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                />
                <input
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
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
                      main_heading: "",
                      title: "",
                      description: "",
                      imageUrl: "",
                      price: "",
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
              <th className="px-4 py-3">Main Heading</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.length > 0 ? (
              menus.map((menuItem) =>
                menuItem.category.map((catItem, index) => (
                  <tr
                    key={`${menuItem._id}-${index}`}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-6">{menuItem.main_heading}</td>
                    <td className="px-4 py-6">{catItem.title}</td>
                    <td className="px-4 py-6">{catItem.description}</td>
                    <td className="px-4 py-6">
                      <img
                        src={catItem.image}
                        alt={catItem.title}
                        className="w-14 h-14 object-cover rounded"
                      />
                    </td>
                    <td className="px-4 py-6">{catItem.price}</td>
                    <td className="px-4 py-6 flex gap-2">
                      <button
                        onClick={() => handleEdit(menuItem, catItem)}
                        className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                      >
                        <FaRegEdit className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => handleDelete(menuItem._id)}
                        className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                      >
                        <MdDelete className="w-6 h-6" />
                      </button>
                    </td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No menus found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Menu;