import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative h-12 sm:h-14 w-48 sm:w-56 flex items-center">
              <img 
                src={`${import.meta.env.BASE_URL}images/logobefast.png`}
                alt="Be Fast Cargo" 
                className="h-full w-full object-contain object-left"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden text-2xl font-black tracking-tighter text-white">
                BE<span className="text-orange-500">FAST</span>
              </span>
            </div>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-orange-500 transition-colors">{t.nav.about}</a>
            <a href="#why-us" className="hover:text-orange-500 transition-colors">{t.nav.whyUs}</a>
            <a href="#van-capacity" className="hover:text-orange-500 transition-colors">{t.nav.van}</a>
            <a href="#opinie" className="hover:text-orange-500 transition-colors">{t.nav.testimonials}</a>
            <a href="#faq" className="hover:text-orange-500 transition-colors">{t.nav.faq}</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <p>{t.footer.design}</p>
        </div>
      </div>
    </footer>
  );
}
