import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
  >
    <div className="mb-4">
      <div className="w-16 h-16 rounded-lg bg-amodBlue-50 flex items-center justify-center">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-amodDark-800 mb-2">{title}</h3>
    <p className="text-amodDark-600">{description}</p>
  </motion.div>
);

export default FeatureCard;
