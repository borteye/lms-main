import { cn } from "@workspace/ui/lib/utils";
import {
  BookOpen,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  MessageSquare,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Tenant Architecture",
      description:
        "Each school gets their own dedicated space with customizable branding and settings.",
      color: "bg-primary",
      card: "bg-vivid-purple/70",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Subject-Specific Modules",
      description:
        "Specialized learning paths for Science, Mathematics, and Language & Literature.",
      color: "bg-vivid-purple",
      card: "bg-success/70",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Grade Management & Assessment",
      description:
        "Comprehensive tools for tracking student progress and generating detailed reports.",
      color: "bg-yellow-400",
      card: "bg-primary/70",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Optimized for smartphones - the primary device for most Ghanaian students.",
      color: "bg-success",
      card: "bg-yellow-300",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Local Language Support",
      description:
        "Available in English, Twi, Ga, and Ewe with cultural context integration.",
      color: "bg-green-500",
      card: "bg-teall",
    },
  ];

  const subjects = [
    {
      title: "Science Modules",
      description:
        "Physics, Chemistry, Biology with interactive labs and simulations",
      className: "bg-gradient-to-tr from-primary/70 via-primary/90 to-primary text-white",
      icon: "🧪",
    },
    {
      title: "Mathematics",
      description:
        "Algebra, Geometry, Statistics with step-by-step problem solving",
      className:
        "bg-gradient-to-tr from-bg-vivid-purple/70 via-vivid-purple/90 to-vivid-purple",
      icon: "📐",
    },
    {
      title: "Languages & Literature",
      description:
        "English, Local languages, Literature with cultural connections",
      className:
        "bg-gradient-to-tr from-bg-teall/70 via-teall/90 to-teall",
      icon: "📚",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="block text-transparent bg-primary bg-clip-text">
              Modern Education
            </span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Everything your school needs to deliver exceptional education in the
            digital age
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "p-8 hover-lift group border-2 border-black rounded-xl",
                feature.card
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${feature.color} border-2 border-black rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Subject Modules Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Subject-Specific Learning Paths
              </h3>
              <p className="text-lg text-foreground-secondary">
                Tailored educational experiences that align with Ghana Education
                Service curriculum requirements.
              </p>
            </div>

            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-6 rounded-2xl hover-lift border-2 border-black",
                    subject.className
                  )}
                >
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl">{subject.icon}</span>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {subject.title}
                      </h4>
                      <p className="opacity-90">{subject.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="relative float-animation">
            <img 
              src={dashboardMockup}
              alt="EduConnect Ghana Dashboard Interface"
              className="rounded-3xl shadow-elegant w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
