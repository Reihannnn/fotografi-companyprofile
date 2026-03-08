import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Klien Puas" },
  { icon: Award, value: "2+", label: "Tahun Pengalaman" },
  { icon: Heart, value: "1200+", label: "Sesi Foto" },
  { icon: Clock, value: "24/7", label: "Siap Melayani" },
];

export function AboutSection() {
  return (
    <section className="bg-black text-white py-18 px-4 lg:px-6">
      <div className="mx-auto max-w-7/8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="lg:text-xl uppercase tracking-[0.4em] text-[#d3b08f] mb-4">
              Tentang Kami
            </p>
            <h2 className="text-3xl font-bold text-white md:text-5xl leading-tight">
              Menangkap Keindahan Dalam Setiap Momen
            </h2>
            <p className="lg:text-lg mt-6 text-base leading-relaxed text-muted-foreground">
              Hendra Potret adalah studio fotografi profesional yang
              berdedikasi mengabadikan momen-momen berharga dalam hidup Anda.
              Dengan pengalaman lebih dari 2 tahun, kami telah dipercaya oleh
              ratusan klien di seluruh Indonesia.
            </p>
            <p className="lg:text-lg mt-4 text-base leading-relaxed text-muted-foreground">
              Setiap foto yang kami hasilkan bukan sekadar gambar, melainkan
              cerita yang penuh emosi dan keindahan. Tim fotografer kami yang
              berpengalaman siap memberikan hasil terbaik untuk Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-gray-500 p-6 flex flex-col items-center text-center gap-3"
              >
                <stat.icon className="h-8 w-8 text-[#D3B08F]" />
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
