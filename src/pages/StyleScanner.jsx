import React, { useState, useRef } from 'react';
import { Scan, UploadCloud, Image as ImageIcon, Sparkles, Tag, Calendar, Shirt, Loader2, CheckCircle2 } from 'lucide-react';

export default function StyleScanner() {
    const [imageElement, setImageElement] = useState(null);
    const [isScanning, setIsScanning] = useState(false);
    const [result, setResult] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target.result;
                setImageElement(base64String);
                startScan(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target.result;
                setImageElement(base64String);
                startScan(base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const startScan = async (base64Data) => {
        setIsScanning(true);
        setResult(null);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/ai/analyze-image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ imageBase64: base64Data })
            });

            const data = await response.json();

            if (data.success && data.result) {
                setResult(data.result);
            } else {
                console.error("AI Analysis failed:", data.message);
                setResult({
                    detectedStyle: "Analysis Failed. Please try again.",
                    matchingColors: ["Error"],
                    idealOccasion: "Error analyzing image. Ensure it's a valid fashion photo.",
                    suggestions: [data.message || "Failed to contact AI service."],
                    suggestedImages: [],
                    confidence: 0
                });
            }
        } catch (error) {
            console.error("Network error during scan:", error);
            setResult({
                detectedStyle: "Network Error",
                matchingColors: [],
                idealOccasion: "Server unreachable.",
                suggestions: ["Please check your connection or backend server."],
                suggestedImages: [],
                confidence: 0
            });
        } finally {
            setIsScanning(false);
        }
    };

    const resetScanner = () => {
        setImageElement(null);
        setResult(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div>
                <h1 className="text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-lg text-white">
                        <Scan className="w-6 h-6" />
                    </div>
                    AI Style Scanner
                </h1>
                <p className="text-gray-400 text-sm mt-2">Upload a photo of any outfit to instantly get AI styling suggestions, matching items, and occasion recommendations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upload Section */}
                <div className="space-y-4">
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 ${imageElement ? 'bg-black/50 border-primary/50' : 'border-white/20 hover:border-primary/50 hover:bg-white/5 cursor-pointer h-96'}`}
                        onClick={() => !imageElement && fileInputRef.current?.click()}
                    >
                        {imageElement ? (
                            <div className="relative w-full h-80 rounded-xl overflow-hidden group">
                                <img src={imageElement} alt="Uploaded outfit" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); resetScanner(); }}
                                        className="btn-primary py-2 px-6"
                                    >
                                        Upload New Image
                                    </button>
                                </div>
                                {isScanning && (
                                    <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
                                )}
                            </div>
                        ) : (
                            <>
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                    <UploadCloud className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Drag & Drop your photo here</h3>
                                <p className="text-sm text-gray-400 mb-6">Supports JPG, PNG (Max 5MB)</p>
                                <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition-colors">
                                    Browse Files
                                </button>
                            </>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-6">
                    {isScanning ? (
                        <div className="h-full min-h-[24rem] glass-card flex flex-col items-center justify-center text-center p-8 animate-pulse">
                            <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Analyzing Image Patterns...</h3>
                            <p className="text-sm text-gray-400">Our AI is extracting fabric textures, color palettes, and global trend references.</p>
                        </div>
                    ) : result ? (
                        <div className="glass-card p-6 border-l-4 border-l-accent animate-fade-in space-y-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-accent mb-1">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Analysis Complete</span>
                                    </div>
                                    <h2 className="text-2xl font-bold">{result.detectedStyle}</h2>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs text-gray-400 mb-1">Confidence Score</span>
                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> {result.confidence}%
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-gray-300">
                                        <Tag className="w-4 h-4 text-primary" />
                                        Matching Colors
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {result.matchingColors.map((color, i) => (
                                            <span key={i} className="px-2 py-1 bg-white/10 rounded-md text-xs text-white">
                                                {color}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                    <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-gray-300">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        When to Wear
                                    </h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">
                                        {result.idealOccasion}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                <h3 className="text-sm font-bold flex items-center gap-2 mb-3 text-primary">
                                    <Shirt className="w-4 h-4" />
                                    AI Styling Suggestions
                                </h3>
                                <ul className="space-y-2 mb-4">
                                    {result.suggestions.map((suggestion, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0"></div>
                                            <span>{suggestion}</span>
                                        </li>
                                    ))}
                                </ul>

                                {result.suggestedImages && (
                                    <div className="mt-4 pt-4 border-t border-primary/10">
                                        <h4 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Visual Outfit Matches</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {result.suggestedImages.map((imgUrl, i) => (
                                                <div key={i} className="relative h-32 rounded-lg overflow-hidden group">
                                                    <img src={imgUrl} alt={`Match ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full min-h-[24rem] glass-card flex flex-col items-center justify-center text-center p-8 border-dashed opacity-50">
                            <ImageIcon className="w-12 h-12 text-gray-500 mb-4" />
                            <h3 className="text-lg font-bold text-gray-400 mb-2">No Image Selected</h3>
                            <p className="text-sm text-gray-500 max-w-xs">Upload an image on the left to see AI-powered fashion analysis, color matching, and style suggestions.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* Inject a small style tag for the scanning animation */}
            <style jsx="true">{`
                @keyframes scan {
                    0% { top: 0; }
                    50% { top: 100%; }
                    100% { top: 0; }
                }
            `}</style>
        </div>
    );
}
