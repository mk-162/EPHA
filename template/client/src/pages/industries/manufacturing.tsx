import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
    Factory,
    AlertTriangle,
    DollarSign,
    Clock,
    Repeat,
    CheckCircle2,
    ArrowRight,
    Thermometer,
    FlaskConical,
    Package,
    Wrench,
    FileText,
    Calculator,
    Video,
    User,
    Phone,
    Mail,
    ChevronRight,
    Cog,
    Gauge,
    Timer,
    BarChart3
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

export default function ManufacturingIndustry() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

                    <div className="container relative mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                                <Factory className="h-4 w-4" /> Manufacturing & Industrial
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                                Zero Unplanned Stops. <br />
                                <span className="text-accent">Maximum Production Uptime.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                In manufacturing, every minute of downtime cascades through production schedules, delivery commitments, and bottom-line performance. When hydraulic systems can't fail, EPHA protection becomes your invisible profit center.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                                    Get Manufacturing Quote
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
                                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Hidden Cost of Manufacturing Downtime</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Production managers face a harsh reality: unplanned equipment stops don't just interrupt one machine—they ripple through entire operations.
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="h-5 w-5" /> Direct Production Costs
                                    </h3>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Lost production output</span>
                                            <span className="font-bold">$5,000 - $25,000/hr</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Emergency hose replacement & labor</span>
                                            <span className="font-bold">$1,500 - $8,000</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Expedited parts & after-hours service</span>
                                            <span className="font-bold">$2,000 - $10,000</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Minimum repair time</span>
                                            <span className="font-bold">4-12 hours</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5 text-orange-500" /> Cascade Costs
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Downstream line stoppages", "Raw material waste", "Missed delivery commitments", "Overtime labor costs", "Quality issues", "JIT reputation damage"].map((item, i) => (
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
                                    <div className="text-5xl font-bold text-slate-900">$25,000 - $100,000+</div>
                                    <div className="text-red-500 font-medium mt-2">Per major hydraulic failure</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">16-24</div>
                                            <h4 className="font-bold text-slate-900">Hours Daily Operation</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Production equipment operates with minimal maintenance windows.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">100K+</div>
                                            <h4 className="font-bold text-slate-900">Cycles Per Year</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Hydraulic presses create constant flex wear at contact points.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-red-100 rounded-lg text-red-600 font-bold">30%</div>
                                            <h4 className="font-bold text-slate-900">Of Unplanned Downtime</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Caused by hydraulic failures—costing average facilities $260,000 annually.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Manufacturing Professionals Battle Daily</h2>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                { icon: Repeat, title: "High-Cycle Operations", desc: "CNC machines and presses run millions of cycles annually, wearing unprotected hoses." },
                                { icon: FlaskConical, title: "Chemical Exposure", desc: "Coolants, oils, solvents attack rubber hose covers 24/7." },
                                { icon: Thermometer, title: "Temperature Cycling", desc: "Constant heating and cooling creates micro-cracking in hoses." },
                                { icon: Package, title: "Cable Carriers", desc: "Tight bends and hose-on-hose contact in cable chains." },
                                { icon: Timer, title: "Zero Tolerance Windows", desc: "15-30 minute maintenance windows—no room for extended service." },
                                { icon: BarChart3, title: "Lean Pressure", desc: "OEE targets mean every minute of preventable downtime hurts." }
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
                            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Manufacturing Precision</h2>
                            <p className="text-lg text-slate-600">
                                EPHA Hose Protectors deliver exactly what production environments demand: fast installation during brief maintenance windows, proven durability in high-cycle applications, measurable uptime improvement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                { title: "Install Without Production Stops", desc: "5-minute spot application during shift changes, lunch breaks, or brief PM windows—no machine disassembly, no hose removal." },
                                { title: "High-Cycle Durability", desc: "Material engineered to withstand millions of flex cycles in press brakes, CNC machines, injection molding systems." },
                                { title: "Chemical Resistance", desc: "Impervious to hydraulic fluids, machine coolants, cutting oils, solvents—maintains integrity in harshest environments." },
                                { title: "Extreme Temperature Performance", desc: "-40°F to 430°F operating range protects lines on furnace equipment, cooling systems, and hydraulic pumps." },
                                { title: "Cable Carrier Compatible", desc: "Slim profile fits within cable carriers without binding or restricting movement—solves the toughest wear problem." },
                                { title: "Predictable Protection Lifecycle", desc: "Unlike reactive maintenance, EPHA enables predictive protection—install once, eliminate the failure mode permanently." }
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
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Production Professionals Deploy EPHA Protection</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Hydraulic Press Systems",
                                    desc: "Protect high-pressure lines (3,000-5,000 PSI) at ram cylinders, press brakes, and punch press hydraulics.",
                                    rec: "HP8, HP10, HP12 (Black)"
                                },
                                {
                                    title: "CNC Machine Cable Carriers",
                                    desc: "Shield hydraulic lines, coolant hoses, and pneumatic tubing running through cable chains.",
                                    rec: "HP5, HP6, HP8 (sized to fit carrier)"
                                },
                                {
                                    title: "Injection Molding Equipment",
                                    desc: "Guard mold clamp hydraulics, ejector cylinder lines, and cooling system hoses.",
                                    rec: "HP6, HP8, HP10 (Black or Hi-Vis Yellow)"
                                },
                                {
                                    title: "Automated Assembly Systems",
                                    desc: "Protect pneumatic lines, hydraulic cylinders, and robotic arm assemblies.",
                                    rec: "HP5, HP6, HP8 (Hi-Vis Orange for safety)"
                                },
                                {
                                    title: "Process Equipment",
                                    desc: "Shield hydraulic power units, conveyor drives, and material handling from chemical exposure.",
                                    rec: "HP6, HP8 (Black)"
                                },
                                {
                                    title: "Multi-Hose Bundle Protection",
                                    desc: "Consolidate and protect multiple lines in cable trays, along frames, and through congested areas.",
                                    rec: "HP10, HP12 (bundle sizes)"
                                }
                            ].map((app, i) => (
                                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-300 mb-4 h-12">{app.desc}</p>
                                        <div className="text-sm font-bold text-white/80 bg-white/5 p-3 rounded border border-white/10">
                                            Recommended: <span className="text-white">{app.rec}</span>
                                        </div>
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
                                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Production Protection ROI</h2>
                                <p className="text-lg text-slate-600">Example: Mid-Size Manufacturing Facility (50 Production Machines)</p>
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
                                            <TableCell className="font-medium">Hydraulic Failures</TableCell>
                                            <TableCell className="text-slate-500">100 × $15,000 = $1,500,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">15 × $15,000 = $225,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$1,275,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Production Downtime</TableCell>
                                            <TableCell className="text-slate-500">800 hrs × $12,000 = $9,600,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">120 hrs × $12,000 = $1,440,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$8,160,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Emergency Service</TableCell>
                                            <TableCell className="text-slate-500">100 × $3,500 = $350,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">15 × $3,500 = $52,500</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$297,500</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-50 font-bold">
                                            <TableCell>Total Annual Cost</TableCell>
                                            <TableCell className="text-red-600">$11,450,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-100">$1,717,500</TableCell>
                                            <TableCell className="text-right text-green-700">$9,732,500</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-100/50">
                                            <TableCell colSpan={2} className="text-right font-medium">Protection Investment (50 machines):</TableCell>
                                            <TableCell className="font-bold text-slate-900 bg-slate-200/50">$15,000</TableCell>
                                            <TableCell className="text-right text-slate-400">—</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-primary/5 border-t-2 border-primary">
                                            <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net ROI:</TableCell>
                                            <TableCell className="text-right font-bold text-xl text-primary">$9,717,500</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="text-center">
                                <div className="inline-block bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg font-medium mb-6 border border-yellow-200">
                                    ROI Timeline: Investment recovered in first 4-6 hours of prevented downtime
                                </div>
                                <div>
                                    <Button className="font-bold">Calculate Your Facility's ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Automotive Parts Manufacturer: <br /><span className="text-accent">94% Downtime Reduction</span></h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Company Profile</h4>
                                            <p className="text-slate-400">Tier 1 automotive supplier, 80 CNC machines, 12 hydraulic presses, 24/7 production schedule.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                                            <p className="text-slate-400">8-12 hydraulic hose failures monthly, causing $1.2M annual downtime cost. Cable carrier hose wear was primary failure mode.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                                            <p className="text-slate-400">Targeted EPHA protection: HP6/HP8 in CNC cable carriers, HP10 on press cylinders, HP8 on injection molding systems.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">94%</div>
                                            <div className="text-slate-600 font-medium">Reduction in hydraulic failures (10/month → 0.6/month)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$1.08M</div>
                                            <div className="text-slate-600 font-medium">Savings in prevented downtime annually</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                                            <div className="text-slate-600 font-medium">Production stops from cable carrier hose failures</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">6d</div>
                                            <div className="text-slate-600 font-medium">$18,000 investment payback period</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">87%</div>
                                            <div className="text-slate-600 font-medium">OEE improvement (from 79%)</div>
                                        </div>
                                    </div>

                                    <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                                        "EPHA solved our cable carrier wear problem—the one issue we thought we had to live with. Installation takes 5 minutes during shift change."
                                        <footer className="font-bold text-slate-900 mt-2 not-italic">— Plant Maintenance Manager</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Implementation & Packages */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Rolling Out Plant-Wide Protection</h2>
                                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            1
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-slate-900">Phase 1: Critical Equipment</div>
                                                <time className="font-medium text-primary text-sm">Weeks 1-4</time>
                                            </div>
                                            <div className="text-slate-500 text-sm">Identify highest-failure equipment. Apply protection during scheduled PM windows.</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            2
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-slate-900">Phase 2: Standardized Protection</div>
                                                <time className="font-medium text-primary text-sm">Months 2-6</time>
                                            </div>
                                            <div className="text-slate-500 text-sm">Create machine-specific protection maps. Train technicians. Integrate into TPM checklists.</div>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-primary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            3
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                                            <div className="flex items-center justify-between space-x-2 mb-1">
                                                <div className="font-bold text-slate-900">Phase 3: Plant-Wide Standard</div>
                                                <time className="font-medium text-primary text-sm">Month 6+</time>
                                            </div>
                                            <div className="text-slate-500 text-sm">All new equipment protected at commissioning. All equipment protected at next major service. Track OEE improvement.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-8 text-slate-900">Recommended Manufacturing Kits</h2>
                                <div className="grid gap-6">
                                    <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                            <CardTitle>CNC Machine Protection Kit</CardTitle>
                                            <CardDescription>Complete Cable Carrier Coverage</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-6">
                                            <ul className="space-y-2 mb-6 text-sm">
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP5 (cable carrier entry points)</li>
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP6 (hydraulic lines)</li>
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (coolant lines)</li>
                                            </ul>
                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl font-bold text-slate-900">$89 <span className="text-sm font-normal text-slate-500">/ machine</span></div>
                                                <Button variant="outline" size="sm">Order Kits</Button>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                            <CardTitle>Hydraulic Press Kit</CardTitle>
                                            <CardDescription>High-Pressure Protection</CardDescription>
                                        </CardHeader>
                                        <CardContent className="pt-6">
                                            <ul className="space-y-2 mb-6 text-sm">
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP10 (cylinder assemblies)</li>
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (manifold connections)</li>
                                                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP12 (bundle protection)</li>
                                            </ul>
                                            <div className="flex items-center justify-between">
                                                <div className="text-2xl font-bold text-slate-900">$145 <span className="text-sm font-normal text-slate-500">/ press</span></div>
                                                <Button variant="outline" size="sm">Order Kits</Button>
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
                            Ready to Maximize Your Production Uptime?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join hundreds of manufacturing facilities that have eliminated preventable hydraulic failures and recovered their investment in days, not months.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                                Get Manufacturing Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Download Guide
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Talk to Specialist
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
                            {[
                                { icon: FileText, text: "Download Manufacturing Guide" },
                                { icon: Calculator, text: "ROI Calculator" },
                                { icon: Video, text: "Installation Videos" },
                                { icon: User, text: "Manufacturing Specialist" }
                            ].map((res, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                    <res.icon className="h-5 w-5 text-accent" />
                                    <span className="text-sm font-medium text-white">{res.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                            <div>Trusted by: Automotive manufacturers | Food & beverage | Plastics processing | Metal fabrication</div>
                            <div className="flex gap-6">
                                <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                                <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> manufacturing@epha.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
