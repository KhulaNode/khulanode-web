'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-brand-cyan/20 sticky top-0 z-50 shadow-md">
      <nav className="container flex items-center justify-between h-28">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/pictures/Main Logo.png"
            alt="KhulaNode Logo"
            width={350}
            height={105}
            className="h-28 w-auto"
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/solutions" className="text-brand-darkblue hover:text-brand-cyan font-semibold transition-colors">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-brand-darkblue hover:text-brand-cyan font-semibold transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-brand-darkblue hover:text-brand-cyan font-semibold transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-brand-darkblue hover:text-brand-cyan font-semibold transition-colors">
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="hidden md:inline-block px-8 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all font-semibold shadow-lg"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
