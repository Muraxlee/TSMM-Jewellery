import Link from 'next/link';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const heroSlides = [
  {
    image: 'https://lsmedia.linker-cdn.net/993339/2024/13403708.jpeg',
    title: 'Timeless Elegance',
    subtitle: 'Discover our new collection of diamond rings.',
    link: '/products?category=rings',
    hint: 'diamond ring'
  },
  {
    image: 'https://t4.ftcdn.net/jpg/05/27/71/81/360_F_527718147_x7XDK929xZnZqjgh0oPYz7xK0EvtnlIF.jpg',
    title: 'Celestial Dreams',
    subtitle: 'Shop exquisite necklaces that tell a story.',
    link: '/products?category=necklaces',
    hint: 'gold necklace'
  },
  {
    image: 'https://t3.ftcdn.net/jpg/04/86/76/98/360_F_486769878_2Pg9jUn3OjKI7su9E1RrU7rhLATRKj21.jpg',
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
