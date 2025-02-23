import FeatureCard from "./FeatureCard";
import { Building, Users, Shield, Bell, CreditCard, BookOpen } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
