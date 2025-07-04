"use client";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

function MobileNav({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full shadow-lg md:hidden z-40 bg-bg-primary border-b">
          <ul className="flex flex-col gap-4 p-6 text-lg">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
                className="block mt-2 px-4 py-2 bg-accent text-text-secondary rounded-md text-center font-semibold"
              >
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileNav;
