import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiSearch, FiHeart, FiUser } from 'react-icons/fi';

const Layout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navItems = [
        { icon: FiHome, path: '/home' },
        { icon: FiSearch, path: '/search' },
        { icon: FiHeart, path: '/favorites' },
        { icon: FiUser, path: '/profile' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Main content area */}
            <main className="pb-16">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
                <div className="flex justify-around items-center p-4">
                    {navItems.map(({ icon: Icon, path }) => (
                        <button
                            key={path}
                            onClick={() => navigate(path)}
                            className={`${
                                isActive(path) ? 'text-teal-500' : 'text-gray-500'
                            } transition-colors`}
                        >
                            <Icon size={24} />
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Layout;