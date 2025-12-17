import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
    Building2,
    AlertTriangle,
    DollarSign,
    CheckCircle2,
    Snowflake,
    Trash2,
    Siren,
    Bus,
    TreePine,
    Droplets,
    Phone,
    Mail,
    ChevronRight,
    Scale,
    Clock,
    FileText,
    Users,
    Shield,
    Flag
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

export default function MunicipalIndustry() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596237563267-8453ea8d687b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

                    <div className="container relative mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                                <Building2 className="h-4 w-4" /> Municipal & Government
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                                Protect Taxpayer Assets. <br />
                                <span className="text-accent">Ensure Public Service Reliability.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                When communities depend on emergency response, snow removal, refuse collection, and essential services, equipment downtime isn't just costly—it's a failure to serve the public. EPHA delivers the reliability and fiscal responsibility government operations demand.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                                    Get Municipal Quote
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                    Download Implementation Guide
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
                                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Public Cost of Municipal Equipment Failures</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Government fleet and equipment managers face unique accountability: every failure impacts public service delivery and taxpayer confidence.
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="h-5 w-5" /> Direct Taxpayer Costs
                                    </h3>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Emergency repair costs (often after-hours)</span>
                                            <span className="font-bold">$800 - $3,000</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Towing and mobile service</span>
                                            <span className="font-bold">$500 - $2,500</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Downtime per incident</span>
                                            <span className="font-bold">6 - 12 hours</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Replacement parts and labor</span>
                                            <span className="font-bold">$200 - $800</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Scale className="h-5 w-5 text-orange-500" /> Political & Administrative Costs
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Council & media scrutiny", "FOI requests & accountability", "Budget variance explanations", "Damage to department reputation", "Lost public confidence", "Liability exposure"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                <div className="text-center mb-8">
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Impact Per Incident</div>
                                    <div className="text-5xl font-bold text-slate-900">$5,000 - $25,000+</div>
                                    <div className="text-red-500 font-medium mt-2">When service disruption costs included</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">100%</div>
                                            <h4 className="font-bold text-slate-900">Public Reliability Expected</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Citizens expect service regardless of equipment age.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">10-20</div>
                                            <h4 className="font-bold text-slate-900">Years Equipment Service Life</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Unlike commercial fleets, municipal equipment serves decades.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-red-100 rounded-lg text-red-600 font-bold">25-30%</div>
                                            <h4 className="font-bold text-slate-900">Preventable Downtime</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Stems from hydraulic failures—the category EPHA eliminates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Municipal Managers Battle Daily</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: Snowflake, title: "Extreme Seasonal Demands", desc: "Snow plows operate in -20°F with road salt and calcium chloride destroying unprotected hoses. One failure during a storm means political consequences." },
                                { icon: Trash2, title: "High-Intensity Usage Cycles", desc: "Refuse trucks complete 1,000+ hydraulic packer cycles per route. Budget constraints prevent proactive replacement on schedule." },
                                { icon: Siren, title: "Critical Service Equipment", desc: "Fire apparatus and ambulances can't fail. One inoperable vehicle reduces coverage and creates liability exposure." },
                                { icon: FileText, title: "Budget Justification Required", desc: "Every expenditure requires documentation and often council approval. Solutions must demonstrate clear, provable ROI." },
                                { icon: Clock, title: "Long Equipment Service Life", desc: "Municipal equipment serves 10-20+ years. Protection must deliver durability matching extended service expectations." },
                                { icon: Users, title: "Public Accountability", desc: "Citizens and media scrutinize maintenance practices. Proactive protection demonstrates fiscal responsibility." }
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
                            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Public Service Reliability</h2>
                            <p className="text-lg text-slate-600">
                                EPHA Hose Protectors deliver exactly what municipal operations demand: proven preventive maintenance, documented cost avoidance, and accountability to taxpayers.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                { title: "Preventive Maintenance That Works", desc: "Stop reacting to failures—install protection during routine service intervals and eliminate the failure mode permanently. Document results for council reviews." },
                                { title: "Extreme Condition Performance", desc: "-40°F to 430°F operating range handles snow removal winters, summer heat, and road chemical exposure without degradation." },
                                { title: "Fast Installation = Minimal Downtime", desc: "5-minute installation during existing PM cycles means no added vehicle downtime—fleet availability isn't sacrificed." },
                                { title: "Documented Cost Avoidance", desc: "Track failure rate reductions, calculate cost savings, and report ROI to justify budget allocations—measurable taxpayer value." },
                                { title: "Made in USA", desc: "Support American manufacturing while meeting Buy American requirements for federally funded fleet purchases." },
                                { title: "Multi-Year Durability", desc: "Protects for the life of the hose—aligns with municipal equipment service life expectations and reduces recurring costs." }
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
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Government Fleet Managers Deploy EPHA</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Snowflake,
                                    title: "Snow Removal Equipment",
                                    desc: "Protect plow hydraulics, wing assemblies, and sander systems from sub-zero temps, road salt, and constant vibration.",
                                    rec: "HP8, HP10, HP12 (Hi-Vis Orange)",
                                    impact: "Prevents mid-storm breakdowns that leave citizens without service"
                                },
                                {
                                    icon: Trash2,
                                    title: "Refuse Collection Vehicles",
                                    desc: "Shield hydraulic packer systems, lift cylinders, and compactor assemblies operating 1,000+ cycles per route.",
                                    rec: "HP8, HP10, HP12 (Black)",
                                    impact: "Maintains collection schedule reliability—prevents missed routes"
                                },
                                {
                                    icon: Siren,
                                    title: "Emergency Response Vehicles",
                                    desc: "Guard fire apparatus pumps, aerial ladder hydraulics, ambulance lifts, and rescue tool assemblies.",
                                    rec: "HP6, HP8, HP10 (Hi-Vis Yellow)",
                                    impact: "Ensures life-safety equipment availability"
                                },
                                {
                                    icon: Bus,
                                    title: "Public Transit Systems",
                                    desc: "Protect bus door hydraulics, wheelchair lifts, suspension assemblies, and brake systems.",
                                    rec: "HP5, HP6, HP8 (Black)",
                                    impact: "Maintains schedule reliability—prevents service disruptions"
                                },
                                {
                                    icon: TreePine,
                                    title: "Parks & Public Works",
                                    desc: "Shield mowers, loaders, excavators, and maintenance equipment from field debris and weather exposure.",
                                    rec: "HP6, HP8, HP10 (Hi-Vis Orange)",
                                    impact: "Maintains facility upkeep—prevents program cancellations"
                                },
                                {
                                    icon: Droplets,
                                    title: "Water & Sewer Equipment",
                                    desc: "Guard excavator hydraulics, vacuum truck systems, and utility equipment in contaminated environments.",
                                    rec: "HP8, HP10, HP12 (Black)",
                                    impact: "Prevents emergency response delays—maintains infrastructure"
                                }
                            ].map((app, i) => (
                                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                                    <CardHeader>
                                        <div className="flex items-center gap-3">
                                            <app.icon className="h-5 w-5 text-accent" />
                                            <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-300 mb-3">{app.desc}</p>
                                        <div className="text-sm font-bold text-white/80 bg-white/5 p-3 rounded border border-white/10 mb-3">
                                            Recommended: <span className="text-white">{app.rec}</span>
                                        </div>
                                        <p className="text-xs text-accent/80 italic">{app.impact}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI Calculator */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Taxpayer Value Calculation</h2>
                                <p className="text-lg text-slate-600">Example: Mid-Size Municipality (80-Vehicle Fleet)</p>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
                                <Table>
                                    <TableHeader className="bg-slate-50">
                                        <TableRow>
                                            <TableHead className="w-[200px] font-bold text-slate-900">Cost Category</TableHead>
                                            <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                                            <TableHead className="font-bold text-green-700 bg-green-50">With EPHA Protection</TableHead>
                                            <TableHead className="font-bold text-slate-900 text-right">Annual Savings</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Hydraulic Failures</TableCell>
                                            <TableCell className="text-slate-500">160 × $2,500 = $400,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">24 × $2,500 = $60,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$340,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Emergency Service</TableCell>
                                            <TableCell className="text-slate-500">160 × $1,200 = $192,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">24 × $1,200 = $28,800</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$163,200</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Service Disruption Cost</TableCell>
                                            <TableCell className="text-slate-500">160 × $5,000 = $800,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">24 × $5,000 = $120,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$680,000</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-50 font-bold">
                                            <TableCell>Total Annual Cost</TableCell>
                                            <TableCell className="text-red-600">$1,392,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-100">$208,800</TableCell>
                                            <TableCell className="text-right text-green-700">$1,183,200</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-100/50">
                                            <TableCell colSpan={2} className="text-right font-medium">Protection Investment (80 vehicles):</TableCell>
                                            <TableCell className="font-bold text-slate-900 bg-slate-200/50">$16,000</TableCell>
                                            <TableCell className="text-right text-slate-400">—</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-primary/5 border-t-2 border-primary">
                                            <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net Taxpayer Savings:</TableCell>
                                            <TableCell className="text-right font-bold text-xl text-primary">$1,167,200</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                    <FileText className="h-5 w-5" /> Budget Justification Formula
                                </h3>
                                <p className="text-blue-800 text-lg">
                                    "$16,000 preventive investment prevents $1,000,000+ in emergency repairs and service disruptions—protecting taxpayer resources while improving service reliability."
                                </p>
                                <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-blue-700">
                                    <div>Per-Vehicle Cost: <strong>$200 average</strong></div>
                                    <div>Per-Vehicle Savings: <strong>$12,375/year</strong></div>
                                    <div>ROI Timeline: <strong>4-8 weeks</strong></div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Button className="font-bold">Calculate Your Fleet's Taxpayer Value <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">County Public Works: <br /><span className="text-accent">$890K Annual Savings</span></h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Agency Profile</h4>
                                            <p className="text-slate-400">County public works, 120-vehicle fleet (snow plows, refuse trucks, utility vehicles), 450,000 residents served.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                                            <p className="text-slate-400">180+ hydraulic failures annually, mid-storm breakdowns, missed collection routes. Emergency repairs costing $425,000/year. Council scrutiny increasing.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                                            <p className="text-slate-400">Phased EPHA rollout: snow removal first, then refuse fleet, then utility vehicles. Technician training and monthly failure tracking.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 18 Months</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">89%</div>
                                            <div className="text-slate-600 font-medium">Reduction in snow plow hydraulic failures (48 → 5)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                                            <div className="text-slate-600 font-medium">Mid-storm breakdowns in protected fleet (was 12 average)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">92%</div>
                                            <div className="text-slate-600 font-medium">Reduction in refuse truck hydraulic failures (72 → 6)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$890K</div>
                                            <div className="text-slate-600 font-medium">Documented cost avoidance (repairs + service disruption)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">11d</div>
                                            <div className="text-slate-600 font-medium">$28,000 investment payback period</div>
                                        </div>
                                    </div>

                                    <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                                        "EPHA transformed our maintenance from reactive to preventive. We document every prevented failure and report savings quarterly. When we show $890K taxpayer savings from a $28K program, budget conversations change completely."
                                        <footer className="font-bold text-slate-900 mt-2 not-italic">— Director of Public Works, County Government</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation Guide */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Municipal Fleet Protection Program Rollout</h2>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-6">
                                {[
                                    { phase: "1", title: "Business Case Development", timeline: "Weeks 1-2", tasks: ["Audit fleet failure history and calculate current costs", "Identify highest-impact vehicle categories", "Develop ROI analysis and budget justification", "Prepare council/management presentation"] },
                                    { phase: "2", title: "Pilot Program", timeline: "Months 1-3", tasks: ["Protect 10-15 highest-risk vehicles", "Document installation locations with photos", "Train maintenance staff on procedures", "Track failure rates and cost avoidance"] },
                                    { phase: "3", title: "Council/Management Approval", timeline: "Month 3-4", tasks: ["Present pilot results and ROI data", "Request budget allocation for fleet-wide rollout", "Emphasize taxpayer value and reliability improvement", "Secure approval for multi-year program"] },
                                    { phase: "4", title: "Fleet-Wide Implementation", timeline: "Months 4-18", tasks: ["Integrate protection into PM schedules", "Prioritize: Emergency → Snow → Refuse → Utility", "Standardize installations across vehicle types", "Quarterly progress reporting"] },
                                    { phase: "5", title: "Program Sustainability", timeline: "Ongoing", tasks: ["Include protection in new vehicle specs", "Maintain failure tracking and ROI documentation", "Annual reporting to demonstrate value", "Share best practices with other agencies"] }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                                {item.phase}
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-6 border-b border-slate-100 last:border-b-0">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                                <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-0.5 rounded">{item.timeline}</span>
                                            </div>
                                            <ul className="space-y-1">
                                                {item.tasks.map((task, j) => (
                                                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                                                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipment Packages */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Recommended Municipal Vehicle Packages</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle className="flex items-center gap-2">
                                        <Snowflake className="h-5 w-5 text-blue-500" />
                                        Snow Plow Kit
                                    </CardTitle>
                                    <CardDescription>Winter operations protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP10 (plow lift cylinders)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP12 (wing assemblies)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP8 (sander hydraulics)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$98 <span className="text-sm font-normal text-slate-500">/ vehicle</span></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents $15,000+ winter emergency repairs</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle className="flex items-center gap-2">
                                        <Trash2 className="h-5 w-5 text-green-600" />
                                        Refuse Truck Kit
                                    </CardTitle>
                                    <CardDescription>Collection reliability</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP10 (packer pivot assemblies)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP12 (lift arm bundles)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP8 (control systems)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$118 <span className="text-sm font-normal text-slate-500">/ vehicle</span></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents $12,000+ annual downtime</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle className="flex items-center gap-2">
                                        <Siren className="h-5 w-5 text-red-500" />
                                        Emergency Vehicle Kit
                                    </CardTitle>
                                    <CardDescription>Life-safety equipment</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (pump/aerial hydraulics)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP10 (stabilizer assemblies)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP6 (auxiliary systems)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$76 <span className="text-sm font-normal text-slate-500">/ vehicle</span></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents critical capability gaps</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle className="flex items-center gap-2">
                                        <TreePine className="h-5 w-5 text-green-700" />
                                        Public Works Kit
                                    </CardTitle>
                                    <CardDescription>Equipment protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (loader/excavator)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP10 (boom assemblies)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP6 (auxiliary circuits)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$88 <span className="text-sm font-normal text-slate-500">/ unit</span></div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents $8,000+ repair costs</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="text-center mt-8">
                            <Button variant="outline" className="mr-4">Request Municipal Fleet Quote</Button>
                            <Button variant="outline">Download Spec Sheet for RFP</Button>
                        </div>
                    </div>
                </section>

                {/* Procurement Support */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Procurement & Contract Support</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <FileText className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Bid & RFP Support</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Technical specifications for RFPs</li>
                                    <li>• Budget justification documentation</li>
                                    <li>• Vendor qualification materials</li>
                                    <li>• Performance guarantee info</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <DollarSign className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Contract Options</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Direct purchase (PO, credit card)</li>
                                    <li>• State/local cooperative contracts</li>
                                    <li>• GSA Schedule compatibility</li>
                                    <li>• Multi-year blanket agreements</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <Flag className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Buy American Compliance</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Made in USA manufactured</li>
                                    <li>• FHWA, FTA eligible</li>
                                    <li>• Infrastructure bill compliant</li>
                                    <li>• Grant documentation provided</li>
                                </ul>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <Shield className="h-8 w-8 text-primary mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Government Pricing</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• Volume fleet discounts</li>
                                    <li>• Educational institution pricing</li>
                                    <li>• Inter-agency cooperative support</li>
                                    <li>• Multi-year program pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources & CTA */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                            Ready to Protect Taxpayer Assets?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join the municipal fleet managers and public works directors who have transformed maintenance from reactive crisis management to proactive asset protection.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                                Get Municipal Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Download Implementation Guide
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Talk to Government Specialist
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto text-left mb-12">
                            {[
                                "Municipal Fleet Guide",
                                "Taxpayer Value Calculator",
                                "Technician Training",
                                "Government Specialist",
                                "Council Presentation Template",
                                "RFP Specifications"
                            ].map((res, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                    <span className="text-sm font-medium text-white">{res}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                            <div>Trusted by: Counties | Cities | Transit authorities | Emergency services | School districts | State agencies</div>
                            <div className="flex gap-6">
                                <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                                <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> government@epha.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
