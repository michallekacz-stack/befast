import { motion } from 'motion/react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "Ile kosztuje przeprowadzka?",
    answer: "Koszt przeprowadzki zależy od wielu czynników: ilości rzeczy, odległości, pięter oraz tego, czy potrzebujesz usługi pakowania. Wypełnij formularz kontaktowy, a przygotujemy dla Ciebie darmową, niezobowiązującą wycenę."
  },
  {
    question: "Czy dostarczacie kartony i materiały do pakowania?",
    answer: "Tak, oferujemy pełen zakres materiałów pakowych: kartony różnej wielkości, folię bąbelkową, folię stretch, taśmy i koce transportowe. Możemy dostarczyć je wcześniej lub przywieźć w dniu przeprowadzki."
  },
  {
    question: "Czy moje rzeczy są ubezpieczone podczas transportu?",
    answer: "Oczywiście. Posiadamy pełne ubezpieczenie OCP (Odpowiedzialność Cywilna Przewoźnika). Twoje mienie jest bezpieczne od momentu podniesienia go przez naszych pracowników, aż do wniesienia w miejscu docelowym."
  },
  {
    question: "Z jakim wyprzedzeniem powinienem zarezerwować termin?",
    answer: "Zalecamy rezerwację na 1-2 tygodnie przed planowanym terminem przeprowadzki, szczególnie jeśli wypada ona w weekend lub pod koniec miesiąca. Oferujemy również usługi ekspresowe w miarę dostępności."
  },
  {
    question: "Czy demontujecie i montujecie meble?",
    answer: "Tak, nasi pracownicy posiadają odpowiednie narzędzia i doświadczenie w demontażu oraz ponownym montażu mebli (np. szafy, łóżka, biurka)."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Często zadawane <span className="text-orange-500">Pytania</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion.Root type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <Accordion.Item 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm data-[state=open]:border-orange-500 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex items-center justify-between w-full p-6 text-left font-semibold text-lg text-slate-900 group">
                    {faq.question}
                    <ChevronDown 
                      className="text-slate-400 group-data-[state=open]:text-orange-500 group-data-[state=open]:rotate-180 transition-transform duration-300" 
                      size={20} 
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-slate-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <div className="p-6 pt-0 leading-relaxed">
                    {faq.answer}
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
