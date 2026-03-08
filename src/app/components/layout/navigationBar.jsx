"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export const NavigationBar = () => {
  const [openContact, setOpenContact] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 z-50 shadow-md w-full p-4 md:p-8 bg-black text-white">
      <div className="w-[95%] mx-auto flex justify-between items-center">
        {/* left header */}
        <div className="flex items-center gap-5">
          <Image
            src="/asset/icon/hendrapotret-logo.webp"
            className="rounded-full"
            alt="hendra potret logo"
            width={55}
            height={30}
          />
          <h1 className="font-bold text-md md:text-2xl">HendraPotret</h1>
        </div>

        {/* desktop navbar */}
        <div className="hidden md:block">
          <ul className="flex md:gap-8 md:text-xl items-center">
            <li className="hover:text-gray-300">
              <Link href="/">Beranda</Link>
            </li>

            <li className="hover:text-gray-300">
              <Link href="/service">Layanan</Link>
            </li>

            <li className="hover:text-gray-300">
              <Link href="/portofolio">Portofolio</Link>
            </li>

            {/* dropdown hubungi desktop */}
            <li className="relative">
              <button
                onClick={() => setOpenContact(!openContact)}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                Hubungi
                <ChevronDown
                  size={16}
                  className={`transition ${openContact ? "rotate-180" : ""}`}
                />
              </button>

              {openContact && (
                <div className="absolute top-8 left-0 bg-white text-black rounded-lg shadow-lg w-44 p-2">
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>

                  <a
                    href="https://instagram.com/hendrapotret_"
                    target="_blank"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100"
                  >
                    <Instagram size={18} />
                    Instagram
                  </a>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* hamburger mobile */}
        <button
          className="block md:hidden"
          onClick={() => setOpenMobile(!openMobile)}
        >
          {openMobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {openMobile && (
        <div className="md:hidden bg-black border-t border-gray-800 mt-4">
          <ul className="flex flex-col text-lg p-4 gap-4">
            <li>
              <Link href="/">Beranda</Link>
            </li>

            <li>
              <Link href="/service">Layanan</Link>
            </li>

            <li>
              <Link href="/portofolio">Portofolio</Link>
            </li>

            {/* dropdown hubungi mobile */}
            <li>
              <button
                onClick={() => setOpenContact(!openContact)}
                className="flex items-center gap-2"
              >
                Hubungi
                <ChevronDown
                  size={16}
                  className={`transition ${openContact ? "rotate-180" : ""}`}
                />
              </button>

              {openContact && (
                <div className="flex flex-col mt-5 ml-5 gap-4 text-base">
                  <div className="hover:text-gray-300">
                    <a
                      href="https://wa.me/628123456789"
                      target="_blank"
                      className="flex items-center gap-2 "
                    >
                      <MessageCircle size={18} />
                      <p> WhatsApp</p>
                    </a>
                  </div>

                  <div className="hover:text-gray-300">
                    <a
                      href="https://instagram.com/hendrapotret_"
                      target="_blank"
                      className="flex items-center gap-2"
                    >
                      <Instagram size={18} />
                      Instagram
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
