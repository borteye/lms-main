import { cn } from "@workspace/ui/lib/utils";
import {
  DollarSign,
  Wifi,
  GraduationCap,
  Globe2,
  Headphones,
  Shield,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Pricing for Ghanaian Schools",
      description:
        "Special rates designed with Ghanaian school budgets in mind. Flexible payment plans in Ghana Cedis.",
      color: "bg-success",
      card: "bg-success/20",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Offline Capabilities",
      description:
        "Continue learning even with poor internet connectivity. Automatic sync when connection is restored.",
      color: "bg-teall",
      card: "bg-teall/20",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "GES Curriculum Alignment",
      description:
        "Perfectly aligned with Ghana Education Service curriculum standards for JHS and SHS levels.",
      color: "bg-primary",
      card: "bg-primary/20",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Local Language Support",
      description:
        "Available in English, Twi, Ga, and Ewe with culturally relevant content and examples.",
      color: "bg-primary",
      card: "bg-primary/20",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Technical Support",
      description:
        "Round-the-clock assistance in local time zones with support staff who understand Ghanaian education.",
      color: "bg-vivid-purple",
      card: "bg-vivid-purple/20",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security & Privacy",
      description:
        "Bank-level security with local data storage options. GDPR compliant with Ghanaian data protection laws.",
      color: "bg-yellow-400",
      card: "bg-yellow-200",
    },
    {},
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Content Side */}
        <div className="space-y-12">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
              Why Schools Across Ghana
              <span className="block text-transparent bg-gradient-to-r from-primary to-primary/10 bg-clip-text">
                Choose TenaClass
              </span>
            </h2>
            <p className="text-xl text-foreground-secondary font-inter">
              Built specifically for the Ghanaian education landscape with deep
              understanding of local challenges and opportunities.
            </p>
          </div>

          <div className="space-y-8 grid gap-6 lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start space-x-6 p-6 rounded-xl border-2 border-black",
                  benefit.card,
                  index === benefits.length - 1 && "hidden"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={cn(
                    "p-3 rounded-lg shadow-soft flex-shrink-0 border-2 border-black text-white",
                    benefit.color
                  )}
                >
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                    {benefit.title}
                  </h3>
                  <p className="text-foreground-secondary font-inter">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
