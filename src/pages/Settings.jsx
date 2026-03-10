import React from 'react';
import { User, Bell, Lock, Activity, LogOut, ChevronRight, Shield, Database, Trash2 } from 'lucide-react';

export default function Settings() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg text-white">
                        <User className="w-6 h-6" />
                    </div>
                    Account Settings
                </h1>
                <p className="text-gray-400 text-sm mt-2">Manage your AI Fashion profile, notifications, and security preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Sidebar */}
                <div className="space-y-2">
                    <button className="w-full flex items-center justify-between p-3 bg-white/10 rounded-xl text-white transition-colors">
                        <div className="flex items-center gap-3">
                            <User className="w-5 h-5 text-primary" />
                            <span className="font-medium">Profile</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5" />
                            <span className="font-medium">Notifications</span>
                        </div>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <button className="w-full flex items-center justify-between p-3 hover:bg-white/5 rounded-xl text-gray-400 hover:text-white transition-colors">
                        <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5" />
                            <span className="font-medium">Security</span>
                        </div>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                    <div className="pt-4 mt-4 border-t border-white/10">
                        <button className="w-full flex items-center gap-3 p-3 text-red-400 hover:bg-red-400/10 rounded-xl transition-colors">
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out Everywhere</span>
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="md:col-span-2 space-y-6">
                    <div className="glass-card p-6 border-none">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-accent" />
                            Profile Information
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-2xl font-bold shadow-lg">
                                    AI
                                </div>
                                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                                    Change Avatar
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs text-gray-400 mb-1">First Name</label>
                                    <input type="text" defaultValue="Guest" className="w-full bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50" />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-400 mb-1">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full bg-black/20 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-xs text-gray-400 mb-1">Email Address</label>
                                    <input type="email" defaultValue="test@example.com" disabled className="w-full bg-black/40 border border-white/5 rounded-lg py-2 px-3 text-gray-500 cursor-not-allowed" />
                                    <p className="text-xs text-primary mt-1">Email verification completed.</p>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-end gap-3">
                                <button className="px-5 py-2 hover:bg-white/5 rounded-lg text-sm font-medium transition-colors text-white">
                                    Cancel
                                </button>
                                <button className="px-5 py-2 btn-primary shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
