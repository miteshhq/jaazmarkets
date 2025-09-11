"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
    FaChartLine,
    FaUserFriends,
    FaLaptop,
    FaCog,
    FaSignInAlt,
    FaBars,
    FaTimes,
    FaChevronDown,
} from "react-icons/fa";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const headerRef = useRef(null);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleOutside = (event) => {
            if (
                mobileOpen &&
                headerRef.current &&
                !headerRef.current.contains(event.target)
            ) {
                setMobileOpen(false);
                setOpenMenu(null);
            }
        };

        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside, { passive: true });

        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, [mobileOpen]);

    // Close mobile menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileOpen(false);
                setOpenMenu(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        {
            name: "Markets",
            icon: <FaChartLine className="text-orange-500" />,
            submenu: [
                "All Products",
                "Forex",
                "Stocks",
                "Crypto",
                "Indices",
                "Precious Metals",
                "Commodities",
            ],
        },
        {
            name: "Trading",
            icon: <FaLaptop className="text-orange-500" />,
            submenu: [
                "Account Types",
                "Trading Conditions",
                "Deposit & Withdrawal",
                "Trading Hours",
                "Security",
                "Regulation",
            ],
        },
        {
            name: "Partners",
            icon: <FaUserFriends className="text-orange-500" />,
            link: "/partners",
        },
        {
            name: "More",
            icon: <FaCog className="text-orange-500" />,
            submenu: {
                "Company": [
                    "About Us",
                    "Contact Us",
                    "Careers",
                ],
                "Support": [
                    "FAQ",
                    "Trading Guide",
                    "Platform Download",
                    "Help Center",
                ]
            },
        },
    ];

    const handleMenuItemClick = (itemName) => {
        setOpenMenu((prev) => (prev === itemName ? null : itemName));
    };

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">

                    <div className="flex-shrink-0">
                        <a href="" className="flex items-center">
                            <img src="https://res.cloudinary.com/dknrega1a/image/upload/v1755514721/logo_qyvdl9.webp" alt="Jazz Markets - Professional Forex Trading Platform" className="h-8 md:h-10 w-auto" />
                        </a>
                    </div>


                    <div className="hidden lg:flex items-center space-x-8">

                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                                Markets
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 dark:border-gray-700">
                                <div className="py-1">
                                    <a href="/products" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">All Products</a>
                                    <a href="/trading/forex" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Forex</a>
                                    <a href="/trading/advantages-of-forex" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Advantages of Forex</a>
                                    <a href="/trading/stocks" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Stocks</a>
                                    <a href="/trading/crypto" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Cryptocurrencies</a>
                                    <a href="/trading/indices" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Indices</a>
                                    <a href="/trading/metals" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Precious Metals</a>
                                    <a href="/trading/commodities" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Commodities</a>
                                </div>
                            </div>
                        </div>


                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Trading
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 dark:border-gray-700">
                                <div className="py-1">
                                    <a href="/trading/account-types" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Account Types</a>
                                    <a href="/trading/conditions" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Conditions</a>
                                    <a href="/trading/deposit-withdrawal" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Deposit &amp; Withdrawal</a>
                                    <a href="/trading/hours" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Hours</a>
                                    <a href="/trust/security" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Security</a>
                                    <a href="/trust/regulation" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Regulation</a>
                                    <a href="/trust/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Cybersecurity</a>
                                </div>
                            </div>
                        </div>


                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Platforms
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 dark:border-gray-700">
                                <div className="py-1">
                                    <a href="/platform/overview" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">MT5 Overview</a>
                                    <a href="/platform/web" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Web Terminal</a>
                                    <a href="/platform/desktop" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Desktop Application</a>
                                    <a href="/platform/mobile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Mobile Apps</a>
                                </div>
                            </div>
                        </div>


                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Tools
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 dark:border-gray-700">
                                <div className="grid grid-cols-2 gap-0">

                                    <div className="p-1">
                                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                Trading Tools
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <a href="/tools/technical-analysis" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Technical Analysis</a>
                                            <a href="/tools/specifications" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Product Specifications</a>
                                            <a href="/tools/glossary" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Glossary</a>
                                            <a href="/tools/calendar" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Economic Calendar</a>
                                            <a href="/tools/news" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Market News</a>
                                            <a href="/tools/calculators" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Calculators</a>
                                        </div>
                                    </div>


                                    <div className="p-1 border-l border-gray-100 dark:border-gray-700">
                                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                                </svg>
                                                Education
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <a href="/academy" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Academy</a>
                                            <a href="/blog" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Market News &amp; Blog</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <a href="/ib" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Partners
                        </a>


                        <div className="relative group">
                            <button className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                </svg>
                                More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 dark:border-gray-700">
                                <div className="grid grid-cols-2 gap-0">

                                    <div className="p-1">
                                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                                </svg>
                                                Company
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <a href="/about" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">About Us</a>
                                            <a href="/why-choose-us" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Why Choose Us</a>
                                            <a href="/careers" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Careers</a>
                                            <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Contact Us</a>
                                        </div>
                                    </div>


                                    <div className="p-1 border-l border-gray-100 dark:border-gray-700">
                                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                </svg>
                                                Support
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <a href="/faq" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">FAQ</a>
                                            <a href="/contact" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Contact Support</a>
                                            <a href="/legal" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Legal Documents</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="hidden md:flex items-center space-x-3">
                        <a href="/login" target="_blank" className="group relative py-2.5 px-5 text-primary-orange font-semibold hover:text-white transition-all duration-300 border border-primary-orange rounded-lg hover:bg-primary-orange overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Login
                            </span>
                            <div className="absolute inset-0 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </a>
                        <a href="/register" target="_blank" className="group relative py-2.5 px-6 bg-primary-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-orange/90 transform hover:-translate-y-0.5">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                                Start Trading
                            </span>
                        </a>
                    </div>


                    <div className="lg:hidden">
                        <button type="button" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition p-2" onClick="toggleMobileMenu()">
                            <svg className="w-6 h-6" id="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>


                <div className="lg:hidden hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700" id="mobile-menu">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="space-y-4">

                            <div className="space-y-2">
                                <button className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between" onClick="toggleMobileSection('markets')">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                        Markets
                                    </div>
                                    <svg className="w-4 h-4 transform transition-transform" id="markets-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div className="hidden pl-4 space-y-1" id="markets-content">
                                    <a href="/products" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">All Products</a>
                                    <a href="/trading/forex" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Forex</a>
                                    <a href="/trading/advantages-of-forex" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Advantages of Forex</a>
                                    <a href="/trading/stocks" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Stocks</a>
                                    <a href="/trading/crypto" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Cryptocurrencies</a>
                                    <a href="/trading/indices" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Indices</a>
                                    <a href="/trading/metals" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Precious Metals</a>
                                    <a href="/trading/commodities" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Commodities</a>
                                </div>
                            </div>


                            <div className="space-y-2">
                                <button className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between" onClick="toggleMobileSection('trading')">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                        </svg>
                                        Trading
                                    </div>
                                    <svg className="w-4 h-4 transform transition-transform" id="trading-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div className="hidden pl-4 space-y-1" id="trading-content">
                                    <a href="/trading/account-types" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Account Types</a>
                                    <a href="/trading/conditions" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Trading Conditions</a>
                                    <a href="/trading/deposit-withdrawal" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Deposit &amp; Withdrawal</a>
                                    <a href="/trading/hours" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Trading Hours</a>
                                    <a href="/trust/security" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Security</a>
                                    <a href="/trust/regulation" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Regulation</a>
                                    <a href="/trust/cybersecurity" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Cybersecurity</a>
                                </div>
                            </div>


                            <div className="space-y-2">
                                <button className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between" onClick="toggleMobileSection('platforms')">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                        Platforms
                                    </div>
                                    <svg className="w-4 h-4 transform transition-transform" id="platforms-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div className="hidden pl-4 space-y-1" id="platforms-content">
                                    <a href="/platform/overview" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">MT5 Overview</a>
                                    <a href="/platform/web" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Web Terminal</a>
                                    <a href="/platform/desktop" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Desktop Application</a>
                                    <a href="/platform/mobile" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Mobile Apps</a>
                                </div>
                            </div>


                            <div className="space-y-2">
                                <button className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between" onClick="toggleMobileSection('tools-education')">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                        Tools &amp; Education
                                    </div>
                                    <svg className="w-4 h-4 transform transition-transform" id="tools-education-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div className="hidden pl-6 space-y-3" id="tools-education-content">

                                    <div className="space-y-1">
                                        <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Trading Tools</div>
                                        <a href="/tools/technical-analysis" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Technical Analysis</a>
                                        <a href="/tools/specifications" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Product Specifications</a>
                                        <a href="/tools/glossary" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Trading Glossary</a>
                                        <a href="/tools/calendar" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Economic Calendar</a>
                                        <a href="/tools/news" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Market News</a>
                                        <a href="/tools/calculators" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Trading Calculators</a>
                                    </div>

                                    <div className="space-y-1 mt-3">
                                        <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Education</div>
                                        <a href="/academy" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Trading Academy</a>
                                        <a href="/blog" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Market News &amp; Blog</a>
                                    </div>
                                </div>
                            </div>

                            <a href="/ib" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange dark:hover:text-primary-orange transition font-medium flex items-center" onClick="closeMobileMenu()">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                                Partners
                            </a>


                            <div className="space-y-2">
                                <button className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between" onClick="toggleMobileSection('more')">
                                    <div className="flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                        </svg>
                                        More
                                    </div>
                                    <svg className="w-4 h-4 transform transition-transform" id="more-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </button>
                                <div className="hidden pl-6 space-y-3" id="more-content">

                                    <div className="space-y-1">
                                        <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Company</div>
                                        <a href="/about" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">About Us</a>
                                        <a href="/why-choose-us" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Why Choose Us</a>
                                        <a href="/careers" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Careers</a>
                                        <a href="/contact" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Contact Us</a>
                                    </div>

                                    <div className="space-y-1 mt-3">
                                        <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Support</div>
                                        <a href="/faq" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">FAQ</a>
                                        <a href="/contact" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Contact Support</a>
                                        <a href="/legal" className="block pl-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-orange" onClick="closeMobileMenu()">Legal Documents</a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-3">
                                <a href="/login" target="_blank" className="group py-3 px-5 text-primary-orange font-semibold hover:text-white transition-all duration-300 border-2 border-primary-orange rounded-lg hover:bg-primary-orange text-center" onClick="closeMobileMenu()">
                                    <span className="flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                        </svg>
                                        Login
                                    </span>
                                </a>
                                <a href="/register" target="_blank" className="group py-3 px-6 bg-primary-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-orange/90 text-center transform hover:scale-105" onClick="closeMobileMenu()">
                                    <span className="flex items-center justify-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                        Start Trading
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
