import React, { useState } from "react";
import { NavLink, Link  } from "react-router-dom";
import {FaBarsStaggered, FaXmark} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", tittle: "Cari Lowongan Kerja" },
    { path: "/my-job", tittle: "Pekerjaan Saya" },
    { path: "/salary", tittle: "Jelajahi Gaji" },
    { path: "/post-job", tittle: "Pasang Lowongan Kerja" },
  ];
  return (
    <header className="max-w-screnn-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between item-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
          >
            <path
              d="M0.490356 -0.00976562H29.5097V29.0095H0.490356V-0.00976562Z"
              fill="white"
              fillOpacity="0.4"
            />
            <path
              d="M8.9543 20.5454C10.6238 20.5454 11.9771 19.1921 11.9771 17.5226C11.9771 15.8531 10.6238 14.4998 8.9543 14.4998C7.28483 14.4998 5.93146 15.8531 5.93146 17.5226C5.93146 19.1921 7.28483 20.5454 8.9543 20.5454Z"
              fill="#D9D9D9"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0457 20.5454C22.7151 20.5454 24.0685 19.1921 24.0685 17.5226C24.0685 15.8531 22.7151 14.4998 21.0457 14.4998C19.3762 14.4998 18.0228 15.8531 18.0228 17.5226C18.0228 19.1921 19.3762 20.5454 21.0457 20.5454Z"
              fill="#D9D9D9"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 8.45413C16.6695 8.45413 18.0229 7.10076 18.0229 5.43129C18.0229 3.76182 16.6695 2.40845 15 2.40845C13.3305 2.40845 11.9772 3.76182 11.9772 5.43129C11.9772 7.10076 13.3305 8.45413 15 8.45413Z"
              fill="#D9D9D9"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 26.5911C15 23.2522 12.2932 20.5454 8.95432 20.5454C5.61537 20.5454 2.90863 23.2522 2.90863 26.5911"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.0914 26.5911C27.0914 23.2522 24.3846 20.5454 21.0457 20.5454C17.7068 20.5454 15 23.2522 15 26.5911"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.0457 14.4998C21.0457 11.1609 18.3389 8.4541 15 8.4541C11.6611 8.4541 8.95435 11.1609 8.95435 14.4998"
              stroke="#2F88FF"
              stroke-width="2.41827"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Talenta Nusantara.</span>
        </a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, tittle }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive, }) =>
                  isActive ? "active" : ""
                }
              >
                {tittle}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign and login btn */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to="/login" className="py-2 px-5 border rounded">Masuk</Link>
            <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Daftar</Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>
                }
            </button>
        </div>
      </nav>

      {/* navItems for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navItems.map(({ path, tittle }) => (
            <li key={path} className="text-base text-white first:text-white py-1">
              <NavLink
                to={path}
                className={({ isActive, }) =>
                  isActive ? "active" : ""
                }
              >
                {tittle}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1"><Link to="/login" className="">Masuk</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
