import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  pickup: string;
  delivery: string;
  service: string;
};

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { t } = useLanguage();

  const onSubmit = (data: FormData) => {
    const phoneNumber = "48735951626";
    const message = `*New Relocation Inquiry*%0A%0A*Name:* ${data.firstName} ${data.lastName}%0A*Email:* ${data.email}%0A*Phone:* ${data.phone}%0A*Pickup:* ${data.pickup}%0A*Delivery:* ${data.delivery}%0A*Service:* ${data.service}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 
              className="text-3xl md:text-5xl font-bold text-slate-900 mb-6"
              dangerouslySetInnerHTML={{ __html: t.contact.title }}
            />
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.contact.callUs}</p>
                  <a href="tel:+48735951626" className="text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">
                    +48 735 951 626
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.contact.emailUs}</p>
                  <a href="mailto:info@befastcargo.com" className="text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">
                    info@befastcargo.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.contact.areaTitle}</p>
                  <p className="text-xl font-bold text-slate-900">
                    {t.contact.area}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.firstName}</label>
                  <input 
                    {...register("firstName", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.lastName}</label>
                  <input 
                    {...register("lastName", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.email}</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.phone}</label>
                  <input 
                    type="tel"
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="+44 000 000 000"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.pickup}</label>
                <input 
                  {...register("pickup", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g. London, UK"
                />
                {errors.pickup && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.delivery}</label>
                <input 
                  {...register("delivery", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="e.g. Berlin, Germany"
                />
                {errors.delivery && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{t.contact.form.service}</label>
                <textarea 
                  {...register("service", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="..."
                />
                {errors.service && <span className="text-red-500 text-xs mt-1">{t.contact.form.required}</span>}
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98] mt-2"
              >
                {t.contact.form.submit}
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
