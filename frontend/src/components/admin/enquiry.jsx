import React, { useState, useEffect } from "react";
import axios from "axios";

function Enquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [enquiriesPerPage] = useState(5);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/enquiry");
      setEnquiries(response.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/enquiry/${id}`);
      setEnquiries(enquiries.filter((enquiry) => enquiry._id !== id));
      alert("Enquiry deleted successfully!");
    } catch (error) {
      console.error("Error deleting enquiry:", error);
      alert("Failed to delete enquiry.");
    }
  };

  const indexOfLastEnquiry = currentPage * enquiriesPerPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - enquiriesPerPage;
  const currentEnquiries = enquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);
  const totalPages = Math.ceil(enquiries.length / enquiriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Enquiry Management</h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Phone</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Message</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Product</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Price</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentEnquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-700">{enquiry.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{enquiry.email}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{enquiry.number}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">{enquiry.message}</td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <img
                          src={enquiry.productId?.image}
                          alt={enquiry.productId?.title}
                          className="w-12 h-12 object-cover rounded mr-2"
                        />
                        <span>{enquiry.productId?.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      <span>{enquiry.productId?.price}</span>
                      {enquiry.productId?.afterdiscount && (
                        <span className="ml-2 line-through text-red-500">
                          {enquiry.productId?.afterdiscount}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-sm ">
                      <button
                        onClick={() => handleDelete(enquiry._id)}
                        className="text-red-600 hover:text-red-800 cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {enquiries.length > enquiriesPerPage && (
            <div className="mt-6 flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white cursor-pointer"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
