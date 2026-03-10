import React from 'react';
import { FastForward, Calendar, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const predictionData = [
    { name: 'Current', score: 40 },
    { name: 'Month 1', score: 55 },
    { name: 'Month 3', score: 70 },
    { name: 'Month 6', score: 85 },
    { name: 'Month 9', score: 75 },
    { name: '1 Year', score: 95 },
];

export default function FuturePrediction() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg text-white">
                        <FastForward className="w-6 h-6" />
                    </div>
                    Future Fashion Prediction
                </h1>
                <p className="text-gray-400 text-sm mt-2">AI-driven predictive modeling for upcoming fashion movements up to 1 year ahead.</p>
            </div>

            <div className="glass-card p-6 border border-primary/20">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-lg font-bold">Macro Trend Projection: "Digital Utility"</h2>
                        <p className="text-sm text-gray-400 mt-1">Confidence Score: 94%</p>
                    </div>
                    <div className="flex gap-2">
                        {['Colors', 'Styles', 'Fabrics'].map(f => (
                            <span key={f} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-300 border border-white/10 cursor-pointer hover:bg-white/10 transition">
                                {f}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="h-80 w-full mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={predictionData}>
                            <defs>
                                <linearGradient id="predictGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                            <XAxis dataKey="name" stroke="#a1a1aa" />
                            <YAxis stroke="#a1a1aa" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#151520', borderColor: '#ffffff10', borderRadius: '8px' }}
                                itemStyle={{ color: '#06b6d4', fontWeight: 'bold' }}
                            />
                            <Area type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={3} fill="url(#predictGrad)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Timeline Predictions */}
            <h2 className="text-xl font-bold mt-8 mb-4">Prediction Timeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 3 Months */}
                <div className="glass-card p-6 border-l-2 border-l-blue-400 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-[30px] group-hover:bg-blue-500/20 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-blue-400" />
                        <span className="font-bold text-lg">3 Months</span>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-blue-400 font-bold">•</span>
                            Colors: Holographic Silver, Electric Blue
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-blue-400 font-bold">•</span>
                            Styles: Modular layered jackets, Chunky footwear
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-blue-400 font-bold">•</span>
                            Fabrics: Reflective nylon, Mesh detailing
                        </li>
                    </ul>
                </div>

                {/* 6 Months */}
                <div className="glass-card p-6 border-l-2 border-l-primary relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-[30px] group-hover:bg-primary/20 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-bold text-lg">6 Months</span>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-primary font-bold">•</span>
                            Colors: Digital Lavender, Deep Crimson
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-primary font-bold">•</span>
                            Styles: Neo-gothic formalwear, Asymmetric cuts
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-primary font-bold">•</span>
                            Fabrics: Velvet, Smart-temperature textiles
                        </li>
                    </ul>
                </div>

                {/* 1 Year */}
                <div className="glass-card p-6 border-l-2 border-l-accent relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent/10 rounded-full blur-[30px] group-hover:bg-accent/20 transition-colors"></div>
                    <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-accent" />
                        <span className="font-bold text-lg">1 Year</span>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-accent font-bold">•</span>
                            Colors: Bioluminescent Green, Onyx
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-accent font-bold">•</span>
                            Styles: Post-apocalyptic minimalism, 3D printed accessories
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-accent font-bold">•</span>
                            Movements: Return to highly durable, lifetime garments
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
