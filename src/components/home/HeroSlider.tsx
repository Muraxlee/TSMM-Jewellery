import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const heroSlides = [
  {
    image: 'https://www.sbicard.com/sbi-card-en/assets/docs/html/personal/offers/AkshayaTritiya-22/img/d-dhanteras-ms.jpg',
    title: 'Timeless Elegance',
    subtitle: 'Discover our new collection of diamond rings.',
    link: '/products?category=rings',
    hint: 'diamond ring'
  },
  {
    image: 'https://cdn.youlry.com/media/wysiwyg/new_third_banner.webp',
    title: 'Celestial Dreams',
    subtitle: 'Shop exquisite necklaces that tell a story.',
    link: '/products?category=necklaces',
    hint: 'gold necklace'
  },
  {
    image: 'https://milanjewellery.com/uploads/slider/original/bracelet-3-81659.jpg',
    title: 'The Art of Brilliance',
    subtitle: 'Handcrafted bracelets for a touch of luxury.',
    link: '/products?category=bracelets',
    hint: 'luxury bracelet'
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] md:h-[80vh] w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  data-ai-hint={slide.hint}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-headline">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-lg md:text-xl font-body">
                    {slide.subtitle}
                  </p>
                  <Button asChild size="lg" className="mt-8 bg-primary/80 hover:bg-primary border-primary-foreground/20 border text-primary-foreground rounded-full px-8 py-6 text-lg">
                    <Link href={slide.link}>Shop Now</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
            <CarouselPrevious className="absolute left-12" />
            <CarouselNext className="absolute right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
