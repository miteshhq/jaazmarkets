import React from 'react'
import { MessageCircle, Phone, Mail, Zap } from 'lucide-react'

export default function ContactHero({ data }) {
    const { badge, title, subtitle, channels, promise } = data

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            {/* Communication Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Support Network Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 600">
                    <defs>
                        <radialGradient id="supportGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" style={{ stopColor: '#fc572e', stopOpacity: 0.8 }}></stop>
                            <stop offset="100%" style={{ stopColor: '#ffffff', stopOpacity: 0.2 }}></stop>
                        </radialGradient>
                    </defs>

                    {/* Central Support Hub */}
                    <circle cx="400" cy="300" r="8" fill="#fc572e">
                        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"></animate>
                    </circle>

                    {/* Connection Lines to Support Channels */}
                    <line x1="400" y1="300" x2="200" y2="150" stroke="#fc572e" strokeWidth="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="400" y1="300" x2="600" y2="150" stroke="#ffffff" strokeWidth="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"></animate>
                    </line>
                    <line x1="400" y1="300" x2="200" y2="450" stroke="#ffffff" strokeWidth="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin="1s"></animate>
                    </line>
                    <line x1="400" y1="300" x2="600" y2="450" stroke="#fc572e" strokeWidth="2" opacity="0.6">
                        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite" begin="1s"></animate>
                    </line>
                </svg>

                {/* Floating Support Cards */}
                <div className="absolute top-24 left-16 animate-float">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-xs border border-primary-orange/20">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center mr-3">
                                <MessageCircle className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <span className="text-sm font-bold text-black">Live Chat</span>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-primary-orange rounded-full mr-1 animate-pulse"></div>
                                    <span className="text-xs text-gray-600">Online now</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm">Average response: <strong>30 seconds</strong></p>
                    </div>
                </div>

                <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="bg-gradient-to-br from-primary-orange to-primary-orange rounded-2xl p-6 shadow-xl text-white max-w-xs">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-sm font-bold">Phone Support</span>
                                <div className="text-xs opacity-90">24/7 Global Lines</div>
                            </div>
                        </div>
                        <p className="text-sm opacity-90">Direct connection to experts</p>
                    </div>
                </div>

                <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="bg-gradient-to-br from-black to-gray-800 rounded-2xl p-6 shadow-xl text-white max-w-xs border border-white/20">
                        <div className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-sm font-bold">Email Support</span>
                                <div className="text-xs opacity-90">&lt; 2 hour response</div>
                            </div>
                        </div>
                        <p className="text-sm opacity-90">Detailed assistance guaranteed</p>
                    </div>
                </div>

                {/* Communication Dots */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-primary-orange rounded-full animate-ping opacity-60"></div>
                    <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-2/3 w-2.5 h-2.5 bg-primary-orange rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Orange Glow Effects */}
                <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary-orange/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-primary-orange/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Support Promise */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-6 py-3 bg-primary-orange/20 text-primary-orange rounded-full text-sm font-bold border border-primary-orange/30 mb-8">
                            <Zap className="w-4 h-4 mr-2" />
                            {badge}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight mb-8">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange via-white to-primary-orange">{title}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 font-bold max-w-4xl mx-auto leading-tight mb-8">
                            <span className="text-primary-orange">{subtitle.personal}</span> {subtitle.text}<br />
                            <span className="text-white">{subtitle.available}</span> • <span className="text-primary-orange">{subtitle.expert}</span> • <span className="text-white">{subtitle.instant}</span>
                        </p>
                    </div>

                    {/* Support Channels */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {channels.map((channel, index) => {
                            const IconComp = channel.icon === 'MessageCircle' ? MessageCircle :
                                channel.icon === 'Phone' ? Phone : Mail
                            return (
                                <div key={index} className={`group ${channel.bgStyle} rounded-3xl p-6 ${channel.borderStyle} hover:bg-white/20 ${channel.hoverBorder} transition-all duration-300 hover:-translate-y-2 text-center h-full flex flex-col`}>
                                    <div className={`w-16 h-16 ${channel.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <IconComp className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-3">{channel.title}</h3>
                                    <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-grow">{channel.description}</p>
                                    <div className={`${channel.statusBg} rounded-xl p-3 mb-4`}>
                                        {channel.status && (
                                            <div className="flex items-center justify-center mb-1">
                                                <div className="w-2 h-2 bg-primary-orange rounded-full mr-2 animate-pulse"></div>
                                                <span className="text-primary-orange font-bold text-xs">{channel.status}</span>
                                            </div>
                                        )}
                                        <div className={`${channel.statusText} font-bold text-sm`}>{channel.statusInfo}</div>
                                        {channel.contact && (
                                            <div className="text-primary-orange font-bold text-lg">{channel.contact}</div>
                                        )}
                                    </div>
                                    <button className={`w-full ${channel.buttonStyle} text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg mt-auto`}>
                                        {channel.buttonText}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    {/* Support Promise */}
                    <div className="text-center">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
                            <h3 className="text-xl font-black text-white mb-4">{promise.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {promise.stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`${stat.color} text-lg font-black mb-1`}>{stat.value}</div>
                                        <div className="text-gray-300 text-xs font-semibold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                <strong>{promise.description.strong}</strong> {promise.description.text}
                            </p>

                            <a href={promise.button.href} target="_blank" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-orange to-primary-orange hover:from-primary-orange/90 hover:to-primary-orange/90 text-white font-bold text-sm rounded-xl transition-all transform hover:scale-105 shadow-lg">
                                {promise.button.text}
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
