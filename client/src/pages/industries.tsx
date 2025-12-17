import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Truck, 
  HardHat, 
  Factory, 
  Wrench, 
  Building2, 
  Leaf, 
  ArrowRight,
  Zap,
  Thermometer,
  Droplets,
  Flag,
  DollarSign,
  Target,
  Check,
  ShieldCheck,
  Phone,
  Mail
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Industries() {
  const industries = [
    {
      id: "fleet",
      title: "Fleet & Transportation",
      icon: Truck,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      headline: "Protect Critical Systems. Maximize Uptime.",
      description: "From long-haul trucking to municipal transit, keep your fleet running with protection designed for constant vibration, extreme weather, and 24/7 operations.",
      applications: [
        "Hydraulic brake lines",
        "Air brake systems",
        "Fuel line protection",
        "Battery cable guards"
      ],
      roi: "Up to 85% downtime reduction"
    },
    {
      id: "construction",
      title: "Construction & Heavy Equipment",
      icon: HardHat,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
      headline: "Built for the Toughest Jobsites.",
      description: "Extreme temperatures, abrasive materials, and punishing conditions demand protection that won't quit. EPHA delivers jobsite-proven durability.",
      applications: [
        "Excavator hydraulics",
        "Loader systems",
        "Crane assemblies",
        "Multi-hose bundles"
      ],
      roi: "Prevent $5K-$50K+ per failure"
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1565515267326-b800ce045371?q=80&w=2070&auto=format&fit=crop",
      headline: "Reduce Downtime. Extend Maintenance Cycles.",
      description: "Production equipment can't afford unplanned stops. Protect your hydraulic systems, pneumatic lines, and critical assemblies from wear and chemical exposure.",
      applications: [
        "Production line hydraulics",
        "Pneumatic systems",
        "Robotic assembly lines",
        "Material handling equipment"
      ],
      roi: "3-5x longer hose life"
    },
    {
      id: "automotive",
      title: "Automotive & Repair",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop",
      headline: "Professional-Grade Protection for Every Service.",
      description: "Deliver superior repairs and preventative maintenance with protection solutions trusted by dealerships and independent shops nationwide.",
      applications: [
        "Hydraulic lift systems",
        "Transmission lines",
        "Power steering assemblies",
        "A/C and cooling systems"
      ],
      roi: "Fewer comebacks, happier customers"
    },
    {
      id: "municipal",
      title: "Municipal & Government",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1596237563267-8453ea8d687b?q=80&w=2070&auto=format&fit=crop",
      headline: "Protect Taxpayer Assets. Ensure Service Reliability.",
      description: "Public works departments, emergency services, and government fleets need maximum equipment uptime to serve communities effectively and responsibly.",
      applications: [
        "Refuse collection vehicles",
        "Snow removal equipment",
        "Emergency response vehicles",
        "Public transit systems"
      ],
      roi: "Extended service life, reduced emergency repairs"
    },
    {
      id: "agriculture",
      title: "Agricultural Equipment",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=2072&auto=format&fit=crop",
      headline: "Harvest Protection. Season After Season.",
      description: "When planting and harvest windows are narrow, equipment failure isn't an option. Protect your investment from field debris, chemicals, and weather extremes.",
      applications: [
        "Combine hydraulics",
        "Tractor systems",
        "Irrigation equipment",
        "Spray rig assemblies"
      ],
      roi: "Equipment ready when you need it most"
    }
  ];

  const benefits = [
    { icon: Zap, title: "Fast Installation", desc: "5-minute installation means minimal service interruption" },
    { icon: Thermometer, title: "Extreme Performance", desc: "-40°F to 430°F temperature range handles any climate" },
    { icon: Droplets, title: "Chemical Immunity", desc: "Resists oils, solvents, grease, gasoline, and hydraulic fluids" },
    { icon: Flag, title: "American Quality", desc: "Manufactured in the USA with rigorous quality control" },
    { icon: DollarSign, title: "Proven ROI", desc: "$3.90-$10.70 investment prevents $100s-$1,000s in failures" },
    { icon: Target, title: "Right-Sized Solutions", desc: "7 sizes fit virtually any application from 0.25\" to 2.50\" OD" },
  ];

  const comparisonData = [
    { challenge: "Vibration Damage", fleet: 3, construction: 2, manufacturing: 2, automotive: 1, municipal: 2 },
    { challenge: "Temperature Extremes", fleet: 2, construction: 3, manufacturing: 1, automotive: 1, municipal: 3 },
    { challenge: "Chemical Exposure", fleet: 2, construction: 1, manufacturing: 3, automotive: 2, municipal: 2 },
    { challenge: "Abrasion/Rubbing", fleet: 3, construction: 3, manufacturing: 2, automotive: 2, municipal: 3 },
    { challenge: "Bundle Protection", fleet: 2, construction: 3, manufacturing: 2, automotive: 1, municipal: 2 },
  ];

  const renderChecks = (count: number) => {
    return (
      <div className="flex justify-center gap-0.5">
        {Array.from({ length: count }).map((_, i) => (
          <Check key={i} className="h-4 w-4 text-primary font-bold" strokeWidth={4} />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
          
          <div className="container relative mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              Protection Built for Your Industry
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              From construction sites to manufacturing floors, from highway fleets to municipal yards—EPHA Hose Protectors deliver industry-specific solutions that prevent downtime.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Every industry faces unique challenges. Extreme temperatures. Harsh chemicals. Constant vibration. Abrasive environments. EPHA understands your operational realities and delivers protection that performs where you work.
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Why Industry-Specific Protection Matters</h2>
              <p className="text-lg text-slate-600 mb-10">
                Generic solutions don't cut it when equipment failure costs thousands per hour. EPHA Hose Protectors are engineered to handle the specific hazards your industry faces:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Application-Matched Sizing</h4>
                    <p className="text-sm text-slate-600">Right protection for your equipment types</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Environment-Tested Performance</h4>
                    <p className="text-sm text-slate-600">Proven in your operating conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Industry-Specific ROI</h4>
                    <p className="text-sm text-slate-600">Cost savings calculated for your operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900">Regulatory Compliance</h4>
                    <p className="text-sm text-slate-600">Safety standards your industry demands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Select Your Industry to Learn More</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => (
                <div key={industry.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-slate-100 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                      <div className="p-2 bg-primary rounded-lg">
                        <industry.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-lg font-heading">{industry.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">{industry.headline}</h4>
                    <p className="text-slate-600 text-sm mb-6 flex-1">
                      {industry.description}
                    </p>
                    
                    <div className="mb-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Applications</div>
                      <ul className="space-y-1">
                        {industry.applications.map((app, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6 flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 p-3 rounded-lg border border-green-100">
                      <DollarSign className="h-4 w-4" />
                      {industry.roi}
                    </div>
                    
                    <Link href={`/industries/${industry.id}`}>
                      <Button className="w-full justify-between group-hover:bg-primary group-hover:text-white transition-colors" variant="outline">
                        Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross Industry Benefits */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">No Matter Your Industry, EPHA Delivers</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="shrink-0 text-accent">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Find Your Industry's Specific Challenges</h2>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[200px] font-bold text-slate-900">Challenge</TableHead>
                    <TableHead className="text-center font-bold text-slate-900">Fleet</TableHead>
                    <TableHead className="text-center font-bold text-slate-900">Construction</TableHead>
                    <TableHead className="text-center font-bold text-slate-900">Manufacturing</TableHead>
                    <TableHead className="text-center font-bold text-slate-900">Automotive</TableHead>
                    <TableHead className="text-center font-bold text-slate-900">Municipal</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row) => (
                    <TableRow key={row.challenge}>
                      <TableCell className="font-medium text-slate-700 bg-slate-50/50">{row.challenge}</TableCell>
                      <TableCell className="text-center">{renderChecks(row.fleet)}</TableCell>
                      <TableCell className="text-center">{renderChecks(row.construction)}</TableCell>
                      <TableCell className="text-center">{renderChecks(row.manufacturing)}</TableCell>
                      <TableCell className="text-center">{renderChecks(row.automotive)}</TableCell>
                      <TableCell className="text-center">{renderChecks(row.municipal)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Trusted Across Industries</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <blockquote className="text-slate-600 italic mb-6 flex-1">
                  "We've reduced hydraulic line failures by 85% since implementing EPHA protectors across our 200-vehicle fleet. The ROI was immediate."
                </blockquote>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">Fleet Maintenance Director</div>
                  <div className="text-sm text-slate-500">Regional Trucking Company</div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <blockquote className="text-slate-600 italic mb-6 flex-1">
                  "In construction, every hour of downtime costs us thousands. EPHA protectors are a no-brainer investment that pays for itself the first time it prevents a hose failure."
                </blockquote>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">Equipment Manager</div>
                  <div className="text-sm text-slate-500">National Construction Contractor</div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
                <blockquote className="text-slate-600 italic mb-6 flex-1">
                  "Our production lines can't afford unplanned stops. EPHA protection has extended our hydraulic hose life by 4x and virtually eliminated emergency repairs."
                </blockquote>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">Maintenance Supervisor</div>
                  <div className="text-sm text-slate-500">Manufacturing Plant</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
              Ready to Protect Your Industry's Equipment?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Explore industry-specific solutions, calculate your ROI, and discover why over 1,000 professionals trust EPHA to keep their operations running.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Shop by Industry
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Calculate Your ROI
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to an Expert
              </Button>
            </div>
            
            <div className="inline-block bg-primary-foreground/10 rounded-xl p-6 border border-white/20 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-2">Questions about your specific application?</h3>
              <p className="text-white/80 text-sm mb-4">Our team includes professionals with real-world experience in your industry.</p>
              <div className="flex flex-col md:flex-row gap-6 justify-center text-white font-medium">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-accent" />
                  <span>463-255-9942</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-accent" />
                  <span>sales@epha.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
