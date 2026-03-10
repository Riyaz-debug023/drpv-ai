import React from 'react';
import { Shield, Database, Lock, Eye, Download, Trash2, CheckCircle2 } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg text-white">
                        <Shield className="w-6 h-6" />
                    </div>
                    Privacy & Data
                </h1>
                <p className="text-gray-400 text-sm mt-2">Manage your data sharing preferences and review our AI training policies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6 border-l-4 border-l-red-500">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-red-400" />
                        Data Collection
                    </h2>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        Our Fashion Intelligence AI uses your browsing patterns, saved trends, and location data (if permitted) to personalize predictions. You have full control over what data is collected.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div>
                                <h3 className="text-sm font-bold text-white">Aggregated Usage Data</h3>
                                <p className="text-xs text-gray-500">Share anonymous app usage statistics.</p>
                            </div>
                            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div>
                                <h3 className="text-sm font-bold text-white">AI Model Training</h3>
                                <p className="text-xs text-gray-500">Allow your searches to improve our AI models.</p>
                            </div>
                            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div>
                                <h3 className="text-sm font-bold text-white">Location Services</h3>
                                <p className="text-xs text-gray-500">Used for climate-based clothing suggestions.</p>
                            </div>
                            <div className="w-12 h-6 bg-white/20 rounded-full relative cursor-pointer">
                                <div className="absolute left-1 top-1 w-4 h-4 bg-gray-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass-card p-6">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-green-400" />
                            Security Status
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                <div>
                                    <span className="text-white block">End-to-End Encryption</span>
                                    <span className="text-gray-500 text-xs">All API requests and responses are secured.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-sm">
                                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                                <div>
                                    <span className="text-white block">Data Anonymization</span>
                                    <span className="text-gray-500 text-xs">Your identity is separated from trend queries.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card p-6 border border-red-500/20 bg-red-500/5">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-400">
                            <Eye className="w-5 h-5" />
                            Data Management
                        </h2>
                        <div className="space-y-3">
                            <button className="w-full flex justify-between items-center p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-sm text-gray-300">
                                <span className="flex items-center gap-2"><Download className="w-4 h-4" /> Download My Data</span>
                                <span className="text-xs text-gray-500">JSON Format</span>
                            </button>
                            <button className="w-full flex justify-between items-center p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-xl transition-colors text-sm">
                                <span className="flex items-center gap-2 font-bold"><Trash2 className="w-4 h-4" /> Delete Account & Data</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
