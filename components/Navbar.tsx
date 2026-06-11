"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 md:h-28 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt={BUSINESS.name} 
              className="h-14 md:h-20 w-auto" 
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link>
            <Link href="/gallery" className="hover:text-slate-900 transition-colors">Work</Link>
            <Link href="/about" className="hover:text-slate-900 transition-colors">About</Link>
            <Link href="/#contact" className="hover:text-slate-900 transition-colors">Get Quote</Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors"
              style={{ background: 'var(--logo-red)' }}
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={{ borderColor: 'var(--logo-teal)', color: 'var(--logo-teal)' }}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}