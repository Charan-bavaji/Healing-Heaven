// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-2xl font-bold">Healing Heaven</div>
                <div className="hidden md:flex space-x-9 mx-auto">
                    <a href="#" className="text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white">About</a>
                    <a href="#" className="text-gray-300 hover:text-white">Products</a>
                    <a href="#" className="text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-gray-300 hover:text-white flex items-center"
                        >
                            More <span class="material-symbols-outlined">
                                arrow_drop_down
                            </span>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 left-0 mt-4 w-48 bg-white shadow-lg py-2 rounded-lg z-10">
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 1</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 2</a>
                                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Dropdown Item 3</a>
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="text-gray-300 hover:text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {dropdownOpen && (
                <div className="md:hidden mt-2">
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Home</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">About</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Products</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Services</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Contact</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Dropdown Item 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Dropdown Item 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">Dropdown Item 3</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
