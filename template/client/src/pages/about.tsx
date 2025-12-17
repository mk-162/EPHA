import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Factory, 
  Microscope, 
  Zap, 
  DollarSign, 
  Target, 
  Shield, 
  Award, 
  Lightbulb, 
  Handshake, 
  Scale, 
  Truck, 
  HardHat, 
  Wrench, 
  Building2, 
  Leaf, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800" />
          
          <div className="container relative mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
              Why EPHA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              What Makes Us Different
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              American-made quality, engineering-driven design, and practical innovation protecting your equipment since inception.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">American-Made Quality</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every EPHA Hose Protector is manufactured in the United States using proprietary materials engineered specifically for industrial protection. We don't compromise on quality because we know our customers can't afford to.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Microscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Engineering-Driven Design</h3>
                <p className="text-slate-600 leading-relaxed">
                  Precision-engineered wear shields with protective grooves to prevent slippage. Resistant to extreme temps (-40°F to 430°F) and completely immune to solvents, oils, grease, and gasoline.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Practical Innovation</h3>
                <p className="text-slate-600 leading-relaxed">
                  We understand that downtime for installation is downtime you can't afford. That's why EPHA protectors install in 4 simple steps without equipment disassembly—protecting your investment in minutes.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">ROI-Focused Solutions</h3>
                <p className="text-slate-600 leading-relaxed">
                  At $3.90-$10.70 per unit, EPHA protectors prevent hundreds to thousands of dollars in replacement costs. Customers report up to 85% reduction in equipment downtime through preventative maintenance.
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 md:col-span-2 lg:col-span-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Application Versatility</h3>
                <p className="text-slate-600 leading-relaxed max-w-3xl">
                  Seven precision sizes accommodate hose outer diameters from 0.25" to 2.50", with high-visibility color options for safety-critical applications. One product line—unlimited protection possibilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-slate-900">Our Mission</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed border-l-4 border-accent pl-6">
                  To protect America's industrial infrastructure by providing reliable, cost-effective hose protection solutions that prevent equipment failure, eliminate downtime, and keep workers safe.
                </p>
                
                <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900">Our Core Values</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                      <Shield className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">Reliability</h4>
                      <p className="text-slate-600">We build products that perform when conditions are toughest.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">American Quality</h4>
                      <p className="text-slate-600">Made in the USA is our commitment to manufacturing excellence.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">Practical Innovation</h4>
                      <p className="text-slate-600">We innovate to solve actual problems, not to add complexity.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                      <Handshake className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">Customer Success</h4>
                      <p className="text-slate-600">We measure performance by the downtime you prevent.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-primary">
                      <Scale className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-wide text-sm mb-1">Honest Value</h4>
                      <p className="text-slate-600">No gimmicks. Just straightforward protection that delivers ROI.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1565515267326-b800ce045371?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial manufacturing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-xl shadow-xl max-w-sm hidden md:block">
                  <div className="text-5xl font-bold mb-2">85%</div>
                  <div className="text-white/80 font-medium">Average reduction in equipment downtime reported by customers.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-slate-900">Who We Serve</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                The professionals who keep America running trust EPHA for reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Truck,
                  title: "Fleet Maintenance & Transportation",
                  desc: "Trucking companies, public transit, and delivery services protecting vehicles that can't afford unscheduled downtime."
                },
                {
                  icon: HardHat,
                  title: "Construction & Heavy Equipment",
                  desc: "Construction, mining, and agricultural businesses safeguarding expensive machinery in harsh jobsite conditions."
                },
                {
                  icon: Factory,
                  title: "Industrial Manufacturing",
                  desc: "Manufacturing plants and maintenance departments extending equipment life and reducing emergency repairs."
                },
                {
                  icon: Wrench,
                  title: "Automotive & Repair",
                  desc: "Auto repair shops and hydraulic specialists delivering professional-grade protection for their customers."
                },
                {
                  icon: Building2,
                  title: "Municipal & Government",
                  desc: "Public works and military operations maintaining critical infrastructure and equipment."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 text-primary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">3-5x</div>
                <div className="text-sm md:text-base text-slate-400 font-medium">Longer Hose Life</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">5 Min</div>
                <div className="text-sm md:text-base text-slate-400 font-medium">Installation Time</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">1000+</div>
                <div className="text-sm md:text-base text-slate-400 font-medium">Trusted Professionals</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-accent">7</div>
                <div className="text-sm md:text-base text-slate-400 font-medium">Precision Sizes</div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment & Testimonial */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Our Commitment to Excellence</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Rigorous Testing</h4>
                      <p className="text-slate-600">Extensive temperature, chemical resistance, and durability testing to ensure performance in extreme conditions.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Material Certification</h4>
                      <p className="text-slate-600">Proprietary material formulation engineered specifically for industrial abrasion and hydrocarbon resistance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Consistent Manufacturing</h4>
                      <p className="text-slate-600">American manufacturing ensures quality control, reliable supply chains, and products that meet specs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 flex flex-col justify-center">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <blockquote className="text-2xl font-medium text-slate-900 mb-6 italic leading-relaxed">
                  "The ROI is undeniable. EPHA protectors cost us $10, and they prevent $1,500 hose failures. That's simple math."
                </blockquote>
                <div>
                  <div className="font-bold text-slate-900">Fleet Maintenance Manager</div>
                  <div className="text-slate-500">National Trucking Company</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Protect Your Investment. Prevent the Breakdown.</h2>
            <p className="text-xl text-slate-600 mb-12">When you choose EPHA, you're not just buying a product—you're investing in peace of mind, cost savings, safety, and American quality.</p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                   <Leaf className="h-5 w-5 text-green-600" />
                   Environmental Responsibility
                </h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"></div>Reduce waste from unnecessary hose replacement</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"></div>Prevent leaks that contaminate soil and water</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2"></div>Made in USA reduces transportation impact</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                   <Handshake className="h-5 w-5 text-primary" />
                   Partner With Us
                </h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>Counter Display Ready & Retail Packaging</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>High Margin Opportunity for Distributors</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>Marketing Support & Technical Training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
               
               <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Protect Your Equipment?</h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Whether you're a maintenance professional, a distributor, or an engineer—we're here to help.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12 text-left max-w-3xl mx-auto">
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Phone className="h-6 w-6 text-accent mb-3" />
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Call Us</div>
                    <div className="font-semibold">463-255-9942</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Mail className="h-6 w-6 text-accent mb-3" />
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Email Us</div>
                    <div className="font-semibold">sales@epha.com</div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <Clock className="h-6 w-6 text-accent mb-3" />
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-bold mb-1">Hours</div>
                    <div className="font-semibold">Mon-Fri, 8AM - 5PM EST</div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Link href="/products">
                    <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                      Shop Products
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                    Request a Quote
                  </Button>
                </div>
               </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-2">Brand Statement</div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                Reliable • Practical • American-Made • No-Nonsense
              </h3>
              <p className="text-lg text-primary font-bold mt-2">Stop Replacing. Start Protecting.™</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
