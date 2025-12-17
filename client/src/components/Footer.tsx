import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#1A1D29] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-heading text-4xl font-bold tracking-wide">EPHA</span>
              <span className="text-xs font-medium tracking-[0.2em] opacity-60 uppercase">Hose Protectors</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Since 1987, EPHA has been the global leader in hose protection technology. 
              Proudly manufactured in the USA, serving industries worldwide.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">ISO</div>
              <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs text-gray-500">USA</div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Products", "Case Studies", "Industries", "About Us", "Contact", "Distributors"].map(item => (
                <li key={item}>
                  <Link href="#" className="hover:text-accent transition-colors cursor-pointer">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-xs uppercase text-gray-600 mb-1">Headquarters</span>
                <span>123 Industrial Way<br/>Chicago, IL 60601</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase text-gray-600 mb-1">Sales</span>
                <span className="text-white font-bold">463-255-9942</span>
                <span className="text-accent">sales@gtsegroup.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-sm text-gray-300">Stay Informed</h4>
            <p className="text-xs text-gray-500 mb-4">Get the latest industry reports and maintenance tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm w-full focus:outline-none focus:border-accent text-white"
              />
              <button className="bg-accent text-white px-4 py-2 rounded text-sm font-bold uppercase hover:bg-accent/90 transition-colors">
                Go
              </button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; 2025 EPHA Hose Protectors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}