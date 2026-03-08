import Link from "next/link"
import { Camera, Instagram, Mail, Phone, MapPin, MessageCircleMore} from "lucide-react"

const services = [
  { href: "/service/wedding", label: "Wedding" },
  { href: "/service/company", label: "Company" },
  { href: "/service/engagement", label: "Engagement" },
  { href: "/service/graduation", label: "Graduation" },
  { href: "/service/event", label: "Event" },
  
]

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-7/8 px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">              
              <span className="text-3xl font-bold tracking-wider text-white">
                Hendra Potret
              </span>              
            </div>
            <p
              className="text-lg leading-relaxed text-muted-foreground max-w-xs"            
            >
              Mengabadikan momen berharga dalam hidup Anda dengan sentuhan artistik dan profesional.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/hendrapotret_/"
                aria-label="Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Whatsapp"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl uppercase tracking-[0.2em] text-primary mb-6"              
            >
              Layanan
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-lg text-muted-foreground transition-colors hover:text-gray-300"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xl uppercase tracking-[0.2em] text-primary mb-6"             
            >
              Kontak
            </h3>
            <ul className="flex flex-col gap-4" style={{ fontFamily: "var(--font-inter)" }}>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Phone className="h-6 w-6 shrink-0" />
                <span>+62 888 8888 8888</span>
              </li>
              <a href="https://www.instagram.com/hendrapotret_/">
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Instagram className="h-6 w-6 shrink-0" />
                <span>hendrapotret_</span>
              </li>
              </a>
              <li className="flex items-center gap-3 text-lg text-muted-foreground">
                <Mail className="h-6 w-6 shrink-0" />
                <span>hendrapotret@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-muted-foreground">
                <MapPin className="h-6 w-6 shrink-0 mt-0.5" />
                <span>Jl. Sudirman No. 123, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-s text-muted-foreground"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            &copy; 2026 Hendra Potret. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-s text-muted-foreground hover:text-gray-300 transition-colors"              
            >
              Beranda
            </Link>
            <Link
              href="/service"
              className="text-s text-muted-foreground hover:text-gray-300 transition-colors"            
            >
              Layanan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
