import Image from "next/image";

export function BusinessPartnerSection() {
  const BussinesPartner = [
    {
      id: 1,
      name: "AL-JAIRY",
      src: "/asset/icon/business-partner/AL-JAIRY.webp",
      alt: "aljairy menggunakan vendor hendra potret sebagai sesi dokumentasi",
    },
    {
      id: 2,
      name: "KRATINGDAENG",
      src: "/asset/icon/business-partner/Logo_Kratingdaeng.webp",
      alt: "Kratingdaeng menggunakan vendor hendra potret sebagai sesi dokumentasi",
    },
    {
      id: 3,
      name: "TULAR NALAR",
      src: "/asset/icon/business-partner/tularnalar.webp",
      alt: "tularnalar menggunakan vendor hendra potret sebagai sesi dokumentasi",
    },
    {
      id: 4,
      name: "KAI",
      src: "/asset/icon/business-partner/kai.webp",
      alt: "Kereta Api Indonesia menggunakan vendor hendra potret",
    },
    {
      id: 5,
      name: "LPS",
      src: "/asset/icon/business-partner/lps.jpg",
      alt: "Lembaga Penjamin Simpanan menggunakan vendor hendra potret",
    },
    {
      id: 6,
      name: "FLORIS",
      src: "/asset/icon/business-partner/lkbb_floris.webp",
      alt: "LKBB Floris menggunakan vendor hendra potret",
    },
    {
      id: 7,
      name: "MI TARBIYATUL ISLAM",
      src: "/asset/icon/business-partner/mi.webp",
      alt: "MI Tarbiyatul Islam menggunakan vendor hendra potret",
    },
    {
      id: 8,
      name: "PARENTING ISLAMI",
      src: "/asset/icon/business-partner/parenting_islami.webp",
      alt: "Parenting Islami menggunakan vendor hendra potret",
    },
    {
      id: 9,
      name: "PAUD SEHAT CERDAS CERIA",
      src: "/asset/icon/business-partner/paud.webp",
      alt: "Paud Sehat Cerdas Ceria menggunakan vendor hendra potret",
    },
  ];

  return (
    <section className="bg-white py-16 mt-10">
      <div className="w-[85%] mx-auto">

        {/* header */}
        <div className="text-center">
          <p className="uppercase text-black tracking-[0.2em] font-semibold text-sm md:text-2xl">
            Pelanggan Kami
          </p>

          <h2 className="text-black tracking-[2px] uppercase text-xl md:text-3xl font-serif font-bold mt-4 mb-12">
            Dipercaya oleh Berbagai Instansi & Organisasi
          </h2>
        </div>

        {/* partner logos */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 gap-y-16 items-center justify-items-center">

          {BussinesPartner.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col items-center justify-between transition"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={200}
                height={100}
                className="object-contain w-full h-full"
              />        
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}