import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ShieldCheck, 
  Thermometer, 
  Droplets, 
  Clock, 
  ChevronRight, 
  FileText, 
  Calculator, 
  Video, 
  Phone,
  Check
} from "lucide-react";
import heroImage from "@assets/generated_images/industrial_hose_protection_hero_image.png";
import productImage from "@assets/generated_images/red_industrial_hose_protector_product_shot.png";

export default function Products() {
  const specs = [
    { model: "HP4", dim: '2.5" W × 4" L', fit: '0.25" - 1.00"', use: "Battery cables, small pneumatic lines", price: "$3.90" },
    { model: "HP5", dim: '3.5" W × 5" L', fit: '0.75" - 1.25"', use: "Medium hydraulic lines, cable protection", price: "$4.50" },
    { model: "HP6", dim: '3.25" W × 6" L', fit: '0.75" - 1.25"', use: "Standard hydraulic assemblies, water lines", price: "$5.20" },
    { model: "HP12-2", dim: '5" W × 6" L', fit: "Wide range", use: "Heavy-duty single hose protection", price: "$6.80" },
    { model: "HP8", dim: '3.5" W × 8" L', fit: '1.00" - 1.50"', use: "Medium to large hydraulic systems", price: "$7.40" },
    { model: "HP10", dim: '4.5" W × 10" L', fit: '1.25" - 2.25"', use: "Large hydraulic assemblies, bundle wraps", price: "$9.10" },
    { model: "HP12", dim: '5" W × 12" L', fit: '1.50" - 2.50"', use: "Multi-hose bundles, heavy equipment", price: "$10.70" },
  ];

  const applications = [
    "Hydraulic Lines", "Battery Cables", "Wiring Harnesses", "Brake Systems",
    "Oil & Fuel Lines", "Radiator Hoses", "Pneumatic Lines", "Electrical Conduits"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase leading-none mb-6">
              Stop Hose Failures <br/>
              <span className="text-accent">Before They Stop You</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8 max-w-2xl">
              Industrial-grade protection that prevents costly equipment downtime and saves thousands in repair costs. 
              Built for the harshest conditions, installed in minutes.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="xl" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
                Shop All Products
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white/10 font-bold uppercase tracking-wider">
                Find a Distributor
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wide text-gray-400">
              <span className="flex items-center gap-2"><span className="text-white">🇺🇸</span> Made in USA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span className="flex items-center gap-2"><span className="text-white">🌡️</span> -40°F to 430°F</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
              <span className="flex items-center gap-2"><span className="text-white">💪</span> Chemical & Abrasion Resistant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold uppercase mb-6">
                The EPHA Solution
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary uppercase mb-6">
                Engineered Wear Shields
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                EPHA Hose Protectors wrap around your critical hydraulic lines, cables, and hoses to prevent damage before it happens. 
                Our proprietary material withstands the toughest industrial environments while providing quick, tool-free installation.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
                <h3 className="font-bold text-primary uppercase mb-4">The Cost of Failure</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-red-700">
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    $5,000-$50,000+ in downtime per incident
                  </li>
                  <li className="flex items-center gap-3 text-red-700">
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    3-5x faster hose replacement cycles
                  </li>
                  <li className="flex items-center gap-3 text-red-700">
                    <span className="h-2 w-2 rounded-full bg-red-600" />
                    Safety hazards from hydraulic leaks
                  </li>
                </ul>
              </div>

              <div className="text-4xl font-heading font-bold text-accent">
                85% Reduction <span className="text-lg text-gray-500 font-sans font-normal normal-case ml-2">in downtime through preventative maintenance</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden p-8 flex items-center justify-center">
                <img 
                  src={productImage}
                  alt="EPHA Hose Protector"
                  className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Floating Feature Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-[200px]">
                <div className="font-bold text-primary mb-1">Precision Fit</div>
                <div className="text-xs text-gray-500">7 sizes accommodate 0.25" to 2.50" hose diameters</div>
              </div>
              <div className="absolute top-10 -right-6 bg-white p-4 rounded-lg shadow-xl border border-slate-100 max-w-[200px]">
                <div className="font-bold text-primary mb-1">Install in Minutes</div>
                <div className="text-xs text-gray-500">No tools required. No equipment disassembly.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={ShieldCheck}
              title="Abrasion Resistant"
              desc="Proprietary material with extreme durability rating outlasts standard protection."
            />
            <FeatureCard 
              icon={Droplets}
              title="Chemical Immunity"
              desc="Impervious to solvents, oils, grease, gasoline, and hydrocarbon fluids."
            />
            <FeatureCard 
              icon={Thermometer}
              title="Temp Tolerance"
              desc="Operates reliably from -40°F to 430°F (-40°C to 221°C)."
            />
            <FeatureCard 
              icon={Clock}
              title="4-Step Install"
              desc="Install in minutes without equipment disassembly or special tools."
            />
          </div>
        </div>
      </section>

      {/* Product Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary uppercase mb-4">Complete Product Line</h2>
            <p className="text-gray-600">7 professional sizes for every application. Available in Black, High-Visibility Orange, and Yellow.</p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-primary uppercase font-bold tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-4">Model</th>
                  <th className="p-4">Dimensions</th>
                  <th className="p-4">Fits Hose OD</th>
                  <th className="p-4">Best For</th>
                  <th className="p-4 text-right">Price</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {specs.map((spec) => (
                  <tr key={spec.model} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="p-4 font-bold text-primary">{spec.model}</td>
                    <td className="p-4 text-gray-600 font-mono">{spec.dim}</td>
                    <td className="p-4 text-gray-600 font-mono">{spec.fit}</td>
                    <td className="p-4 text-gray-600">{spec.use}</td>
                    <td className="p-4 text-right font-bold text-accent">{spec.price}</td>
                    <td className="p-4 text-right">
                      <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90">
                        Add to Order
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 bg-slate-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-heading text-3xl font-bold uppercase mb-4">What You Can Protect</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-2 text-gray-300">
                    <Check className="h-4 w-4 text-accent" />
                    {app}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Why Pros Choose EPHA</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-gray-400">Investment</span>
                  <span className="font-bold text-accent">$3.90 - $10.70</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-gray-400">Prevents</span>
                  <span className="font-bold text-white">$100s - $1,000s</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-2">
                  <span className="text-gray-400">Installation</span>
                  <span className="font-bold text-white">5 Minutes</span>
                </div>
                <div className="pt-2 text-center font-bold text-accent uppercase tracking-wide">
                  ROI: Hoses Last 3-5x Longer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
             {[
               { icon: FileText, label: "Datasheets" },
               { icon: Video, label: "Install Videos" },
               { icon: Calculator, label: "ROI Calculator" },
               { icon: Phone, label: "Tech Support" },
             ].map((resource) => (
               <div key={resource.label} className="bg-white/5 hover:bg-white/10 transition-colors rounded-lg p-6 cursor-pointer border border-white/10">
                 <resource.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                 <div className="font-bold uppercase tracking-wide text-sm">{resource.label}</div>
               </div>
             ))}
          </div>

          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
            Stop Replacing. <span className="text-accent">Start Protecting.</span>
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Join over 1,000 fleet managers and industrial operations who trust EPHA to keep their equipment running.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
              Get a Quote
            </Button>
            <Button variant="outline" size="xl" className="text-white border-white hover:bg-white/10 font-bold uppercase tracking-wider">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="h-12 w-12 bg-primary/5 text-primary rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-heading text-xl font-bold text-primary uppercase mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}