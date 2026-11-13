import React from 'react';
import { Metadata } from 'next';
import { Star, Phone, MessageCircle, MapPin, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shawarma Kareem | Authentic Shawarma in Boqaata, Chouf',
  description: 'Experience the best authentic shawarma in the Chouf. Fresh, clean, and delicious. Order now via WhatsApp or visit us in Boqaata today!',
  keywords: 'Shawarma in Chouf, Shawarma Kareem Boqaata, Best shawarma in Chouf, Fast food Boqaata, Lebanese street food',
};

export default function HomePage() {
  const reviews = [
    { name: 'Sumaya Naim', rating: 5, text: 'Tasty' },
    { name: 'Alaa Azzam', rating: 5, text: 'Amazing and very good service' },
    { name: 'Richy Classy', rating: 5, text: 'الله تعالى يوفيك عنا. شغل نظيف نظيف نظيف اسم على مسمى كريم طيب ونظيف' },
    { name: 'Mimi Abdelsalam', rating: 5, text: 'شاورما كريم عالشيش الشوف كلّو مشهيّه واذا بدك لل١٠٠ تعيش مروق تغدا يوميه' },
  ];

  const galleryImages = [
    '/images/stock-2.jpg',
    '/images/stock-3.jpg',
    '/images/stock-4.jpg',
    '/images/stock-5.jpg',
    '/images/stock-6.jpg',
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="hero" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/stock-1.jpg"
            alt="Freshly prepared shawarma at Shawarma Kareem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Authentic Taste, <br />
            <span className="text-brand-secondary">Always Fresh.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto">
            The finest shawarma in Boqaata, Chouf. Experience the quality that everyone is talking about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96181696691"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-rose-700 transition-all transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Order via WhatsApp
            </a>
            <a
              href="tel:+96181696691"
              className="bg-white text-ink px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all transform hover:scale-105"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section id="social-proof" className="bg-brand-secondary py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h2 className="font-heading font-bold text-dark text-xl md:text-2xl">Loved by Our Community</h2>
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-full">
              <div className="flex text-dark">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-dark">4.8 stars from 13 Google reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-6">Quality You Can Trust</h2>
              <p className="text-lg text-muted leading-relaxed mb-8">
                At Shawarma Kareem, we believe in &apos;Shoghl Nazif&apos;—clean, honest, and delicious work. We take pride in serving high-quality, authentic shawarma to our neighbors in the Chouf every single day.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                  <span className="block font-heading font-bold text-brand-primary text-2xl mb-1">Fresh</span>
                  <span className="text-muted text-sm">Ingredients daily</span>
                </div>
                <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                  <span className="block font-heading font-bold text-brand-primary text-2xl mb-1">Clean</span>
                  <span className="text-muted text-sm">Shoghl Nazif</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/stock-2.jpg"
                alt="Freshly prepared food"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-secondary p-8 rounded-2xl hidden md:block">
                <p className="font-heading font-bold text-dark text-xl">Authentic<br />Lebanese<br />Flavors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-4">A Taste of Shawarma Kareem</h2>
            <p className="text-muted max-w-2xl mx-auto">Experience the atmosphere and the mouth-watering dishes we prepare with love.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, index) => (
              <div key={index} className={`relative overflow-hidden rounded-xl group ${index === 0 ? 'col-span-2 row-span-2 h-[400px] md:h-[600px]' : 'h-[200px] md:h-[290px]'}`}>
                <img
                  src={src}
                  alt="Collection of our freshly prepared meals and restaurant atmosphere"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-4">What Our Customers Say</h2>
            <div className="flex justify-center text-brand-secondary mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-neutral-100 flex flex-col h-full">
                <div className="flex items-center gap-1 text-brand-secondary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-ink text-lg italic mb-6 flex-grow">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-ink">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-ink mb-6">Visit Us Today</h2>
              <p className="text-lg text-muted mb-8">
                We are located in the heart of Boqaata, ready to serve you from morning until midnight.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 mb-8">
                <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                  <Clock className="text-brand-primary" size={24} />
                  Opening Hours
                </h3>
                <div className="space-y-3">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <div key={day} className="flex justify-between items-center border-b border-neutral-50 pb-2 last:border-0">
                      <span className="font-medium text-ink">{day}</span>
                      <span className="text-muted">7 AM – 12 AM</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 text-ink">
                  <MapPin className="text-brand-primary shrink-0" size={24} />
                  <span className="font-medium">MHCX+HG5, Boqaata, Lebanon</span>
                </div>
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJb0FdXAAhHxURqQduM5pJtvw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-rose-700 transition-colors w-full sm:w-auto"
                >
                  <ExternalLink size={20} />
                  Open in Google Maps
                </a>
              </div>
            </div>
            
            <div className="h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe
                src="https://www.google.com/maps?q=33.6713403,35.5988326&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Shawarma Kareem Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Hungry? Order Now!</h2>
          <p className="text-xl mb-10 opacity-90">Experience the best shawarma in Boqaata. We are just a message or call away.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/96181696691"
              className="bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-neutral-100 transition-all"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
            <a
              href="tel:+96181696691"
              className="bg-brand-secondary text-dark px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-amber-400 transition-all"
            >
              <Phone size={24} />
              Call +961 81 696 691
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
