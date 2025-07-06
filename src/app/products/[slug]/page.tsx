import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import ProductGallery from "@/components/products/ProductGallery";
import ProductInfo from "@/components/products/ProductInfo";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export async function generateStaticParams() {
    return products.map(product => ({
        slug: product.slug,
    }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = products.find(p => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <ProductGallery images={product.images} />
                <ProductInfo product={product} />
            </div>
            <div className="mt-24">
                <FeaturedProducts />
            </div>
        </div>
    );
}
