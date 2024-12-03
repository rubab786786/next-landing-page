"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-zinc-50 py-4 dark:bg-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl text-black dark:text-white">
            <img src="/images/logo.svg" alt="Logo" className="h-8" />
          </a>

          {/* Menu (Visible on large screens and centered) */}
          <div className="hidden lg:flex flex-grow justify-center mt-2 font-medium text-lg">
            <ul className="flex space-x-6 items-center">
              <li>
                <a
                  href="/#"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-looks"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  How It Looks
                </a>
              </li>
              <li>
                <a
                  href="/#how-it-works"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#ser"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  Our Services{" "}
                </a>
              </li>
              <li>
                <a
                  href="#contact1"
                  className="text-black dark:text-white hover:text-[#e83a3d]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side (Sign In and Sign Up Buttons) */}
          <div className="hidden lg:flex space-x-4 items-center font-medium text-lg">
            <a
              href="https://webapp.ufund.online/login"
              target="_blank"
              className="text-black dark:text-white hover:text-[#e83a3d] flex items-center"
            >
              <img
                loading="lazy"
                src="/images/Lock.svg"
                alt="Lock Icon"
                className="brix---link-icon-right mr-2" // Adding margin-right to separate image and text
              />
              Sign In
            </a>
            <a
              href="https://webapp.ufund.online/login"
              target="_blank"
              className="bg-gradient-to-r from-[#841524] to-[#e83a3d] text-white px-6 py-2 hover:bg-gradient-to-l transition duration-300"
              style={{ color: "white" }}
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Icon (Visible on small screens) */}
          <button
            className="lg:hidden text-black dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        {/* Menu (Visible on small screens when toggled) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden mt-4 font-medium text-lg`}
        >
          <ul className="flex flex-col space-y-4 items-center mr-4">
            {/* Centered items */}
            <li>
              <a
                href="/#"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#how-it-looks"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                How It Looks
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#ser"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#contact1"
                className="text-black dark:text-white hover:text-[#e83a3d]"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex flex-col space-y-4 mt-6 items-center">
            <a
              href="https://webapp.ufund.online/login"
              target="_blank"
              className="text-black dark:text-white hover:text-[#e83a3d] flex items-center"
            >
              <img
                loading="lazy"
                src="/images/Lock.svg"
                alt="Lock Icon"
                className="brix---link-icon-right mr-2"
              />
              Sign In
            </a>
            <a
              href="https://webapp.ufund.online/login"
              target="_blank"
              className="bg-gradient-to-r from-[#841524] to-[#e83a3d] text-white px-6 py-2 hover:bg-gradient-to-l transition duration-300"
              style={{ color: "white" }}
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
