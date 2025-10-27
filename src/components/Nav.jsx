import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const Nav = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-3 mt-3 gap-4 lg:gap-0">
      {/* Top Row - Logo & Search (Mobile) */}
      <div className="flex items-center justify-between w-full lg:w-auto lg:flex-shrink-0 order-1 lg:order-none">
        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900'>
            CoursesHub
          </h1>
        </div>
        
        {/* Search - Mobile Only */}
        <div className="lg:hidden flex-shrink-0">
          <Search />
        </div>
      </div>
      
      {/* Center Navigation */}
      <div className="flex-1 flex justify-center order-3 lg:order-none w-full lg:w-auto">
        <div className="rounded-3xl backdrop-blur-md border border-gray-200 shadow-lg w-full max-w-md lg:max-w-none">
          <nav className="px-4 py-3 sm:px-6 sm:py-4">
            <ul className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              <li>
                <Link 
                  to="/" 
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium relative transition-all duration-300 text-gray-700 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/courses" 
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium relative transition-all duration-300 text-gray-700 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link 
                  to="/story" 
                  className="px-3 sm:px-4 py-2 text-sm sm:text-base font-medium relative transition-all duration-300 text-gray-700 hover:text-gray-900 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Story
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Right Search - Desktop Only */}
      <div className="hidden lg:flex flex-shrink-0 order-2 lg:order-none">
        <Search />
      </div>
    </div>
  )
}

export default Nav
