
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';
const ContactCard = ({ icon, title, content, link }: { icon: React.ReactNode; title: string; content: string; link: string }) => (
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
          {/* <ContactCard 
            icon={<Phone className="w-6 h-6" />}
            title="Call Us"
            content="+91 98765 43210"
            link="tel:+919876543210"
          /> */}
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
              src="/images/contactus.jpeg" 
              alt="Contact illustration" 
              className="rounded-lg object-cover w-full h-full"
            />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
  
  export default ContactCard;
  