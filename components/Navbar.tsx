"use client"
import React from "react"
import { useState  } from "react"
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  return (
    <header className="relative w-full mx-auto px-4 sm:px-20 min-height: 49.75rem">
      <div className="flex justify-between items-center">

        {/* Left - Name and Role */}
        <Link to="home" className="flex flex-col cursor-pointer">
          <h2 className="text-2xl font-bold">Pau Martori</h2>
          <h3 className="text-xl text-gray-700">Software Engineer</h3>
        </Link>

        {/* Right - Menu Button */}
        <div className="absolute top-4 right-4 md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border cursor-pointer"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`flex flex-col mt-10 absolute top-16 right-4 md:static md:flex-row md:space-x-6 md:flex ${
            navbar ? "block" : "hidden"
          }`}
        >
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              className="block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 mb-2 md:mb-0 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setNavbar(!navbar)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex space-x-2 md:space-x-4">
            <a
              href="https://github.com/bymarto1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/pau-martori"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <FaLinkedin size={25} />
            </a>
          </div>

          {currentTheme === "dark" ? (
            <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl mt-2 md:mt-0">
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl mt-2 md:mt-0">
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}