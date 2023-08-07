"use client"
import React from "react"
import { useState } from "react"
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
    <header className="relative w-full mx-auto  px-4 sm:px-20  min-height: 49.75rem  ">
      <div className="flex justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home">
              <div className="flex flex-col items-start container">
                <h2 className="text-2xl font-bold">Pau Martori</h2>
                <h3 className="text-xl text-gray-700">Software Engineer</h3>
              </div>
            </Link>
              <div className="absolute top-4 right-4 md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
          </div>
        </div>

        <div>
        <div className={`absolute top-16 right-4 md:hidden ${navbar ? "block" : "hidden"}`}>
          <div className="flex flex-col items-start space-y-8">
              {NAV_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100"
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

              <a href="https://github.com/bymarto1" target="_blank" rel="noopener noreferrer" className="p-2">
                <FaGithub size={25} />
              </a>

              <a href="https://www.linkedin.com/in/pau-martori" target="_blank" rel="noopener noreferrer" className="p-2">
                <FaLinkedin size={25} />
              </a>

              <div>
                {currentTheme === "dark" ? (
                  <button onClick={() => setTheme("light")} className="bg-slate-100 p-2 rounded-xl">
                    <RiSunLine size={25} color="black" />
                  </button>
                ) : (
                  <button onClick={() => setTheme("dark")} className="bg-slate-100 p-2 rounded-xl">
                    <RiMoonFill size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}