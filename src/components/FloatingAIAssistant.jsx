import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingAIAssistant() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_20px_rgba(139,92,246,0.6)] flex items-center justify-center text-white hover:scale-110 transition-transform z-50 group"
            >
                <Bot className="w-6 h-6 group-hover:animate-pulse" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-[350px] h-[450px] glass-card flex flex-col z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                                    <Bot className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm text-white">AI Fashion Expert</h3>
                                    <div className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-xs text-green-500">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                                    <Bot className="w-3 h-3 text-primary" />
                                </div>
                                <div className="bg-white/10 text-sm text-gray-200 p-3 rounded-2xl rounded-tl-sm">
                                    Hello! I'm your AI fashion assistant. Need trend insights or outfit ideas?
                                </div>
                            </div>
                        </div>

                        {/* Input Footer */}
                        <div className="p-3 border-t border-white/10 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask about trends..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:border-primary/50"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-primary/20 text-primary hover:bg-primary/40 transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
