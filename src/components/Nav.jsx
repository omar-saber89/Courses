import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import Search from './Search'

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 mt-3 xs:mt-4 sm:mt-4">
      {/* Left Logo */}
      <div className="flex-shrink-0">
        <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl '>
          CoursesHub
        </h1>
      </div>
      
      {/* Center Navigation */}
      <div className="flex-1 flex justify-center">
        <div className="rounded-3xl sm:rounded-4xl backdrop-blur-md border shadow-lg sm:shadow-2xl">
          <nav className="px-3 xs:px-4 sm:px-4 py-3 xs:py-4 sm:py-4">
            <ul className="flex items-center justify-center gap-4 xs:gap-6 sm:gap-8">
              <li>
                <Link 
                  to="/" 
                  className="px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-2 text-sm xs:text-base sm:text-base font-medium relative transition-all duration-300 text-black hover:text-gray-800 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-2 text-sm xs:text-base sm:text-base font-medium relative transition-all duration-300 text-black hover:text-gray-800 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/story" 
                  className="px-2 xs:px-3 sm:px-4 py-1 xs:py-2 sm:py-2 text-sm xs:text-base sm:text-base font-medium relative transition-all duration-300 text-black hover:text-gray-800 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Story
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Right Search */}
      <div className="flex-shrink-0">
        <Search />
      </div>
    </div>
  )
}

export default Nav