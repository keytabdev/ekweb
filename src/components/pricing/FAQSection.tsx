import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="w-full bg-white pt-20 pb-10 mb-100" style={{ height: '500px' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-zinc-900 text-4xl font-bold font-['Graphie'] leading-[76px] tracking-tight">Frequently asked questions</h2>
        </div>
        
        <div className="mx-auto pb-8" style={{ width: '712px', height: '50px' }}>
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="item-1" className="px-4 py-2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 border-none">
              <AccordionTrigger className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug hover:no-underline">
                What are credits used for?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">
                Credits unlock exciting lessons, interactive games, exclusive comics, and quizzes. More credits = more adventures! Each credit gives your child access to premium educational content that makes learning fun and engaging.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="px-4 py-2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 border-none">
              <AccordionTrigger className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug hover:no-underline">
                Can I change my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">
                Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we&#39;ll prorate any billing adjustments. Your child&#39;s progress and credits are always preserved regardless of plan changes.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="px-4 py-2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 border-none">
              <AccordionTrigger className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug hover:no-underline">
                Is there a discount for annual plans?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">
                Yes! Annual plans come with a 20% discount compared to monthly billing. This means you save money while ensuring uninterrupted learning for your child throughout the year. Plus, you get priority access to new features and content.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="px-4 py-2 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-stone-300 border-none">
              <AccordionTrigger className="text-zinc-900 text-base font-semibold font-['Graphie'] leading-snug hover:no-underline">
                How do schools get special pricing?
              </AccordionTrigger>
              <AccordionContent className="text-zinc-900 text-xs font-normal font-['Graphie'] leading-tight">
                Schools and educational institutions can contact our team for special bulk pricing and licensing options. We offer customized solutions for classrooms, entire schools, or school districts with dedicated support and implementation assistance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="w-14 h-16 absolute left-4 top-20 bg-cyan-400" />
    </section>
  );
} 