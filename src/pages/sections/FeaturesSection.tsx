import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { Building, Users, Shield, Bell, CreditCard, BookOpen } from "lucide-react";

const FeaturesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-amodBlue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-amodDark-800 mb-4"
            variants={itemVariants}
          >
            Powerful Features
          </motion.h2>
          <motion.p
            className="text-amodDark-600"
            variants={itemVariants}
          >
            Experience a comprehensive suite of tools designed to streamline every aspect of residential community management.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Building className="w-8 h-8 text-amodBlue-600" />}
              title="Society Management"
              description="Streamline administrative tasks, manage documents, and handle maintenance requests efficiently."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Users className="w-8 h-8 text-amodBlue-600" />}
              title="Community Portal"
              description="Foster community engagement with events, notices, and a dedicated discussion forum."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-amodBlue-600" />}
              title="Security Suite"
              description="Enhanced security with visitor management, surveillance integration, and emergency alerts."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-amodBlue-600" />}
              title="Emergency Services"
              description="Get instant alerts and quick access to emergency contacts for urgent situations."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<CreditCard className="w-8 h-8 text-amodBlue-600" />}
              title="Payment Management"
              description="Seamless payment processing for maintenance fees and other charges."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-amodBlue-600" />}
              title="Digital Directory"
              description="Maintain a comprehensive directory of residents and service providers."
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;