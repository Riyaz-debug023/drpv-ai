import React from 'react';
import { FileText, Download, BarChart2, PieChart, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'W1', value: 4000 },
    { name: 'W2', value: 3000 },
    { name: 'W3', value: 2000 },
    { name: 'W4', value: 2780 },
];

export default function TrendReports() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg text-white">
                            <FileText className="w-6 h-6" />
                        </div>
                        Trend Reports & Insights
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Comprehensive AI-generated fashion reports and industry insights.</p>
                </div>

                <button className="flex items-center gap-2 btn-primary py-2 px-4 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <Download className="w-4 h-4" />
                    Export All (PDF)
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="glass-card p-6 border-l-4 border-l-secondary relative overflow-hidden group hover:border-l-primary transition-colors">
                        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block">Monthly Report</span>
                                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Global Fashion Intelligence: Oct 2026</h2>
                                <p className="text-gray-400 text-sm mb-4 max-w-2xl leading-relaxed">
                                    Our AI models have processed 2.4 million social media posts, 50,000 runway images, and retail data from 14 regions. Key finding: "Digital maximalism" is replacing minimalism in urban sectors, driving a 45% increase in vibrant, multi-layered outfits.
                                </p>
                            </div>
                            <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors shrink-0">
                                <Download className="w-5 h-5 text-gray-300" />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-6">
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 mb-1">Data Sources</p>
                                <p className="text-lg font-bold text-white">4.2M+</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 mb-1">Confidence Interval</p>
                                <p className="text-lg font-bold text-green-400">96.4%</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                <p className="text-xs text-gray-400 mb-1">Generated</p>
                                <p className="text-lg font-bold text-white">2 hrs ago</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2].map((i) => (
                            <div key={i} className="glass-card p-6 flex flex-col justify-between">
                                <div>
                                    <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs mb-3 inline-block">Quarterly Wrap</span>
                                    <h3 className="text-lg font-bold mb-2">Q{i} Micro-Trend Analysis</h3>
                                    <p className="text-sm text-gray-400 line-clamp-2">Detailed breakdown of fleeting TikTok and Instagram styling trends.</p>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <span className="text-xs text-gray-500">24 Pages • 12MB</span>
                                    <button className="text-primary hover:text-white transition-colors flex items-center gap-1 text-sm font-medium">
                                        <Download className="w-4 h-4" /> Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-accent" />
                            Growth Analytics
                        </h3>
                        <div className="h-40 w-full mb-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <Tooltip contentStyle={{ backgroundColor: '#151520', borderColor: '#ffffff10' }} />
                                    <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorValue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Total Predictability</span>
                                <span className="text-green-400 font-bold">+18.2%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-accent h-2 rounded-full w-[75%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-6 border border-primary/20 bg-primary/5">
                        <h3 className="text-md font-bold text-primary mb-2">Subscribe to Premium Insights</h3>
                        <p className="text-xs text-gray-400 mb-4">Get daily API access to our raw prediction models and datasets.</p>
                        <button className="w-full py-2 bg-primary/20 text-primary hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors">
                            Upgrade Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
