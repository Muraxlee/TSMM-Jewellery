"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4 sticky top-24">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={selectedImage}
              alt="Selected product image"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button key={index} onClick={() => setSelectedImage(image)}>
            <div className={cn("relative aspect-square rounded-md overflow-hidden border-2 transition",
                selectedImage === image ? 'border-primary' : 'border-transparent'
            )}>
              <Image
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
                data-ai-hint="jewelry"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
