import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, Users, Shield, MessageSquare, CreditCard, Calendar, Key, Bell, Home, Settings, BookOpen, BarChart, Mail, Phone, MapPin } from 'lucide-react';
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
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        {/* Animated Shapes with reduced opacity */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amodBlue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-amodBlue-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-amodBlue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fadeIn">
              <span className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-amodBlue-100 bg-amodBlue-600/20 backdrop-blur-sm rounded-full border border-amodBlue-400/30">
                Smart Community Management
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Streamline Your Apartment Management with{' '}
                <span className="text-amodBlue-300 relative">
                  Amod Griha
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-amodBlue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed drop-shadow">
                Experience the future of residential community management with our cutting-edge platform.
                From seamless administration to enhanced security, we've revolutionized community living.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-amodBlue-600 hover:bg-amodBlue-700 transform hover:scale-105 transition-all duration-300 text-white backdrop-blur-sm"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            {/* Stats Section with adjusted styling for visibility */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 animate-fadeIn animation-delay-500">
              <StatItem number="50+" label="Societies" />
              <StatItem number="10k+" label="Users" />
              <StatItem number="98%" label="Satisfaction" />
              <StatItem number="24/7" label="Support" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-amodBlue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-amodDark-800 mb-4">Powerful Features</h2>
            <p className="text-amodDark-600">
              Experience a comprehensive suite of tools designed to streamline every aspect of residential community management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Building className="w-8 h-8 text-amodBlue-600" />}
              title="Society Management"
              description="Streamline administrative tasks, manage documents, and handle maintenance requests efficiently."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-amodBlue-600" />}
              title="Community Portal"
              description="Foster community engagement with events, notices, and a dedicated discussion forum."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-amodBlue-600" />}
              title="Security Suite"
              description="Enhanced security with visitor management, surveillance integration, and emergency alerts."
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-amodBlue-600" />}
              title="Smart Notifications"
              description="Stay updated with real-time alerts for important announcements and events."
            />
            <FeatureCard
              icon={<CreditCard className="w-8 h-8 text-amodBlue-600" />}
              title="Payment Management"
              description="Seamless payment processing for maintenance fees and other charges."
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-amodBlue-600" />}
              title="Digital Directory"
              description="Maintain a comprehensive directory of residents and service providers."
            />
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

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-white via-amodBlue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amodDark-800 mb-4">Get in Touch</h2>
              <p className="text-amodDark-600 max-w-2xl mx-auto">
                Have questions about Amod Griha? We're here to help! Reach out to us and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <ContactCard 
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                content="hello@amodgriha.com"
                link="mailto:hello@amodgriha.com"
              />
              <ContactCard 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="+91 98765 43210"
                link="tel:+919876543210"
              />
              <ContactCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                content="Mumbai, Maharashtra"
                link="https://maps.google.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/50">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-amodDark-800 mb-2">Send us a Message</h3>
                  <p className="text-amodDark-600">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amodBlue-500 focus:ring-2 focus:ring-amodBlue-200 focus:outline-none transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amodBlue-500 focus:ring-2 focus:ring-amodBlue-200 focus:outline-none transition-all duration-300"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-amodBlue-500 focus:ring-2 focus:ring-amodBlue-200 focus:outline-none transition-all duration-300 resize-none"
                  ></textarea>
                  <Button 
                    className="w-full bg-gradient-to-r from-amodBlue-600 to-amodBlue-500 hover:from-amodBlue-700 hover:to-amodBlue-600 text-white py-6 rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </Button>
                </div>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amodBlue-500 to-amodBlue-700 rounded-lg opacity-10 animate-blob"></div>
                <div className="relative h-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Contact illustration" 
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="p-4 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 transform hover:scale-105 transition-all duration-300">
    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{number}</div>
    <div className="text-sm text-gray-200">{label}</div>
  </div>
);

const FeatureCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-amodBlue-50">
    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
      <div className="w-16 h-16 rounded-lg bg-amodBlue-50 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-amodDark-800 mb-2">{title}</h3>
    <p className="text-amodDark-600">{description}</p>
  </div>
);

const ContactCard = ({ 
  icon, 
  title, 
  content, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string;
  link: string;
}) => (
  <a 
    href={link}
    className="group bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-amodBlue-200"
  >
    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-amodBlue-50 flex items-center justify-center text-amodBlue-600 group-hover:bg-amodBlue-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-amodDark-800 mb-2">{title}</h3>
    <p className="text-amodDark-600 group-hover:text-amodBlue-600 transition-colors duration-300">
      {content}
    </p>
  </a>
);

export default Index;
