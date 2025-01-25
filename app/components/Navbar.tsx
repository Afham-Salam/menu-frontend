"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(false); 

  const menuItems = [
    { id: 1, name: "Home" },
    { id: 2, name: "Menu" },
    { id: 3, name: "Make a Reservation" },
    { id: 4, name: "Contact Us" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="flex lg:justify-between justify-center px-24 lg:items-end bg-[#121618] lg:h-20 h-14 w-full">
      {/* Logo Section */}
      <div className="flex items-center gap-4 relative top-9">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="w-[50px] h-[40px] sm:w-12 sm:h-12 lg:w-[70px] lg:h-[70px]"
          />
        </div>
        <div className="lg:flex lg:flex-col leading-none hidden ">
          <p className="text-[34px]">
            <span className="text-[#0796EF]">DEEP</span> NET
          </p>
          <p className="text-[34px] text-[#857878]">SOFT</p>
        </div>
      </div>

      {/* Menu items for large screens */}
      <ul className="hidden lg:flex gap-4 justify-end py-2 sm:hidden">
        {menuItems.map((menuItem) => (
          <li
            key={menuItem.id}
            className={`uppercase leading-custom tracking-custom text-[14px] ${
              menuItem.name === "Menu" ? "text-[#0796EF]" : "text-[#F5f5f5]"
            }`}
          >
            {menuItem.name}
          </li>
        ))}
      </ul>

      <GiHamburgerMenu
        onClick={handleMenuToggle}
        className="lg:hidden text-[#857878] text-2xl absolute right-6 top-6 cursor-pointer"
      />

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-4 py-4 absolute bg-[#121618] w-full h-screen top-11 left-0 text-center z-50">
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              className={`uppercase leading-custom tracking-custom text-[14px] ${
                menuItem.name === "Menu" ? "text-[#0796EF]" : "text-[#F5f5f5]"
              }`}
            >
              {menuItem.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
