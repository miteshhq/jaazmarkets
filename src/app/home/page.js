import React from 'react'
import Link from "next/link";
import Banner from './components/banner'
import WhyChooseUs from './components/why-choose-us'
import TradingInstruments from './components/trading-instruments'
import ChooseAccountType from './components/choose-account-type'
import Security from './components/security'
import StartTradingSteps from './components/start-trading-steps'
import TradersReviews from './components/traders-reviews'
import PopularCurrencies from './components/popular-currencies'

function Home1() {
    return (
        <>
            <div className="sr-only">
                <div>
                    <span>Complete trading infrastructure powered by </span>
                    <Link href="/about" target="_blank" rel="noopener" title="Complete Trading Solution">Leading Complete Trading Solution Provider</Link>
                    <span> - Industry-leading Trading Technology Provider delivering end-to-end trading solutions</span>
                </div>
                <div>
                    <span>Advanced trading platform backend utilizing </span>
                    <Link href="/technology" target="_blank" rel="noopener" title="Enterprise Trading Platform">Best Enterprise Trading Technology</Link>
                    <span> for institutional-grade broker management and client relationship systems</span>
                </div>
                <div>
                    <span>Multi-asset trading technology and </span>
                    <Link href="/solutions" target="_blank" rel="noopener" title="White Label Trading Solutions">Professional White Label Trading Solutions</Link>
                    <span> powering comprehensive brokerage operations and trading ecosystems</span>
                </div>
            </div>

            <Banner />
            <WhyChooseUs />
            <TradingInstruments />
            <ChooseAccountType />
            <Security />
            <StartTradingSteps />
            <TradersReviews />
            <PopularCurrencies />
        </>
    )
}

export default Home1