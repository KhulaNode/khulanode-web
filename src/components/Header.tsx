'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/pictures/Main Logo.png"
            alt="KhulaNode Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="#solutions" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
