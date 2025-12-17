import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import logoIcon from "@assets/generated_images/epha_hose_protectors_logo.png";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src={logoIcon} 
              alt="EPHA Logo" 
              className="h-12 w-auto object-contain brightness-0 invert" 
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
          {["Industries", "About", "Contact"].map((item) => (
            <Link key={item} href="#" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
                {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 cursor-pointer">
            <Phone className="h-4 w-4" />
            <span>1-800-555-0199</span>
          </div>
          <Button 
            className="bg-accent hover:bg-accent/90 text-white uppercase font-bold tracking-wider rounded-sm px-6"
            size="lg"
          >
            Request a Quote
          </Button>
        </div>

        {/* Mobile Menu */}
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
}