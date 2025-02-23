
import React from 'react';
import Navbar from '../components/Navbar';
import { Building, Users, Shield, MessageSquare, CreditCard, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-amodBlue-50 pt-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-amodDark-800 mb-6">
              Streamline Your Apartment Management with{' '}
              <span className="text-amodBlue-600">Amod Griha</span>
            </h1>
            <p className="text-xl text-amodDark-600 mb-8">
              A cutting-edge platform designed for hassle‐free residential community management.
              From seamless administration to enhanced security and a connected community experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-amodBlue-600 hover:bg-amodBlue-700">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-amodBlue-50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-amodDark-800 mb-12">About Us</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fadeIn">
                <p className="text-amodDark-600">
                  Amod Griha is a next-generation apartment management solution crafted to simplify
                  day-to-day operations and enrich community living.
                </p>
                <p className="text-amodDark-600">
                  Our platform is uniquely designed with dual applications: one tailored for secretaries
                  and security teams, and another dedicated to residents for effortless communication.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden animate-scaleIn">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                  alt="Team collaboration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-amodBlue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amodDark-800 mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building className="w-8 h-8 text-amodBlue-600" />}
              title="Secretary Management"
              description="Digital logs, maintenance scheduling, and administrative tools for efficient management."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-amodBlue-600" />}
              title="Tenant Portal"
              description="Community updates, service requests, and convenient payment solutions."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-amodBlue-600" />}
              title="Security Features"
              description="Real-time surveillance, visitor verification, and emergency alerts."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amodDark-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Amod Griha?</AccordionTrigger>
                <AccordionContent>
                  Amod Griha is an all-in-one apartment management solution designed to streamline
                  operations, enhance security, and improve communication between management and residents.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Who can use Amod Griha?</AccordionTrigger>
                <AccordionContent>
                  Our platform offers two tailored applications—one for secretaries and security teams,
                  and another for residents—to meet the specific needs of each user group.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How does the security module work?</AccordionTrigger>
                <AccordionContent>
                  The security features include real-time surveillance integration, digital visitor
                  verification, emergency alert systems, and detailed activity logs to ensure a safe community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amodDark-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-amodBlue-500 focus:outline-none focus:ring-1 focus:ring-amodBlue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-amodBlue-500 focus:outline-none focus:ring-1 focus:ring-amodBlue-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-amodBlue-500 focus:outline-none focus:ring-1 focus:ring-amodBlue-500"
              ></textarea>
              <Button className="w-full bg-amodBlue-600 hover:bg-amodBlue-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-amodDark-800 mb-2">{title}</h3>
    <p className="text-amodDark-600">{description}</p>
  </div>
);

export default Index;
