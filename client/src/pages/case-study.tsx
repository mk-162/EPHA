import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, TrendingDown, Clock, Shield, Quote } from "lucide-react";
import { Link } from "wouter";
import miningImage from "@assets/generated_images/industrial_mining_fleet_at_blue_hour.png";
import forestryImage from "@assets/generated_images/forestry_equipment_in_action.png";
import wasteImage from "@assets/generated_images/waste_management_truck_fleet.png";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      {/* Case Study Hero */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${miningImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
        
        <div className="container relative mx-auto h-full flex flex-col justify-center px-4 pt-12">
          <Link href="/">
            <a className="inline-flex items-center text-accent hover:text-white transition-colors mb-6 font-bold uppercase tracking-wider text-sm">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </a>
          </Link>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold uppercase mb-6 border border-white/20 w-fit">
            Mining Industry
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white uppercase leading-[0.9] drop-shadow-xl max-w-4xl mb-6">
            Saving $1.2M Annually for Nevada Gold Mines
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 font-light leading-relaxed">
            How a major mining operation eliminated 85% of hydraulic failures across their haul truck fleet by implementing EPHA protection.
          </p>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">$1.2M</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Annual Savings</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">85%</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Reduction in Failures</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">115</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">Trucks Protected</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-heading font-bold mb-1">3 Mo</div>
              <div className="text-sm uppercase tracking-wider font-medium opacity-90">ROI Period</div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* The Challenge */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary uppercase border-l-4 border-accent pl-4">The Challenge</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Operating in the harsh Nevada desert, the client's fleet of CAT 793F haul trucks faced extreme conditions. 
                Daily exposure to abrasive rock dust, intense UV radiation, and temperatures swinging from 100°F to freezing 
                was causing premature failure of hydraulic lines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each hose failure resulted in approximately <span className="font-bold text-primary">$4,500 in direct repair costs</span>, 
                plus an average of <span className="font-bold text-primary">4 hours of downtime</span> costing $10,000 in lost production.
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary uppercase border-l-4 border-accent pl-4">The Solution</h2>
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Shield className="h-6 w-6 text-accent" />
                  Implementation Strategy
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                    <span>Equipped all exposed hydraulic lines with <span className="font-bold">EPHA Heavy Duty Spirals</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                    <span>Utilized color-coded protectors for easy line identification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                    <span>Installation completed during scheduled PM intervals to avoid additional downtime</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Results */}
            <div className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-primary uppercase border-l-4 border-accent pl-4">The Results</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                After 12 months of monitoring, the results were transformative. Hose replacements due to abrasion dropped to near zero. 
                The only remaining changes were scheduled preventative replacements.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary text-white p-8 rounded-lg shadow-xl">
                  <TrendingDown className="h-10 w-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold uppercase mb-2">Maintenance Spend</h4>
                  <p className="opacity-80">Reduced annual hydraulic maintenance budget by 40% across the fleet.</p>
                </div>
                <div className="bg-white border border-slate-200 p-8 rounded-lg shadow-lg">
                  <Clock className="h-10 w-10 text-accent mb-4" />
                  <h4 className="text-xl font-bold uppercase mb-2 text-primary">Uptime</h4>
                  <p className="text-gray-600">Gained an estimated 460 hours of additional fleet availability per year.</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-slate-100 p-10 rounded-xl relative mt-12">
              <Quote className="h-12 w-12 text-gray-300 absolute top-8 left-8 -z-10" />
              <p className="text-xl font-medium text-primary italic mb-6 relative z-10">
                "EPHA protectors are now spec'd on every new piece of equipment that hits our site. 
                The ROI is undeniable, but the peace of mind is what my maintenance supervisors value most."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                <div>
                  <div className="font-bold text-primary">James H.</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wide">Fleet Maintenance Director</div>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm sticky top-24">
              <h3 className="font-heading text-2xl font-bold text-primary uppercase mb-6">Related Cases</h3>
              
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="h-40 overflow-hidden rounded-md mb-3 relative">
                     <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${forestryImage})` }}
                    />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Forestry</div>
                  <h4 className="font-bold text-primary group-hover:text-accent transition-colors">Extending Hose Life in High-Impact Logging Operations</h4>
                </div>

                <div className="w-full h-px bg-slate-100" />

                <div className="group cursor-pointer">
                  <div className="h-40 overflow-hidden rounded-md mb-3 relative">
                     <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${wasteImage})` }}
                    />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Waste Management</div>
                  <h4 className="font-bold text-primary group-hover:text-accent transition-colors">Protecting Hydraulics from Chemical Leaching</h4>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-bold text-primary mb-2">Ready to achieve similar results?</h4>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
                  Get a Free Analysis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}