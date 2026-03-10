import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Activity, Users, Zap } from 'lucide-react';
import { fashionService } from '../api/fashionService';

const growthData = [
    { name: 'Jan', rate: 45 },
    { name: 'Feb', rate: 52 },
    { name: 'Mar', rate: 68 },
    { name: 'Apr', rate: 74 },
    { name: 'May', rate: 89 },
    { name: 'Jun', rate: 105 },
];

const categoryData = [
    { name: 'Streetwear', popularity: 85 },
    { name: 'Minimalist', popularity: 65 },
    { name: 'Y2K', popularity: 90 },
    { name: 'Goth Core', popularity: 45 },
];

export default function Dashboard() {
    const [trendData, setTrendData] = useState(null);

    useEffect(() => {
        fashionService.getTrends()
            .then(res => {
                if (res.success) {
                    setTrendData(res.data);
                }
            })
            .catch(err => console.error("Failed to fetch trends", err));
    }, []);

    const renderTopTrend = (trendArray) => {
        if (!trendArray || trendArray.length === 0) return 'Loading...';
        // Assuming array of strings or objects {item, count}
        const top = trendArray[0];
        return typeof top === 'string' ? top : (top.item || JSON.stringify(top));
    };

    const aiScore = trendData ? Math.round(trendData.popularityScore || 94) : 94;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="text-gray-400 text-sm mt-1">Welcome back. Here is the latest fashion analytics.</p>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-lg flex items-center gap-2 text-primary font-medium">
                    <Zap className="w-4 h-4" />
                    AI Trend Score: {aiScore}/100
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: 'Trending Colors', value: trendData ? renderTopTrend(trendData.colors) : 'Loading...', icon: Activity, color: 'text-primary' },
                    { title: 'Trending Styles', value: trendData ? renderTopTrend(trendData.styles) : 'Loading...', icon: TrendingUp, color: 'text-accent' },
                    { title: 'Popular Fabrics', value: trendData ? renderTopTrend(trendData.fabrics) : 'Loading...', icon: Users, color: 'text-green-400' },
                    { title: 'Fashion Growth Rate', value: '+12.5%', icon: Zap, color: 'text-yellow-400' },
                ].map((card, idx) => (
                    <div key={idx} className="glass-card p-6 border-l-4 border-l-primary hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-white/5 ${card.color}`}>
                                <card.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-medium">{card.title}</p>
                                <p className="text-lg font-bold text-white mt-1">{card.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                    <h2 className="text-lg font-bold mb-6">Fashion Growth Rate (6 Months)</h2>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={growthData}>
                                <defs>
                                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#a1a1aa" />
                                <YAxis stroke="#a1a1aa" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#151520', borderColor: '#ffffff10', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="rate" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRate)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card p-6">
                    <h2 className="text-lg font-bold mb-6">Fashion Popularity Graph</h2>
                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={categoryData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="name" stroke="#a1a1aa" />
                                <YAxis stroke="#a1a1aa" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#151520', borderColor: '#ffffff10', borderRadius: '8px' }}
                                    cursor={{ fill: '#ffffff05' }}
                                />
                                <Bar dataKey="popularity" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
