import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { faqItems } from "@/lib/consts";

const FAQSection = () => {
  return (
    <div className="md:pb-20 py-10 md:px-32 px-10" id="faq">
      <Accordion type="single" className="space-y-4" collapsible>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="text-slate-100 font-aeonik font-regular"
          >
            <AccordionTrigger className="md:text-2xl text-lg text-left font-aeonik font-bold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="md:text-lg text-base font-aeonik font-light">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
