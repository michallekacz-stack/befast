import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Przeprowadzka mieszkania",
    content: "Pełen profesjonalizm! Panowie uwinęli się z przeprowadzką 3-pokojowego mieszkania w kilka godzin. Meble idealnie zabezpieczone, żadnych uszkodzeń. Polecam w 100%.",
    rating: 5
  },
  {
    name: "Piotr Nowak",
    role: "Transport biura",
    content: "Firma BE FAST przenosiła nasze biuro. Wszystko zgodnie z planem, bez opóźnień. Sprzęt komputerowy dotarł nienaruszony. Bardzo dobry kontakt z właścicielem...",
    rating: 5
  },
  {
    name: "Marta Wiśniewska",
    role: "Transport antyków",
    content: "Bardzo bałam się o transport moich starych mebli, ale ekipa spisała się na medal. Zabezpieczenie folią bąbelkową i kocami na najwyższym poziomie.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="opinie" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-orange-500 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-orange-600 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Co mówią o nas <span className="text-orange-500">Klienci</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-300"
          >
            Najlepszą wizytówką naszej firmy są zadowoleni klienci. Przeczytaj ich opinie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-6 text-white/10" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-orange-500 text-orange-500" size={20} />
                ))}
              </div>
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-orange-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
