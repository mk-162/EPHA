import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
    Wrench,
    DollarSign,
    CheckCircle2,
    RefreshCw,
    Clock,
    Star,
    Smartphone,
    Briefcase,
    Car,
    Truck,
    Battery,
    Fuel,
    Package,
    Phone,
    Mail,
    ChevronRight,
    MessageSquare,
    Target,
    Users
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

export default function AutomotiveIndustry() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

                    <div className="container relative mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                                <Wrench className="h-4 w-4" /> Automotive & Repair
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                                Fix It Right. <br />
                                <span className="text-accent">Protect Your Reputation.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                When customers trust you with their vehicles, comebacks destroy that trust—and your profitability. Whether you're repairing hydraulics, replacing hoses, or servicing heavy equipment, EPHA protection turns one-time repairs into long-term solutions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                                    Get Shop Pricing
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                    Download Service Guide
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
                                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Hidden Cost of Comebacks in Automotive Service</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Every shop owner and service manager knows the pain: a customer returns with the same problem you just fixed. The cost goes far beyond the repair.
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="h-5 w-5" /> Direct Comeback Costs
                                    </h3>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Repeat labor (often free)</span>
                                            <span className="font-bold">$150 - $600</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Replacement parts (your cost)</span>
                                            <span className="font-bold">$100 - $400</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Bay time for comebacks</span>
                                            <span className="font-bold">2 - 4 hours</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Lost labor efficiency</span>
                                            <span className="font-bold">Immeasurable</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Star className="h-5 w-5 text-orange-500" /> Reputation & Customer Costs
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["1-star review = 30+ lost customers", "Lost customer LTV: $5K-$15K+", "Word-of-mouth damage", "Warranty disputes", "Reduced customer retention", "Lost referral opportunities"].map((item, i) => (
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
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Impact Per Comeback</div>
                                    <div className="text-5xl font-bold text-slate-900">$2,000 - $10,000+</div>
                                    <div className="text-red-500 font-medium mt-2">Direct and indirect costs combined</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">15-20%</div>
                                            <h4 className="font-bold text-slate-900">Hose Replacement Comebacks</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Account for this percentage of all comebacks in heavy equipment service.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">3-5x</div>
                                            <h4 className="font-bold text-slate-900">Faster Failure Rate</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Unprotected hoses fail this much faster than protected installations.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-red-100 rounded-lg text-red-600 font-bold">12-18%</div>
                                            <h4 className="font-bold text-slate-900">Industry Comeback Rate</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Of hydraulic hose repairs result in comebacks within 12 months.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Automotive & Repair Professionals Face Daily</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: RefreshCw, title: "Repeat Failure Cycle", desc: "You replace a failed hose but don't address the root cause. Customer returns in 6 months with the same failure. You eat the cost, lose the customer, or both." },
                                { icon: Clock, title: "Competitive Pressure", desc: "Customers shop on price and expect fast turnaround. Adding protection seems like extra cost, but comebacks cost far more—you need solutions that sell themselves." },
                                { icon: Wrench, title: "Limited Installation Time", desc: "Vehicle is on the lift for 2 hours max. You need hose replacement done quickly, not complex protection that adds billable time customers question." },
                                { icon: Smartphone, title: "Online Review Vulnerability", desc: "One comeback = one angry customer = one devastating review. In the Google/Yelp age, your reputation lives or dies on preventing repeat failures." },
                                { icon: Briefcase, title: "Parts Markup Pressure", desc: "Labor rates have plateaued while costs rise. You need to add value and margin to parts sales, but customers resist 'unnecessary' add-ons." },
                                { icon: Car, title: "Vehicle Variety Challenges", desc: "From passenger cars to commercial trucks to heavy equipment—every vehicle presents different hose routing, contact points, and wear conditions." }
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
                            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection That Pays for Itself—And Protects Your Reputation</h2>
                            <p className="text-lg text-slate-600">
                                EPHA Hose Protectors give automotive and repair professionals exactly what you need: easy customer value proposition, fast installation, and measurable comeback prevention.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                { title: "Easy Customer Conversation", desc: "\"For $8, I can protect this new hose from the same wear that destroyed the original. It takes 5 minutes and prevents you from being back here in 6 months.\" Customers say yes." },
                                { title: "Profitable Service Add-On", desc: "$4-$11 parts cost, $8-$25 retail pricing—healthy margin on every installation while genuinely adding value. Win-win for shop and customer." },
                                { title: "Quick Installation (5 Minutes)", desc: "Vehicle already on lift, hose already accessed—add protection in same time it takes to route the new hose. Minimal labor, maximum value." },
                                { title: "Visible Professionalism", desc: "High-visibility orange/yellow options show customers you're going the extra mile. It's visual proof you did more than the shop down the street." },
                                { title: "Eliminates Comebacks", desc: "Address the root cause of failure—rubbing, exposure, contact points—not just the symptom. Customer's hose lasts 3-5x longer." },
                                { title: "Competitive Differentiation", desc: "While competitors do basic hose replacement, you deliver \"lifetime protection installation\"—a service upgrade that justifies your pricing and builds loyalty." }
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
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Service Professionals Deploy EPHA Protection</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Car,
                                    title: "Hydraulic Brake Line Replacement",
                                    desc: "Protect new brake lines from the frame contact and road salt exposure that caused the original failure.",
                                    rec: "HP5, HP6 (Black or Hi-Vis Yellow)",
                                    pitch: "\"Prevents the rust and rubbing that caused this failure—protects your investment.\""
                                },
                                {
                                    icon: Truck,
                                    title: "Heavy Equipment Hydraulic Service",
                                    desc: "Construction, agricultural, and material handling equipment repairs—protect from extreme jobsite conditions.",
                                    rec: "HP8, HP10, HP12 (Hi-Vis Orange)",
                                    pitch: "\"Jobsite-grade protection that handles the punishment your equipment faces daily.\""
                                },
                                {
                                    icon: Battery,
                                    title: "Battery Cable Protection",
                                    desc: "During starter service or alternator replacement—protect cables from chafing that creates dangerous shorts and fire hazards.",
                                    rec: "HP4, HP5 (Black or Hi-Vis Yellow)",
                                    pitch: "\"Prevents the chafing that can cause electrical fires—safety protection for your vehicle.\""
                                },
                                {
                                    icon: Fuel,
                                    title: "Fuel Line & Cooling System",
                                    desc: "During fuel pump, radiator, or cooling system repairs—protect from heat exposure and frame contact.",
                                    rec: "HP5, HP6 (Black)",
                                    pitch: "\"Protects against heat and wear—extends the life of your new parts significantly.\""
                                },
                                {
                                    icon: Truck,
                                    title: "Fleet Vehicle Service",
                                    desc: "When servicing commercial trucks, delivery vehicles, or utility fleets—deliver fleet-grade protection.",
                                    rec: "HP6, HP8, HP10 (Hi-Vis Orange)",
                                    pitch: "\"The same protection fleet maintenance departments use—commercial-grade durability.\""
                                },
                                {
                                    icon: Package,
                                    title: "Bundle Protection for Multi-Hose Jobs",
                                    desc: "During transmission service or complex repairs—protect multiple lines from hose-on-hose wear.",
                                    rec: "HP10, HP12 (Black or Hi-Vis)",
                                    pitch: "\"Prevents the lines from rubbing each other—a common failure point most shops ignore.\""
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
                                        <p className="text-xs text-accent/80 italic">{app.pitch}</p>
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
                                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Your Shop's Protection ROI</h2>
                                <p className="text-lg text-slate-600">Example: Independent Repair Shop (500 Hose Jobs Annually)</p>
                            </div>

                            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-8">
                                <Table>
                                    <TableHeader className="bg-slate-50">
                                        <TableRow>
                                            <TableHead className="w-[200px] font-bold text-slate-900">Metric</TableHead>
                                            <TableHead className="font-bold text-slate-900">Without Protection</TableHead>
                                            <TableHead className="font-bold text-green-700 bg-green-50">With EPHA Protection</TableHead>
                                            <TableHead className="font-bold text-slate-900 text-right">Annual Benefit</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">Comeback Rate</TableCell>
                                            <TableCell className="text-slate-500">15% (75 jobs)</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">2% (10 jobs)</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">65 fewer comebacks</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Comeback Cost</TableCell>
                                            <TableCell className="text-slate-500">75 × $400 = $30,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">10 × $400 = $4,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$26,000 saved</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Lost Bay Time</TableCell>
                                            <TableCell className="text-slate-500">300 hrs × $85/hr = $25,500</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">40 hrs × $85/hr = $3,400</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$22,100 recovered</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Customer Retention</TableCell>
                                            <TableCell className="text-slate-500">-15 customers × $8K LTV</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">-2 customers × $8K LTV</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$104,000 protected</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Protection Revenue</TableCell>
                                            <TableCell className="text-slate-500">—</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">500 jobs × $15 markup</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$7,500 added</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-primary/5 border-t-2 border-primary">
                                            <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Total Annual Benefit:</TableCell>
                                            <TableCell className="text-right font-bold text-xl text-primary">$159,600</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-green-900 mb-4">Per-Job Economics:</h3>
                                <div className="grid md:grid-cols-5 gap-4 text-sm text-green-800">
                                    <div>Parts cost: <strong>$4-$11</strong></div>
                                    <div>Customer charge: <strong>$15-$30</strong></div>
                                    <div>Installation time: <strong>5 minutes</strong></div>
                                    <div>Gross profit: <strong>$11-$19</strong></div>
                                    <div>Comeback prevention: <strong>$400+</strong></div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Button className="font-bold">Calculate Your Shop's ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Independent Truck & Equipment Service: <br /><span className="text-accent">Zero Comebacks</span></h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Shop Profile</h4>
                                            <p className="text-slate-400">Family-owned truck and heavy equipment repair, 6 technicians, 200+ commercial customers.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Challenge</h4>
                                            <p className="text-slate-400">20-25 hydraulic hose comebacks annually (18% rate), damaging reputation. Lost 3 major fleet accounts. Comeback costs estimated at <strong className="text-red-400">$45,000/year</strong>.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                                            <p className="text-slate-400">EPHA as standard protection for all hydraulic hose replacements. Service advisors trained on value proposition. $20 customer charge per installation.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 12 Months</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                                            <div className="text-slate-600 font-medium">Hydraulic hose comebacks (down from 25)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$28K</div>
                                            <div className="text-slate-600 font-medium">Saved in comeback costs and lost bay time</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$9.6K</div>
                                            <div className="text-slate-600 font-medium">Added revenue from protection sales (480 jobs)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">3</div>
                                            <div className="text-slate-600 font-medium">Fleet accounts recovered—protection became selling point</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">4.8★</div>
                                            <div className="text-slate-600 font-medium">Google rating (up from 3.9)—customers mention quality</div>
                                        </div>
                                    </div>

                                    <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                                        "EPHA solved our comeback problem and became a profit center. Customers love it because it makes sense—'protect the hose where it failed.' We charge $20, it takes 5 minutes, and we haven't had a single comeback."
                                        <footer className="font-bold text-slate-900 mt-2 not-italic">— Shop Owner, Independent Truck & Equipment Service</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sales & Service Integration */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-center text-slate-900">How to Sell Protection to Every Customer</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Use these proven scripts and techniques to achieve 85%+ customer acceptance rates.
                        </p>

                        <div className="max-w-4xl mx-auto">
                            {/* The 3-Sentence Sell */}
                            <div className="bg-slate-50 rounded-xl p-8 mb-8 border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                                    <Target className="h-6 w-6 text-primary" /> The 3-Sentence Sell (Works Every Time)
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">During Diagnosis</span>
                                        <p className="text-slate-700 mt-1">"I found your hydraulic hose failed where it was rubbing against the frame—that's the most common cause of these failures."</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">During Quote</span>
                                        <p className="text-slate-700 mt-1">"When I replace it, I'll install a protective guard at that wear point. It's $20, takes 5 minutes, and prevents the same failure from happening again."</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Customer Reaction</span>
                                        <p className="text-slate-700 mt-1">"That makes sense—go ahead." <strong className="text-green-600">(85%+ customer acceptance rate)</strong></p>
                                    </div>
                                </div>
                            </div>

                            {/* Objection Handling */}
                            <div className="bg-slate-50 rounded-xl p-8 mb-8 border border-slate-100">
                                <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                                    <MessageSquare className="h-6 w-6 text-primary" /> Objection Handling Scripts
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is that really necessary?", a: "It's not required, but here's the reality: the original hose failed because of rubbing. If I just replace it without protection, it'll fail again in the same spot. This $20 protection prevents a $400 repair next year. Most customers choose to protect it." },
                                        { q: "Why didn't the factory put that on?", a: "Great question. Factories build to cost, not to last. They know service shops will handle protection—it's why we see the same failures repeatedly. Professional shops like ours add the protection the factory should have included." },
                                        { q: "Can I just do it without the protection?", a: "Absolutely—it's your choice. But I need to let you know: if this hose fails again in the same spot, it'll be another $400-600 repair. The $20 protection prevents that. What would you like to do?" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-4 rounded-lg border border-slate-200">
                                            <p className="text-slate-900 font-medium mb-2">Customer: "{item.q}"</p>
                                            <p className="text-slate-600 text-sm">You: "{item.a}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Service Writer Best Practices */}
                            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                                <h3 className="font-bold text-green-900 text-xl mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="h-6 w-6 text-green-600" /> Service Writer Best Practices
                                </h3>
                                <p className="text-green-800 mb-4">Always include on quote:</p>
                                <div className="bg-white p-4 rounded-lg font-mono text-sm border border-green-200 mb-4">
                                    <div>Hydraulic Hose Replacement.............$285.00</div>
                                    <div>+ EPHA Hose Protection Installation.....$20.00</div>
                                    <div className="text-slate-500">  (Prevents repeat failure at wear point)</div>
                                    <div className="border-t border-slate-200 mt-2 pt-2">                              Total: $305.00</div>
                                </div>
                                <p className="text-green-800 text-sm"><strong>Result:</strong> 80-90% customer acceptance when quoted this way. Protection is line-item (shows value), explanation is built in, and opt-out requires customer to ask (most don't).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipment Packages */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Service Shop Starter Kits</h2>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>General Automotive Kit</CardTitle>
                                    <CardDescription>50 pieces for everyday repairs</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10× HP4 (battery cables, small lines)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 20× HP5 (brake lines, fuel lines)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 20× HP6 (standard hydraulic)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$225</div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Retail value: $750-1,000</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Heavy Equipment Kit</CardTitle>
                                    <CardDescription>30 pieces for commercial service</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10× HP8 (medium hydraulic lines)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10× HP10 (large hydraulic assemblies)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10× HP12 (bundle protection)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$270</div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Retail value: $600-900</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Fleet Service Kit</CardTitle>
                                    <CardDescription>40 pieces for fleet customers</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 15× HP6 (brake systems)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 15× HP8 (air brake lines)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 10× HP10 (bundle wraps)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$300</div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Retail value: $800-1,200</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="text-center mt-8">
                            <Button variant="outline" className="mr-4">Order Shop Kits</Button>
                            <Button variant="outline">Request Custom Mix</Button>
                        </div>
                    </div>
                </section>

                {/* Marketing & Resources */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-center text-slate-900">Turn Protection Into a Competitive Advantage</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Use these marketing tools to differentiate your shop and attract quality-conscious customers.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-3">🌐 Website Content</h3>
                                <p className="text-sm text-slate-600 italic">"Unlike basic hose replacement, our Lifetime Protection Installation includes industrial-grade hose guards at all wear points—preventing the comebacks other shops just accept."</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-3">📱 Social Media Post</h3>
                                <p className="text-sm text-slate-600 italic">"Here's why our hydraulic hose repairs don't come back: we don't just replace the hose—we protect it from the conditions that caused the failure." [Photo of installed protection]</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-3">⭐ Review Response Template</h3>
                                <p className="text-sm text-slate-600 italic">"Thank you! That's the benefit of our protection installation—we address what caused the failure, not just replace the part. We appreciate your business!"</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h3 className="font-bold text-slate-900 mb-3">📧 30-Day Follow-Up Email</h3>
                                <p className="text-sm text-slate-600 italic">"It's been a month since we installed EPHA protection on your hydraulic hose. How's everything holding up? That protection should keep your hose working for years..."</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resources & CTA */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                            Ready to Eliminate Comebacks and Add Profitable Service?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join the service professionals who've turned hose replacement from a low-margin headache into a profitable, reputation-building service that customers appreciate.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                                Get Shop Pricing
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Download Service Guide
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Talk to Shop Specialist
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto text-left mb-12">
                            {[
                                "Service Shop Guide",
                                "Wholesale Pricing",
                                "Technician Training Videos",
                                "Marketing Templates",
                                "Shop Account Manager",
                                "Success Stories"
                            ].map((res, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                    <span className="text-sm font-medium text-white">{res}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                            <div>Trusted by: Independent repair shops | Truck service centers | Dealerships | Hydraulic specialists | Mobile repair services</div>
                            <div className="flex gap-6">
                                <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                                <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> shops@epha.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
