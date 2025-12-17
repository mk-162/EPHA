import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link, useParams } from "wouter";
import { Calendar, Clock, ChevronRight, ArrowLeft, Share2, Linkedin, Twitter, Facebook, User } from "lucide-react";

// Sample blog posts data - in production this would come from a CMS or API
const blogPosts: Record<string, {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
}> = {
    "preventing-hydraulic-hose-failures": {
        id: 1,
        slug: "preventing-hydraulic-hose-failures",
        title: "5 Ways to Prevent Hydraulic Hose Failures Before They Happen",
        excerpt: "Hydraulic hose failures can cost your operation thousands in downtime and repairs. Learn the proactive steps that industry leaders use to keep their equipment running.",
        content: `
      <p class="lead">Hydraulic hose failures are one of the most common—and costly—problems in heavy equipment operations. A single failure can result in hours of downtime, thousands in repair costs, and potential safety hazards for your crew.</p>

      <p>After working with fleet managers across construction, mining, and agricultural industries for over 35 years, we've identified the five most effective strategies for preventing hose failures before they happen.</p>

      <h2>1. Implement a Proactive Inspection Schedule</h2>
      <p>The most common cause of unexpected hose failure is simple: lack of regular inspection. Many operations wait until a hose fails before examining the rest of their hydraulic system. By then, it's often too late.</p>
      <p>We recommend implementing a weekly visual inspection protocol that includes:</p>
      <ul>
        <li>Checking for visible abrasion or wear marks</li>
        <li>Looking for kinks, twists, or improper routing</li>
        <li>Inspecting fittings for leaks or corrosion</li>
        <li>Documenting any changes from the previous inspection</li>
      </ul>

      <h2>2. Protect High-Risk Areas with Spiral Guards</h2>
      <p>Not all hose sections are created equal. Areas where hoses pass near sharp edges, hot surfaces, or moving parts are at significantly higher risk of failure. Installing spiral guards or sleeves on these high-risk sections can extend hose life by 300-500%.</p>
      <blockquote>
        "After installing EPHA spiral guards on our excavator fleet, we reduced hydraulic failures by 78% in the first year alone."
        <cite>— David Chen, Fleet Manager, Western Construction Co.</cite>
      </blockquote>

      <div class="product-card">
        <a href="/products" class="product-card-link">
          <div class="product-card-image">
            <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop" alt="EPHA Spiral Hose Guards" />
          </div>
          <div class="product-card-content">
            <span class="product-card-label">Featured Product</span>
            <h3 class="product-card-title">EPHA Spiral Hose Guards</h3>
            <p class="product-card-description">Industrial-grade protection that extends hose life by up to 500%. Available in multiple sizes and colors.</p>
            <span class="product-card-cta">View All Products →</span>
          </div>
        </a>
      </div>

      <h2>3. Train Operators on Proper Equipment Handling</h2>
      <p>Operator behavior has a direct impact on hose longevity. Sudden movements, overextension of hydraulic cylinders, and rough handling all contribute to premature wear.</p>
      <p>Invest in operator training that covers:</p>
      <ul>
        <li>Smooth, controlled hydraulic movements</li>
        <li>Proper warm-up procedures in cold weather</li>
        <li>Recognition of early warning signs</li>
        <li>Immediate reporting protocols for potential issues</li>
      </ul>

      <h2>4. Use the Right Hose for the Application</h2>
      <p>Using a hose that's underrated for your application is a recipe for failure. Consider not just the working pressure, but also:</p>
      <ul>
        <li>Temperature range (both ambient and fluid)</li>
        <li>Fluid compatibility</li>
        <li>Bend radius requirements</li>
        <li>Environmental exposure (UV, ozone, abrasives)</li>
      </ul>

      <h2>5. Track and Analyze Failure Data</h2>
      <p>Every failure is an opportunity to learn. By tracking when, where, and why hoses fail, you can identify patterns and address root causes. Modern fleet management software makes this easier than ever.</p>

      <h2>Conclusion</h2>
      <p>Preventing hydraulic hose failures isn't about luck—it's about implementing systematic, proactive measures. By following these five strategies, you can significantly reduce downtime, lower maintenance costs, and create a safer working environment for your team.</p>

      <p>Ready to take the next step? <a href="/contact">Contact our team</a> for a free assessment of your current hose protection strategy.</p>
    `,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        category: "Maintenance",
        author: "John Mitchell",
        authorRole: "Senior Technical Advisor",
        date: "December 15, 2024",
        readTime: "6 min read",
    },
};

