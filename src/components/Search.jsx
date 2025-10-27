import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Search courses..." 
        className=" w-[350px] h-[50px] rounded-[50px] pl-12 pr-4 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition duration-700 border"
      />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        className="bi bi-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" 
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </div>
  );
};

export default Search;
