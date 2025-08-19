import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { Check, Star, ArrowRight } from "lucide-react";

export default function Pricing() {
  interface Plan {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    popular: boolean;
    color: string;
    buttonClass: string;
    buttonVariant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost";
  }

  const plans: Plan[] = [
    {
      name: "Essential",
      price: "GHS 500",
      period: "per month",
      description:
        "Perfect for small schools getting started with digital learning",
      features: [
        "Up to 200 students",
        "5 teachers accounts",
        "Core subjects (Math, English, Science)",
        "Basic parent communication",
        "Email support",
        "Mobile app access",
        "Offline learning capabilities",
      ],
      popular: false,
      color: "border-black",
      buttonClass: "border-2 border-primary",
      buttonVariant: "outline",
    },
    {
      name: "Professional",
      price: "GHS 1,200",
      period: "per month",
      description: "Ideal for medium-sized schools with comprehensive needs",
      features: [
        "Up to 800 students",
        "25 teacher accounts",
        "All subjects + electives",
        "Advanced parent portal",
        "Priority phone support",
        "Custom branding",
        "Assessment analytics",
        "Local language support",
        "Video lessons library",
      ],
      popular: true,
      color: "border-primary shadow-glow",
      buttonClass: "border-2 border-black",
      buttonVariant: "default",
    },
    {
      name: "Enterprise",
      price: "GHS 2,500",
      period: "per month",
      description: "Complete solution for large schools and school districts",
      features: [
        "Unlimited students",
        "Unlimited teachers",
        "Multi-campus management",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "Custom integrations",
        "Staff training programs",
        "Data migration assistance",
        "SLA guarantees",
      ],
      popular: false,
      color: "border-black",
      buttonClass:
        "bg-gradient-to-r from-teall to-vivid-purple text-white border-2 border-black",
      buttonVariant: "default",
    },
  ];

  const districts = [
    { name: "Greater Accra", schools: "50+", discount: "15%" },
    { name: "Ashanti Region", schools: "35+", discount: "12%" },
    { name: "Western Region", schools: "25+", discount: "10%" },
    { name: "Northern Region", schools: "20+", discount: "8%" },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-background-neutral to-background-light relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-yellow-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Affordable Pricing for
            <span className="block text-transparent bg-gradient-to-r from-primary to-primary/40 bg-clip-text">
              Ghanaian Schools
            </span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto mb-8">
            Flexible payment plans designed with Ghanaian school budgets in
            mind. All prices in Ghana Cedis.
          </p>

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 border-2 rounded-lg border-black px-6 py-3">
            <Star className="w-5 h-5 text-math fill-current" />
            <span className="text-foreground font-semibold">
              30-Day Free Trial • No Setup Fees • Cancel Anytime
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "border-2 border-black p-8 hover-lift relative rounded-xl",
                plan.color,
                plan.popular && "transform scale-105"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary border border-black text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-foreground-secondary mb-6">
                  {plan.description}
                </p>

                <div className="mb-4">
                  <span className="text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-foreground-secondary ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.buttonVariant}
                className={cn("w-full text-lg py-6", plan.buttonClass)}
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 inline-block" />
              </Button>
            </div>
          ))}
        </div>

        {/* District Discounts */}
        <div className="border-2 rounded-lg border-black p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Special District Rates
            </h3>
            <p className="text-lg text-foreground-secondary">
              Bulk discounts for multiple schools in the same district
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {districts.map((district, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/50 rounded-2xl hover-lift"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {district.name}
                </h4>
                <p className="text-sm text-foreground-secondary mb-3">
                  {district.schools} schools connected
                </p>
                <span className="text-2xl font-bold text-success">
                  {district.discount} OFF
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="text-center space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 rounded-lg border-black p-6 hover-lift">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Public Schools Special Rate
              </h4>
              <p className="text-foreground-secondary mb-4">
                Government schools get additional 20% discount on all plans
              </p>
              <span className="text-3xl font-bold text-success">
                Extra 20% OFF
              </span>
            </div>

            <div className="border-2 rounded-lg border-black p-6 hover-lift">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Annual Payment Bonus
              </h4>
              <p className="text-foreground-secondary mb-4">
                Pay annually and get 2 months free plus priority support
              </p>
              <span className="text-3xl font-bold text-teal">
                2 Months FREE
              </span>
            </div>
          </div>

          <Button className="bg-primary text-white py-6 px-8 text-lg rounded-lg border-2 border-black mx-auto">
            Start Your Free 30-Day Trial
          </Button>
          <p className="text-foreground-secondary">
            No credit card required • Full access to all features • Local
            support included
          </p>
        </div>
      </div>
    </section>
  );
}

