import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Send, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../api/config';

export default function AIAssistant() {
    const [messages, setMessages] = useState([
        { id: 1, type: 'ai', text: 'Welcome to your AI Fashion Assistant. How can I help you predict or analyze trends today?' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userText = input;
        const userMessage = { id: Date.now(), type: 'user', text: userText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_BASE_URL}/ai/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ message: userText })
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to get AI response');
            }

            const aiMessage = {
                id: Date.now() + 1,
                type: 'ai',
                text: data.response
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error("Local API Error:", error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                type: 'ai',
                text: "Error connecting to backend AI intelligence network."
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const quickSuggestions = [
        "What fashion trends will be popular next year?",
        "Best clothing for summer?",
        "Top trending colors this season?",
        "Analyze the Y2K revival"
    ];

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col glass-card border-none overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                        <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            Fashion Intelligence AI <Sparkles className="w-4 h-4 text-accent" />
                        </h1>
                        <p className="text-sm text-green-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            System Online & Analyzing
                        </p>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-white/10' : 'bg-primary/20'}`}>
                                {msg.type === 'user' ? <User className="w-5 h-5 text-gray-300" /> : <Bot className="w-5 h-5 text-primary" />}
                            </div>

                            <div className={`max-w-[80%] p-4 ${msg.type === 'user'
                                ? 'bg-gradient-to-r from-primary to-accent text-white rounded-2xl rounded-tr-sm'
                                : 'bg-white/5 border border-white/10 text-gray-200 rounded-2xl rounded-tl-sm'
                                }`}>
                                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </motion.div>
                    ))}

                    {isTyping && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-4"
                        >
                            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-primary animate-pulse" />
                            </div>
                            <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-2">
                                <Loader2 className="w-4 h-4 text-primary animate-spin" />
                                <span className="text-sm text-gray-400">AI is thinking...</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 border-t border-white/10 bg-black/20">
                <div className="flex flex-wrap gap-2 mb-4">
                    {quickSuggestions.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setInput(s)}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full hover:bg-white/10 hover:border-primary/50 transition-colors"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask your fashion intelligence question..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-14 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-gray-500"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary hover:bg-primary/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-5 h-5 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}
