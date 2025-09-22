"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "Why Choose Us", href: "#benefits" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <nav className="fixed  top-0 w-full z-50 backdrop-blur-md border-b border-[0 0% 100% / 0.2]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 border border-black bg-primary rounded-lg  flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">TenaClass</h1>
              <p className="text-xs text-foreground-secondary -mt-1">
                Knowledge for Every Seat
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/sign-in">
              <Button
                variant="ghost"
                className="text-foreground hover:bg-transparent hover:text-primary transition-colors font-medium"
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="border border-black bg-primary text-base text-white px-6 py-6 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white border-2 border-black transition-colors"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="ghost"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Sign In
                </Button>
                <Button className="block w-full border-2 border-black bg-primary text-white px-4 py-2 rounded-lg font-semibold text-center">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
