import React, { useState, useEffect } from 'react';
import { CloudSun, Snowflake, CloudRain, Sun, Thermometer, MapPin, Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export default function ClimateClothing() {
    const [selectedClimate, setSelectedClimate] = useState('summer');
    const [liveWeather, setLiveWeather] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const climates = [
        { id: 'summer', label: 'Summer / Hot', icon: Sun, color: 'text-yellow-400', bg: 'from-orange-500/20 to-yellow-500/20' },
        { id: 'winter', label: 'Winter / Cold', icon: Snowflake, color: 'text-blue-300', bg: 'from-blue-600/20 to-cyan-400/20' },
        { id: 'rainy', label: 'Rainy / Mild', icon: CloudRain, color: 'text-gray-400', bg: 'from-gray-700/20 to-gray-400/20' },
    ];

    const recommendations = {
        summer: {
            fabrics: ['Linen', 'Lightweight Cotton', 'Chambray', 'Seersucker'],
            styles: ['Oversized breathable shirts', 'Short-sleeve button downs', 'Wide-leg shorts'],
            insights: 'AI suggests high-UV protection fabrics. Neon accents on white bases are trending heavily for this summer.',
            images: [
                'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=600&h=800&fit=crop',
                'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop'
            ]
        },
        winter: {
            fabrics: ['Merino Wool', 'Cashmere', 'Heavyweight Denim', 'Fleece'],
            styles: ['Chunky turtlenecks', 'Puffer jackets', 'Layered thermal long-sleeves'],
            insights: 'Smart-heated jackets and ultra-lightweight extreme insulation materials are the dominant winter tech trends.',
            images: [
                'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&h=800&fit=crop',
                'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&h=800&fit=crop'
            ]
        },
        rainy: {
            fabrics: ['Gore-Tex', 'Treated Nylon', 'Waxed Canvas', 'Waterproof Leather'],
            styles: ['Knee-length trench coats', 'Waterproof combat boots', 'Techwear pants'],
            insights: 'Function-first fashion. Cyperbunk-inspired waterproof shells with hidden pockets are showing massive engagement.',
            images: [
                'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop',
                'https://images.unsplash.com/photo-1485230895905-31a011edcd2a?w=600&h=800&fit=crop'
            ]
        }
    };

    useEffect(() => {
        const fetchWeather = async (lat, lon) => {
            try {
                const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
                const data = await res.json();
                const temp = data.current_weather.temperature;
                const weathercode = data.current_weather.weathercode;

                setLiveWeather(temp);

                // Open Meteo Codes: 51-67, 80-82 indicate rain
                if (weathercode >= 51 && weathercode <= 82) {
                    setSelectedClimate('rainy');
                } else if (temp < 15) {
                    setSelectedClimate('winter');
                } else if (temp >= 15 && temp < 22) {
                    setSelectedClimate('rainy'); // Mild
                } else {
                    setSelectedClimate('summer');
                }
            } catch (err) {
                console.error("Failed to fetch weather", err);
            } finally {
                setIsLoading(false);
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
                (err) => {
                    console.error("Location access denied or failed.", err);
                    setIsLoading(false);
                }
            );
        } else {
            setIsLoading(false);
        }
    }, []);

    const activeData = recommendations[selectedClimate];

    return (
        <div className="space-y-6">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-400 rounded-lg text-white">
                            <CloudSun className="w-6 h-6" />
                        </div>
                        Climate-Based Recommendations
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Get AI-optimized outfit choices adapted to extreme weather conditions.</p>
                </div>

                <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                    {isLoading ? (
                        <>
                            <Loader2 className="w-4 h-4 text-accent animate-spin" />
                            <span className="text-sm text-gray-400">Locating...</span>
                        </>
                    ) : (
                        <>
                            <MapPin className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium text-white">
                                {liveWeather !== null ? `Local Temp: ${liveWeather}°C` : 'Location unknown'}
                            </span>
                        </>
                    )}
                </div>
            </div>

            {/* Climate Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {climates.map(climate => (
                    <button
                        key={climate.id}
                        onClick={() => setSelectedClimate(climate.id)}
                        className={cn(
                            "flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border transition-all duration-300",
                            selectedClimate === climate.id
                                ? "bg-gradient-to-r border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] " + climate.bg
                                : "bg-white/5 border-white/5 hover:bg-white/10"
                        )}
                    >
                        <climate.icon className={cn("w-6 h-6", selectedClimate === climate.id ? climate.color : "text-gray-500")} />
                        <span className={cn("font-medium", selectedClimate === climate.id ? "text-white" : "text-gray-400")}>
                            {climate.label}
                        </span>
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 animate-fade-in" key={selectedClimate}>
                <div className="lg:col-span-2 glass-card p-6 border-l-2 border-l-accent">
                    <div className="flex items-center gap-3 mb-6">
                        <Thermometer className="w-5 h-5 text-accent" />
                        <h2 className="text-xl font-bold">Outfit & Style Matrix</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-3">Recommended Fabrics</h3>
                            <div className="flex flex-wrap gap-2">
                                {activeData.fabrics.map((fabric, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-200">
                                        {fabric}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-3">Suggested Outfit Styles</h3>
                            <div className="flex flex-col gap-2">
                                {activeData.styles.map((style, i) => (
                                    <div key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary font-medium">
                                        {style}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-sm font-medium text-gray-400 mb-2">AI Micro-Insight</h3>
                        <p className="text-gray-200 text-sm italic">"{activeData.insights}"</p>
                    </div>
                </div>

                {/* Illustrated Outfit Cards */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold mb-4">Moodboard Integration</h2>
                    {activeData.images && activeData.images.map((imgUrl, idx) => (
                        <div key={idx} className="h-40 glass-card rounded-xl overflow-hidden relative group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-70"></div>
                            <img src={imgUrl} alt={`Outfit idea ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute bottom-4 left-4 z-20">
                                <p className="text-sm font-bold text-white">Outfit Idea #{idx + 1}</p>
                                <p className="text-xs text-gray-300 mt-1 capitalize">{selectedClimate} Collection</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
