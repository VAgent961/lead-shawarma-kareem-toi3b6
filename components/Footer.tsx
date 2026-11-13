import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex flex-col leading-tight mb-6">
              <span className="font-heading font-bold text-2xl text-brand-primary uppercase tracking-tight">
                Shawarma Kareem
              </span>
              <span className="font-heading font-bold text-lg text-brand-secondary">
                شاورما كريم
              </span>
            </div>
            <p className="text-neutral-400 max-w-xs">
              Quality you can trust in the heart of the Chouf. Serving authentic Lebanese street food daily.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-secondary shrink-0" size={20} />
                <span className="text-neutral-300">MHCX+HG5, Boqaata, Lebanon</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-secondary shrink-0" size={20} />
                <a href="tel:+96181696691" className="text-neutral-300 hover:text-white transition-colors">
                  +961 81 696 691
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-brand-secondary shrink-0" size={20} />
                <a href="https://wa.me/96181696691" className="text-neutral-300 hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-6">Opening Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="text-brand-secondary shrink-0" size={20} />
              <div className="text-neutral-300">
                <p className="font-bold text-white">Daily</p>
                <p>7 AM – 12 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500 text-sm">
          <p>© {new Date().getFullYear()} Shawarma Kareem. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
