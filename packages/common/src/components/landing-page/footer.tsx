import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const locations = [
    {
      city: "Accra Head Office",
      address: "East Legon, Accra",
      phone: "+233 30 123 4567",
      email: "accra@tenasi.gh",
    },
    {
      city: "Kumasi Regional",
      address: "Adum, Kumasi",
      phone: "+233 32 234 5678",
      email: "kumasi@tenasi.gh",
    },
    {
      city: "Tamale Northern",
      address: "Central Tamale",
      phone: "+233 37 345 6789",
      email: "tamale@tenasi.gh",
    },
  ];

  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Support Center", href: "#support" },
    { name: "Teacher Training", href: "#training" },
  ];

  const resources = [
    { name: "Getting Started Guide", href: "#guide" },
    { name: "Video Tutorials", href: "#tutorials" },
    { name: "Curriculum Alignment", href: "#curriculum" },
    { name: "System Requirements", href: "#requirements" },
    { name: "Mobile App Download", href: "#mobile" },
    { name: "Integration Guide", href: "#integration" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Data Protection", href: "#data" },
    { name: "Accessibility", href: "#accessibility" },
  ];

  return (
    <footer className="bg-[black]/70 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-vivid-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary border border-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-2xl font-poppins">
                    T
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-poppins">Tenasi</h2>
                  <p className="text-white/70 text-sm font-inter">
                    Knowledge for Every Seat
                  </p>
                </div>
              </div>

              <p className="text-white/80 font-inter">
                Empowering Ghanaian schools with cutting-edge learning
                management technology. Built for JHS and SHS institutions across
                all 16 regions of Ghana.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 text-white">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-500 border border-black rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-teal-500 border border-black rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-500 border border-black rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-orange-500 border border-black rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold font-poppins">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-inter"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold font-poppins">Resources</h3>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.href}
                    className="block text-white/80 hover:text-white hover:translate-x-2 transition-all duration-300 font-inter"
                  >
                    {resource.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold font-poppins">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-white/80 font-inter">
                    +233 30 123 4567
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-white/80 font-inter">
                    hello@tenasi.gh
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <span className="text-white/80 font-inter">
                    East Legon, Accra
                    <br />
                    Greater Accra Region
                  </span>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-white/10 p-4 rounded-xl border-2 border-black">
                <h4 className="font-semibold mb-2 font-poppins">
                  24/7 Emergency Support
                </h4>
                <p className="text-sm text-white/80 mb-2 font-inter">
                  For urgent technical issues
                </p>
                <p className="font-semibold text-primary font-poppins">
                  +233 32 234 5678
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="py-12 border-t border-white/20">
          <h3 className="text-2xl font-bold text-center mb-12 font-poppins">
            Our Regional Offices
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 border-2 border-black rounded-2xl hover-lift"
              >
                <h4 className="text-lg font-semibold mb-3 font-poppins">
                  {location.city}
                </h4>
                <div className="space-y-2 text-white/80 font-inter">
                  <p className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{location.address}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{location.phone}</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{location.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm font-inter">
              © 2024 tenasi Ghana. All rights reserved. Proudly serving
              Ghanaian education.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {legal.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white/60 hover:text-white transition-colors font-inter"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-white/60 font-inter">
              <span>🇬🇭 Made in Ghana for Ghana</span>
              <span>📜 Ghana Education Service Approved</span>
              <span>🔒 ISO 27001 Certified</span>
              <span>✅ GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
