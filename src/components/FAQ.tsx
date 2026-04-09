import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n';

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.faq.title }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
            {t.faq.items.map((faq, index) => (
              <Accordion.Item 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:border-orange-500 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left font-semibold text-lg text-slate-900 group">
                    {faq.q}
                    <ChevronDown 
                      className="text-slate-400 group-data-[state=open]:text-orange-500 group-data-[state=open]:rotate-180 transition-transform duration-300" 
                      size={20} 
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-slate-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="p-6 pt-0 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
