import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-18 lg:bottom-4 right-6 bg-red-600 text-white p-3 pt-4 rounded-full shadow-lg hover:bg-red-700 transition duration-300 cursor-pointer"
        >
          <ArrowUp size={20} className="ml-1" />
          TOP
        </button> 
      )}
    </>
  );
}

export default ScrollToTopButton;
