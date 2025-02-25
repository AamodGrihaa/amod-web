import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Building, Users, Shield, MessageSquare, CreditCard, Calendar, Key, Bell, Home, Settings, BookOpen, BarChart, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AboutSection from './sections/AboutSection';
import FAQSection from './sections/FAQSection';
import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <FeaturesSection/>

      {/* About Section */}
      <AboutSection/>

      {/* FAQ Section */}
      <FAQSection/>

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

            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <ContactCard 
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                content="info@amodgriha.live"
                link="mailto:info@amodgriha.live"
              />
              {/* <ContactCard 
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                content="+91 98765 43210"
                link="tel:+919876543210"
              /> */}
              <ContactCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                content="Vijaywada, Andhrapradesh"
                link="https://g.co/kgs/MBLe5pL"
              />
            </div>

            <div className='flex justify-center'>
            <button
            onClick={()=>navigate("/contact")}
            className=" px-8 py-3 bg-gradient-to-r from-amodBlue-600 to-amodBlue-500 text-white font-semibold rounded-lg hover:from-amodBlue-700 hover:to-amodBlue-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Leave a Message
          </button>

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
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-amodBlue-50"
  >
    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
      <div className="w-16 h-16 rounded-lg bg-amodBlue-50 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-amodDark-800 mb-2">{title}</h3>
    <p className="text-amodDark-600">{description}</p>
  </motion.div>
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
