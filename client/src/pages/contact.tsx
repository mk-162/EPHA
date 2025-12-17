import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  Truck,
  HardHat,
  Factory,
  Wrench,
  CheckCircle2,
  HelpCircle,
  FileText,
  User,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800" />
          
          <div className="container relative mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight">
              Let's Talk About Protecting Your Equipment
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Whether you need technical guidance, bulk pricing, or distributor information—our team of industry professionals is ready to help you find the right protection solution.
            </p>
          </div>
        </section>

        {/* Contact Grid & Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Column */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-heading mb-4 text-slate-900">Expert Support When You Need It</h2>
                  <p className="text-slate-600 mb-6">
                    Our team isn't just sales—we're maintenance professionals who understand your challenges because we've faced them ourselves.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Application Guidance",
                      "Bulk Pricing & Volume Discounts",
                      "Technical Questions",
                      "Installation Support",
                      "Custom Solutions"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Call Us</div>
                        <div className="text-sm text-slate-500">Mon-Fri, 8AM - 5PM EST</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-2">463-255-9942</div>
                    <p className="text-sm text-slate-600 mb-4">Speak directly with our technical team. No automated menus.</p>
                    <Button variant="outline" className="w-full">Click to Call</Button>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Email Us</div>
                        <div className="text-sm text-slate-500">Response within 4 business hours</div>
                      </div>
                    </div>
                    <div className="space-y-1 mb-4">
                      <div className="text-sm"><span className="font-medium">General:</span> info@ephahoseprotectors.com</div>
                      <div className="text-sm"><span className="font-medium">Sales:</span> sales@ephahoseprotectors.com</div>
                    </div>
                    <Button variant="outline" className="w-full">Send Email</Button>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Visit Us</div>
                        <div className="text-sm text-slate-500">Pickup Available</div>
                      </div>
                    </div>
                    <address className="not-italic text-sm text-slate-600 mb-4">
                      EPHA Hose Protectors<br />
                      [Street Address]<br />
                      [City, State ZIP]<br />
                      United States
                    </address>
                    <Button variant="outline" className="w-full">Get Directions</Button>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold font-heading mb-2 text-slate-900">Send Us a Message</h2>
                    <p className="text-slate-600">We'll respond within 4 business hours during normal business days.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name*</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" placeholder="Acme Construction" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="topic">What Can We Help You With?*</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="product">Product Information & Sizing</SelectItem>
                            <SelectItem value="bulk">Bulk/Fleet Pricing Quote</SelectItem>
                            <SelectItem value="tech">Technical Questions</SelectItem>
                            <SelectItem value="distributor">Find a Distributor</SelectItem>
                            <SelectItem value="partner">Become a Distributor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry/Application*</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fleet">Fleet & Transportation</SelectItem>
                            <SelectItem value="construction">Construction & Heavy Equipment</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing & Industrial</SelectItem>
                            <SelectItem value="automotive">Automotive & Repair</SelectItem>
                            <SelectItem value="municipal">Municipal & Government</SelectItem>
                            <SelectItem value="agriculture">Agriculture</SelectItem>
                            <SelectItem value="mining">Mining</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Needs*</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your equipment, the type of wear you're experiencing, and any specific requirements..." 
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="units">How many units/vehicles are you protecting? (Optional)</Label>
                      <Input id="units" placeholder="e.g. 50 trucks, 10 excavators" />
                      <p className="text-xs text-slate-500">Helps us provide accurate pricing and volume discounts.</p>
                    </div>

                    <div className="space-y-3">
                      <Label>Preferred Contact Method</Label>
                      <RadioGroup defaultValue="email" className="flex gap-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="email" id="c-email" />
                          <Label htmlFor="c-email">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="phone" id="c-phone" />
                          <Label htmlFor="c-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="either" id="c-either" />
                          <Label htmlFor="c-either">Either</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <Button size="lg" className="w-full md:w-auto font-bold px-8">Get In Touch</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specialists */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Speak With Someone Who Understands Your Business</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Truck, 
                  title: "Fleet & Transportation", 
                  desc: "Former fleet maintenance manager with 15+ years experience",
                  email: "fleet@epha.com"
                },
                { 
                  icon: HardHat, 
                  title: "Construction Equipment", 
                  desc: "Heavy equipment technician background, certified hydraulic specialist",
                  email: "construction@epha.com"
                },
                { 
                  icon: Factory, 
                  title: "Manufacturing & Industrial", 
                  desc: "Plant maintenance and MRO procurement experience",
                  email: "industrial@epha.com"
                },
                { 
                  icon: Wrench, 
                  title: "Automotive & Repair", 
                  desc: "ASE certified, dealership service experience",
                  email: "automotive@epha.com"
                }
              ].map((spec, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{spec.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 h-12">{spec.desc}</p>
                  <div className="text-sm font-medium text-primary flex items-center gap-2">
                    <Mail className="h-4 w-4" /> {spec.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Find What You Need Faster</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-accent mb-4"><Truck className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-bold mb-2">Need a Quote?</h3>
                <p className="text-slate-600 mb-6 text-sm">Tell us your fleet size and equipment types—we'll send a custom quote within 24 hours.</p>
                <Button variant="outline" className="w-full justify-between">Request Fleet Quote <ChevronRight className="h-4 w-4" /></Button>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-accent mb-4"><MapPin className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-bold mb-2">Find a Distributor</h3>
                <p className="text-slate-600 mb-6 text-sm">Search our network of authorized distributors, industrial suppliers, and equipment dealers.</p>
                <Button variant="outline" className="w-full justify-between">Find Distributor Near You <ChevronRight className="h-4 w-4" /></Button>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-accent mb-4"><FileText className="h-8 w-8 text-primary" /></div>
                <h3 className="text-xl font-bold mb-2">Technical Resources</h3>
                <p className="text-slate-600 mb-6 text-sm">Download datasheets, material certifications, chemical resistance charts, and installation guides.</p>
                <Button variant="outline" className="w-full justify-between">Technical Documents <ChevronRight className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold font-heading mb-12 text-center text-slate-900">Before You Contact Us - Common Questions</h2>
            
            <div className="grid gap-6">
              {[
                { q: "Which size do I need?", a: "Measure your hose outer diameter (OD). Our products fit ranges from 0.25\" to 2.50\" OD." },
                { q: "How much for bulk orders?", a: "Volume discounts start at 25+ units. Contact us with your quantity for custom pricing. Typical fleet orders save 15-30%." },
                { q: "Can I pick up locally?", a: "Yes, will-call pickup available at our facility. Call ahead to ensure your order is ready." },
                { q: "How fast can I get them?", a: "In-stock items ship within 1-2 business days. Expedited shipping available." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="link" className="text-primary font-bold">View All FAQs</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
