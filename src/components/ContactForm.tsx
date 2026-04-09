import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

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

  const onSubmit = (data: FormData) => {
    const phoneNumber = "48735951626";
    const message = `*Nowe zapytanie o przeprowadzkę*%0A%0A*Imię i nazwisko:* ${data.firstName} ${data.lastName}%0A*Email:* ${data.email}%0A*Telefon:* ${data.phone}%0A*Adres odbioru:* ${data.pickup}%0A*Adres dostawy:* ${data.delivery}%0A*Zakres usług:* ${data.service}`;
    
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
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Skontaktuj się z <span className="text-orange-500">nami</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Wypełnij formularz, a my przygotujemy dla Ciebie darmową wycenę. 
              Możesz też zadzwonić bezpośrednio lub napisać do nas na WhatsApp.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Zadzwoń do nas</p>
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
                  <p className="text-sm text-slate-500 font-medium">Napisz e-mail</p>
                  <a href="mailto:kontakt@befast.pl" className="text-xl font-bold text-slate-900 hover:text-orange-500 transition-colors">
                    kontakt@befast.pl
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Obszar działania</p>
                  <p className="text-xl font-bold text-slate-900">
                    Cała Polska i Europa
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
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Darmowa wycena</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Imię</label>
                  <input 
                    {...register("firstName", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Jan"
                  />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Nazwisko</label>
                  <input 
                    {...register("lastName", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="Kowalski"
                  />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                  <input 
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="jan@example.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Telefon</label>
                  <input 
                    type="tel"
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    placeholder="+48 000 000 000"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Adres odbioru</label>
                <input 
                  {...register("pickup", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="np. Warszawa, ul. Nowa 1/2"
                />
                {errors.pickup && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Adres dostawy</label>
                <input 
                  {...register("delivery", { required: true })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="np. Kraków, ul. Stara 3/4"
                />
                {errors.delivery && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Zakres usługi / Dodatkowe informacje</label>
                <textarea 
                  {...register("service", { required: true })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Opisz co jest do przewiezienia, które piętro, czy potrzebujesz pakowania..."
                />
                {errors.service && <span className="text-red-500 text-xs mt-1">To pole jest wymagane</span>}
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98] mt-2"
              >
                Wyślij przez WhatsApp
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
