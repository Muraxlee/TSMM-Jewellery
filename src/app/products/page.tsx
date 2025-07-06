"use client"

import { useState, useMemo, useEffect } from "react";
import { products } from "@/lib/data";
import type { Product } from "@/lib/types";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import JewelryRecommender from "@/components/ai/JewelryRecommender";

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: [] as string[],
    material: [] as string[],
    price: [0, 5000] as [number, number],
  });
  const [sort, setSort] = useState("latest");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
      const materialMatch = filters.material.length === 0 || filters.material.includes(product.material);
      const priceMatch = product.price >= filters.price[0] && product.price <= filters.price[1];
      return categoryMatch && materialMatch && priceMatch;
    });

    switch (sort) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "popularity":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "latest":
      default:
        // Assuming higher ID is newer
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }

    return filtered;
  }, [filters, sort]);

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Collection</h1>
        <p className="text-muted-foreground mt-2">Discover the perfect piece to tell your story.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        <div className="lg:col-span-1">
          <ProductFilters filters={filters} setFilters={setFilters} sort={sort} setSort={setSort} />
        </div>
        <div className="lg:col-span-3">
          <ProductGrid products={filteredAndSortedProducts} />
        </div>
      </div>
      
      {isClient && (
        <div className="mt-24">
          <JewelryRecommender currentProducts={filteredAndSortedProducts} />
        </div>
      )}
    </div>
  );
}
