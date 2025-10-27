import React, { useState, useEffect } from "react";

const Search = ({ onSearch, courses = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCourses([]);
      return;
    }

    const filtered = courses.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCourses(filtered.slice(0, 5));
  }, [searchTerm, courses]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleCourseSelect = (course) => {
    setSearchTerm(course.title);
    setFilteredCourses([]);
    setIsFocused(false);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredCourses([]);
    if (onSearch) {
      onSearch("");
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[350px]">
      {/* Search Input */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search courses..." 
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          className="w-full h-12 sm:h-[50px] rounded-full pl-10 sm:pl-12 pr-8 sm:pr-10 text-sm sm:text-base text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 border border-gray-300 bg-white shadow-sm hover:shadow-md focus:shadow-lg"
        />
        
        {/* Search Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-search absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-500" 
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {isFocused && filteredCourses.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
          {filteredCourses.map((course, index) => (
            <div
              key={course.id || index}
              onClick={() => handleCourseSelect(course)}
              className="p-3 sm:p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-start space-x-3">
                {/* Course Thumbnail */}
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {course.category}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {course.level || "Beginner"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isFocused && searchTerm && filteredCourses.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4 sm:p-6 text-center">
          <svg 
            width="40" 
            height="40" 
            className="mx-auto text-gray-400 mb-2 sm:mb-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-gray-600 text-sm sm:text-base">
            No courses found for "{searchTerm}"
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
            Try different search terms
          </p>
        </div>
      )}
    </div>
  );
};

// Default props
Search.defaultProps = {
  courses: [],
  onSearch: () => {}
};

export default Search;
