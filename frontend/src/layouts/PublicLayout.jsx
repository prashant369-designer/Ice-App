// src/layouts/PublicLayout.jsx
import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  );
}

export default PublicLayout;
