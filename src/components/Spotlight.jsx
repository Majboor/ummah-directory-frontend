import React from 'react';
import { categories, sourceMeta, visibleListings } from '../data/travelData';
import SafeImage from './SafeImage';

const featuredCategorySlugs = ['food-and-beverage', 'mosque-musalla', 'education'];
const categorySpotlightImages = {
  'food-and-beverage': 'https://ummahdirectory.com.au/wp-content/uploads/2024/06/graz6-773x1024.jpeg',
};

const Spotlight = () => {
  const featuredCategories = featuredCategorySlugs
    .map(slug => categories.find(category => category.slug === slug))
    .filter(Boolean);
  const recentListings = visibleListings
    .filter(listing => listing.title && listing.slug)
    .slice(0, 3);

  return (
    <section className="md:py-24 z-20 font-inter bg-[#F4F4F5] w-full border-slate-200/50 border-t pt-16 pb-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <h2 className="md:text-4xl lg:text-5xl uppercase text-3xl text-[#1F3E3D] tracking-tight font-oswald mb-4">Browse The Directory</h2>
        <p className="md:text-base leading-relaxed text-sm font-light text-slate-600 max-w-2xl">
          {sourceMeta.totalListings} Australian listings across {sourceMeta.totalCategories} categories, including Halal food, mosques, schools, trades, medical providers, charities, and professional services.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredCategories.map(category => (
          <a key={category.slug} href={`/category/${category.slug}`} className="bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(31,62,61,0.04)] flex flex-col group border border-slate-200/60 hover:shadow-[0_12px_40px_rgba(31,62,61,0.08)] transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-48 md:h-52 overflow-hidden bg-slate-100">
              <SafeImage src={categorySpotlightImages[category.slug] || category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-white">
              <div className="text-xs text-[#C8A96A] font-normal mb-2">{category.count} listings</div>
              <h3 className="font-oswald text-xl uppercase tracking-tight text-[#1F3E3D] mb-3">{category.title}</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">{category.description}</p>
              <span className="text-[#C8A96A] font-normal text-sm mt-auto inline-flex items-center gap-1.5 group-hover:text-[#1F3E3D] transition-colors w-fit">
                Browse {category.shortTitle}
                <iconify-icon icon="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></iconify-icon>
              </span>
            </div>
          </a>
        ))}

        <div className="flex flex-col gap-4 h-full lg:col-span-1 md:col-span-2">
          {recentListings.map(listing => (
            <a key={listing.slug} href={`/listing/${listing.slug}`} className="bg-white rounded-r-xl rounded-l-sm border border-slate-200/60 border-l-4 border-l-[#1F3E3D]/10 flex flex-row lg:flex-col xl:flex-row items-center gap-5 p-5 md:p-6 shadow-[0_4px_20px_rgba(31,62,61,0.02)] hover:shadow-md hover:border-l-[#C8A96A] hover:-translate-y-0.5 transition-all duration-300 flex-1 group">
              <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                <SafeImage src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-1.5 w-full min-w-0">
                <div className="text-xs text-slate-500 font-light truncate">{listing.region}</div>
                <h4 className="text-sm font-normal text-[#1F3E3D] truncate">{listing.title}</h4>
                <div className="text-xs text-[#C8A96A] group-hover:text-[#1F3E3D] transition-colors font-normal inline-flex items-center gap-1">
                  View listing <iconify-icon icon="lucide:chevron-right" class="w-3 h-3 group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
