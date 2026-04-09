import { motion } from 'motion/react';
import { Package, Truck, Weight, Maximize } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

export function VanCapacity() {
  const { t } = useLanguage();

  return (
    <section id="van-capacity" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
            dangerouslySetInnerHTML={{ __html: t.van.title }}
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            {t.van.subtitle}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center bg-orange-500 text-white">
              <Truck size={64} className="mb-6 opacity-90" />
              <h3 className="text-3xl font-black mb-2">{t.van.payload}</h3>
              <p className="text-orange-100 text-lg mb-8">Mercedes Sprinter / Renault Master</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Maximize className="opacity-80" />
                  <span className="font-medium text-lg">{t.van.dimensions}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Weight className="opacity-80" />
                  <span className="font-medium text-lg">{t.van.maxLoad}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="opacity-80" />
                  <span className="font-medium text-lg">{t.van.boxes}</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[300px] bg-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Van interior" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
