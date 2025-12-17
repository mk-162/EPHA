import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import {
    ChevronRight,
    FileText,
    BookOpen,
    Ruler,
    Settings,
    Shield,
    Award,
    Download,
    CheckCircle,
    XCircle,
    ArrowRight
} from "lucide-react";

// Resource categories
const resourceCategories = [
    {
        id: "catalog",
        title: "Product Catalog",
        description: "Complete product lineup with specifications, images, and ordering information.",
        icon: FileText,
        files: [
            { name: "EPHA Complete Product Catalog 2024", format: "PDF", size: "4.2 MB" },
            { name: "Spiral Guards Product Sheet", format: "PDF", size: "1.1 MB" },
            { name: "Sleeve Protectors Product Sheet", format: "PDF", size: "980 KB" },
        ]
    },
    {
        id: "installation",
        title: "Installation Guides",
        description: "Step-by-step installation instructions for all EPHA products.",
        icon: BookOpen,
        files: [
            { name: "Spiral Guard Installation Guide", format: "PDF", size: "2.3 MB" },
            { name: "Sleeve Protector Installation Guide", format: "PDF", size: "1.8 MB" },
            { name: "Quick-Fit Connector Guide", format: "PDF", size: "1.2 MB" },
            { name: "Video Installation Tutorials", format: "Link", size: "" },
        ]
    },
    {
        id: "sizing",
        title: "Size Selection Charts",
        description: "Find the right size for your hose diameter and application.",
        icon: Ruler,
        files: [
            { name: "Spiral Guard Size Chart", format: "PDF", size: "450 KB" },
            { name: "Sleeve Protector Size Chart", format: "PDF", size: "380 KB" },
            { name: "Hose Diameter Reference Guide", format: "PDF", size: "520 KB" },
        ]
    },
    {
        id: "technical",
        title: "Technical Specifications",
        description: "Detailed technical data including materials, tolerances, and performance ratings.",
        icon: Settings,
        files: [
            { name: "HDPE Material Specifications", format: "PDF", size: "890 KB" },
            { name: "Temperature & Pressure Ratings", format: "PDF", size: "670 KB" },
            { name: "Chemical Resistance Chart", format: "PDF", size: "1.1 MB" },
            { name: "UV Resistance Test Results", format: "PDF", size: "780 KB" },
        ]
    },
    {
        id: "safety",
        title: "Safety Data Sheets",
        description: "Material safety information and compliance documentation.",
        icon: Shield,
        files: [
            { name: "HDPE Safety Data Sheet (SDS)", format: "PDF", size: "320 KB" },
            { name: "Nylon Safety Data Sheet (SDS)", format: "PDF", size: "310 KB" },
            { name: "Compliance Certificates", format: "PDF", size: "1.4 MB" },
        ]
    },
    {
        id: "warranty",
        title: "Warranty Information",
        description: "Product warranty terms, conditions, and claim procedures.",
        icon: Award,
        files: [
            { name: "Standard Warranty Terms", format: "PDF", size: "180 KB" },
            { name: "Extended Warranty Options", format: "PDF", size: "220 KB" },
            { name: "Warranty Claim Form", format: "PDF", size: "95 KB" },
        ]
    },
];

// Product comparisons
const comparisons = [
    {
        competitor: "Spiral Wraps",
        advantages: [
            "Faster installation (no wrapping required)",
            "Better coverage consistency",
            "Superior protection against slippage",
            "Cleaner appearance",
        ]
    },
    {
        competitor: "Spring Guards",
        advantages: [
            "Better chemical resistance",
            "Wider temperature range",
            "Lighter weight",
            "Lower cost per application",
        ]
    },
    {
        competitor: "Kevlar Sleeves",
        advantages: [
            "60-70% lower cost",
            "Easier installation (no sewing/velcro)",
            "Better chemical resistance",
            "Comparable durability for most applications",
        ]
    },
];

export default function KnowledgeBase() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="bg-primary py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl">
                            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <ChevronRight className="h-4 w-4" />
                                <span className="text-white">Knowledge Base</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase mb-4">
                                Knowledge Base
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Technical resources, product documentation, and everything you need to make informed decisions about hose protection.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Links */}
                <section className="py-8 bg-slate-50 border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-3">
                            {resourceCategories.map((category) => (
                                <a
                                    key={category.id}
                                    href={`#${category.id}`}
                                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors border border-gray-200 hover:border-primary"
                                >
                                    {category.title}
                                </a>
                            ))}
                            <a
                                href="#comparison"
                                className="px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
                            >
                                Product Comparison
                            </a>
                        </div>
                    </div>
                </section>

                {/* Resource Categories */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="space-y-16">
                            {resourceCategories.map((category, index) => {
                                const IconComponent = category.icon;
                                return (
                                    <div key={category.id} id={category.id} className="scroll-mt-24">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <IconComponent className="h-6 w-6 text-primary" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase mb-2">
                                                    {category.title}
                                                </h2>
                                                <p className="text-gray-600 max-w-2xl">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {category.files.map((file, fileIndex) => (
                                                <a
                                                    key={fileIndex}
                                                    href="#"
                                                    className="group flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-transparent hover:border-primary/20"
                                                >
                                                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:shadow">
                                                        <Download className="h-5 w-5 text-accent" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate group-hover:text-primary transition-colors">
                                                            {file.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500">
                                                            {file.format} {file.size && `• ${file.size}`}
                                                        </p>
                                                    </div>
                                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-accent transition-colors" />
                                                </a>
                                            ))}
                                        </div>

                                        {index < resourceCategories.length - 1 && (
                                            <hr className="mt-16 border-gray-200" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Product Differentiation Section */}
                <section id="comparison" className="py-20 bg-primary scroll-mt-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                                Why Choose EPHA
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white uppercase mb-4">
                                Product Differentiation
                            </h2>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                See how EPHA spiral guards compare to other hose protection solutions on the market.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {comparisons.map((comparison, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-heading font-bold text-primary uppercase text-xl">
                                            vs. {comparison.competitor}
                                        </h3>
                                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <CheckCircle className="h-6 w-6 text-green-600" />
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                                        EPHA Advantages:
                                    </p>

                                    <ul className="space-y-3">
                                        {comparison.advantages.map((advantage, advIndex) => (
                                            <li key={advIndex} className="flex items-start gap-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{advantage}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Summary Table */}
                        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="font-heading font-bold text-white uppercase text-2xl mb-6 text-center">
                                Quick Comparison Summary
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="text-left py-3 px-4 text-white/60 font-medium uppercase tracking-wider">Feature</th>
                                            <th className="text-center py-3 px-4 text-accent font-bold uppercase tracking-wider">EPHA Guards</th>
                                            <th className="text-center py-3 px-4 text-white/60 font-medium uppercase tracking-wider">Spiral Wraps</th>
                                            <th className="text-center py-3 px-4 text-white/60 font-medium uppercase tracking-wider">Spring Guards</th>
                                            <th className="text-center py-3 px-4 text-white/60 font-medium uppercase tracking-wider">Kevlar Sleeves</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white">
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 px-4">Installation Speed</td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 px-4">Chemical Resistance</td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 px-4">Cost Effectiveness</td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="py-3 px-4">Temperature Range</td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-4">Appearance</td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                            <td className="py-3 px-4 text-center"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-slate-50">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase mb-4">
                            Need Help Finding the Right Solution?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                            Our technical team is ready to help you select the best hose protection for your specific application.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-accent text-white font-bold uppercase rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                Contact Our Team
                            </Link>
                            <Link
                                href="/products"
                                className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase rounded-lg hover:bg-primary hover:text-white transition-colors"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
