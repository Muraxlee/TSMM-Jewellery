import Image from 'next/image';
import { Gem, Target, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">About Aurum</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover the story behind our passion for crafting exquisite jewelry that tells a story of elegance, tradition, and timeless beauty.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/800x800"
            alt="Aurum workshop"
            fill
            className="object-cover"
            data-ai-hint="jewelry workshop"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">Our Legacy of Craftsmanship</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded on the principles of quality, artistry, and integrity, Aurum has been a beacon of fine jewelry since its inception. Our journey began with a simple vision: to create pieces that are not just accessories, but heirlooms to be cherished for generations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Each piece in our collection is meticulously crafted by master artisans who share a passion for perfection. We source only the finest materials, from ethically-sourced diamonds to lustrous pearls and precious metals, ensuring that every creation meets our exacting standards of beauty and quality.
          </p>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <Gem className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To create timeless jewelry that celebrates life's most precious moments with unparalleled craftsmanship and beauty.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              To be the most trusted name in fine jewelry, known for our commitment to quality, sustainability, and customer delight.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="mt-4">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Integrity, Passion, Craftsmanship, and a deep respect for our planet and its people guide every decision we make.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
