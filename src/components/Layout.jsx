import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import FloatingAIAssistant from './FloatingAIAssistant';

export default function Layout() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    if (isLoginPage) {
        return <Outlet />;
    }

    return (
        <div className="min-h-screen bg-background text-white flex">
            <Sidebar />
            <div className="flex-1 md:ml-64 relative flex flex-col min-h-screen">
                <Topbar />
                <main className="flex-1 mt-20 p-6 animate-fade-in">
                    <Outlet />
                </main>
            </div>
            <FloatingAIAssistant />
        </div>
    );
}
