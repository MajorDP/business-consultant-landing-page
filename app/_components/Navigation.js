import Link from "next/link";
import MobileNav from "./MobileNav";
import { navLinks } from "../_data/navigation";
import { BriefcaseBusiness } from "lucide-react";

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full px-6 py-4 lg:px-24 lg:py-6 flex justify-between items-center z-10 text-text-primary bg-bg-primary"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div
        className="text-lg lg:text-xl font-bol flex items-center gap-2 leading-tight font-light tracking-wide"
        style={{ fontFamily: "var(--font-albert-sans)" }}
      >
        <div className="w-12 h-12 bg-accent flex justify-center items-center">
          <BriefcaseBusiness className="lg:w-6 lg:h-6" />
        </div>
        Business <br />
        Consulting
      </div>

      <ul className="hidden md:flex gap-4 xl:gap-8 text-sm lg:text-lg">
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className="hover:text-accent transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="hidden md:inline-block px-4 py-2 bg-bg-secondary text-text-secondary hover:-translate-y-1 transition font-semibold"
      >
        Book a Consultation
      </Link>

      <MobileNav links={navLinks} />
    </nav>
  );
}
