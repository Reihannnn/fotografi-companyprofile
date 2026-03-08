"use client";
import { useState } from "react";
import Image from "next/image";

export function GallerySectionPortofolio({marginTopCustom}) {
  const [activeCategory, setActivateCategory] = useState("all");

  const galeryData = [
    {
      id: 1,
      category: "graduation",
      src: "/asset/image/graduation/graduation-01.webp",
    },
    {
      id: 2,
      category: "graduation",
      src: "/asset/image/graduation/graduation-02.jpg",
    },
    {
      id: 3,
      category: "graduation",
      src: "/asset/image/graduation/graduation-03.webp",
    },
    {
      id: 4,
      category: "engagement",
      src: "/asset/image/engagement/engagement-1.webp",
    },
    {
      id: 5,
      category: "wedding",
      src: "/asset/image/wedding/wedding-4.webp",
    },
    {
      id: 6,
      category: "wedding",
      src: "/asset/image/wedding/wedding-3.webp",
    },
    {
      id: 7,
      category: "wedding",
      src: "/asset/image/wedding/wedding-2.webp",
    },
    {
      id: 8,
      category: "event",
      src: "/asset/image/event/event-4.webp",
    },
    {
      id: 9,
      category: "event",
      src: "/asset/image/event/event-1.webp",
    },
    {
      id: 10,
      category: "event",
      src: "/asset/image/event/event-2.webp",
    },
    {
      id: 12,
      category: "event",
      src: "/asset/image/event/event-3.webp",
    },
    {
      id: 13,
      category: "company",
      src: "/asset/image/company/company-1.webp",
    },
    {
      id: 14,
      category: "company",
      src: "/asset/image/company/company-2.webp",
    },
    {
      id: 15,
      category: "company",
      src: "/asset/image/company/company-5.webp",
    },
    {
      id: 16,
      category: "company",
      src: "/asset/image/company/company-4.webp",
    },
    {
      id: 17,
      category: "graduation",
      src: "/asset/image/graduation/graduation-10.webp",
    },
    {
      id: 18,
      category: "engagement",
      src: "/asset/image/engagement/engagement-2.webp",
    },
    {
      id: 19,
      category: "graduation",
      src: "/asset/image/graduation/graduation-7.jpg",
    },
    {
      id: 20,
      category: "graduation",
      src: "/asset/image/graduation/graduation-10.jpg",
    },
    {
      id: 21,
      category: "graduation",
      src: "/asset/image/graduation/graduation-6.webp",
    },
    {
      id: 22,
      category: "graduation",
      src: "/asset/image/graduation/graduation-04.webp",
    },
    {
      id: 23,
      category: "graduation",
      src: "/asset/image/graduation/graduation-8.webp",
    },
    {
      id: 24,
      category: "graduation",
      src: "/asset/image/graduation/graduation-05.jpg",
    },
    {
      id: 25,
      category: "graduation",
      src: "/asset/image/graduation/graduation-9.webp",
    },
  ];
  const filteredGalery =
    activeCategory === "all"
      ? galeryData
      : galeryData.filter((item) => item.category === activeCategory);

  return (
    <section className = {`w-full bg-black text-white md:p-12 ${marginTopCustom}`}>
      {/* header */}
      <div className="text-center pt-10">
        <h1 className="tracking-[6px] md:text-xl text-[#d6b38d]">PORTOFOLIO</h1>
        <h1 className="tracking-[4px] text-2xl md:text-5xl font-serif font-bold mt-4">
          HASIL KARYA KAMI
        </h1>
        {/* filter button */}
        <div className="mt-5 mb-8 flex gap-y-4 flex-wrap justify-center">
          {[
            "all",
            "graduation",
            "wedding",
            "engagement",
            "event",
            "company",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setActivateCategory(category)}
              className={`px-6 py-2 border tracking-widest uppercase text-sm transition ml-5
            ${
              activeCategory === category
                ? "bg-[#d6b38d] text-black border-[#d6b38d]"
                : "border-gray-600 hover:border-white"
            }
            `}
            >
              {" "}
              {category === "all" ? "Semua" : category}
            </button>
          ))}
        </div>

        {/* GALLERY */}
        <div className="flex flex-wrap justify-center w-full gap-5 ml-2 px-8 mx-auto">
          {filteredGalery.map((item) => (
            <div
              key={item.id}
              className="relative h-[250px] w-[225px] md:h-[450px] md:w-[375px] overflow-hidden group"
            >
              <Image
                src={item.src}
                alt="gallery"
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Category Text */}
              <div className="absolute bottom-5 left-5 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="uppercase tracking-widest text-sm">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
