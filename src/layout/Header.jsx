import React, { useEffect, useState } from "react";
import { InputStore } from "../store/inputs.store";
import { useGetAllUsers } from "../services/user.service";

function Header() {
  const { data } = useGetAllUsers();
  const {
    searchTerm,
    setSearchTerm,
    selectedCity,
    setSelectedCity,
    showFavourites,
    setShowFavourites,
    clearFilters,
  } = InputStore();
  const [city, setCity] = useState([]);

  useEffect(() => {
    if (data) {
      const cities = [...new Set((data ?? []).map((u) => u.address.city))];
      setCity(cities);
    }
  }, [data]);

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        User Directory
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search users by name, username, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" className="bg-gray-800">
            All Cities
          </option>
          {city.map((item) => (
            <option key={item} value={item} className="bg-gray-800">
              {item}
            </option>
          ))}
        </select>
        <button
          onClick={() => setShowFavourites(!showFavourites)}
          className={` bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill={showFavourites ? "red" : "none"}
            stroke={showFavourites ? "none" : "currentColor"}
            strokeWidth="2"
            className="transition-all duration-200"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Favourites
        </button>
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Header;
