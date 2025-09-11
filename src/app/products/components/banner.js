import React from 'react'

const Banner = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">

                    <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute top-[25%] left-[85%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-[35%] left-[20%] w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-[45%] left-[75%] w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-[55%] left-[15%] w-1.5 h-1.5 bg-primary-orange rounded-full animate-ping opacity-80" style={{ animationDelay: '3' }}></div>
                    <div className="absolute top-[65%] left-[90%] w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-45" style={{ animationDelay: '1.5' }}></div>
                    <div className="absolute top-[75%] left-[30%] w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '4' }}></div>
                    <div className="absolute top-[85%] left-[70%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-55" style={{
                        animationDelay: '2.5'
                    }}></div >


                    <div className="absolute top-[20%] left-[45%] w-1 h-1 bg-red-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '3.5' }}></div >
                    <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-65" style={{ animationDelay: '0.8' }}></div >
                    <div className="absolute top-[40%] left-[5%] w-2 h-2 bg-primary-orange rounded-full animate-ping opacity-75" style={{ animationDelay: "1.8" }}></div >
                    <div className="absolute top-[50%] left-[95%] w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '4.2' }}></div >
                    <div className="absolute top-[60%] left-[40%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping opacity-70" style={{ animationDelay: '2.8' }}></div >
                    <div className="absolute top-[70%] left-[80%] w-1 h-1 bg-red-400 rounded-full animate-pulse opacity-45" style={{ animationDelay: '1.2' }}></div >
                    <div className="absolute top-[80%] left-[25%] w-2 h-2 bg-green-400 rounded-full animate-ping opacity-65" style={{ animationDelay: '3.8' }}></div >
                    <div className="absolute top-[90%] left-[55%] w-1.5 h-1.5 bg-primary-orange rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.3' }}></div >


                    <div className="absolute top-[12%] left-[65%] w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-35" style={{ animationDelay: '5' }}></div >
                    <div className="absolute top-[22%] left-[35%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse opacity-55" style={{ animationDelay: '1.7' }}></div >
                    <div className="absolute top-[32%] left-[88%] w-1 h-1 bg-green-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '3.2' }}></div >
                    <div className="absolute top-[42%] left-[12%] w-2 h-2 bg-red-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.7' }}></div >
                    <div className="absolute top-[52%] left-[78%] w-1 h-1 bg-primary-orange rounded-full animate-ping opacity-50" style={{ animationDelay: '4.5' }}></div >
                    <div className="absolute top-[62%] left-[48%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-45" style={{ animationDelay: '2.2' }}></div >
                    <div className="absolute top-[72%] left-[8%] w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-65" style={{ animationDelay: '1.4' }}></div >
                    <div className="absolute top-[82%] left-[92%] w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-70" style={{ animationDelay: '3.7' }}></div >
                </div >


                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <svg viewBox="0 0 800 600" className="w-full h-full">

                        <path d="M0,400 Q200,350 400,300 T800,200" stroke="#10B981" strokeWidth="3" fill="none" className="animate-draw-line">
                            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite"></animate>
                        </path>

                        <path d="M0,200 Q200,250 400,300 T800,400" stroke="#EF4444" strokeWidth="3" fill="none" className="animate-draw-line" style={{ animationDelay: 2 }}>
                            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite" begin="2s"></animate>
                        </path>

                        <path d="M0,300 Q200,280 400,320 T800,300" stroke="#F59E0B" strokeWidth="2" fill="none" className="animate-draw-line" style={{ animationDelay: 4 }}>
                            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="8s" repeatCount="indefinite" begin="4s"></animate>
                        </path>
                    </svg >
                </div >


                <div className="absolute top-20 left-10 transform rotate-12 opacity-20">
                    <div className="bg-gray-800 rounded-lg p-4 border border-primary-orange/30 animate-float">
                        <div className="text-green-400 text-sm font-mono">EURUSD ↗</div>
                        <div className="text-white text-lg font-bold">1.0847</div>
                        <div className="text-green-400 text-xs">+0.0023</div>
                    </div>
                </div>

                <div className="absolute top-40 right-20 transform -rotate-6 opacity-20">
                    <div className="bg-gray-800 rounded-lg p-4 border border-red-500/30 animate-float" style={{ animationDelay: 2 }}>
                        <div className="text-red-400 text-sm font-mono">GBPUSD ↘</div>
                        <div className="text-white text-lg font-bold">1.2634</div>
                        <div className="text-red-400 text-xs">-0.0019</div>
                    </div>
                </div >

                <div className="absolute bottom-40 left-1/4 transform rotate-3 opacity-20">
                    <div className="bg-gray-800 rounded-lg p-4 border border-blue-500/30 animate-float" style={{ animationDelay: 4 }}>
                        <div className="text-blue-400 text-sm font-mono">BTC/USD ↗</div>
                        <div className="text-white text-lg font-bold">43,250</div>
                        <div className="text-green-400 text-xs">+1,847</div>
                    </div>
                </div >


                <div className="absolute bottom-20 right-10 opacity-20">
                    <svg width="150" height="100" viewBox="0 0 150 100">

                        <g className="animate-pulse">
                            <rect x="10" y="30" width="8" height="40" fill="#10B981" className="animate-scale-y"></rect>
                            <line x1="14" y1="20" x2="14" y2="80" stroke="#10B981" strokeWidth="2"></line>
                        </g>
                        <g className="animate-pulse" style={{ animationDelay: 0.5 }}>
                            <rect x="30" y="40" width="8" height="30" fill="#EF4444" className="animate-scale-y"></rect>
                            <line x1="34" y1="25" x2="34" y2="75" stroke="#EF4444" strokeWidth="2"></line>
                        </g>
                        <g className="animate-pulse" style={{ animationDelay: 1 }}>
                            <rect x="50" y="20" width="8" height="50" fill="#10B981" className="animate-scale-y"></rect>
                            <line x1="54" y1="15" x2="54" y2="85" stroke="#10B981" strokeWidth="2"></line>
                        </g>
                        <g className="animate-pulse" style={{ animationDelay: 1.5 }}>
                            <rect x="70" y="35" width="8" height="35" fill="#10B981" className="animate-scale-y"></rect>
                            <line x1="74" y1="20" x2="74" y2="80" stroke="#10B981" strokeWidth="2"></line>
                        </g >
                        <g className="animate-pulse" style={{ animationDelay: 2 }}>
                            <rect x="90" y="45" width="8" height="25" fill="#EF4444" className="animate-scale-y"></rect>
                            <line x1="94" y1="30" x2="94" y2="85" stroke="#EF4444" strokeWidth="2"></line>
                        </g >
                    </svg >
                </div >


                <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-orange opacity-5 rounded-full filter blur-3xl animate-blob"></div>
                <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-green-500 opacity-5 rounded-full filter blur-3xl animate-blob animationDelay-2000"></div>
                <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-blue-600 opacity-5 rounded-full filter blur-3xl animate-blob animationDelay-4000"></div>


                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
            </div >

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
                <div className="max-w-6xl mx-auto text-center">

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tighter tracking-tight mb-8">
                        Master the Markets.<br />
                        <span className="text-primary-orange">Trade with Confidence.</span>
                    </h1>


                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                        Join thousands of traders who choose <span className="text-primary-orange font-semibold">Jazz Markets</span> for lightning-fast execution, razor-sharp spreads, and institutional-grade trading technology.
                    </p>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                            <div className="text-primary-orange text-2xl font-bold">0.0</div>
                            <div className="text-gray-300 text-sm">Pips Spreads</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                            <div className="text-green-400 text-2xl font-bold">50ms</div>
                            <div className="text-gray-300 text-sm">Execution</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                            <div className="text-blue-400 text-2xl font-bold">500+</div>
                            <div className="text-gray-300 text-sm">Instruments</div>
                        </div>
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                            <div className="text-yellow-400 text-2xl font-bold">24/7</div>
                            <div className="text-gray-300 text-sm">Support</div>
                        </div>
                    </div>


                    <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                        <a href="/register" target="_blank" className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-orange to-orange-700 hover:from-primary-orange-dark hover:to-primary-orange text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl">
                            Start Trading Today
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                        <a href="/demo" target="_blank" className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-400/10 hover:border-white hover:text-white transition-all transform hover:scale-105">
                            Try Demo Account
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </a>
                    </div>


                    <div className="pt-8 border-t border-gray-800/50 flex flex-wrap justify-center gap-x-12 gap-y-6">
                        <div className="flex items-center text-gray-300 hover:text-primary-orange transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-orange mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                            <span className="font-medium">Regulated &amp; Secure</span>
                        </div>
                        <div className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <span className="font-medium">Ultra-Fast Execution</span>
                        </div>
                        <div className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                            </svg>
                            <span className="font-medium">Institutional Spreads</span>
                        </div>
                        <div className="flex items-center text-gray-300 hover:text-yellow-400 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="font-medium">24/7 Expert Support</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner
