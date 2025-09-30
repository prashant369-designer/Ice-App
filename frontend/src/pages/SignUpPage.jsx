import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PublicLayout from "../layouts/PublicLayout";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

// Google Sign-In script loader
const loadGoogleScript = () => {
  return new Promise((resolve) => {
    if (window.google) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "user", // default role
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const initializeGoogle = async () => {
      try {
        await loadGoogleScript();
        
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Make sure to add this to your .env file
            callback: handleGoogleSignUp,
            auto_select: false,
            cancel_on_tap_outside: true
          });
        }
      } catch (error) {
        console.error('Failed to initialize Google Sign-In:', error);
      }
    };

    initializeGoogle();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Signup failed!";
      setMessage(errorMsg);
      if (
        err.response?.status === 409 ||
        errorMsg.toLowerCase().includes("already")
      ) {
        setTimeout(() => navigate("/login"), 1500);
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-Up
  const handleGoogleSignUp = async (response) => {
    setGoogleLoading(true);
    setMessage("");
    
    try {
      const result = await axios.post("http://localhost:5000/api/auth/google", {
        token: response.credential
      });

      // Store user data in localStorage or context
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify({
        _id: result.data._id,
        fullName: result.data.fullName,
        email: result.data.email,
        role: result.data.role,
        profileImage: result.data.profileImage
      }));

      setMessage(" Google signup successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 1500); // or wherever you want to redirect
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Google signup failed!";
      setMessage(` ${errorMsg}`);
    } finally {
      setGoogleLoading(false);
    }
  };

  // Trigger Google Sign-In popup
  const handleGoogleClick = () => {
    if (window.google) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          console.log('Google Sign-In was not displayed or was skipped');
        }
      });
    } else {
      setMessage(" Google Sign-In is not available. Please try again.");
    }
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-[#FAF2E7] backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-[#FAF2E7]">
          <h1 className="text-2xl font-bold text-center mb-6">
            Create Your Account
          </h1>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-red-400" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring-2 outline-none transition placeholder-gray-500"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-red-400" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-xl focus:ring-2  outline-none transition placeholder-gray-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-3 top-3  text-red-400" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-xl  outline-none transition placeholder-gray-500"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="hidden">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border border-gray-700 bg-gray-800 text-white rounded-xl p-2"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full hover:bg-red-300 hover:text-white p-3 border rounded-xl transition font-medium cursor-pointer"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {message && (
            <p className={`text-center mt-4 text-sm ${
              message.includes('') ? 'text-green-400' : 'text-red-400'
            }`}>
              {message}
            </p>
          )}

          <div className="flex items-center my-6">
            <div className="flex-1 h-px "></div>
            <span className="px-3 text-sm">Or continue with</span>
            <div className="flex-1 h-px"></div>
          </div>

          <div className="flex justify-center space-x-4">
            <button 
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-700 text-white hover:bg-blue-800 shadow-md"
              title="Sign up with Facebook (Coming Soon)"
            >
              <FaFacebookF size={20} />
            </button>
            
            <button 
              type="button"
              onClick={handleGoogleClick}
              disabled={googleLoading}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border border-gray-600 shadow-md hover:bg-gray-700 disabled:opacity-50 transition"
              title="Sign up with Google"
            >
              {googleLoading ? (
                <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <FcGoogle size={22} />
              )}
            </button>
            
            <button 
              type="button"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-md"
              title="Sign up with Apple (Coming Soon)"
            >
              <FaApple size={22} />
            </button>
          </div>

          <p className="text-center mt-6 ">
            Already have an account?{" "}
            <a href="/login" className="text-red-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}

export default SignUpPage;