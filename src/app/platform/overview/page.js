// app/platform/overview/page.js
import StartTradingBanner from '@/components/StartTradingBanner'
import StartTradingCTA from '@/components/StartTradingCTA'
import PlatformFeatures from '@/components/PlatformFeatures'
import ComparisonTable from '@/components/ComparisonTable'
import AvailablePlatforms from '@/components/AvailablePlatforms'
import React from 'react'
import {
    Activity, Target, Zap, TrendingUp, ChartColumn, Monitor, Globe, Smartphone,
    ArrowRight, Check, Brain, RefreshCw, TestTube, Calendar, Code, X
} from 'lucide-react'

// Data Objects
const mt5OverviewData = {
    sections: [
        {
            id: "multi_asset",
            title: "Multi-Asset Trading Platform",
            description: "MetaTrader 5 provides access to Forex, Stocks, Futures, Options, and Bonds all from a single platform. With support for over 1,000 financial instruments, traders can diversify their portfolios and implement sophisticated trading strategies across multiple asset classes.",
            image: "https://www.metaquotes.net/c/2/0/all_in_one_for_media_kit.jpg",
            imageAlt: "MetaTrader 5 Multi-Asset Platform",
            features: [
                "Forex currency pairs",
                "Stock indices and individual stocks",
                "Commodities and futures contracts",
                "Cryptocurrency CFDs",
                "Bonds and options"
            ],
            highlight: {
                icon: "target",
                value: "1000+",
                label: "Instruments",
                bgColor: "bg-primary-orange"
            }
        },
        {
            id: "trading_system",
            title: "Advanced Trading System",
            description: "The platform delivers a powerful trading system with Depth of Market (DOM) feature, providing separate accounting of orders and trades. It supports both netting and hedging position accounting systems with four execution modes: Instant, Request, Market, and Exchange.",
            features: [
                "Market Depth (Level II) data access",
                "Netting and hedging account types",
                "Multiple execution modes",
                "Advanced order management",
                "Partial order filling support"
            ],
            highlight: {
                icon: "zap",
                value: "4",
                label: "Execution Modes",
                bgColor: "bg-blue-600"
            },
            visual: {
                icon: "activity",
                title: "Market Depth",
                subtitle: "Level II Data Access",
                bgGradient: "from-blue-50 to-indigo-100"
            }
        },
        {
            id: "analysis_tools",
            title: "Superior Analysis Tools",
            description: "MetaTrader 5 allows simultaneous opening of up to 100 currency and stock price charts with 21 timeframes for comprehensive analysis. More than 80 technical indicators and analytical tools provide deep market insights.",
            features: [
                "21 chart timeframes (M1 to MN1)",
                "80+ built-in technical indicators",
                "38 technical analysis objects",
                "Custom indicators support",
                "Advanced charting capabilities"
            ],
            highlight: {
                icon: "trending-up",
                value: "21",
                label: "Timeframes",
                bgColor: "bg-green-600"
            },
            visual: {
                icon: "chart-column",
                title: "Advanced Charts",
                subtitle: "80+ Technical Indicators",
                bgGradient: "from-green-50 to-emerald-100"
            }
        }
    ],
    platformAvailability: {
        title: "Available Across All Platforms",
        description: "Access the full power of MetaTrader 5 on desktop, web, and mobile with seamless synchronization.",
        platforms: [
            {
                icon: "monitor",
                title: "Desktop Platform",
                description: "Complete functionality with MQL5 programming and strategy testing",
                devices: "Windows • macOS • Linux",
                bgColor: "bg-blue-100",
                iconColor: "text-blue-600",
            },
            {
                icon: "globe",
                title: "Web Terminal",
                description: "Browser-based trading with 30 indicators and secure encryption",
                devices: "Chrome • Safari • Firefox • Edge",
                bgColor: "bg-primary-orange/10",
                iconColor: "text-primary-orange",
            },
            {
                icon: "smartphone",
                title: "Mobile Apps",
                description: "Full trading capabilities with low data consumption",
                devices: "iOS • Android • Huawei",
                bgColor: "bg-green-100",
                iconColor: "text-green-600",
            }
        ]
    }
}

