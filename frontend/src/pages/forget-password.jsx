import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";

function ForgetPassword() {
  const [email, setEmail] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert("Old Password Send successfully!");
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (err) {
    console.error(err);
    alert("Error connecting to server.");
  }
};

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-[#00B8DB] p-3 rounded-full">
              <LockKeyhole className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-3">
              Forgot Password?
            </h2>
            <p className="text-gray-500 text-sm text-center mt-1">
              Enter your registered email and update your password.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB]"
              />
            </div>
            
            <button
              type="submit"
              className="cursor-pointer w-full bg-[#00B8DB] text-white py-2 px-4 rounded-lg hover:bg-[#0094ad] transition"
            >
             Send Reset Link
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <Link
                to="/login"
                className="text-[#00B8DB] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default ForgetPassword;
