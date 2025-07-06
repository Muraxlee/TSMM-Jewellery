import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Words from Our Customers</h2>
          <p className="text-muted-foreground mt-2">We are proud to have the best customers.</p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardContent className="flex flex-col items-center text-center p-8 gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarFallback className="text-2xl bg-primary/20 text-primary font-bold">
                                {testimonial.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <p className="text-muted-foreground italic font-body">"{testimonial.quote}"</p>
                        <h3 className="font-semibold font-headline">{testimonial.name}</h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
