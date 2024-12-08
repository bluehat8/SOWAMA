import React, { useState } from "react";

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-white text-2xl font-bold">
              <a href="#">Scaffold-ETH</a>
            </div>

            {/* Menu Toggle (Mobile) */}
            <button
              className="text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Menu Items */}
            <ul
              className={`md:flex md:space-x-6 md:items-center md:static absolute bg-black md:bg-transparent bg-opacity-90 top-16 md:top-auto left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <li className="text-white hover:text-gray-400 py-2 px-4">
                <a href="#about">About</a>
              </li>
              <li className="text-white hover:text-gray-400 py-2 px-4">
                <a href="#features">Features</a>
              </li>
              <li className="text-white hover:text-gray-400 py-2 px-4">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Scaffold-ETH
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Build Web3 applications effortlessly.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            >
              Get Started
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded"
            >
              Learn More
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
