'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-brand-cyan/20 sticky top-0 z-50 shadow-md">
      <nav className="container flex items-center justify-between h-20 md:h-28">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/pictures/Main Logo.png"
            alt="KhulaNode Logo"
            width={350}
            height={105}
            className="h-16 md:h-28 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-brand-darkblue hover:text-brand-cyan transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t-2 border-brand-cyan/20 shadow-lg">
          <ul className="flex flex-col">
            <li>
              <Link
                href="/solutions"
                className="block px-6 py-4 text-brand-darkblue hover:bg-brand-cyan/10 hover:text-brand-cyan font-semibold transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="block px-6 py-4 text-brand-darkblue hover:bg-brand-cyan/10 hover:text-brand-cyan font-semibold transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block px-6 py-4 text-brand-darkblue hover:bg-brand-cyan/10 hover:text-brand-cyan font-semibold transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-6 py-4 text-brand-darkblue hover:bg-brand-cyan/10 hover:text-brand-cyan font-semibold transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block mx-6 my-4 px-6 py-3 bg-gradient-to-r from-brand-cyan to-brand-blue text-white rounded-lg font-semibold text-center shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
