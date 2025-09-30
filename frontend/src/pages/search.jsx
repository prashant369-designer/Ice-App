import React, { useState } from "react";
import { Search } from "lucide-react";
import PublicLayout from "../layouts/PublicLayout";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch API
  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:5000/api/premium/search/${query}`);
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while searching");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      <div className="flex items-center justify-center my-10 gap-2 ">
        <input
          type="search"
          placeholder="Enter name of ice-cream"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 w-full md:w-1/3 lg:w-1/3 mx-4 lg:mx-0 outline-none border border-red-500 rounded-full"
        />
        <button
          onClick={handleSearch}
          className="cursor-pointer px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-full flex  items-center gap-2 hidden lg:flex "
        >
          <Search size={20} /> Search Items
        </button>
          
      </div>
      <div className="items-center justify-center my-6 gap-2 flex lg:hidden  ">
        <button
          onClick={handleSearch}
          className="cursor-pointer px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-full flex items-center gap-2 "
        >
          <Search size={20} /> Search Items
        </button>
          
      </div>

      {loading && <p className="text-center text-gray-600">Searching...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="container max-w-3xl mx-auto px-6 rounded-xl p-3 mb-10">
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item._id}
              className="items-center justify-between p-4 bg-white grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 border border-red-500 rounded-lg shadow-sm"
            >
              <div className="w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-cover rounded"
                />
              </div>
              <div>
                <h3 className="font-semibold text-center mt-4">
                  <span>Ice-cream Name: </span> {item.title}
                </h3>
                <p className="font-bold text-center mt-2">
                  <span>Price: </span> ₹{item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No items found</p>
        )}
      </div>
    </PublicLayout>
  );
}

export default SearchPage;
