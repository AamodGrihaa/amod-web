import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
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
  );
};

export default FAQSection;
