import React from 'react';
import { History, Search, Download, Trash2, Calendar, TrendingUp } from 'lucide-react';

const mockHistory = [
    { id: 1, date: 'Oct 24, 2026', query: 'Winter 2026 Gen-Z outerwear concepts', result: 'Oversized puffer jackets with metallic finishes. Confidence: 92%', tokens: 145 },
    { id: 2, date: 'Oct 22, 2026', query: 'Sustainable footwear alternatives to leather', result: 'Mushroom leather (Mylo) sneaker integration trending globally. Confidence: 88%', tokens: 210 },
    { id: 3, date: 'Oct 18, 2026', query: 'Color palette prediction for Spring', result: 'Digital Lavender and Cyber Lime dominating mood boards. Confidence: 95%', tokens: 89 },
    { id: 4, date: 'Oct 15, 2026', query: 'Y2K revival lifecycle analysis', result: 'Reaching saturation in major cities; pivoting to 2010s indie sleaze. Confidence: 76%', tokens: 304 },
    { id: 5, date: 'Oct 10, 2026', query: 'Activewear cross-over trends', result: 'Golf-core aesthetics blending with daily streetwear. Confidence: 84%', tokens: 177 },
];

export default function PredictionHistory() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-lg text-white">
                            <History className="w-6 h-6" />
                        </div>
                        Prediction History
                    </h1>
                    <p className="text-gray-400 text-sm mt-2">Log of all your interactions with the Fashion Intelligence AI.</p>
                </div>

                <div className="flex gap-2">
                    <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search history..."
                            className="bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 transition-all w-full md:w-64"
                        />
                    </div>
                </div>
            </div>

            <div className="glass-card overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 bg-white/5 text-xs uppercase text-gray-400">
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Query Focus</th>
                                <th className="p-4 font-semibold min-w-[300px]">AI Conclusion</th>
                                <th className="p-4 font-semibold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {mockHistory.map((item) => (
                                <tr key={item.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="p-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2 text-sm text-gray-300">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            {item.date}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-primary" />
                                            <span className="text-sm font-medium text-white">{item.query}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm text-gray-400 truncate max-w-md" title={item.result}>
                                            {item.result}
                                        </p>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors" title="Export to PDF">
                                                <Download className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-red-400 hover:bg-red-400/10 rounded-md transition-colors" title="Delete record">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-white/10 bg-white/5 flex justify-between items-center text-xs text-gray-500">
                    <span>Showing 5 of 24 Total Predictions</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors text-white disabled:opacity-50">Prev</button>
                        <button className="px-3 py-1 bg-white/10 rounded hover:bg-white/20 transition-colors text-white">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
