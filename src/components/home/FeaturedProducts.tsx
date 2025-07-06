import { products } from '@/lib/data';
import ProductCard from '@/components/products/ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(p => p.isFeatured);

  return (
    <section className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Featured Collection</h2>
        <p className="text-muted-foreground mt-2">Handpicked selection of our finest jewelry.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
