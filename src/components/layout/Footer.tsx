import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.jpg" alt="TSMM jeweller Logo" width={130} height={40} className="object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground">Exquisite jewelry for every occasion.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products?category=rings" className="text-sm text-muted-foreground hover:text-primary">Rings</Link></li>
              <li><Link href="/products?category=necklaces" className="text-sm text-muted-foreground hover:text-primary">Necklaces</Link></li>
              <li><Link href="/products?category=earrings" className="text-sm text-muted-foreground hover:text-primary">Earrings</Link></li>
              <li><Link href="/products?category=bracelets" className="text-sm text-muted-foreground hover:text-primary">Bracelets</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Twitter className="h-5 w-5 text-muted-foreground" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5 text-muted-foreground" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.instagram.com/tsmm_silverjewellery/" target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5 text-muted-foreground" /></a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TSMM jeweller. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
