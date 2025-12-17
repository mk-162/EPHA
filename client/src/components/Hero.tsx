import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Thermometer, Clock, TrendingDown, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/excavator_at_golden_hour_with_red_hose_protectors.png";

export function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

      <div className="container relative mx-auto h-full flex flex-col justify-center px-4 pt-20">
        <div className="max-w-3xl space-y-6">
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.9] drop-shadow-xl">
            The <span className="text-accent">$8 Solution</span> <br />
            That Prevents <br />
            $47,500 Failures
          </h1>
          
          <p className="max-w-xl text-lg md:text-xl text-gray-200 font-light leading-relaxed">
            Industrial-grade hose protection that installs in 4 minutes and 
            prevents 85% of costly equipment breakdowns.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="xl" 
              className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-sm uppercase tracking-wider shadow-lg hover:translate-y-[-2px] transition-all"
            >
              Calculate Your Savings
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="border-2 border-white text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 rounded-sm uppercase tracking-wider backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <TrustBadge icon={USFlagIcon} label="Made in USA" />
            <TrustBadge icon={Thermometer} label="-40°F to 430°F" />
            <TrustBadge icon={Clock} label="4-Minute Install" />
            <TrustBadge icon={TrendingDown} label="85% Fewer Failures" />
          </div>
        </div>
      </div>
    </section>
  );
}

function USFlagIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <line x1="3" x2="21" y1="15" y2="15" />
      <path d="M3 5h8v7H3z" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TrustBadge({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group cursor-default">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all group-hover:bg-accent group-hover:border-accent">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <span className="text-sm font-bold text-white uppercase tracking-wide text-center">{label}</span>
    </div>
  );
}