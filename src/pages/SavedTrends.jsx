import React from 'react';
import { Bookmark, User, Heart, Clock, Settings, Shield } from 'lucide-react';

export default function SavedTrends() {
    const savedStyles = [
        { title: 'Neon Y2K Revival', date: 'Oct 12, 2026', tags: ['Color', 'Aesthetic'] },
        { title: 'Modular Techwear', date: 'Sep 28, 2026', tags: ['Fabric', 'Function'] },
        { title: 'Sustainable Leather', date: 'Sep 15, 2026', tags: ['Material', 'Eco'] },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg text-white">
                    <Bookmark className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Saved Trends & Profile</h1>
                    <p className="text-gray-400 text-sm mt-1">Manage your personal fashion insights and bookmarked styles.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Sidebar */}
                <div className="space-y-6">
                    <div className="glass-card p-6 flex flex-col items-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent p-1 mb-4 z-10 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                            <div className="w-full h-full bg-card rounded-full flex items-center justify-center">
                                <User className="w-10 h-10 text-gray-300" />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold z-10">Sarah Designer</h2>
                        <p className="text-sm text-primary mb-4 z-10 font-medium">Pro Subscription</p>

                        <div className="w-full grid grid-cols-2 gap-4 border-t border-white/10 pt-4 z-10">
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Saved Trends</p>
                                <p className="text-xl font-bold text-white">124</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 mb-1">Collections</p>
                                <p className="text-xl font-bold text-white">12</p>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-4 space-y-2">
                        {[
                            { icon: Settings, label: 'Account Settings' },
                            { icon: Shield, label: 'Privacy & Data' },
                            { icon: Clock, label: 'Prediction History' },
                        ].map((item, i) => (
                            <button key={i} className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white">
                                <item.icon className="w-4 h-4" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-pink-500 fill-pink-500/20" />
                            Recent Bookmarks
                        </h3>

                        <div className="space-y-4">
                            {savedStyles.map((style, i) => (
                                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5 flex items-center justify-center shrink-0">
                                            <Bookmark className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all">{style.title}</h4>
                                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                                <Clock className="w-3 h-3" /> Saved on {style.date}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="hidden sm:flex gap-2">
                                        {style.tags.map(tag => (
                                            <span key={tag} className="px-2.5 py-1 bg-black/30 rounded text-xs text-gray-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 py-3 border border-dashed border-white/20 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all">
                            View All 124 Items
                        </button>
                    </div>

                    <div className="glass-card p-6 border-t border-primary/20 bg-gradient-to-b from-primary/5 to-transparent">
                        <h3 className="text-lg font-bold mb-2">Personalized Trend Feed</h3>
                        <p className="text-sm text-gray-400 mb-6">Based on your saved items, AI suggests these upcoming micro-trends.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider">Suggested</span>
                                <h4 className="font-bold mt-1 text-white">Chromecore Accessories</h4>
                            </div>
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                                <span className="text-xs font-bold text-accent uppercase tracking-wider">Suggested</span>
                                <h4 className="font-bold mt-1 text-white">Biodegradable Sneakers</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