// Related posts for sidebar
const relatedPosts = [
    {
        slug: "winter-equipment-protection",
        title: "Winter Equipment Protection: Essential Guide",
        date: "December 10, 2024",
    },
    {
        slug: "hydraulic-system-maintenance-checklist",
        title: "The Ultimate Hydraulic System Maintenance Checklist",
        date: "November 20, 2024",
    },
    {
        slug: "roi-of-hose-protection",
        title: "The ROI of Hose Protection: A Data-Driven Analysis",
        date: "November 28, 2024",
    },
];

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();

    // Get post or show default
    const post = slug && blogPosts[slug] ? blogPosts[slug] : blogPosts["preventing-hydraulic-hose-failures"];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navigation />
            <main>
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-end">
                    <div className="absolute inset-0">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>
                    <div className="container mx-auto px-4 pb-12 relative z-10">
                        <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span className="text-white">{post.category}</span>
                        </nav>
                        <span className="inline-block bg-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white uppercase mb-4 max-w-4xl">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <User className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{post.author}</p>
                                    <p className="text-white/60 text-xs">{post.authorRole}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <article className="lg:col-span-2">
                                <div
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                />

                                {/* Share */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <div className="flex flex-wrap items-center gap-4">
                                        <span className="font-bold text-gray-700 flex items-center gap-2">
                                            <Share2 className="h-4 w-4" />
                                            Share this article:
                                        </span>
                                        <div className="flex gap-2">
                                            <button className="h-10 w-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                                <Linkedin className="h-5 w-5" />
                                            </button>
                                            <button className="h-10 w-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                                <Twitter className="h-5 w-5" />
                                            </button>
                                            <button className="h-10 w-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                                <Facebook className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Back to Blog */}
                                <div className="mt-8">
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center gap-2 text-primary font-bold uppercase text-sm hover:text-accent transition-colors"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        Back to Blog
                                    </Link>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="sticky top-24 space-y-8">
                                    {/* Related Posts */}
                                    <div className="bg-slate-50 rounded-xl p-6">
                                        <h3 className="font-heading font-bold text-primary uppercase mb-4">Related Articles</h3>
                                        <div className="space-y-4">
                                            {relatedPosts.map((relatedPost) => (
                                                <Link
                                                    key={relatedPost.slug}
                                                    href={`/blog/${relatedPost.slug}`}
                                                    className="block group"
                                                >
                                                    <p className="text-sm font-medium text-gray-800 group-hover:text-accent transition-colors line-clamp-2">
                                                        {relatedPost.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">{relatedPost.date}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="bg-primary rounded-xl p-6 text-white">
                                        <h3 className="font-heading font-bold uppercase mb-3">Free Consultation</h3>
                                        <p className="text-white/80 text-sm mb-4">
                                            Get expert advice on protecting your hydraulic systems. Our team is ready to help.
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-block w-full text-center bg-accent text-white font-bold uppercase text-sm py-3 rounded-lg hover:bg-accent/90 transition-colors"
                                        >
                                            Contact Us
                                        </Link>
                                    </div>

                                    {/* Featured Product */}
                                    <Link href="/products" className="block group">
                                        <div className="rounded-xl overflow-hidden border border-gray-200 hover:border-accent/50 hover:shadow-lg transition-all">
                                            <div className="relative h-40 overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                                                    alt="EPHA Spiral Guards"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute top-2 left-2">
                                                    <span className="bg-accent text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                                                        Best Seller
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-white">
                                                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Hose Protection</p>
                                                <h4 className="font-heading font-bold text-primary uppercase text-lg mb-2 group-hover:text-accent transition-colors">
                                                    Spiral Hose Guards
                                                </h4>
                                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                    Extend hose life by up to 500%. Industrial-grade HDPE construction.
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lg font-bold text-primary">From $8.99</span>
                                                    <span className="text-xs font-bold text-accent uppercase group-hover:underline">
                                                        View →
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Newsletter */}
                                    <div className="border border-gray-200 rounded-xl p-6">
                                        <h3 className="font-heading font-bold text-primary uppercase mb-3">Newsletter</h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            Get the latest insights delivered to your inbox.
                                        </p>
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                                        />
                                        <button className="w-full bg-primary text-white font-bold uppercase text-sm py-2 rounded-lg hover:bg-primary/90 transition-colors">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