const features2025Data = {
    title: "Latest 2025 Features",
    description: "MetaTrader 5 continues to evolve with cutting-edge features that enhance trading performance and user experience.",
    features: [
        {
            icon: "brain",
            title: "AI-Powered Trade Assistant",
            description: "Tracks trading history, live news feeds, and signals to offer smart trade suggestions and market sentiment analysis.",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            icon: "zap",
            title: "Multi-Symbol Backtesting",
            description: "Test strategies across forex, stocks, and crypto simultaneously. 30% faster testing speed than previous versions.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: "refresh-cw",
            title: "Real-Time Device Sync",
            description: "Seamless synchronization across up to 5 devices per account with no data loss or duplicate trades.",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: "test-tube",
            title: "Enhanced Strategy Tester",
            description: "Advanced multi-threaded testing with improved speed and comprehensive simulation outputs.",
            bgColor: "bg-orange-50",
            borderColor: "border-orange-200"
        },
        {
            icon: "calendar",
            title: "Built-in Economic Calendar",
            description: "Real-time macroeconomic news and events directly integrated into the platform for fundamental analysis.",
            bgColor: "bg-red-50",
            borderColor: "border-red-200"
        },
        {
            icon: "code",
            title: "MQL5 Programming Language",
            description: "Advanced object-oriented programming language for creating sophisticated Expert Advisors and custom indicators.",
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-200"
        }
    ]
}

const technicalSpecsData = {
    title: "Technical Specifications",
    description: "Built on advanced technology with institutional-grade performance and reliability standards.",
    categories: [
        {
            title: "Platform Architecture",
            items: [
                "64-bit multi-threaded platform",
                "Low-latency execution infrastructure",
                "Optimized for modern hardware",
                "Cross-platform compatibility"
            ]
        },
        {
            title: "Analysis Tools",
            items: [
                "38 built-in technical indicators",
                "44 graphical objects",
                "21 chart timeframes",
                "Unlimited charts support"
            ]
        },
        {
            title: "Order Management",
            items: [
                "6 pending order types",
                "4 execution modes",
                "Partial order filling",
                "One-click trading"
            ]
        },
        {
            title: "Trading Systems",
            items: [
                "Netting position accounting",
                "Hedging position accounting",
                "Market depth (Level II)",
                "Expert Advisors automation"
            ]
        }
    ]
}

// Icon mapping helper
const getIcon = (iconName, className = "w-6 h-6") => {
    const icons = {
        target: Target,
        zap: Zap,
        activity: Activity,
        'trending-up': TrendingUp,
        'chart-column': ChartColumn,
        monitor: Monitor,
        globe: Globe,
        smartphone: Smartphone,
        brain: Brain,
        'refresh-cw': RefreshCw,
        'test-tube': TestTube,
        calendar: Calendar,
        code: Code,
        check: Check,
        x: X
    }
    const IconComponent = icons[iconName] || Target
    return <IconComponent className={className} />
}

const bannerProps = {
    buttons: [
        {
            text: "Open Live Account",
            link: "/register",
            variant: "primary",
            icon: "arrow"
        },
        {
            text: "Try Demo Account",
            link: "/demo",
            variant: "secondary",
            icon: "monitor"
        }
    ],
}

