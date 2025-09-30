import React from "react";
import { TbChartBarPopular } from "react-icons/tb";
import Credit from "../../images/creditcardimage-removebg-preview.png";

function WalletPage() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-xl mb-2 sm:mb-0">Wallet</h2>
        <p className="text-gray-600">Admin / Wallet</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 my-6">
        <div className="flex-1 bg-white rounded-lg p-4 overflow-x-auto">
          <h1 className="text-xl font-semibold mb-4">Transaction History</h1>

          <div className="hidden md:grid grid-cols-5 py-3 text-center font-bold border-b">
            <h1>Name</h1>
            <h1>Type</h1>
            <h1>Date</h1>
            <h1>Status</h1>
            <h1>Amount</h1>
          </div>

          {[
            { name: "Prashant", type: "Choco", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$1100" },
            { name: "Abhi", type: "Shop", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$450" },
            { name: "Nirmay", type: "Food", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$950" },
            { name: "Shivam", type: "Shopping", date: "21/01/2025", status: "Refund", color: "text-yellow-600", amount: "$199" },
            { name: "Marni", type: "Pink", date: "21/01/2025", status: "Cancel", color: "text-red-600", amount: "$590" },
            { name: "Happy", type: "Food", date: "21/01/2025", status: "Cancel", color: "text-red-600", amount: "$210" },
            { name: "Shivvu", type: "Food", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$459" },
            { name: "Massey", type: "Ice", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$999" },
            { name: "Prakash", type: "Choco", date: "21/01/2025", status: "Refund", color: "text-yellow-600", amount: "$123" },
            { name: "Yash", type: "Vanilla", date: "21/01/2025", status: "Paid", color: "text-green-600", amount: "$500" },
          ].map((txn, i) => (
            <div
              key={i}
              className="grid grid-cols-2 md:grid-cols-5 py-3 border-b text-center gap-4 md:gap-0"
            >
              <h1>{txn.name}</h1>
              <h1>{txn.type}</h1>
              <h1 className="hidden md:block">{txn.date}</h1>
              <h1 className={`${txn.color} hidden md:block`}>{txn.status}</h1>
              <h1 className="font-semibold">{txn.amount}</h1>

              <div className="col-span-2 flex justify-between text-sm text-gray-600 md:hidden">
                <span>{txn.date}</span>
                <span className={txn.color}>{txn.status}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3 bg-white rounded-lg p-4">
          <h1 className="text-xl font-semibold mb-4">Your Balance</h1>
          <img src={Credit} alt="credit card" className="mx-auto mb-8 w-48 sm:w-64" />

          <div className="flex flex-col bg-white p-6 border border-gray-300 text-center rounded-xl mb-4">
            <TbChartBarPopular className="mx-auto h-12 w-12 text-red-800 rounded-full p-2 bg-pink-100" />
            <h3 className="text-lg font-semibold mt-2">Earning Amounts</h3>
            <p className="text-xl font-bold mt-1">$54,657.67</p>
          </div>

          <div className="flex flex-col bg-white p-6 border border-gray-300 text-center rounded-xl">
            <TbChartBarPopular className="mx-auto h-12 w-12 text-red-800 rounded-full p-2 bg-pink-100" />
            <h3 className="text-lg font-semibold mt-2">Selling Amounts</h3>
            <p className="text-xl font-bold mt-1">$32,245.99</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WalletPage;
