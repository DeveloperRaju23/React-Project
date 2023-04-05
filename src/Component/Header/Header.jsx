import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BookOpenIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-gray-400   mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-full">
      <div className="relative flex justify-between items-center w-4/5 mx-auto  shadow-lg">
        <div className="text-3xl font-bold ">
          {/* Logo Section  */}
          <Link to="/" className="inline-flex items-center py-4">
            <BookOpenIcon className="w-12 h-12 text-blue-700"></BookOpenIcon>
            <span className="ml-2 tracking-wide text-gray-800">Books</span>
          </Link>
          {/* Navbar Section  */}
        </div>
        <ul className="text-2xl  font-bold tracking-wide space-x-8 lg:flex hidden text-gray-800">
          <NavLink to="/" title="Home">
            Home
          </NavLink>
          <NavLink to="/book" title="Books">
            Books
          </NavLink>
          <NavLink to="/food" title="food">
            Foods
          </NavLink>
          <NavLink to="/product" title="product">
            Product
          </NavLink>
          <NavLink to="/about" title="About">
            About
          </NavLink>
          <NavLink to="/contact" title="Contact">
            Contact
          </NavLink>
        </ul>
        {/* Mobile menu  */}
        <div className="lg:hidden ">
          <button onClick={() => setMenuOpen(true)}>
            <Bars3BottomRightIcon className="w-10 h-10 text-blue-700">
              {" "}
            </Bars3BottomRightIcon>
          </button>
          {menuIsOpen && (
            <div className="absolute top-4 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Link to="/" className="inline-flex items-center py-4">
                    <BookOpenIcon className="w-12 h-12 text-blue-700"></BookOpenIcon>
                    <span className="ml-2 tracking-wide text-gray-800">
                      Books
                    </span>
                  </Link>
                  <div>
                    <button onClick={() => setMenuOpen(false)}>
                      <XMarkIcon className="w-10 h-10 text-blue-700"></XMarkIcon>
                    </button>
                  </div>
                </div>
                <ul className="text-2xl font-bold tracking-wide  flex flex-col text-gray-800">
                  <NavLink className='py-3' to="/" title="Home">
                    Home
                  </NavLink>
                  <NavLink  className='py-3'  to="/book" title="Books">
                    Books
                  </NavLink>
                  <NavLink className='py-3' to="/food" title="food">
                    Foods
                  </NavLink>
                  <NavLink className='py-3' to="/product" title="product">
                    Product
                  </NavLink>
                  <NavLink  className='py-3'  to="/about" title="About">
                    About
                  </NavLink>
                  <NavLink  className='py-3'  to="/contact" title="Contact">
                    Contact
                  </NavLink>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
