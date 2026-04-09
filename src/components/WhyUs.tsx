import { motion } from 'motion/react';
import { Globe, Leaf, Map, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function WhyUs() {
  const { t } = useLanguage();

  const icons = [
    <Globe size={32} key="globe" />,
    <Leaf size={32} key="leaf" />,
    <Map size={32} key="map" />,
    <ShieldCheck size={32} key="shield" />
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.whyUs.title }}
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {t.whyUs.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.whyUs.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 shrink-0 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                {icons[index]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
