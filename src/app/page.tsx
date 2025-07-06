import HeroSlider from "@/components/home/HeroSlider";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesSection from "@/components/home/CategoriesSection";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSignUp from "@/components/home/NewsletterSignUp";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <div className="space-y-24 my-24">
        <FeaturedProducts />
        <CategoriesSection />
        <Testimonials />
        <NewsletterSignUp />
      </div>
    </div>
  );
}
