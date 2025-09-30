import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "../components/common/privateRoute";

// Layouts
import AdminLayout from "../layouts/AdminLayout";

// Public pages
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CartPage from "../pages/cartpage";
import LikePage from "../pages/likepage";
import Search from "../pages/search";
import ContactUs from "../pages/ContactUs";
import Checkout from "../pages/checkout";
import ForgetPassword from "../pages/forget-password";

// Admin pages
import Dashboard from "../components/admin/dashboard";
import HeroBanner from "../components/admin/Herobanner";
import Category from "../components/admin/category";
import Premium from "../components/admin/premium";
import Blog from "../components/admin/blog";
import Menu from "../components/admin/menu";
import Faq from "../components/admin/faq";
import Clientsview from "../components/admin/clientsview";
import RestaurantLoc from "../components/admin/restautrantlocation";
import Review from "../components/admin/review";
import Setting from "../components/admin/setting";
import Wallet from "../components/admin/walletpage";
import Enquiry from "../components/admin/enquiry";
import Orders from "../components/admin/orders";

//common to all
import MobileMenu from "../components/common/mobileMenu";

function App() {
  return (
    <>
    <MobileMenu/>
    
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/like" element={<LikePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<HeroBanner />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="herobanner" element={<HeroBanner />} />
          <Route path="category" element={<Category />} />
          <Route path="premium" element={<Premium />} />
          <Route path="blog" element={<Blog />} />
          <Route path="menu" element={<Menu />} />
          <Route path="faq" element={<Faq />} />
          <Route path="clientsview" element={<Clientsview />} />
          <Route path="restautrantlocation" element={<RestaurantLoc />} />
          <Route path="review" element={<Review />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="setting" element={<Setting />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
