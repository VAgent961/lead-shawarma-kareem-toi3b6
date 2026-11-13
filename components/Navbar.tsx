'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-xl text-brand-primary uppercase tracking-tight">
              Shawarma Kareem
            </span>
            <span className="font-heading font-bold text-sm text-brand-secondary">
              شاورما كريم
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ink hover:text-brand-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/96181696691"
              className="bg-brand-primary text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-rose-700 transition-colors"
            >
              <MessageCircle size={18} />
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ink p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-ink hover:bg-neutral-50 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/96181696691"
              className="flex items-center justify-center gap-2 w-full bg-brand-primary text-white px-3 py-4 rounded-xl font-bold mt-4"
            >
              <MessageCircle size={20} />
              Order via WhatsApp
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
