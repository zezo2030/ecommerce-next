"use client";
import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="border-b border-gray-200 bg-white relative z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="md:hidden rounded-md p-2 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-1 md:flex-none flex justify-center md:justify-start">
              <Link href="/" className="text-2xl font-extrabold tracking-tight">
                SHOP.CO
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <Link
                href="/shop"
                className="flex items-center gap-1 hover:text-gray-900"
              >
                Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.25 8.29a.75.75 0 0 1-.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="/sale" className="hover:text-gray-900">
                On Sale
              </Link>
              <Link href="/new-arrivals" className="hover:text-gray-900">
                New Arrivals
              </Link>
              <Link href="/brands" className="hover:text-gray-900">
                Brands
              </Link>
            </nav>

            {/* Desktop Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="h-10 w-full rounded-full bg-gray-100 pl-10 pr-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
                  aria-hidden="true"
                >
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="11" cy="11" r="7" />
                </svg>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-2">
              {/* Mobile search icon */}
              <button
                type="button"
                aria-label="Search"
                className="md:hidden rounded-full p-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M21 21l-4.35-4.35"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="11" cy="11" r="7" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Cart"
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h9l3-8H6.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="19" r="1.5" />
                  <circle cx="17" cy="19" r="1.5" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Account"
                className="rounded-full p-2 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
                  <path d="M4 20a8 8 0 1 1 16 0" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            onClick={toggleMobileMenu}
          ></div>
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
              <Link
                href="/"
                className="text-xl font-extrabold tracking-tight"
                onClick={toggleMobileMenu}
              >
                SHOP.CO
              </Link>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="rounded-md p-2 hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-4 py-6">
              <div className="space-y-6">
                {/* Main Navigation */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/shop"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Shop
                    </Link>
                    <Link
                      href="/sale"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      On Sale
                    </Link>
                    <Link
                      href="/new-arrivals"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      New Arrivals
                    </Link>
                    <Link
                      href="/brands"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Brands
                    </Link>
                  </div>
                </div>

                {/* Theme Links */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Collections
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/men"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Men's Fashion
                    </Link>
                    <Link
                      href="/women"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Women's Fashion
                    </Link>
                    <Link
                      href="/kids"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Kids' Fashion
                    </Link>
                    <Link
                      href="/accessories"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Accessories
                    </Link>
                    <Link
                      href="/shoes"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Shoes
                    </Link>
                  </div>
                </div>

                {/* Account Links */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Account
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/account"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      My Account
                    </Link>
                    <Link
                      href="/orders"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Order History
                    </Link>
                    <Link
                      href="/wishlist"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Wishlist
                    </Link>
                  </div>
                </div>

                {/* Help Links */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Support
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/help"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Help Center
                    </Link>
                    <Link
                      href="/contact"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/returns"
                      className="block text-base text-gray-600 hover:text-gray-900"
                      onClick={toggleMobileMenu}
                    >
                      Returns & Exchanges
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Search */}
              <div className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="h-12 w-full rounded-full bg-gray-100 pl-12 pr-4 text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="pointer-events-none absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-500"
                  >
                    <path
                      d="M21 21l-4.35-4.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="11" cy="11" r="7" />
                  </svg>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
