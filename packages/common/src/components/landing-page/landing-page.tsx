import Benefits from "./benefits";
import Features from "./features";
import Footer from "./footer";
import Hero from "./hero";
import Navigation from "./navigation";
import Pricing from "./pricing";
import Statistics from "./statistics";

export default function LandingPage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Statistics />
      <Pricing />
      <Footer />
    </div>
  );
}
