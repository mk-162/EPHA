import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, ShoppingCart, User } from "lucide-react";
import logoIcon from "@assets/generated_images/epha_hose_protectors_logo.png";

import EPHA_Logo from "@assets/EPHA Logo.png";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src={EPHA_Logo} 
              alt="EPHA Logo" 
              className="h-16 w-auto object-contain" 
            />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Products
          </Link>
          <Link href="/case-study" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Case Studies
          </Link>
          <Link href="/industries" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Industries
          </Link>
          <Link href="/about" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             About
          </Link>
          <Link href="/contact" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 cursor-pointer">
            <Phone className="h-4 w-4" />
            <span>463-255-9942</span>
          </div>

          <div className="h-4 w-px bg-white/20" />

          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="#" className="hover:text-accent transition-colors cursor-pointer flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Login / Register</span>
            </Link>
          </div>

          <div className="relative group cursor-pointer">
            <ShoppingCart className="h-6 w-6 text-white group-hover:text-accent transition-colors" />
            <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
              0
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}