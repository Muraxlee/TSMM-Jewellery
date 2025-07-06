import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Shop by Category</h2>
        <p className="text-muted-foreground mt-2">Explore our collections and find your perfect piece.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(category => (
          <Link key={category.id} href={`/products?category=${category.id}`} className="group block">
            <Card className="overflow-hidden relative aspect-square">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint="jewelry category"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold font-headline tracking-wider">{category.name}</h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
