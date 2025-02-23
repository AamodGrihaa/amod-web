const AboutSection = () => {
    return (
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
    );
  };
  
  export default AboutSection;
  