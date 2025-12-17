import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import logoIcon from "@assets/generated_images/navy_blue_shield_logo_icon.png";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary text-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity">
            <img 
              src={logoIcon} 
              alt="EPHA Logo" 
              className="h-10 w-10 object-contain brightness-0 invert" 
            />
            <div className="flex flex-col justify-center">
              <span className="font-heading text-3xl font-bold leading-none tracking-wide">EPHA</span>
              <span className="text-[10px] font-medium tracking-[0.2em] opacity-80 uppercase">Hose Protectors</span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/case-study" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Case Studies
          </Link>
          {["Products", "Industries", "About", "Contact"].map((item) => (
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