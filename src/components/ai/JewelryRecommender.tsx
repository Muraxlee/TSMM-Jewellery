"use client";

import { useState, useEffect } from 'react';
import { jewelryRecommendation } from "@/ai/flows/jewelry-recommendation";
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import ProductCard from '../products/ProductCard';

const BROWSING_HISTORY_KEY = "browsingHistory";

const JewelryRecommender = ({ currentProducts }: { currentProducts: Product[] }) => {
    const [recommendations, setRecommendations] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getRecommendations = async () => {
        setIsLoading(true);
        setError(null);
        setRecommendations([]);

        try {
            const historyItem = localStorage.getItem(BROWSING_HISTORY_KEY);
            const browsingHistory = historyItem ? JSON.parse(historyItem) : [];
            const historyString = browsingHistory.join(', ');

            const inventoryString = products.map(p => `${p.name}: ${p.description}`).join('\n');
            
            if (!historyString) {
                setError("Your browsing history is empty. View some products to get recommendations.");
                setIsLoading(false);
                return;
            }

            const result = await jewelryRecommendation({
                browsingHistory: `User has shown interest in products like: ${historyString}`,
                inventory: inventoryString,
            });

            // A simple (and naive) way to match recommendations to products
            const recommendedProducts = products.filter(p => 
                result.recommendations.toLowerCase().includes(p.name.toLowerCase())
            );

            setRecommendations(recommendedProducts.slice(0, 4)); // Limit to 4 recommendations
        } catch (e) {
            console.error(e);
            setError("Sorry, we couldn't generate recommendations at this time.");
        } finally {
            setIsLoading(false);
        }
    };
    
    // Track browsing history
    useEffect(() => {
        const viewedProducts = currentProducts.map(p => p.name);
        const historyItem = localStorage.getItem(BROWSING_HISTORY_KEY);
        const history = historyItem ? JSON.parse(historyItem) : [];
        const newHistory = Array.from(new Set([...history, ...viewedProducts])).slice(-10); // keep last 10
        localStorage.setItem(BROWSING_HISTORY_KEY, JSON.stringify(newHistory));
    }, [currentProducts]);

    return (
        <div className="bg-secondary/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Recommended For You</h2>
            <p className="text-muted-foreground mt-2 mb-6">Let our AI stylist find pieces you'll love based on your browsing.</p>
            
            <Button onClick={getRecommendations} disabled={isLoading} size="lg">
                {isLoading ? <><Loader className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : "Get Personal Recommendations"}
            </Button>

            {error && <p className="text-destructive mt-4">{error}</p>}
            
            {recommendations.length > 0 && (
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recommendations.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default JewelryRecommender;
