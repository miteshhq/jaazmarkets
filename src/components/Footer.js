"use client";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    <div>
                        <div className="flex items-center mb-6">
                            <img src="/images/brand/logo-white.webp" alt="Jazz Markets - Professional Forex Trading Platform" className="h-8 w-auto" loading="lazy" />
                        </div>
                        <p className="text-gray-400 mb-6">
                            Your trusted forex broker with competitive spreads, fast execution, and world-class trading platforms. Trade with power, trade with Jaaz.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/jaazmarkets/" className="text-gray-400 hover:text-primary-orange transition" title="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.415 2.227.055 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.415-1.274.055-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                                </svg>
                            </a>
                            <a href="https://x.com/JazzMarkets" className="text-gray-400 hover:text-primary-orange transition" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-primary-orange transition">About Us</Link></li>
                            <li><Link href="/platform/overview" className="text-gray-400 hover:text-primary-orange transition">MT5 Platform</Link></li>
                            <li><Link href="/trading/account-types" className="text-gray-400 hover:text-primary-orange transition">Account Types</Link></li>
                            <li><Link href="/academy" className="text-gray-400 hover:text-primary-orange transition">Education</Link></li>
                            <li><Link href="/partners" className="text-gray-400 hover:text-primary-orange transition">Partner Program</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-primary-orange transition">Contact Us</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-bold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/legal" className="text-gray-400 hover:text-primary-orange transition">Legal Documents</Link></li>
                            <li><Link href="/legal/terms-conditions" className="text-gray-400 hover:text-primary-orange transition">Terms &amp; Conditions</Link></li>
                            <li><Link href="/legal/privacy-policy" className="text-gray-400 hover:text-primary-orange transition">Privacy Policy</Link></li>
                            <li><Link href="/legal/risk-disclosure" className="text-gray-400 hover:text-primary-orange transition">Risk Disclosure</Link></li>
                            <li><Link href="/legal/aml-kyc-policy" className="text-gray-400 hover:text-primary-orange transition">AML/KYC Policy</Link></li>
                            <li><Link href="/trust/security" className="text-gray-400 hover:text-primary-orange transition">Security</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-gray-400">Office # 210 Al-Nasar Sports Club<br />Dubai, UAE</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <span className="text-gray-400">info@jaazmarkets.com</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-primary-orange mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-gray-400">+971-50-8596-279<br />24/7 Support</span>
                            </li>
                        </ul>


                        <div className="mt-6">
                            <div className="text-sm font-semibold text-gray-300 mb-3">Trust &amp; Security</div>
                            <div className="flex flex-wrap gap-2">
                                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
                                    <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                    SSL Secured
                                </div>
                                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
                                    <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    Licensed
                                </div>
                                <div className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-400 border border-gray-700">
                                    <svg className="w-3 h-3 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                    </svg>
                                    Regulated
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-12 pb-8 border-t border-gray-800">
                    <div className="bg-gray-800/40 border border-gray-700/50 rounded-lg p-6 md:p-8">
                        <div className="flex items-start mb-6">
                            <svg className="w-8 h-8 text-gray-400 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                            </svg>
                            <div>
                                <h3 className="text-xl font-bold text-gray-200 mb-2">Risk Disclaimer</h3>
                                <p className="text-gray-400 font-semibold">High Risk Investment Warning</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                            <p>
                                <strong className="text-gray-200">Investment Risk:</strong> An investment in derivatives may mean investors may lose an amount even greater than their original investment. Anyone wishing to invest in any of the products mentioned in www.jaazmarkets.com should seek their own financial or professional advice. Trading of securities, forex, stock market, commodities, options and futures may not be suitable for everyone and involves the risk of losing part or all of your money.
                            </p>

                            <p>
                                <strong className="text-gray-200">Market Risk:</strong> Trading in the financial markets has large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the markets. Don't invest and trade with money which you can't afford to lose. Forex Trading are not allowed in some countries, before investing your money, make sure whether your country is allowing this or not.
                            </p>

                            <p>
                                <strong className="text-gray-200">Professional Advice:</strong> You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any currency or spot metals trade. Nothing in this site should be read or construed as constituting advice on the part of Jazz Markets LTD or any of its affiliates, directors, officers or employees.
                            </p>

                            <div className="bg-gray-700/30 rounded-lg p-4 mt-6 border border-gray-600/30">
                                <h4 className="text-gray-300 font-semibold mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                                    </svg>
                                    Restricted Regions
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    Jazz Markets LTD does not provide services for citizens/residents of the <strong className="text-gray-200">United States, Cuba, Iraq, Myanmar, North Korea, Sudan</strong>. The services of Jazz Markets LTD are not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            <p>© {new Date().getFullYear()} Jazz Markets. All rights reserved.</p>
                        </div>
                        <div className="sr-only">
                            <div className="mb-2">
                                <span>Website Development &amp; Best Forex CRM Solutions powered by </span>
                                <a href="https://brokeret.com" target="_blank" rel="noopener" title="Leading Forex Technology Provider" className="text-primary-orange hover:text-primary-orange-dark transition">Brokeret</a>
                                <span> - Industry-leading Forex CRM Provider</span>
                            </div>
                            <div className="mb-2">
                                <span>Advanced Trading Technology &amp; </span>
                                <a href="https://brokeret.com" target="_blank" rel="noopener" title="Best Forex CRM Platform" className="text-primary-orange hover:text-primary-orange-dark transition">Professional Forex CRM Platform</a>
                                <span> delivering institutional-grade trading solutions</span>
                            </div>
                            <div className="mb-2">
                                <span>Risk Management Systems &amp; </span>
                                <a href="https://brokeret.com" target="_blank" rel="noopener" title="Forex CRM Technology Solutions" className="text-primary-orange hover:text-primary-orange-dark transition">Forex CRM Technology Solutions</a>
                                <span> by leading financial technology innovators</span>
                            </div>
                            <div>
                                <span>MT5 Integration &amp; </span>
                                <a href="https://brokeret.com" target="_blank" rel="noopener" title="Best Forex CRM Software" className="text-primary-orange hover:text-primary-orange-dark transition">Best Forex CRM Software</a>
                                <span> providing comprehensive broker management solutions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
