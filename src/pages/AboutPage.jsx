import React from 'react';
import Footer from '../components/Footer';
import { sourceMeta, ummahAbout } from '../data/travelData';

const AboutPage = () => (
  <div className="min-h-screen bg-[#E3E7E0] text-[#2A3324]">
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-12 md:py-16">
      <nav className="border-b border-[#C4CFC0] pb-5 text-xs uppercase tracking-[0.18em] text-[#2A3324]/65 md:pb-6 md:text-sm md:tracking-[0.22em]"><a href="/">Home</a> / About</nav>
      <h1 className="mt-12 font-editorial text-4xl leading-none sm:text-6xl md:mt-16 md:text-8xl">About Ummah Directory.</h1>
      <p className="mt-8 whitespace-pre-line text-base leading-8 text-[#2A3324]/74 md:mt-10 md:text-xl md:leading-10">{ummahAbout}</p>
      <div className="mt-14 grid border-y border-[#C4CFC0] md:grid-cols-3">
        <div className="py-6 md:border-r md:px-6"><div className="font-editorial text-4xl">{sourceMeta.totalListings}</div><div className="text-sm text-[#2A3324]/58">Business listings</div></div>
        <div className="py-6 md:border-r md:px-6"><div className="font-editorial text-4xl">{sourceMeta.totalCategories}</div><div className="text-sm text-[#2A3324]/58">Directory categories</div></div>
        <div className="py-6 md:px-6"><div className="font-editorial text-4xl">2003</div><div className="text-sm text-[#2A3324]/58">Directory began</div></div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
