import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-amodDark-800 mb-4">
            Leave a Message
          </h2>
          <p className="text-amodDark-600">
            We're here to help! Reach out to us for any questions or inquiries.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Left Side: Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-amodDark-800 mb-2">
                Send us a Message
              </h3>
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
              <button
                className="w-full bg-gradient-to-r from-amodBlue-600 to-amodBlue-500 hover:from-amodBlue-700 hover:to-amodBlue-600 text-white py-3 rounded-lg transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:block relative">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-amodBlue-500 to-amodBlue-700 rounded-lg opacity-10 animate-blob"></div> */}
            <div className="relative h-full flex items-center justify-center">
              <img
                src="/images/contactus.jpeg"
                alt="Contact illustration"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;