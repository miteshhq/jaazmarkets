import React from 'react'
import Banner from './components/banner'
import TradeGlobalMarkets from './components/trade-global-markets'
import ChooseYourMarkets from './components/ChooseYourMarkets'
import WhyChooseUs from './components/WhyChooseUs'
import CTA from './components/CTA'

function page() {
    return (
        <>
            <Banner />
            <TradeGlobalMarkets />
            <ChooseYourMarkets />
            <WhyChooseUs />
            <CTA />
        </>
    )
}

export default page