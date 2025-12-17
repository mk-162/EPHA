import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  TrendingUp,
  Package,
  BadgeDollarSign,
  Flag,
  HeadphonesIcon,
  Megaphone,
  UserCheck,
  Store,
  Truck,
  Wrench,
  Factory,
  Tractor,
  Download,
  Phone,
  Mail,
  CheckCircle2,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Clock
} from "lucide-react";

export default function Distribution() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                Resellers & Distribution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Grow Your Business with Products Your Customers Actually Need
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                EPHA Hose Protectors deliver what industrial distributors, equipment dealers, and MRO suppliers demand: high margins, fast turnover, and solutions that solve real problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Order Counter Display
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Why EPHA is Your Next Profit Center</h2>
                <p className="text-lg text-slate-600 mb-8">
                  The industrial hose protection market is growing at 3.0% CAGR, reaching $13.92 billion by 2030. Your customers are already buying hose protection—the question is: are they buying it from you?
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Market Reality</h4>
                      <p className="text-sm text-slate-600">Every fleet vehicle needs 6-10 protection points. Preventative maintenance spending is increasing as downtime costs rise.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                      <BadgeDollarSign className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Your Opportunity</h4>
                      <p className="text-sm text-slate-600">High-margin product that sells itself. Impulse-friendly pricing ($3.90-$10.70) encourages immediate purchase.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-xl text-slate-900 mb-6">Built for Distribution Success</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Store, title: "Retail-Ready Displays", desc: "Professional packaging designed for POS placement." },
                    { icon: TrendingUp, title: "Strong Margins", desc: "Competitive wholesale pricing justifies shelf space." },
                    { icon: Package, title: "Fast Inventory Turns", desc: "Products customers need now, not eventually." },
                    { icon: Flag, title: "Made in USA Quality", desc: "Consistent supply and reliable quality." },
                    { icon: HeadphonesIcon, title: "Technical Support", desc: "We train your staff and provide resources." },
                    { icon: Megaphone, title: "Marketing Support", desc: "POS materials, digital assets, and co-op programs." }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <item.icon className="h-4 w-4 text-primary" />
                        {item.title}
                      </div>
                      <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Counter Display Program */}
        <section className="py-20 bg-slate-900 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="container relative mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs font-bold mb-4 uppercase tracking-wider">
                Most Profitable 12" of Counter Space
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Turn Your Counter Space into Revenue</h2>
              <p className="text-xl text-slate-300">
                Your parts counter is prime real estate. EPHA counter displays put the solution right in front of customers at the perfect moment.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-slate-900 mb-6 font-bold text-xl">1</div>
                <h3 className="text-xl font-bold mb-4">Why It Works</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Problem-Aware Customers at counter</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Impulse-Friendly Pricing ($3.90-$10.70)</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Visual ROI Messaging</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> Immediate Availability</li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-accent">Complete Display Box</h3>
                  <p className="text-sm text-slate-300 mb-6">Pre-stocked with best-selling sizes (HP4-HP8) and high-vis colors.</p>
                  
                  <div className="space-y-4">
                    <div className="bg-black/20 p-4 rounded-lg">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Footprint</div>
                      <div className="font-bold">12" W × 10" D × 16" H</div>
                    </div>
                    <div className="bg-black/20 p-4 rounded-lg">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Unit Count</div>
                      <div className="font-bold">24-36 pieces (optimal mix)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 font-bold text-xl">$</div>
                <h3 className="text-xl font-bold mb-4">The Results</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-2"><BarChart3 className="h-4 w-4 text-green-400 shrink-0" /> 15-30% attach rate on related purchases</li>
                  <li className="flex gap-2"><BarChart3 className="h-4 w-4 text-green-400 shrink-0" /> $45-$120 average sale per transaction</li>
                  <li className="flex gap-2"><BarChart3 className="h-4 w-4 text-green-400 shrink-0" /> Payback period often &lt; 2 weeks</li>
                  <li className="flex gap-2"><BarChart3 className="h-4 w-4 text-green-400 shrink-0" /> Increased repeat foot traffic</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold px-8">Order Counter Display Trial</Button>
            </div>
          </div>
        </section>

        {/* Wholesale & Partners */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Wholesale Program Details</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-3 flex items-center gap-2">
                      <Package className="h-5 w-5" /> Bulk Inventory Program
                    </h3>
                    <p className="text-slate-600 mb-4">For distributors ready to stock deeper inventory. Volume tiers from 50 to 500+ units with increasing discounts.</p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> No minimum reorders</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> 30-day payment terms</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Free freight on bulk</li>
                      <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600" /> Quarterly rebates</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-xl text-primary mb-3 flex items-center gap-2">
                      <Megaphone className="h-5 w-5" /> Marketing Support
                    </h3>
                    <p className="text-slate-600 mb-4">We help you sell with digital assets, print materials, co-op marketing, and training resources.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">Who Should Partner</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Factory, title: "Industrial Supply", desc: "Serving manufacturing & MRO markets." },
                    { icon: Tractor, title: "Heavy Equipment", desc: "Construction & ag machinery dealers." },
                    { icon: Wrench, title: "Auto Parts Stores", desc: "Commercial accounts serving fleets." },
                    { icon: Settings, title: "Hydraulic Specialists", desc: "Repair & component supply shops." },
                    { icon: Truck, title: "Fleet Supply", desc: "Trucking & municipal fleet distributors." },
                    { icon: Store, title: "Farm Suppliers", desc: "Agricultural parts & service." }
                  ].map((partner, i) => (
                    <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-primary/20 transition-colors">
                      <partner.icon className="h-6 w-6 text-primary mb-2" />
                      <div className="font-bold text-slate-900 text-sm">{partner.title}</div>
                      <div className="text-xs text-slate-500">{partner.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Real Results from Partners</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="font-bold text-lg mb-1">Midwest Industrial</div>
                  <div className="text-sm text-slate-500 mb-4">12 Locations</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">$38,000</div>
                  <div className="text-xs uppercase tracking-wide text-slate-400 mb-4">Incremental Sales (6 mos)</div>
                  <p className="text-sm text-slate-600 italic">"The counter display was the easiest yes we've ever had. It pays for itself in a week."</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="font-bold text-lg mb-1">Regional Equipment</div>
                  <div className="text-sm text-slate-500 mb-4">Construction Dealer</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">$52,000</div>
                  <div className="text-xs uppercase tracking-wide text-slate-400 mb-4">First-Year Sales</div>
                  <p className="text-sm text-slate-600 italic">"It's become a profit center we didn't know we needed. Now recommending on every delivery."</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="font-bold text-lg mb-1">Hydraulic Repair Shop</div>
                  <div className="text-sm text-slate-500 mb-4">Independent</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">Reduced</div>
                  <div className="text-xs uppercase tracking-wide text-slate-400 mb-4">Warranty Callbacks</div>
                  <p className="text-sm text-slate-600 italic">"We protect hoses instead of just replacing them. Customers appreciate the proactive approach."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started & Application */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Getting Started is Easy</h2>
              <p className="text-lg text-slate-600">Choose the partnership level that fits your business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
              <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="font-bold text-xl mb-2">Counter Display Trial</div>
                <p className="text-sm text-slate-500 mb-6">Perfect for first-time partners testing the market.</p>
                <ul className="space-y-2 text-sm mb-8">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 1 counter display</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> All POS materials</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 30-day evaluation</li>
                </ul>
                <Button className="w-full" variant="outline">Order Trial</Button>
              </div>

              <div className="border-2 border-primary rounded-xl p-6 relative bg-primary/5">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">POPULAR</div>
                <div className="font-bold text-xl mb-2">Stocking Distributor</div>
                <p className="text-sm text-slate-500 mb-6">For established distributors ready to stock inventory.</p>
                <ul className="space-y-2 text-sm mb-8">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Initial inventory (100+)</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Multiple displays</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Full marketing support</li>
                </ul>
                <Button className="w-full">Apply for Account</Button>
              </div>

              <div className="border border-slate-200 rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="font-bold text-xl mb-2">Strategic Partnership</div>
                <p className="text-sm text-slate-500 mb-6">For major distributors & multi-location ops.</p>
                <ul className="space-y-2 text-sm mb-8">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Custom inventory</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Exclusive territories</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Co-branded marketing</li>
                </ul>
                <Button className="w-full" variant="outline">Contact Strategic</Button>
              </div>
            </div>

            {/* Application Form Mockup */}
            <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold font-heading mb-6 text-slate-900">Distributor Application Form</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Company Name*</Label>
                    <Input placeholder="Acme Supply Co." />
                  </div>
                  <div className="space-y-2">
                    <Label>Business Type*</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="industrial">Industrial Distributor</SelectItem>
                        <SelectItem value="equipment">Equipment Dealer</SelectItem>
                        <SelectItem value="parts">Parts Store</SelectItem>
                        <SelectItem value="fleet">Fleet Supply</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Primary Contact*</Label>
                    <Input placeholder="Full Name" />
                  </div>
                  <div className="space-y-2">
                    <Label>Email*</Label>
                    <Input type="email" placeholder="email@company.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Primary Industries Served*</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Fleet", "Construction", "Manufacturing", "Automotive", "Municipal", "Ag"].map((ind) => (
                      <div key={ind} className="flex items-center space-x-2">
                        <Checkbox id={`ind-${ind}`} />
                        <label htmlFor={`ind-${ind}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{ind}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Tell us about your business</Label>
                  <Textarea placeholder="Why would you be a great EPHA partner?" className="min-h-[100px]" />
                </div>

                <Button size="lg" className="w-full">Submit Application</Button>
                <p className="text-center text-xs text-slate-500">All applications reviewed within 2-3 business days</p>
              </form>
            </div>
          </div>
        </section>

        {/* Resources Footer */}
        <section className="py-20 bg-slate-900 text-white border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold font-heading mb-4">Download Resources</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {["Distributor Info Packet", "Product Line Card", "Margin Calculator", "Counter Display Spec Sheet"].map((res, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded hover:bg-white/10 cursor-pointer transition-colors">
                      <Download className="h-4 w-4 text-accent" />
                      <span className="text-sm">{res}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                <h3 className="font-bold text-xl mb-4 text-accent">Distributor Sales Team</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-white" />
                    <span>463-255-9942</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-white" />
                    <span>distributors@ephahoseprotectors.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-white" />
                    <span>Mon-Fri, 8 AM - 5 PM EST</span>
                  </div>
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

function Settings(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
