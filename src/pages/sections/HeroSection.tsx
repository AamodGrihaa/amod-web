import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
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
                  className="border-white text-black hover:bg-white/10 transform hover:scale-105 hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            {/* Stats Section with adjusted styling for visibility */}
           
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
