import React from 'react';
import { Info, Mail, Send, Github, Twitter, Linkedin } from 'lucide-react';

export default function AboutContact() {
    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex p-3 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 mb-4 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                    <Info className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-4">About AI Fashion Intelligence</h1>
                <p className="text-gray-400 leading-relaxed">
                    Predicting the future of fashion using advanced machine learning models, social sentiment analysis, and global retail data. We empower designers and brands with actionable pre-trend insights.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Info */}
                <div className="space-y-6">
                    <div className="glass-card p-8 border-l-4 border-l-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <h2 className="text-xl font-bold mb-4">How It Works</h2>
                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30 text-primary font-bold">1</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Data Aggregation</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">We scan millions of data points across runway shows, social media platforms, and street-style blogs globally.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 border border-accent/30 text-accent font-bold">2</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">AI Pattern Recognition</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Our proprietary neural networks identify micro-trends and project their growth velocity up to 12 months ahead.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 border border-pink-500/30 text-pink-400 font-bold">3</div>
                                <div>
                                    <h3 className="font-bold text-white mb-1">Actionable Insights</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Users receive curated dashboards, reports, and AI chat support to make informed design and purchasing decisions.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card p-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm font-bold text-gray-300">Created By</p>
                            <p className="text-lg font-bold text-white mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">AI Engineering Team</p>
                        </div>
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"><Github className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-card p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Mail className="w-6 h-6 text-accent" />
                        <h2 className="text-xl font-bold">Contact Us</h2>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-sm text-gray-400">First Name</label>
                                <input type="text" placeholder="John" className="input-field" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm text-gray-400">Last Name</label>
                                <input type="text" placeholder="Doe" className="input-field" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-400">Email Address</label>
                            <input type="email" placeholder="john@company.com" className="input-field" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-400">Subject</label>
                            <select className="input-field cursor-pointer">
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="enterprise">Enterprise Plan</option>
                                <option value="press">Press & Media</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea placeholder="How can we help you?" rows={4} className="input-field resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary py-3 mt-4 flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
