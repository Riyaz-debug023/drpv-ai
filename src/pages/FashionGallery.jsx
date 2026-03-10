import React, { useState } from 'react';
import { Image as ImageIcon, Heart, Share2, Maximize2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const categories = ['All', 'Street Fashion', 'Runway', 'Casual', 'Avant-Garde', 'AI Generated'];

const unsplashImages = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop', // Girl in dress
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=800&fit=crop', // Fashion model
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop', // Shopping
    'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&h=800&fit=crop', // Menswear
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop', // Lifestyle fashion
    'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop', // High fashion
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop', // Streetwear
    'https://images.unsplash.com/photo-1485230895905-31a011edcd2a?w=600&h=800&fit=crop', // Casual chic
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop', // Winter fashion
];

const galleryItems = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    title: `Trend Concept #${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    likes: Math.floor(Math.random() * 500) + 50,
    imageUrl: unsplashImages[i]
}));

export default function FashionGallery() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredItems = activeTab === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeTab);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-400 rounded-lg text-white">
                            <ImageIcon className="w-6 h-6" />
                        </div>
                        Fashion Inspiration Gallery
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Visual exploration of AI-detected and generated fashion concepts.</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto pb-2 scrollbar-hide gap-2">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                            activeTab === cat
                                ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                {filteredItems.map((item) => (
                    <div key={item.id} className="group relative rounded-2xl overflow-hidden glass-card cursor-pointer" style={{ aspectRatio: Math.random() > 0.5 ? '3/4' : '1/1' }}>
                        {/* Real Image */}
                        <div className="absolute inset-0 overflow-hidden bg-gray-900">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-xs text-white mb-2 inline-block">
                                    {item.category}
                                </span>
                                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex items-center gap-1 text-pink-400">
                                        <Heart className="w-4 h-4 fill-current" />
                                        <span className="text-xs font-bold">{item.likes}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors">
                                            <Maximize2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
