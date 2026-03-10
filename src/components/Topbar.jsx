import React, { useState } from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter' && query.trim()) {
            const q = query.toLowerCase();
            if (q.includes('ai') || q.includes('chat') || q.includes('assistant')) {
                navigate('/assistant');
            } else if (q.includes('climate') || q.includes('weather')) {
                navigate('/climate');
            } else if (q.includes('report') || q.includes('doc')) {
                navigate('/reports');
            } else if (q.includes('predict') || q.includes('future')) {
                navigate('/prediction');
            } else {
                // Default search takes you to trends
                navigate('/analysis');
            }
            // Clear search after navigation
            setQuery('');
        }
    };

    return (
        <header className="h-20 border-b border-white/10 bg-background/80 backdrop-blur-md fixed top-0 right-0 left-0 md:left-64 z-30 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 flex-1">
                <button className="md:hidden p-2 text-gray-400 hover:text-white">
                    <Menu className="w-6 h-6" />
                </button>

                <div className="relative w-full max-w-md hidden sm:block">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleSearch}
                        placeholder="Search trends, colors, fabrics & press Enter..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full animate-ping"></span>
                    <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></span>
                </button>
            </div>
        </header>
    );
}
