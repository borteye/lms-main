import { Button } from "@workspace/ui/components/button";
import { TrendingUp, Users, BookOpen, Award } from "lucide-react";

export default function Statistics() {
  const stats = [
    {
      icon: <Users className="w-12 h-12" />,
      number: "500+",
      label: "Schools Already Connected",
      description: "Growing network of educational institutions",
      color: "text-primary",
      bgColor: "bg-primary",
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      number: "50,000+",
      label: "Students Learning Daily",
      description: "Active learners across all grade levels",
      color: "text-success",
      bgColor: "bg-gradient-to-br from-success to-teall",
    },
    {
      icon: <Award className="w-12 h-12" />,
      number: "98%",
      label: "Teacher Satisfaction Rate",
      description: "Educators love our platform",
      color: "text-vivid-purple",
      bgColor: "bg-gradient-to-br from-gray-500 to-vivid-purple",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      number: "30+",
      label: "Subjects Supported",
      description: "Complete curriculum coverage",
      color: "text-teall",
      bgColor: "bg-teall",
    },
  ];

  const achievements = [
    {
      metric: "Average Grade Improvement",
      value: "23%",
      description: "Students show significant improvement",
    },
    {
      metric: "Engagement Increase",
      value: "45%",
      description: "Higher participation in digital classes",
    },
    {
      metric: "Teacher Productivity",
      value: "35%",
      description: "More efficient lesson planning and grading",
    },
    {
      metric: "Parent Satisfaction",
      value: "92%",
      description: "Parents appreciate the communication tools",
    },
  ];

  return (
    <section
      id="statistics"
      className="py-20 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teall/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Education
            <span className="block text-transparent bg-primary bg-clip-text">
              Across Ghana
            </span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            Real results from real schools. See how EduConnect Ghana is making a
            difference in education nationwide.
          </p>
        </div>

        {/* Main Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="counter-card text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-20 h-20 ${stat.bgColor} rounded-xl border-2 border-black flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow`}
              >
                {stat.icon}
              </div>

              <h3
                className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3`}
              >
                {stat.number}
              </h3>

              <h4 className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </h4>

              <p className="text-foreground-secondary">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Achievements */}
        <div className="bg-white/50 backdrop-blur-sm border-2 border-black rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Proven Impact on Learning Outcomes
            </h3>
            <p className="text-lg text-foreground-secondary">
              Data-driven results showing the positive impact of digital
              learning on Ghanaian students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 hover-lift "
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.value}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.metric}
                </h4>
                <p className="text-sm text-foreground-secondary">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="text-lg py-6 border border-black mx-auto">
            Join These Successful Schools
          </Button>
          <p className="text-foreground-secondary mt-4">
            Start your 30-day free trial today
          </p>
        </div>
      </div>
    </section>
  );
}
