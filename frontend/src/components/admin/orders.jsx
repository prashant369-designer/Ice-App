import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";

function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data.orders);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/orders/${id}`, { status });
      setOrders((prev) =>
        prev.map((order) => (order._id === id ? res.data.order : order))
      );
      alert("Order status updated!");
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
    }
  };

  const deleteOrder = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/orders/${id}`);
      setOrders((prev) => prev.filter((order) => order._id !== id));
      alert("Order deleted successfully!");
    } catch (err) {
      console.error("Error deleting order:", err);
      alert("Failed to delete order");
    }
  };

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Orders Management
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Customer
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Items
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Total
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Payment
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Status
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Date
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-t border-gray-200 hover:bg-gray-50"
                  >
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {order.customer.name}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {order.customer.email}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      <ul className="list-disc list-inside">
                        {order.items.map((item) => (
                          <li key={item._id}>
                            {item.title} (x{item.quantity})
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-800">
                      ₹{order.total}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {order.payment}
                    </td>
                    <td className="py-4 px-4 text-sm">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          order.status === "pending"
                            ? "bg-yellow-200 text-yellow-800"
                            : order.status === "completed"
                            ? "bg-green-200 text-green-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-700">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="py-4 px-4 text-sm flex items-center gap-2">
                      <select
                        value={order.status}
                        onChange={(e) => updateStatus(order._id, e.target.value)}
                        className="border rounded-lg p-1 text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                      <button
                        onClick={() => deleteOrder(order._id)}
                        className="cursor-pointer text-red-600 hover:text-red-700 px-2 py-1 rounded transition-colors"
                        title="Delete Order"
                      >
                        <MdDeleteOutline size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length > ordersPerPage && (
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

export default AdminOrders;
