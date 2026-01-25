'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg text-slate-900 hover:text-teal-600">
          KhulaNode
        </Link>
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="#solutions" className="text-slate-600 hover:text-teal-600">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="text-slate-600 hover:text-teal-600">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-slate-600 hover:text-teal-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-600 hover:text-teal-600">
              About
            </Link>
          </li>
        </ul>
        <Link
          href="/contact"
          className="hidden md:inline-block px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
