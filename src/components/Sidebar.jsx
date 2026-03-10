import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    TrendingUp,
    FastForward,
    CloudSun,
    Bot,
    FileText,
    Image as ImageIcon,
    Bookmark,
    Info,
    Mail,
    History,
    Settings,
    Shield,
    Camera
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/analysis', icon: TrendingUp, label: 'Trend Analysis' },
    { path: '/prediction', icon: FastForward, label: 'Future Predictions' },
    { path: '/climate', icon: CloudSun, label: 'Climate Clothing' },
    { path: '/assistant', icon: Bot, label: 'AI Fashion Assistant' },
    { path: '/reports', icon: FileText, label: 'Trend Reports' },
    { path: '/gallery', icon: ImageIcon, label: 'Fashion Gallery' },
    { path: '/scanner', icon: Camera, label: 'Style Scanner' },
    { path: '/history', icon: History, label: 'Prediction history' },
    { path: '/saved', icon: Bookmark, label: 'Saved Trends' },
    { path: '/settings', icon: Settings, label: 'Account Settings' },
    { path: '/privacy', icon: Shield, label: 'Privacy & Data' },
    { path: '/about', icon: Info, label: 'About Project' },
    { path: '/contact', icon: Mail, label: 'Contact' },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen fixed top-0 left-0 bg-card border-r border-white/10 hidden md:flex flex-col z-40">
            <div className="p-6">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                    AI Fashion
                </h1>
                <p className="text-xs text-gray-400 mt-1">Intelligence Platform</p>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all',
                                'hover:bg-white/5',
                                isActive
                                    ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                                    : 'text-gray-400'
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-white/10 flex flex-col gap-2">
                <div className="flex items-center gap-3 px-4 py-3 bg-white/5 rounded-xl cursor-default transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        US
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">User</p>
                        <p className="text-xs text-green-400">Authenticated</p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-2 mt-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-xl transition-colors border border-red-500/20 text-sm font-medium"
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}
