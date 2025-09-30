import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import { FcGoogle } from "react-icons/fc"; 
import { Lock, Mail } from "lucide-react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token & role in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // Redirect based on role
        if (data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again.");
    }
  };

  return (
    <PublicLayout>
      <div
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="bg-[#FAF2E7] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-[#FAF2E7] ">
          <h1 className="text-2xl font-bold text-center mb-6">
            Welcome Back
          </h1>
          <p className="text-sm text-center mb-6">
            Login to your account
          </p>

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-3 top-3  text-red-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 border bg-gray-800 text-white rounded-lg focus:ring-2 outline-none placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3  text-red-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 outline-none placeholder-gray-500"
              />
            </div>
            <Link to="/forget-password">
              <span className="text-sm underline hover:text-red-400">Forget Password</span>
            </Link>
            <button
              type="submit"
              className="mt-2 w-full hover:bg-red-300 hover:text-white p-3 border rounded-xl transition font-medium cursor-pointer"
            >
              Log In
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-sm">OR</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <button
            onClick={() => alert("Google Sign-in integration here")}
            className="flex items-center justify-center w-full border border-gray-600 bg-blue-200 p-3 cursor-pointer rounded-lg hover:bg-gray-700 transition"
          >
            <FcGoogle className="mr-2 text-xl" />
            <span className="font-medium">
              Sign in with Google
            </span>
          </button>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-red-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}

export default LoginPage;