import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Sparkles, ArrowUpRight, Flame } from 'lucide-react';

const styleData = [
    { name: 'Oversized', score: 92 },
    { name: 'Cyberpunk', score: 88 },
    { name: 'Y2K', score: 80 },
    { name: 'Techwear', score: 75 },
    { name: 'Minimalist', score: 60 },
];

const colors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'];

export default function TrendAnalysis() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Fashion Trend Analysis</h1>
                <p className="text-gray-400 text-sm">Real-time analysis of global fashion trends powered by AI.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 glass-card p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-bold">Top Trending Categories</h2>
                        <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-primary">
                            <option>Global</option>
                            <option>North America</option>
                            <option>Europe</option>
                            <option>Asia</option>
                        </select>
                    </div>

                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={styleData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={true} vertical={false} />
                                <XAxis type="number" stroke="#a1a1aa" />
                                <YAxis dataKey="name" type="category" stroke="#fff" tick={{ fill: '#fff' }} width={100} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#151520', borderColor: '#ffffff10', borderRadius: '8px' }}
                                    cursor={{ fill: '#ffffff05' }}
                                />
                                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={30}>
                                    {styleData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* AI Insights Panel */}
                <div className="glass-card p-6 border-t-2 border-t-primary relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none"></div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-lg font-bold">AI Insights</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all"></div>
                            <p className="text-sm text-gray-300 font-medium">
                                "Cyberpunk aesthetics are seeing an 88% surge in urban centers due to recent sci-fi media releases."
                            </p>
                        </div>

                        <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent group-hover:w-2 transition-all"></div>
                            <p className="text-sm text-gray-300 font-medium">
                                "Neon Cyan and Deep Purple are the dominant colors for Q3, replacing pastel tones."
                            </p>
                        </div>

                        <div className="p-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-xl relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 group-hover:w-2 transition-all"></div>
                            <p className="text-sm text-gray-300 font-medium">
                                "Sustainable fabrics (Vegan Leather, Recycled Cotton) continue a steady 15% WoW growth."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Most Popular Colors', 'Trending Fabrics', 'Rising Brands', 'Demographic Shift'].map((item, idx) => (
                    <div key={idx} className="glass-card p-5 hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-400 font-medium mb-1">{item}</p>
                            <div className="flex items-center gap-2">
                                <Flame className="w-4 h-4 text-accent" />
                                <span className="text-white font-bold group-hover:text-accent transition-colors">High Activity</span>
                            </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                ))}
            </div>
        </div>
    );
}
