import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";

// Sample blog posts data - in production this would come from a CMS or API
const blogPosts = [
    {
        id: 1,
        slug: "preventing-hydraulic-hose-failures",
        title: "5 Ways to Prevent Hydraulic Hose Failures Before They Happen",
        excerpt: "Hydraulic hose failures can cost your operation thousands in downtime and repairs. Learn the proactive steps that industry leaders use to keep their equipment running.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        category: "Maintenance",
        author: "John Mitchell",
        date: "December 15, 2024",
        readTime: "6 min read",
        featured: true,
    },
    {
        id: 2,
        slug: "winter-equipment-protection",
        title: "Winter Equipment Protection: Essential Guide for Fleet Managers",
        excerpt: "Cold weather brings unique challenges for hydraulic systems. Discover how to protect your fleet during the harshest months of the year.",
        image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop",
        category: "Seasonal",
        author: "Sarah Chen",
        date: "December 10, 2024",
        readTime: "8 min read",
        featured: false,
    },
    {
        id: 3,
        slug: "construction-site-hose-safety",
        title: "Construction Site Hose Safety: OSHA Compliance Made Simple",
        excerpt: "Navigate the complex world of safety regulations with our comprehensive guide to hose protection compliance on construction sites.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop",
        category: "Safety",
        author: "Mike Rodriguez",
        date: "December 5, 2024",
        readTime: "5 min read",
        featured: false,
    },
    {
        id: 4,
        slug: "roi-of-hose-protection",
        title: "The ROI of Hose Protection: A Data-Driven Analysis",
        excerpt: "We analyzed 500+ equipment operations to quantify the real cost savings of proper hose protection. The numbers may surprise you.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        category: "Business",
        author: "Emily Watson",
        date: "November 28, 2024",
        readTime: "10 min read",
        featured: false,
    },
    {
        id: 5,
        slug: "hydraulic-system-maintenance-checklist",
        title: "The Ultimate Hydraulic System Maintenance Checklist",
        excerpt: "Download our comprehensive checklist used by top fleet managers to keep their hydraulic systems in peak condition year-round.",
        image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2070&auto=format&fit=crop",
        category: "Maintenance",
        author: "John Mitchell",
        date: "November 20, 2024",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 6,
        slug: "mining-industry-case-study",
        title: "How One Mining Operation Saved $2.3M in Downtime Costs",
        excerpt: "An in-depth look at how Rio Grande Mining transformed their maintenance approach with EPHA hose protectors.",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2074&auto=format&fit=crop",
        category: "Case Study",
        author: "Sarah Chen",
        date: "November 15, 2024",
        readTime: "12 min read",
        featured: false,
    },
];

const categories = ["All", "Maintenance", "Safety", "Business", "Seasonal", "Case Study"];

export default function Blog() {
    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

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
                                <span className="text-white">Blog</span>
                            </nav>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white uppercase mb-4">
                                Industry Insights
                            </h1>
                            <p className="text-xl text-white/80 max-w-2xl">
                                Expert advice, case studies, and the latest trends in hydraulic hose protection and equipment maintenance.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Post */}
                {featuredPost && (
                    <section className="py-16 bg-slate-50">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-1 w-12 bg-accent" />
                                <span className="text-sm font-bold uppercase tracking-wider text-accent">Featured Article</span>
                            </div>

                            <Link href={`/blog/${featuredPost.slug}`}>
                                <div className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 md:h-auto overflow-hidden">
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                                                {featuredPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 md:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{featuredPost.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase mb-4 group-hover:text-accent transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent font-bold uppercase text-sm group-hover:gap-4 transition-all">
                                            <span>Read Article</span>
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                )}

                {/* Category Filter */}
                <section className="py-8 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${category === "All"
                                            ? "bg-primary text-white"
                                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`}>
                                    <article className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="mt-12 text-center">
                            <button className="px-8 py-3 border-2 border-primary text-primary font-bold uppercase text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                                Load More Articles
                            </button>
                        </div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <section className="py-20 bg-primary">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase mb-4">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            Get the latest industry insights, maintenance tips, and exclusive case studies delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button className="px-8 py-3 bg-accent text-white font-bold uppercase rounded-lg hover:bg-accent/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