// Inline MT5 Platform Overview Component
const MT5PlatformOverview = ({ data }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        MetaTrader 5 Platform Overview
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        The comprehensive trading solution that has become the new industry standard, driven by pioneering technological solutions and constant updates.
                    </p>
                </div>

                {data.sections.map((section, index) => (
                    <div key={section.id} className="mb-20">
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                            }`}>
                            {/* Content */}
                            <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                    {section.title}
                                </h3>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {section.description}
                                </p>
                                <ul className="space-y-4">
                                    {section.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className={`w-6 h-6 ${section.id === 'multi_asset' ? 'bg-primary-orange/20' :
                                                section.id === 'trading_system' ? 'bg-blue-100' : 'bg-green-100'
                                                } rounded-full flex items-center justify-center mr-3`}>
                                                <div className={`w-2 h-2 ${section.id === 'multi_asset' ? 'bg-primary-orange' :
                                                    section.id === 'trading_system' ? 'bg-blue-600' : 'bg-green-600'
                                                    } rounded-full`}></div>
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual */}
                            <div className={`relative ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                                {section.image ? (
                                    // Image for first section
                                    <>
                                        <img
                                            src={section.image}
                                            alt={section.imageAlt}
                                            className="rounded-2xl shadow-2xl"
                                        />
                                        <div className={`absolute -bottom-6 -left-6 ${section.highlight.bgColor} text-white p-4 rounded-xl shadow-lg`}>
                                            <div className="flex items-center">
                                                {getIcon(section.highlight.icon)}
                                                <div className="ml-2">
                                                    <div className="font-bold">{section.highlight.value}</div>
                                                    <div className="text-sm opacity-90">{section.highlight.label}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Visual for other sections
                                    <>
                                        <div className={`bg-gradient-to-br ${section.visual.bgGradient} rounded-2xl p-8 h-80 flex items-center justify-center`}>
                                            <div className="text-center">
                                                {getIcon(section.visual.icon, "w-20 h-20 text-blue-600 mx-auto mb-4")}
                                                <h4 className="text-xl font-bold text-gray-900 mb-2">{section.visual.title}</h4>
                                                <p className="text-gray-600">{section.visual.subtitle}</p>
                                            </div>
                                        </div>
                                        <div className={`absolute ${index % 2 === 1 ? '-bottom-6 -left-6' : '-top-6 -right-6'} ${section.highlight.bgColor} text-white p-4 rounded-xl shadow-lg`}>
                                            <div className="flex items-center">
                                                {getIcon(section.highlight.icon)}
                                                <div className="ml-2">
                                                    <div className="font-bold">{section.highlight.value}</div>
                                                    <div className="text-sm opacity-90">{section.highlight.label}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Platform Availability */}
                <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            {data.platformAvailability.title}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {data.platformAvailability.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.platformAvailability.platforms.map((platform, index) => (
                            <div key={index} className="text-center">
                                <div className={`w-16 h-16 ${platform.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    {getIcon(platform.icon, `w-8 h-8 ${platform.iconColor}`)}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{platform.title}</h4>
                                <p className="text-gray-600 mb-4">{platform.description}</p>
                                <div className="text-sm text-gray-500">{platform.devices}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Inline 2025 Latest Features Component
const Latest2025Features = ({ data }) => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.features.map((feature, index) => (
                        <div
                            key={index}
                            className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
                        >
                            <div className="mb-4">
                                {getIcon(feature.icon, "w-12 h-12 text-gray-700")}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Inline Technical Specifications Component  
const TechnicalSpecifications = ({ data }) => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {data.title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.categories.map((category, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start">
                                        {getIcon('check', "w-5 h-5 text-primary-orange mr-2 mt-0.5 flex-shrink-0")}
                                        <span className="text-gray-600 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Updated Platform Features Data
const PlatformFeaturesData = {
    heading: 'Why Choose MetaTrader 5',
    description: 'MT5 is the ultimate trading platform, offering advanced features and superior performance for professional traders worldwide.',
    features: [
        {
            title: 'Lightning Speed',
            description: 'Execute trades in under 50ms with our advanced infrastructure and optimized trading servers.',
            bgColor: 'bg-primary-orange/10',
            iconColor: 'text-primary-orange',
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            benefits: ['Sub-50ms execution', 'No requotes', 'Minimal slippage']
        },
        {
            title: 'Advanced Charting',
            description: 'Professional charting tools with comprehensive technical analysis capabilities.',
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
            benefits: ['80+ technical indicators', 'Multiple timeframes', 'Custom indicators']
        },
        {
            title: 'Multi-Device Access',
            description: 'Trade seamlessly across all your devices with synchronized accounts and settings.',
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-600',
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
            benefits: ['Desktop & mobile', 'Web terminal', 'Synchronized settings']
        },
        {
            title: 'Expert Advisors',
            description: 'Automate your trading strategies with powerful Expert Advisors and algorithmic trading.',
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            benefits: ['MQL5 programming', 'Automated trading', 'Strategy testing']
        },
        {
            title: 'Market Depth',
            description: 'Access Level II pricing data and see the full market depth for better trading decisions.',
            bgColor: 'bg-orange-100',
            iconColor: 'text-orange-600',
            icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
            benefits: ['DOM (Depth of Market)', 'Level II data', 'Order book']
        },
        {
            title: 'Economic Calendar',
            description: 'Stay informed with integrated economic calendar and market news directly in the platform.',
            bgColor: 'bg-red-100',
            iconColor: 'text-red-600',
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
            benefits: ['Real-time news', 'Economic events', 'Market analysis']
        }
    ]
}

// Comparison Table Data
const ComparisonTableData = {
    heading: 'MT5 vs MT4 Comparison',
    description: 'See why MT5 is the superior choice for modern traders with enhanced features and capabilities.',
    tableData: [
        {
            feature: 'Timeframes',
            mt5: { type: 'text', value: '21 Timeframes' },
            mt4: { type: 'text', value: '9 Timeframes' }
        },
        {
            feature: 'Pending Orders',
            mt5: { type: 'text', value: '6 Types' },
            mt4: { type: 'text', value: '4 Types' }
        },
        {
            feature: 'Technical Indicators',
            mt5: { type: 'text', value: '80+' },
            mt4: { type: 'text', value: '30+' }
        },
        {
            feature: 'Market Depth',
            mt5: { type: 'icon', value: true },
            mt4: { type: 'icon', value: false }
        },
        {
            feature: 'Economic Calendar',
            mt5: { type: 'icon', value: true },
            mt4: { type: 'icon', value: false }
        },
        {
            feature: 'Hedging',
            mt5: { type: 'icon', value: true },
            mt4: { type: 'icon', value: true }
        },
        {
            feature: 'Netting',
            mt5: { type: 'icon', value: true },
            mt4: { type: 'icon', value: false }
        }
    ]
}

// Available Platforms Data
const AvailablePlatformsData = {
    heading: 'Available Platforms',
    description: 'Access MT5 across all your devices. Trade anywhere, anytime with seamless synchronization.',
    platforms: [
        {
            title: 'Desktop App',
            description: 'Full-featured platform for Windows and macOS with advanced tools.',
            bgColor: 'bg-blue-100',
            iconColor: 'text-blue-600',
            icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
            buttonText: 'Learn More',
            link: '/platform/desktop'
        },
        {
            title: 'Web Terminal',
            description: 'Trade directly from your browser without any downloads required.',
            bgColor: 'bg-primary-orange/10',
            iconColor: 'text-primary-orange',
            icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 9l-3 3m0-3l3 3',
            buttonText: 'Launch Now',
            link: '/platform/web'
        },
        {
            title: 'Mobile Apps',
            description: 'Trade on the go with iOS, Android, and Huawei mobile applications.',
            bgColor: 'bg-green-100',
            iconColor: 'text-green-600',
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
            buttonText: 'Download Apps',
            link: '/platform/mobile'
        },
        {
            title: 'Why Choose Us',
            description: 'Discover what makes Jaaz Markets the preferred choice for traders.',
            bgColor: 'bg-purple-100',
            iconColor: 'text-purple-600',
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            buttonText: 'Learn More',
            link: '/why-choose-us'
        }
    ]
}

// CTA Data
const ctaButtons = [
    {
        text: 'Open Live Account',
        href: '/register',
        variant: 'primary'
    },
    {
        text: 'Try Demo Account',
        href: '/demo',
        variant: 'secondary'
    }
]

const ctaData = {
    heading: 'Ready to Trade with MetaTrader 5?',
    description: 'Join millions of traders worldwide who trust MetaTrader 5 for professional trading. Experience the industry standard platform with Jaaz Markets.',
    buttons: ctaButtons
}

const page = () => {
    return (
        <main>
            <StartTradingBanner {...bannerProps} />
            <MT5PlatformOverview data={mt5OverviewData} />
            <Latest2025Features data={features2025Data} />
            <TechnicalSpecifications data={technicalSpecsData} />
            <PlatformFeatures data={PlatformFeaturesData} />
            <ComparisonTable data={ComparisonTableData} />
            <AvailablePlatforms data={AvailablePlatformsData} />
            <StartTradingCTA {...ctaData} />
        </main>
    )
}

export default page
