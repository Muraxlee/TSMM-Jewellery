"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/lib/data";

const materials = [
    { id: 'gold', name: 'Gold' },
    { id: 'platinum', name: 'Platinum' },
    { id: 'white-gold', name: 'White Gold' },
    { id: 'pearl', name: 'Pearl' }
];

interface ProductFiltersProps {
    filters: any;
    setFilters: (filters: any) => void;
    sort: string;
    setSort: (sort: string) => void;
}

const ProductFilters = ({ filters, setFilters, sort, setSort }: ProductFiltersProps) => {

    const handleCategoryChange = (categoryId: string, checked: boolean) => {
        setFilters({
            ...filters,
            category: checked
                ? [...filters.category, categoryId]
                : filters.category.filter((id: string) => id !== categoryId)
        });
    };

    const handleMaterialChange = (materialId: string, checked: boolean) => {
        setFilters({
            ...filters,
            material: checked
                ? [...filters.material, materialId]
                : filters.material.filter((id: string) => id !== materialId)
        });
    };

    const handlePriceChange = (value: number[]) => {
        setFilters({ ...filters, price: value });
    };

    return (
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div>
                    <Label className="text-lg font-semibold font-body">Sort by</Label>
                    <Select value={sort} onValueChange={setSort}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="popularity">Popularity</SelectItem>
                            <SelectItem value="price-asc">Price: Low to High</SelectItem>
                            <SelectItem value="price-desc">Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <h4 className="text-lg font-semibold font-body mb-2">Category</h4>
                    <div className="space-y-2">
                        {categories.map(category => (
                            <div key={category.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`cat-${category.id}`}
                                    checked={filters.category.includes(category.id)}
                                    onCheckedChange={(checked) => handleCategoryChange(category.id, !!checked)}
                                />
                                <Label htmlFor={`cat-${category.id}`} className="font-normal">{category.name}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold font-body mb-2">Material</h4>
                    <div className="space-y-2">
                        {materials.map(material => (
                            <div key={material.id} className="flex items-center space-x-2">
                                <Checkbox
                                    id={`mat-${material.id}`}
                                    checked={filters.material.includes(material.id)}
                                    onCheckedChange={(checked) => handleMaterialChange(material.id, !!checked)}
                                />
                                <Label htmlFor={`mat-${material.id}`} className="font-normal">{material.name}</Label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold font-body mb-2">Price Range</h4>
                    <Slider
                        defaultValue={[0, 5000]}
                        min={0}
                        max={5000}
                        step={100}
                        value={filters.price}
                        onValueChange={handlePriceChange}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Rs{filters.price[0]}</span>
                        <span>Rs{filters.price[1]}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductFilters;
