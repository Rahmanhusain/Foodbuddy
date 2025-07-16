import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const indianCities = [
  'Delhi', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Chennai', 'Kolkata',
  'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Indore', 'Chandigarh',
  'Bhopal', 'Kochi',
];

const sliderImages = [
  '/images/burger.jpeg',
  '/images/snacks.jpeg',
  '/images/restaurant.jpeg',
  '/images/pizza.jpeg',
  '/images/dessert.jpeg',
];

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Select Location');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const dropdownRef = useRef(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Slide controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">
          <span className="text-orange-500">Food</span>Buddy
        </div>

        {/* City Dropdown */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          <div
            className="flex items-center text-gray-600 hover:text-orange-500 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{selectedCity}</span>
            <FaChevronDown className="ml-1 text-sm" />
          </div>
          {dropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-2 rounded-md w-48 z-10">
              <ul className="py-2">
                {indianCities.map((city) => (
                  <li
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="text-gray-600 hover:text-orange-500">Home</Link>
          <Link to="/orders" className="text-gray-600 hover:text-orange-500">Orders</Link>
          <Link to="/about" className="text-gray-600 hover:text-orange-500">About</Link>
          <Link to="/login" className="text-gray-600 hover:text-orange-500">Login</Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>
      </header>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mx-auto px-4 mt-4">
        <form onSubmit={handleSearchSubmit} className="flex border rounded overflow-hidden shadow">
          <input
            type="text"
            placeholder="Search food, restaurants, etc..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow p-3 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 hover:bg-orange-600 transition"
          >
            Search
          </button>
        </form>
      </div>

      {/* Image Slider */}
      <div className="relative w-full max-w-4xl mx-auto mt-6 overflow-hidden rounded-lg shadow h-[300px]">
        <div
          className="flex transition-transform duration-500 h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full flex-shrink-0 object-cover h-full"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-orange-100"
          aria-label="Previous Slide"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-orange-100"
          aria-label="Next Slide"
        >
          &#8594;
        </button>
      </div>

      {/* Sidebar (Mobile Nav) */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-xl font-bold">
            <span className="text-orange-500">Food</span>Buddy
          </div>
          <button onClick={() => setSidebarOpen(false)}>
            <FaTimes className="text-2xl text-gray-600" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <Link to="/home" onClick={() => setSidebarOpen(false)} className="text-gray-700 hover:text-orange-500 text-lg block">Home</Link>
          <Link to="/orders" onClick={() => setSidebarOpen(false)} className="text-gray-700 hover:text-orange-500 text-lg block">Orders</Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)} className="text-gray-700 hover:text-orange-500 text-lg block">About</Link>
          <Link to="/login" onClick={() => setSidebarOpen(false)} className="text-gray-700 hover:text-orange-500 text-lg block">Login</Link>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-2">Select Location:</p>
          <ul className="space-y-2">
            {indianCities.map((city) => (
              <li
                key={city}
                onClick={() => {
                  handleCitySelect(city);
                  setSidebarOpen(false);
                }}
                className="cursor-pointer text-sm text-gray-700 hover:text-orange-500"
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
