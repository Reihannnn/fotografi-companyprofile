import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export const NavigationBar = () => {
  return (
    <>
      <header className="w-full p-4 md:p-8 bg-black text-white ">
        <div className="w-[95%] mx-auto flex justify-between items-center">
          {/* left header section */}
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
          {/* rigth header section */}
          <div className="hidden md:block">
            <ul className="flex md:gap-8 md:text-xl">
              <Link href="/">
                <li className="hover:text-gray-300">Beranda</li>
              </Link>
              <Link href="/service">
                <li className="hover:text-gray-300">Layanan</li>
              </Link>
              <Link href="/portofolio">
                <li className="hover:text-gray-300">Portofolio</li>
              </Link>
              <Link href="/about">
                <li className="hover:text-gray-300">Tentang</li>
              </Link>
            </ul>
          </div>

          <Menu className="block md:hidden"/>

        </div>
      </header>
    </>
  );
};
