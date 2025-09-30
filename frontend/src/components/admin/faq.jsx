import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

function Faq() {
  const [showModal, setShowModal] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [formData, setFormData] = useState({ question: "", answer: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/faqs");
      setFaqs(res.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
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
          `http://localhost:5000/api/faqs/${editingId}`,
          formData
        );
        setFaqs(faqs.map((faq) => (faq._id === editingId ? res.data : faq)));
        setEditingId(null);
      } else {
        const res = await axios.post("http://localhost:5000/api/faqs", formData);
        setFaqs([...faqs, res.data]);
      }

      setFormData({ question: "", answer: "" });
      setShowModal(false);
    } catch (error) {
      console.error("Error saving FAQ:", error);
    }
  };

  const handleEdit = (faq) => {
    setFormData({ question: faq.question, answer: faq.answer });
    setEditingId(faq._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this FAQ?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq._id !== id));
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            FAQs Management
          </h2>
          <p className="text-gray-500 text-sm">
            <a href="/dashboard" className="hover:underline text-pink-500">
              Dashboard
            </a>{" "}
            / FAQs
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="cursor-pointer mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all font-semibold"
        >
          + Add FAQ
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                {editingId ? "Edit FAQ" : "Add FAQ"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="Question"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
                  required
                />
                <input
                  name="answer"
                  value={formData.answer}
                  onChange={handleChange}
                  placeholder="Answer"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
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
                    setFormData({ question: "", answer: "" });
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
              <th className="px-4 py-3">Question</th>
              <th className="px-4 py-3">Answer</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <tr
                  key={faq._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-6">{faq.question}</td>
                  <td className="px-4 py-6">{faq.answer}</td>
                  <td className="px-4 py-6 flex gap-2">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="cursor-pointer btn-icon text-green-500 hover:text-green-600"
                    >
                      <FaRegEdit className="w-6 h-6" />
                    </button>
                    <button
                      onClick={() => handleDelete(faq._id)}
                      className="cursor-pointer btn-icon text-red-500 hover:text-red-600"
                    >
                      <MdDelete className="w-6 h-6" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No FAQs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Faq;