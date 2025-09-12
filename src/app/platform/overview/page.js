// app/platform/overview/page.js
import StartTradingBanner from '@/components/StartTradingBanner'
import StartTradingCTA from '@/components/StartTradingCTA'
import PlatformFeatures from '@/components/PlatformFeatures'
import ComparisonTable from '@/components/ComparisonTable'
import AvailablePlatforms from '@/components/AvailablePlatforms'
import React from 'react'

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

const PlatformFeaturesData = {
    heading: 'Why Choose MetaTrader 5',
    description: 'MT5 is the ultimate trading platform, offering advanced features and superior performance for professional traders.',
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
            bgColor: 'bg-blue-100 /30',
            iconColor: 'text-blue-600',
            icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
            benefits: ['80+ technical indicators', 'Multiple timeframes', 'Custom indicators']
        },
        {
            title: 'Multi-Device Access',
            description: 'Trade seamlessly across all your devices with synchronized accounts and settings.',
            bgColor: 'bg-purple-100 /30',
            iconColor: 'text-purple-600',
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
            benefits: ['Desktop & mobile', 'Web terminal', 'Synchronized settings']
        },
        {
            title: 'Expert Advisors',
            description: 'Automate your trading strategies with powerful Expert Advisors and algorithmic trading.',
            bgColor: 'bg-green-100 /30',
            iconColor: 'text-green-600',
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            benefits: ['MQL5 programming', 'Automated trading', 'Strategy testing']
        },
        {
            title: 'Market Depth',
            description: 'Access Level II pricing data and see the full market depth for better trading decisions.',
            bgColor: 'bg-orange-100 /30',
            iconColor: 'text-orange-600',
            icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
            benefits: ['DOM (Depth of Market)', 'Level II data', 'Order book']
        },
        {
            title: 'Economic Calendar',
            description: 'Stay informed with integrated economic calendar and market news directly in the platform.',
            bgColor: 'bg-red-100 /30',
            iconColor: 'text-red-600',
            icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
            benefits: ['Real-time news', 'Economic events', 'Market analysis']
        }
    ]
}

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

const AvailablePlatformsData = {
    heading: 'Available Platforms',
    description: 'Access MT5 across all your devices. Trade anywhere, anytime with seamless synchronization.',
    platforms: [
        {
            title: 'Desktop App',
            description: 'Full-featured platform for Windows and macOS with advanced tools.',
            bgColor: 'bg-blue-100 /30',
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
            bgColor: 'bg-green-100 /30',
            iconColor: 'text-green-600',
            icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
            buttonText: 'Download Apps',
            link: '/platform/mobile'
        },
        {
            title: 'Why Choose Us',
            description: 'Discover what makes Jaaz Markets the preferred choice for traders.',
            bgColor: 'bg-purple-100 /30',
            iconColor: 'text-purple-600',
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            buttonText: 'Learn More',
            link: '/why-choose-us'
        }
    ]
}

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
    heading: 'Ready to Experience MT5?',
    description: 'Join thousands of traders who trust Jaaz Markets for their trading success. Start with a demo account or go live today.',
    buttons: ctaButtons
}

const page = () => {
    return (
        <main>
            <StartTradingBanner {...bannerProps} />
            <PlatformFeatures data={PlatformFeaturesData} />
            <ComparisonTable data={ComparisonTableData} />
            <AvailablePlatforms data={AvailablePlatformsData} />
            <StartTradingCTA {...ctaData} />
        </main>
    )
}

export default page
