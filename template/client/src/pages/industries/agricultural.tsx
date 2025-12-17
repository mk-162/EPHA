import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
    Tractor,
    AlertTriangle,
    DollarSign,
    Clock,
    CheckCircle2,
    Thermometer,
    Wheat,
    Droplets,
    Package,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Timer,
    FlaskConical,
    Coins,
    Sun,
    CloudRain
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

export default function AgriculturalIndustry() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-slate-900 text-white">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />

                    <div className="container relative mx-auto px-4">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-semibold mb-6 uppercase tracking-wider">
                                <Tractor className="h-4 w-4" /> Agricultural Equipment
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
                                Harvest Protection. <br />
                                <span className="text-accent">When Timing Is Everything.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                                When planting and harvest windows measure in days—not weeks—equipment downtime isn't just costly, it's catastrophic. EPHA delivers field-proven protection that keeps combines, tractors, and implements running when Mother Nature says it's time to work.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="bg-accent text-slate-900 hover:bg-accent/90 font-bold text-lg h-14 px-8">
                                    Get Farm Quote
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                    Download Equipment Guide
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
                                <h2 className="text-3xl font-bold font-heading mb-6 text-slate-900">The Brutal Reality of Agricultural Equipment Downtime</h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Farmers and agricultural contractors face a truth outsiders don't understand: the financial stakes of equipment failure during critical windows.
                                </p>

                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="h-5 w-5" /> Direct Downtime Costs
                                    </h3>
                                    <ul className="space-y-2 text-red-800">
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Combine downtime during harvest</span>
                                            <span className="font-bold">$500 - $2,500/hr</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Tractor downtime during planting</span>
                                            <span className="font-bold">$200 - $1,000/hr</span>
                                        </li>
                                        <li className="flex justify-between border-b border-red-100 pb-1">
                                            <span>Emergency service calls (50+ miles)</span>
                                            <span className="font-bold">$1,500 - $5,000+</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Parts & mobile service labor</span>
                                            <span className="font-bold">$800 - $3,000</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <CloudRain className="h-5 w-5 text-orange-500" /> Cascade Failure Costs
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Missed weather windows", "Rental equipment premiums", "Custom operator hire", "Grain moisture penalties", "Crop quality degradation", "Total crop loss potential"].map((item, i) => (
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
                                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Total Impact Per Critical Failure</div>
                                    <div className="text-5xl font-bold text-slate-900">$10,000 - $100,000+</div>
                                    <div className="text-red-500 font-medium mt-2">During critical operating windows</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">7-14</div>
                                            <h4 className="font-bold text-slate-900">Days Harvest Window</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Optimal conditions for most crops—miss it, pay the price.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-slate-100 rounded-lg text-slate-600 font-bold">18-20</div>
                                            <h4 className="font-bold text-slate-900">Hours Daily Operation</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Equipment runs maximum duty cycles during peak season.</p>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="p-2 bg-red-100 rounded-lg text-red-600 font-bold">35-40%</div>
                                            <h4 className="font-bold text-slate-900">Preventable Downtime</h4>
                                        </div>
                                        <p className="text-sm text-slate-500 pl-14">Of critical-season failures stem from hydraulic/cooling issues.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pain Points */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">What Farmers & Agricultural Contractors Face</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Timer, title: "Catastrophic Timing Risk", desc: "Hydraulic hose doesn't care you have 200 acres left with rain in 48 hours. Failure costs an entire season's profit." },
                                { icon: Wheat, title: "Extreme Debris Environments", desc: "Corn stalks, wheat stubble, and crop material act like sandpaper—10x wear rates vs other industries." },
                                { icon: FlaskConical, title: "Chemical Exposure", desc: "Herbicides, pesticides, and fertilizers attack rubber compounds 24/7 at spray booms and chemical connections." },
                                { icon: Thermometer, title: "Temperature Extremes", desc: "100°F+ summer operation, -20°F winter storage. Constant expansion/contraction stress cracking." },
                                { icon: Sun, title: "High-Cycle Flex Points", desc: "Combine headers cycle hundreds of times daily. Planter fold systems create predictable wear points." },
                                { icon: MapPin, title: "Remote Locations", desc: "You're 30 miles from town when hydraulics fail. Mobile service costs premium and takes hours." },
                                { icon: Coins, title: "Massive Capital Investment", desc: "$400,000+ combines, $200,000+ tractors on thin margins. Protection delivers outsized ROI." },
                                { icon: CloudRain, title: "Weather Dependency", desc: "Can't control weather, but can control equipment readiness. Prevention beats reactive repairs." }
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
                            <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Protection Engineered for Agricultural Extremes</h2>
                            <p className="text-lg text-slate-600">
                                EPHA Hose Protectors deliver exactly what agricultural operations demand: field-proven durability, extreme condition performance, protection during critical operating windows.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                { title: "Pre-Season Protection Installation", desc: "Install during winter maintenance—before critical windows. 5-minute installation means equipment ready when weather says 'go.'" },
                                { title: "Extreme Environment Performance", desc: "-40°F to 430°F operating range. Chemical resistance for herbicide/pesticide exposure. Abrasion resistance for crop debris sandblasting." },
                                { title: "High-Cycle Durability", desc: "Material engineered for millions of flex cycles—combine headers, planter wings, loader arms that cycle constantly during marathon days." },
                                { title: "Field Debris Protection", desc: "Guards hoses from corn stalks, wheat stubble, and crop material that creates accelerated wear on agricultural equipment." },
                                { title: "No Mid-Season Disassembly", desc: "Spot-apply protection without removing implements, disassembling headers, or pulling hoses—install during breaks, not critical windows." },
                                { title: "Multi-Season Durability", desc: "Protects for years, not months—matches agricultural equipment service life and seasonal use patterns." }
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
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center">Where Farmers Deploy EPHA Protection</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Combine Harvester Systems",
                                    desc: "Protect header lift cylinders, feeder house hydraulics, and unloading auger assemblies from crop debris and flex cycles.",
                                    rec: "HP10, HP12 (Hi-Vis Orange)",
                                    impact: "Prevents mid-harvest breakdowns when combines must run 18+ hours daily"
                                },
                                {
                                    title: "Tractor Hydraulic Systems",
                                    desc: "Shield front loader cylinders, three-point hitch assemblies, and remote hydraulic circuits from rock damage and chemical exposure.",
                                    rec: "HP8, HP10 (Black or Hi-Vis Yellow)",
                                    impact: "Maintains implement operation during planting and tillage windows"
                                },
                                {
                                    title: "Planter & Drill Systems",
                                    desc: "Guard wing fold hydraulics, down-pressure cylinders, and marker assemblies from fertilizer/chemical exposure.",
                                    rec: "HP6, HP8, HP10 (Hi-Vis Yellow)",
                                    impact: "Prevents breakdowns during narrow spring planting windows"
                                },
                                {
                                    title: "Sprayer & Application Equipment",
                                    desc: "Protect boom fold hydraulics, height control cylinders, and chemical pump assemblies from direct herbicide exposure.",
                                    rec: "HP8, HP10 (Hi-Vis Orange)",
                                    impact: "Maintains spray window timing—delays cost money or reduce efficacy"
                                },
                                {
                                    title: "Hay & Forage Equipment",
                                    desc: "Shield baler plunger hydraulics, mower conditioner systems, and tedder/rake assemblies from crop material abrasion.",
                                    rec: "HP6, HP8, HP10 (Black)",
                                    impact: "Prevents failures during short weather windows for quality hay"
                                },
                                {
                                    title: "Irrigation System Equipment",
                                    desc: "Guard pivot drive systems, pump assemblies, and reel irrigation hydraulics from water and chemical exposure.",
                                    rec: "HP8, HP10 (Hi-Vis Orange)",
                                    impact: "Maintains irrigation reliability—critical for crop yield protection"
                                }
                            ].map((app, i) => (
                                <Card key={i} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-accent">{app.title}</CardTitle>
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
                                <h2 className="text-3xl font-bold font-heading mb-4 text-slate-900">Calculate Equipment Protection ROI</h2>
                                <p className="text-lg text-slate-600">Example: Mid-Size Row Crop Operation (1,500 Acres, 3 Combines, 4 Tractors)</p>
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
                                            <TableCell className="font-medium">Critical-Window Failures</TableCell>
                                            <TableCell className="text-slate-500">2 × $50,000 = $100,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">0 × $50,000 = $0</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$100,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Off-Season Failures</TableCell>
                                            <TableCell className="text-slate-500">4 × $3,500 = $14,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">1 × $3,500 = $3,500</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$10,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Emergency Service</TableCell>
                                            <TableCell className="text-slate-500">6 × $2,000 = $12,000</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">1 × $2,000 = $2,000</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">Rental Equipment</TableCell>
                                            <TableCell className="text-slate-500">3 × $1,200 = $3,600</TableCell>
                                            <TableCell className="text-green-700 bg-green-50">0 × $1,200 = $0</TableCell>
                                            <TableCell className="text-right font-bold text-slate-900">$3,600</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-50 font-bold">
                                            <TableCell>Total Annual Cost</TableCell>
                                            <TableCell className="text-red-600">$129,600</TableCell>
                                            <TableCell className="text-green-700 bg-green-100">$5,500</TableCell>
                                            <TableCell className="text-right text-green-700">$124,100</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-slate-100/50">
                                            <TableCell colSpan={2} className="text-right font-medium">Protection Investment (7 machines):</TableCell>
                                            <TableCell className="font-bold text-slate-900 bg-slate-200/50">$1,400</TableCell>
                                            <TableCell className="text-right text-slate-400">—</TableCell>
                                        </TableRow>
                                        <TableRow className="bg-primary/5 border-t-2 border-primary">
                                            <TableCell colSpan={3} className="text-right font-bold text-xl text-primary">Net Savings:</TableCell>
                                            <TableCell className="text-right font-bold text-xl text-primary">$122,700</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
                                <h3 className="font-bold text-yellow-900 mb-4">Harvest Window Value Example:</h3>
                                <p className="text-yellow-800 mb-4">One prevented combine failure during harvest = <strong>$50,000+ saved</strong></p>
                                <div className="grid md:grid-cols-4 gap-4 text-sm text-yellow-800">
                                    <div>8 hours downtime × $500/hr = <strong>$4,000</strong></div>
                                    <div>Emergency service = <strong>$2,500</strong></div>
                                    <div>Rental combine 2 days = <strong>$3,000</strong></div>
                                    <div>Weather delay crop loss = <strong>$40,000+</strong></div>
                                </div>
                                <p className="mt-4 text-yellow-900 font-bold">Protection cost to prevent this: $200</p>
                            </div>

                            <div className="text-center">
                                <Button className="font-bold">Calculate Your Operation's ROI <ChevronRight className="h-4 w-4 ml-1" /></Button>
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
                                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">1,800-Acre Corn/Soybean Operation: <br /><span className="text-accent">Zero Critical Failures</span></h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Operation Profile</h4>
                                            <p className="text-slate-400">Family farm, 1,800 acres corn/soybeans, 2 combines (2015 & 2019), 3 tractors, 36' planter, 90' sprayer.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">The 2021 Disaster</h4>
                                            <p className="text-slate-400">Header lift cylinder hose failed day 3 of 12-day harvest window. 36 hours downtime waiting for parts. Rain arrived before completion. Total cost: <strong className="text-red-400">$68,000</strong>.</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-300 mb-2">Solution</h4>
                                            <p className="text-slate-400">Complete EPHA protection: combines, tractors, planter, sprayer. 72 protection locations across fleet. Investment: <strong className="text-accent">$1,680</strong>.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Results After 3 Growing Seasons (2022-2024)</h3>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                                            <div className="text-slate-600 font-medium">Critical-window failures (harvest, planting, spraying)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">0</div>
                                            <div className="text-slate-600 font-medium">Combine hydraulic failures during 36 harvest days annually</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$200K+</div>
                                            <div className="text-slate-600 font-medium">Prevented potential losses (based on 2021 incident risk)</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 text-center font-bold text-2xl text-green-600">$1,680</div>
                                            <div className="text-slate-600 font-medium">Secured $600,000+ fleet during most vulnerable operations</div>
                                        </div>
                                    </div>

                                    <blockquote className="italic text-slate-600 border-l-4 border-primary pl-4">
                                        "After that $68,000 harvest failure in 2021, I spent $1,680 to make sure it never happens again. Three seasons later—zero failures, zero stress during critical windows. Best $1,680 I've ever spent on equipment."
                                        <footer className="font-bold text-slate-900 mt-2 not-italic">— Farm Owner/Operator, Central Illinois</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Equipment Packages */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Recommended Agricultural Equipment Packages</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Combine Harvester Kit</CardTitle>
                                    <CardDescription>Complete harvest protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP10 (header lift, feeder house)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP12 (unloading auger, multi-hose)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP8 (reel hydraulics, auxiliary)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$118 <span className="text-sm font-normal text-slate-500">/ combine</span></div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Protects $400,000+ asset during harvest</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Tractor Protection Kit</CardTitle>
                                    <CardDescription>Loader & implement coverage</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP10 (loader boom cylinders)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (bucket curl, 3-point hitch)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP6 (remote hydraulics)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$88 <span className="text-sm font-normal text-slate-500">/ tractor</span></div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents mid-season breakdowns</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Planter/Drill Kit</CardTitle>
                                    <CardDescription>Planting window protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP8 (wing fold hydraulics)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP6 (down-pressure, markers)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP10 (central frame)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$84 <span className="text-sm font-normal text-slate-500">/ planter</span></div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Protects critical spring planting windows</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Sprayer Protection Kit</CardTitle>
                                    <CardDescription>Chemical application coverage</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 6× HP10 (boom fold pivots)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (height control)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP6 (chemical pump)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$102 <span className="text-sm font-normal text-slate-500">/ sprayer</span></div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Prevents application window delays</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-slate-100 hover:border-primary/50 transition-colors">
                                <CardHeader className="bg-slate-50 border-b border-slate-100 pb-4">
                                    <CardTitle>Hay & Forage Kit</CardTitle>
                                    <CardDescription>Weather-window protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP8 (baler plunger, mower lift)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 4× HP6 (rake/tedder fold)</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" /> 2× HP10 (high-cycle assemblies)</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$76 <span className="text-sm font-normal text-slate-500">/ implement</span></div>
                                        <Button variant="outline" size="sm">Order Kit</Button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Protects short hay windows</p>
                                </CardContent>
                            </Card>

                            <Card className="border-2 border-accent/50 bg-accent/5 hover:border-accent transition-colors">
                                <CardHeader className="bg-accent/10 border-b border-accent/20 pb-4">
                                    <CardTitle className="text-accent">Complete Farm Bundle</CardTitle>
                                    <CardDescription>Entire operation protection</CardDescription>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ul className="space-y-2 mb-6 text-sm">
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> 2× Combine kits</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> 3× Tractor kits</li>
                                        <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-accent mt-0.5" /> 1× Planter kit + 1× Sprayer kit</li>
                                    </ul>
                                    <div className="flex items-center justify-between">
                                        <div className="text-2xl font-bold text-slate-900">$686 <span className="text-sm font-normal text-slate-500 line-through">$756</span></div>
                                        <Button size="sm" className="bg-accent hover:bg-accent/90">Save 10%</Button>
                                    </div>
                                    <p className="text-xs text-accent mt-2 font-medium">Protects entire operation for one season</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Implementation Guide */}
                <section className="py-20 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-center text-slate-900">Pre-Season Protection Program</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Enter every critical operating window with all known wear points protected—eliminate preventable failures when timing is everything.
                        </p>

                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {[
                                    {
                                        period: "Winter Maintenance",
                                        timing: "December - February",
                                        color: "bg-blue-500",
                                        tasks: [
                                            { week: "Week 1-2", title: "Equipment Inspection & Mapping", items: ["Inspect all equipment for existing hose wear points", "Document locations showing abrasion, discoloration, or contact marks", "Photograph wear areas for protection planning", "Measure hose OD at protection locations for sizing"] },
                                            { week: "Week 3-4", title: "Protection Installation", items: ["Install protection at all identified wear points", "Focus on high-cycle locations: headers, loaders, fold systems", "Document installations with photos for future reference", "Update equipment service records with protection dates"] }
                                        ]
                                    },
                                    {
                                        period: "Early Spring",
                                        timing: "March - April",
                                        color: "bg-green-500",
                                        tasks: [
                                            { week: "Pre-Season", title: "Verification Check", items: ["Verify all protection remains secure", "Check for any new wear points on equipment", "Add protection to any missed locations", "Final equipment readiness inspection"] }
                                        ]
                                    },
                                    {
                                        period: "Post-Harvest",
                                        timing: "October - November",
                                        color: "bg-orange-500",
                                        tasks: [
                                            { week: "Season Review", title: "Inspection & Planning", items: ["Inspect protected locations for any wear-through", "Identify new wear areas that developed during season", "Add protection to newly identified wear points", "Plan winter protection additions for next season"] }
                                        ]
                                    }
                                ].map((season, i) => (
                                    <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                                        <div className={`${season.color} text-white p-4 flex justify-between items-center`}>
                                            <h3 className="font-bold text-lg">{season.period}</h3>
                                            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{season.timing}</span>
                                        </div>
                                        <div className="p-6">
                                            {season.tasks.map((task, j) => (
                                                <div key={j} className={j > 0 ? "mt-6 pt-6 border-t border-slate-100" : ""}>
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="text-sm font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">{task.week}</span>
                                                        <h4 className="font-bold text-slate-900">{task.title}</h4>
                                                    </div>
                                                    <ul className="space-y-2">
                                                        {task.items.map((item, k) => (
                                                            <li key={k} className="flex items-start gap-2 text-sm text-slate-600">
                                                                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dealer & Distributor Support */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold font-heading mb-4 text-center text-slate-900">For Agricultural Equipment Dealers</h2>
                        <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            Partner with EPHA to deliver proactive protection solutions that differentiate your dealership and prevent customer breakdowns.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                            {[
                                { icon: Package, title: "Value-Add Service Opportunity", desc: "Offer EPHA protection installation during equipment delivery and annual service—differentiate your dealership with proactive customer care that prevents breakdowns." },
                                { icon: DollarSign, title: "Counter Sales Program", desc: "Display-ready packaging drives accessory sales—farmers purchasing parts can solve wear problems immediately with protection available at point-of-sale." },
                                { icon: Tractor, title: "Service Department Revenue", desc: "Add protection installation to service packages—5-minute installation adds profitable labor while delivering genuine customer value." },
                                { icon: CheckCircle2, title: "Technician Training Available", desc: "We provide training materials, installation guides, and technical support for your service team—ensure quality installations that protect your customers." },
                                { icon: Coins, title: "Dealer Margins & Programs", desc: "Competitive wholesale pricing, volume discounts, and co-op marketing support available for agricultural dealers committed to customer equipment protection." },
                                { icon: ChevronRight, title: "Get Started Today", desc: "Contact our dealer development team to learn about partnership opportunities, training programs, and starter inventory packages." }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <item.icon className="h-8 w-8 text-primary mb-4" />
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Button size="lg" variant="outline">Request Dealer Information</Button>
                        </div>
                    </div>
                </section>

                {/* Resources & CTA */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                            Ready to Protect Your Equipment Investment?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Join the farmers, ranchers, and agricultural contractors who refuse to gamble with equipment failures during critical operating windows.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                            <Button size="lg" className="bg-white text-primary hover:bg-slate-100 font-bold text-lg h-14 px-8">
                                Get Farm Quote
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Download Equipment Guide
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-8">
                                Talk to Ag Specialist
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto text-left mb-12">
                            {[
                                "Download Ag Equipment Guide",
                                "Farm ROI Calculator",
                                "DIY Installation Videos",
                                "Agricultural Specialist",
                                "Multi-Machine Discounts",
                                "Dealer Locator"
                            ].map((res, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer">
                                    <span className="text-sm font-medium text-white">{res}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
                            <div>Trusted by: Row crop farmers | Cattle ranchers | Custom harvest operators | Dairy operations | Specialty crop growers</div>
                            <div className="flex gap-6">
                                <span className="flex items-center gap-2 text-white"><Phone className="h-4 w-4" /> 463-255-9942</span>
                                <span className="flex items-center gap-2 text-white"><Mail className="h-4 w-4" /> farm@epha.com</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
