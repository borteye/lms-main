import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import heroStudents from "../../assets/heroStudents.jpg";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Education
                <span className="block text-transparent bg-gradient-to-r from-primary to-primary/10 bg-clip-text">
                  Across Ghana
                </span>
              </h1>
              <p className="text-xl md:text-2xl font-inter max-w-2xl">
                One School at a Time - Empowering JHS and SHS students with
                modern learning technology
              </p>
            </div>
            <div className="border-2 border-black rounded-lg p-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-primary">500+</h3>
                <p className="text-sm text-foreground-secondary">
                  Schools Connected
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-success ">50K+</h3>
                <p className="text-sm text-foreground-secondary">
                  Students Learning
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-teall">98%</h3>
                <p className="text-sm text-foreground-secondary">
                  Teacher Satisfaction
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-semibold">
              <Link href="/sign-up">
                <Button className="bg-primary border-2 border-black group flex items-center justify-center gap-2 text-white py-7 rounded-lg ">
                  Start Your School's Digital Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button className="bg-white rounded-lg hover:bg-primary hover:text-white text-primary border-2 border-primary group flex items-center justify-center gap-2 py-7">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="flex justify-end md:justify-center">
            <Image
              src={heroStudents}
              alt="hero image"
              className="rounded-2xl border-2 border-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
