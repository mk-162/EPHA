import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  HardHat, 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sun,
  Hammer,
  RotateCw,
  Shuffle,
  Wrench,
  FileText,
  Calculator,
  Video,
  User,
  Phone,
  Mail,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ConstructionIndustry() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
          
          <div className="container relative mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                <HardHat className="h-4 w-4" /> Construction & Heavy Equipment
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                Built for the Jobsite. <br />
                <span className="text-accent">Proven in the Harshest Conditions.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                When excavators, loaders, and cranes face extreme temperatures, abrasive materials, and punishing workloads, equipment protection isn’t an option—it’s survival. EPHA delivers jobsite-proven durability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                  Get Equipment Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                  Calculate ROI
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The True Cost of Equipment Downtime</h2>
                <p className="text-lg text-slate-600 mb-8">
                  In construction, time is money—and equipment failure is the enemy of both.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5" /> Per-Hour Equipment Costs
                  </h3>
                  <ul className="space-y-2 text-red-800">
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Rental equipment sitting idle</span>
                      <span className="font-bold">$150 - $500/hr</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Crew labor with no productivity</span>
                      <span className="font-bold">$200 - $800/hr</span>
                    </li>
                    <li className="flex justify-between border-b border-red-100 pb-1">
                      <span>Project delay penalties</span>
                      <span className="font-bold">$1,000 - $5,000/hr</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-orange-500" /> The Jobsite Reality
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                       <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2" />
                       <p className="text-sm text-slate-600"><span className="font-bold">15-30 vulnerable hose locations</span> per hydraulic excavator.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2" />
                       <p className="text-sm text-slate-600"><span className="font-bold">-20°F to 130°F+</span> ambient temperatures at hose surfaces.</p>
                    </div>
                    <div className="flex items-start gap-3">
                       <div className="h-1.5 w-1.5 rounded-full bg-orange-400 mt-2" />
                       <p className="text-sm text-slate-600"><span className="font-bold">Abrasive materials</span> (concrete, rebar, rock) constantly contact lines.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="text-center mb-8">
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Incident Cost</div>
                  <div className="text-5xl font-bold text-slate-900">$5k - $50k+</div>
                  <div className="text-red-500 font-medium mt-2">For major equipment failure</div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">40%</div>
                      <h4 className="font-bold text-slate-900">Unplanned Downtime Source</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Rental fleets report 40% of downtime stems from preventable hydraulic failures.</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">4-8 hrs</div>
                      <h4 className="font-bold text-slate-900">Emergency Replacement Time</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">Plus parts expedition time, keeping machines idle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Construction Professionals Battle Daily</h2>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: Hammer, title: "Extreme Abrasion", desc: "Concrete dust, rebar, and crushed stone wear through hoses." },
                { icon: Sun, title: "Temperature Extremes", desc: "150°F+ in summer sun to -20°F in winter operations." },
                { icon: RotateCw, title: "High-Pressure Flex", desc: "Thousands of flex cycles daily create wear points at every bracket." },
                { icon: Shuffle, title: "Complex Routing", desc: "Hose-on-hose abrasion in tight bundles and around pivot points." },
                { icon: ShieldAlert, title: "Safety Hazards", desc: "3,000+ PSI leaks can penetrate skin and cause fires." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EPHA Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Construction Durability</h2>
              <p className="text-lg text-slate-600">
                EPHA Hose Protectors are built specifically for the punishment construction equipment endures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                { title: "Extreme Temperature Performance", desc: "-40°F to 430°F operating range handles arctic winters and desert summers." },
                { title: "Abrasion-Resistant Compound", desc: "Proprietary material withstands constant contact with concrete, steel, and aggregate." },
                { title: "High-Pressure Rated", desc: "Protects hoses operating at 3,000-5,000+ PSI in high-cycle applications." },
                { title: "Bundle Protection", desc: "Larger sizes (HP10, HP12) wrap multiple hoses together, preventing hose-on-hose wear." },
                { title: "No-Disassembly Installation", desc: "Spot-apply protection at wear points without removing boom assemblies." },
                { title: "High-Visibility Options", desc: "Orange and yellow colors increase visibility for operators and maintenance." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Construction Pros Deploy EPHA Protection</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Excavator Boom Assemblies", 
                  desc: "Protect hydraulic lines at boom pivot points and stick cylinders where flex cycles create maximum wear.",
                  rec: "HP8, HP10, HP12 (Hi-Vis Orange)"
                },
                { 
                  title: "Loader & Backhoe Systems", 
                  desc: "Shield loader bucket hydraulics, stabilizer lines, and backhoe swing assemblies from frame contact.",
                  rec: "HP6, HP8, HP10 (Black or Hi-Vis Yellow)"
                },
                { 
                  title: "Crane Hydraulics", 
                  desc: "Guard boom extension cylinders, outrigger lines, and winch hydraulics from cable contact.",
                  rec: "HP10, HP12 (Hi-Vis Orange)"
                },
                { 
                  title: "Demolition Equipment", 
                  desc: "Protect breaker hammer hydraulics and concrete crusher assemblies from debris impact.",
                  rec: "HP8, HP12 (Black for dust camouflage)"
                },
                { 
                  title: "Multi-Hose Bundle Wraps", 
                  desc: "Consolidate and protect multiple lines running together along boom assemblies and chassis rails.",
                  rec: "HP10, HP12 (Bundle sizes)"
                },
                { 
                  title: "Auxiliary Attachment Lines", 
                  desc: "Shield quick-coupler hydraulic lines, auxiliary circuits, and specialty attachment connections.",
                  rec: "HP6, HP8 (Hi-Vis Yellow)"
                }
              ].map((app, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4 h-16">{app.desc}</p>
                    <div className="text-sm font-bold text-white/80 bg-white/5 p-3 rounded border border-white/10">
                      Recommended: <span className="text-white">{app.rec}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Mock */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Equipment Protection ROI</h2>
                <p className="text-lg text-slate-600">Example: 10-Machine Fleet (Excavators, Loaders, Dozers)</p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      <TableHead className="w-[200px] font-bold text-slate-900">Cost Category</TableHead>
                      <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-green-700 bg-green-50">With EPHA Protection</TableHead>
                      <TableHead className="font-bold text-slate-900 text-right">Annual Savings</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Hydraulic Failures (2/machine)</TableCell>
                      <TableCell className="text-slate-500">20 × $3,500 = $70,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">4 × $3,500 = $14,000</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$56,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Equipment Downtime</TableCell>
                      <TableCell className="text-slate-500">160 × $350 = $56,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">32 × $350 = $11,200</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$44,800</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Service</TableCell>
                      <TableCell className="text-slate-500">20 × $1,200 = $24,000</TableCell>
                      <TableCell className="text-green-700 bg-green-50">4 × $1,200 = $4,800</TableCell>
                      <TableCell className="text-right font-bold text-slate-900">$19,200</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-50 font-bold">
                      <TableCell>Total Annual Cost</TableCell>
                      <TableCell className="text-red-600">$150,000</TableCell>
                      <TableCell className="text-green-700 bg-green-100">$30,000</TableCell>
                      <TableCell className="text-right text-green-700">$120,000</TableCell>
                    </TableRow>
                    <TableRow className="bg-slate-100/50">
                      <TableCell colSpan={2} className="text-right font-medium">Protection Investment (10 machines):</TableCell>
                      <TableCell className="font-bold text-slate-900 bg-slate-200/50">$1,800</TableCell>
                      <TableCell className="text-right text-slate-400">—</TableCell>
                    </TableRow>
                    <TableRow className="bg-primary/5 border-t-2 border-primary">
                      <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net ROI:</TableCell>
                      <TableCell className="text-right font-bold text-xl text-primary">$118,200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="text-center">
                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                  ROI Timeline: Investment recovered after first prevented major failure (typically 2-6 weeks)
                </div>
                <div>
                  <Button className="font-bold">Calculate Your Equipment ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-900 p-12 text-white flex flex-col justify-center">
                  <div className="uppercase tracking-widest text-sm font-bold text-accent mb-4">Case Study</div>
                  <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">National Construction Contractor: <br /><span className="text-accent">92% Failure Reduction</span></h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                      <p className="text-slate-400">Averaging 2.5 hydraulic hose failures per excavator per season, costing $175,000 annually across 45 machines.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                      <p className="text-slate-400">Implemented EPHA protection on boom assemblies, loader bucket cylinders, and auxiliary circuits.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 18 Months</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">92%</div>
                      <div className="text-slate-600 font-medium">Reduction in boom assembly hose failures</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">$161k</div>
                      <div className="text-slate-600 font-medium">Savings over 18 months</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                      <div className="text-slate-600 font-medium">Project delays from hydraulic failures</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 text-center font-bold text-2xl text-green-600">6wks</div>
                      <div className="text-slate-600 font-medium">Investment payback period</div>
                    </div>
                  </div>

                  <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                    “We used to budget for hose failures as inevitable. EPHA changed that. Now we prevent them.”
                    <footer className="font-bold text-slate-900 mt-2 not-italic">— Equipment Manager</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Best Practices for Field Installation</h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      1
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Identify High-Wear Locations</div>
                      </div>
                      <div className="text-slate-500 text-sm">Boom pivot points, frame contact areas, hose crossovers, bucket cylinder brackets.</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      2
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Clean & Prepare</div>
                      </div>
                      <div className="text-slate-500 text-sm">Wipe debris from hose surface. Inspect for existing damage. Replace compromised hoses first.</div>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      3
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Apply Protection</div>
                      </div>
                      <div className="text-slate-500 text-sm">Wrap protector around wear point. Secure with cable ties through grooves. Ensure protector can flex.</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      4
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                      <div className="flex items-center justify-between space-x-2 mb-1">
                        <div className="font-bold text-slate-900">Document & Inspect</div>
                      </div>
                      <div className="text-slate-500 text-sm">Photo-document. Add to PM checklist. Replace protectors showing wear before hose damage occurs.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Recommended Equipment Kits</h2>
                <div className="grid gap-6">
                  <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                      <CardTitle>Compact Excavator Kit</CardTitle>
                      <CardDescription>12-20 ton machines</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 mb-6 text-sm">
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP8 (boom/stick assemblies)</li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP6 (auxiliary circuits)</li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP10 (bundle protection)</li>
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-slate-900">$92 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                        <Button variant="outline" size="sm">Order Kit</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                    <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                      <CardTitle>Standard Excavator Kit</CardTitle>
                      <CardDescription>20-40 ton machines</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2 mb-6 text-sm">
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 8× HP10 (boom assemblies)</li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (stick/bucket cylinders)</li>
                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP12 (main boom bundles)</li>
                      </ul>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-slate-900">$142 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                        <Button variant="outline" size="sm">Order Kit</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
              Stop Jobsite Breakdowns. Protect Your Equipment Today.
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join hundreds of construction professionals who’ve eliminated preventable hydraulic failures and kept projects on schedule.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                Get Equipment Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Download Application Guide
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                Talk to Construction Specialist
              </Button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
              {[
                { icon: FileText, text: "Equipment Application Guide" },
                { icon: Calculator, text: "ROI Calculator" },
                { icon: Video, text: "Field Installation Videos" },
                { icon: User, text: "Technical Support" }
              ].map((res, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                  <res.icon className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-white">{res.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
               <div>Trusted by: General contractors | Heavy civil construction | Demolition contractors | Mining operations</div>
               <div className="flex gap-6">
                 <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                 <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> construction@epha.com</span>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
