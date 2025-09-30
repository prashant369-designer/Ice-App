import React from "react";
import { useState } from "react";
import Image from "../../images/AdminImage.jpeg";

function setting() {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/update-password",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            currentPassword,
            newPassword,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("Password updated successfully!");
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server.");
    }
  };
  return (
    <>
      <div className="flex flex-col gap-8 md:grid md:grid-cols-2 ">
        <div className="bg-white my-4 rounded-lg">
      <h1 className="text-xl font-semibold ml-6 my-4">Setting </h1>

          <div className="flex justify-start my-6 mx-6">
            <img src={Image} className="w-44 rounded-full h-44" alt="" />
          </div>
          <div className="">
            <form action="" className="flex flex-col gap-2 mx-6 ">
              <label htmlFor="" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="border border-gray-300 rounded-md p-2"
              />
              <label htmlFor="" className="text-sm">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="border border-gray-300 rounded-md p-2"
              />
              <label htmlFor="" className="text-sm">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="border border-gray-300 rounded-md p-2"
              />
              <label htmlFor="" className="text-sm">
                Contact Number
              </label>
              <input
                type="number"
                placeholder="Enter Contact Number"
                className="border border-gray-300 rounded-md p-2"
              />
              <label htmlFor="" className="text-sm">
                Address
              </label>
              <input
                type="text"
                placeholder=" Address"
                className="border border-gray-300 rounded-md p-2"
              />
              <button className="cursor-pointer bg-red-500 text-white p-2 w-full lg:w-1/5 rounded-full my-4 font-semibold">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="bg-white my-4 rounded-lg">
          <h1 className="font-semibold text-xl  my-6 mx-6">Change Password</h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-2 mx-6"
          >
            <label htmlFor="" className="text-sm">
              Enter Registered Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
            />
            <label htmlFor="" className="text-sm">
              Enter Old Password
            </label>
            <input
              type="password"
              placeholder="Enter your old password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
            />
            <label htmlFor="" className="text-sm">
              Enter New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
            />
            <button
              type="submit"
              className="my-4 cursor-pointer w-full bg-red-500 font-semibold text-white py-2 px-4 rounded-full hover:bg-red-600 transition"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default setting;
