import * as React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, ShoppingCart, User } from "lucide-react";
import logoIcon from "@assets/generated_images/epha_hose_protectors_logo.png";
import EPHA_Logo from "@assets/EPHA Logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  // Use wouter Link component but we need to handle the ref manually if needed or just wrapping content
  // wouter Link renders an anchor tag
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-900">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/products" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Products
          </Link>
          <Link href="/case-study" className="text-sm font-medium uppercase tracking-wider hover:text-accent transition-colors cursor-pointer">
             Case Studies
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-accent focus:bg-white/10 focus:text-accent data-[state=open]:bg-white/10 data-[state=open]:text-accent text-sm font-medium uppercase tracking-wider h-auto py-2 px-3 rounded-md">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-900 to-slate-800 p-6 no-underline outline-none focus:shadow-md"
                          href="/industries"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-white">
                            All Industries
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Explore our protection solutions across all sectors.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/industries/fleet" title="Fleet & Transportation">
                      Keep your fleet moving with hydraulic and fuel line protection.
                    </ListItem>
                    <ListItem href="/industries/construction" title="Construction">
                      Proven durability for excavators, loaders, and heavy equipment.
                    </ListItem>
                    <ListItem href="/industries" title="Manufacturing & More">
                      See other industries we serve.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

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