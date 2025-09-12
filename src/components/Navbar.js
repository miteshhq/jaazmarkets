"use client";
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
    const [mobileSection, setMobileSection] = useState(null);
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
                setMobileSection(null);
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
                setMobileSection(null);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Mobile menu toggle functions
    const toggleMobileMenu = () => {
        setMobileOpen(!mobileOpen);
        if (mobileOpen) {
            setMobileSection(null);
        }
    };

    const closeMobileMenu = () => {
        setMobileOpen(false);
        setMobileSection(null);
    };

    const toggleMobileSection = (section) => {
        setMobileSection(mobileSection === section ? null : section);
    };

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
        <header ref={headerRef} className="bg-white  border-b border-gray-200  sticky top-0 z-50 shadow-sm">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-primary-orange to-orange-700">Jaaz Markets</p>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {/* Markets */}
                        <div className="relative group">
                            <button className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                                Markets
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white  rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 ">
                                <div className="py-1">
                                    <Link href="/products" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">All Products</Link>
                                    <Link href="/trading/forex" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Forex</Link>
                                    <Link href="/trading/advantages-of-forex" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Advantages of Forex</Link>
                                    <Link href="/trading/stocks" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Stocks</Link>
                                    <Link href="/trading/crypto" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Cryptocurrencies</Link>
                                    <Link href="/trading/indices" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Indices</Link>
                                    <Link href="/trading/metals" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Precious Metals</Link>
                                    <Link href="/trading/commodities" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Commodities</Link>
                                </div>
                            </div>
                        </div>

                        {/* Trading */}
                        <div className="relative group">
                            <button className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                                Trading
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white  rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 ">
                                <div className="py-1">
                                    <Link href="/trading/account-types" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Account Types</Link>
                                    <Link href="/trading/conditions" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Conditions</Link>
                                    <Link href="/trading/deposit-withdrawal" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Deposit & Withdrawal</Link>
                                    <Link href="/trading/hours" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Hours</Link>
                                    <Link href="/trust/security" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Security</Link>
                                    <Link href="/trust/regulation" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Regulation</Link>
                                    <Link href="/trust/cybersecurity" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Cybersecurity</Link>
                                </div>
                            </div>
                        </div>

                        {/* Platforms */}
                        <div className="relative group">
                            <button className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Platforms
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-64 bg-white  rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 ">
                                <div className="py-1">
                                    <Link href="/platform/overview" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">MT5 Overview</Link>
                                    <Link href="/platform/web" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Web Terminal</Link>
                                    <Link href="/platform/desktop" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Desktop Application</Link>
                                    <Link href="/platform/mobile" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Mobile Apps</Link>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="relative group">
                            <button className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                Tools
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute left-0 mt-2 w-96 bg-white  rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 ">
                                <div className="grid grid-cols-2 gap-0">
                                    {/* Trading Tools */}
                                    <div className="p-1">
                                        <div className="px-4 py-3 border-b border-gray-100 ">
                                            <h3 className="text-sm font-semibold text-gray-900  flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                </svg>
                                                Trading Tools
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <Link href="/tools/technical-analysis" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Technical Analysis</Link>
                                            <Link href="/tools/specifications" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Product Specifications</Link>
                                            <Link href="/tools/glossary" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Glossary</Link>
                                            <Link href="/tools/calendar" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Economic Calendar</Link>
                                            <Link href="/tools/news" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Market News</Link>
                                            <Link href="/tools/calculators" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Calculators</Link>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="p-1 border-l border-gray-100 ">
                                        <div className="px-4 py-3 border-b border-gray-100 ">
                                            <h3 className="text-sm font-semibold text-gray-900  flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                                </svg>
                                                Education
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <Link href="/academy" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Trading Academy</Link>
                                            <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Market News & Blog</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Partners */}
                        <Link href="/partners" className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Partners
                        </Link>

                        {/* More */}
                        <div className="relative group">
                            <button className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center">
                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                </svg>
                                More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-96 bg-white  rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 border border-gray-100 ">
                                <div className="grid grid-cols-2 gap-0">
                                    {/* Company */}
                                    <div className="p-1">
                                        <div className="px-4 py-3 border-b border-gray-100 ">
                                            <h3 className="text-sm font-semibold text-gray-900  flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                                                </svg>
                                                Company
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <Link href="/about" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">About Us</Link>
                                            <Link href="/why-choose-us" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Why Choose Us</Link>
                                            <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Contact Us</Link>
                                        </div>
                                    </div>

                                    {/* Support */}
                                    <div className="p-1 border-l border-gray-100 ">
                                        <div className="px-4 py-3 border-b border-gray-100 ">
                                            <h3 className="text-sm font-semibold text-gray-900  flex items-center">
                                                <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                                </svg>
                                                Support
                                            </h3>
                                        </div>
                                        <div className="py-1">
                                            <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">FAQ</Link>
                                            <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Contact Support</Link>
                                            <Link href="/legal" className="block px-4 py-2 text-sm text-gray-700  hover:bg-primary-orange/10 hover:text-primary-orange transition-colors">Legal Documents</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/login" target="_blank" className="group relative py-2.5 px-5 text-primary-orange font-semibold hover:text-white transition-all duration-300 border border-primary-orange rounded-lg hover:bg-primary-orange overflow-hidden">
                            <span className="relative z-10 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                </svg>
                                Login
                            </span>
                            <div className="absolute inset-0 bg-primary-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Link>
                        <Link href="/register" target="_blank" className="group relative py-2.5 px-6 bg-primary-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-orange/90 transform hover:-translate-y-0.5">
                            <span className="flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                                Start Trading
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className="text-gray-700  hover:text-primary-orange :text-primary-orange transition p-2"
                            onClick={toggleMobileMenu}
                        >
                            {mobileOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="lg:hidden bg-white  border-t border-gray-200 ">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                            <div className="space-y-4">
                                {/* Markets */}
                                <div className="space-y-2">
                                    <button
                                        className="w-full text-left text-gray-700  font-medium flex items-center justify-between"
                                        onClick={() => toggleMobileSection('markets')}
                                    >
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                            Markets
                                        </div>
                                        <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'markets' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {mobileSection === 'markets' && (
                                        <div className="pl-4 space-y-1">
                                            <Link href="/products" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>All Products</Link>
                                            <Link href="/trading/forex" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Forex</Link>
                                            <Link href="/trading/advantages-of-forex" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Advantages of Forex</Link>
                                            <Link href="/trading/stocks" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Stocks</Link>
                                            <Link href="/trading/crypto" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Cryptocurrencies</Link>
                                            <Link href="/trading/indices" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Indices</Link>
                                            <Link href="/trading/metals" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Precious Metals</Link>
                                            <Link href="/trading/commodities" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Commodities</Link>
                                        </div>
                                    )}
                                </div>

                                {/* Trading */}
                                <div className="space-y-2">
                                    <button
                                        className="w-full text-left text-gray-700  font-medium flex items-center justify-between"
                                        onClick={() => toggleMobileSection('trading')}
                                    >
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                            Trading
                                        </div>
                                        <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'trading' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {mobileSection === 'trading' && (
                                        <div className="pl-4 space-y-1">
                                            <Link href="/trading/account-types" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Account Types</Link>
                                            <Link href="/trading/conditions" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Trading Conditions</Link>
                                            <Link href="/trading/deposit-withdrawal" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Deposit & Withdrawal</Link>
                                            <Link href="/trading/hours" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Trading Hours</Link>
                                            <Link href="/trust/security" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Security</Link>
                                            <Link href="/trust/regulation" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Regulation</Link>
                                            <Link href="/trust/cybersecurity" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Cybersecurity</Link>
                                        </div>
                                    )}
                                </div>

                                {/* Platforms */}
                                <div className="space-y-2">
                                    <button
                                        className="w-full text-left text-gray-700  font-medium flex items-center justify-between"
                                        onClick={() => toggleMobileSection('platforms')}
                                    >
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                            Platforms
                                        </div>
                                        <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'platforms' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {mobileSection === 'platforms' && (
                                        <div className="pl-4 space-y-1">
                                            <Link href="/platform/overview" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>MT5 Overview</Link>
                                            <Link href="/platform/web" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Web Terminal</Link>
                                            <Link href="/platform/desktop" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Desktop Application</Link>
                                            <Link href="/platform/mobile" className="block text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Mobile Apps</Link>
                                        </div>
                                    )}
                                </div>

                                {/* Tools & Education */}
                                <div className="space-y-2">
                                    <button
                                        className="w-full text-left text-gray-700  font-medium flex items-center justify-between"
                                        onClick={() => toggleMobileSection('tools-education')}
                                    >
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            Tools & Education
                                        </div>
                                        <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'tools-education' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {mobileSection === 'tools-education' && (
                                        <div className="pl-6 space-y-3">
                                            {/* Trading Tools */}
                                            <div className="space-y-1">
                                                <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Trading Tools</div>
                                                <Link href="/tools/technical-analysis" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Technical Analysis</Link>
                                                <Link href="/tools/specifications" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Product Specifications</Link>
                                                <Link href="/tools/glossary" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Trading Glossary</Link>
                                                <Link href="/tools/calendar" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Economic Calendar</Link>
                                                <Link href="/tools/news" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Market News</Link>
                                                <Link href="/tools/calculators" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Trading Calculators</Link>
                                            </div>

                                            {/* Education */}
                                            <div className="space-y-1 mt-3">
                                                <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Education</div>
                                                <Link href="/academy" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Trading Academy</Link>
                                                <Link href="/blog" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Market News & Blog</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Partners */}
                                <Link href="/partners" className="text-gray-700  hover:text-primary-orange :text-primary-orange transition font-medium flex items-center" onClick={closeMobileMenu}>
                                    <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Partners
                                </Link>

                                {/* More */}
                                <div className="space-y-2">
                                    <button
                                        className="w-full text-left text-gray-700  font-medium flex items-center justify-between"
                                        onClick={() => toggleMobileSection('more')}
                                    >
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                                            </svg>
                                            More
                                        </div>
                                        <svg className={`w-4 h-4 transform transition-transform ${mobileSection === 'more' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {mobileSection === 'more' && (
                                        <div className="pl-6 space-y-3">
                                            {/* Company */}
                                            <div className="space-y-1">
                                                <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Company</div>
                                                <Link href="/about" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>About Us</Link>
                                                <Link href="/why-choose-us" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Why Choose Us</Link>
                                                <Link href="/contact" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Contact Us</Link>
                                            </div>

                                            {/* Support */}
                                            <div className="space-y-1 mt-3">
                                                <div className="text-xs font-medium text-primary-orange uppercase tracking-wide mb-1">Support</div>
                                                <Link href="/faq" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>FAQ</Link>
                                                <Link href="/contact" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Contact Support</Link>
                                                <Link href="/legal" className="block pl-2 text-sm text-gray-600  hover:text-primary-orange" onClick={closeMobileMenu}>Legal Documents</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile CTA Buttons */}
                                <div className="pt-6 border-t border-gray-200  flex flex-col space-y-3">
                                    <Link href="/login" target="_blank" className="group py-3 px-5 text-primary-orange font-semibold hover:text-white transition-all duration-300 border-2 border-primary-orange rounded-lg hover:bg-primary-orange text-center" onClick={closeMobileMenu}>
                                        <span className="flex items-center justify-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                                            </svg>
                                            Login
                                        </span>
                                    </Link>
                                    <Link href="/register" target="_blank" className="group py-3 px-6 bg-primary-orange text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-orange/90 text-center transform hover:scale-105" onClick={closeMobileMenu}>
                                        <span className="flex items-center justify-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                            </svg>
                                            Start Trading
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
