'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'DigitalFusion | Weby, které posouvají vaše podnikání';

    const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="15" fill="#1e3a8a"/><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="55" fill="#ffffff" font-family="Arial, sans-serif" font-weight="bold">DF</text></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const navLinks = [
    { href: '#sluzby', label: 'Služby' },
    { href: '#proces', label: 'Proces' },
    { href: '#projekty', label: 'Projekty' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans">
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-95 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Zavřít menu">
            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" alt="Zavřít" className="w-8 h-8 text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-semibold my-4 py-2 hover:text-blue-400 transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header className="bg-slate-50/80 backdrop-blur-lg sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-slate-900">Digital<span className="text-blue-700">Fusion</span></a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-600 hover:text-blue-700 font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
             <a href="#kontakt" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all">Konzultace zdarma</a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Otevřít menu">
            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-8 h-8 text-slate-800" />
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-20 md:py-32">
           <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Tvoříme weby, které posouvají <br className="hidden md:block"/>vaše podnikání vpřed
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-8">
              Propojujeme unikátní design s moderními technologiemi a vytváříme digitální řešení, která skutečně fungují – od stránek pro živnostníky po komplexní firemní platformy.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#sluzby" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all text-lg">Naše služby</a>
              <a href="#projekty" className="bg-slate-200 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-300 transition-all text-lg">Ukázky práce</a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="sluzby" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Digitální řešení na míru</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Ať už potřebujete web, e-shop nebo komplexní aplikaci, máme pro vás řešení.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">Weby na míru</h3>
                <p className="text-slate-600">Navrhneme a vyvineme unikátní web, který dokonale reprezentuje váš brand a osloví vaši cílovou skupinu. Rychlý, bezpečný a připravený růst.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">E-commerce řešení</h3>
                <p className="text-slate-600">Stavíme moderní e-shopy na platformách jako Shopify i na zakázku. Zaměřujeme se na konverze a skvělý uživatelský zážitek.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-3 text-blue-700">Rozvoj a poradenství</h3>
                <p className="text-slate-600">Pomůžeme vám transformovat stávající web na efektivní marketingový nástroj, který generuje poptávky a posiluje vaši značku.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us / Comparison Section */}
        <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Proč zvolit řešení na míru?</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Typický přístup často znamená kompromisy. My věříme v řešení, které je od začátku navrženo pro váš úspěch.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-slate-100 p-8 rounded-xl border border-slate-200">
                        <h3 className="text-2xl font-bold mb-6 text-slate-500">Běžné řešení</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/x-circle.svg" className="w-6 h-6 mr-3 text-red-500 flex-shrink-0 mt-0.5" alt="Nevýhoda" /><span className="text-slate-600"><strong className="text-slate-700">Šablonový vzhled:</strong> Váš web splyne s davem a postrádá originalitu.</span></li>
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/x-circle.svg" className="w-6 h-6 mr-3 text-red-500 flex-shrink-0 mt-0.5" alt="Nevýhoda" /><span className="text-slate-600"><strong className="text-slate-700">Omezený potenciál:</strong> Složité rozšiřování funkcí, které brzy přestane stačit.</span></li>
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/x-circle.svg" className="w-6 h-6 mr-3 text-red-500 flex-shrink-0 mt-0.5" alt="Nevýhoda" /><span className="text-slate-600"><strong className="text-slate-700">Zdlouhavá realizace:</strong> Měsíce čekání kvůli neefektivním procesům.</span></li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                        <h3 className="text-2xl font-bold mb-6 text-blue-800">Naše řešení</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/check-circle.svg" className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" alt="Výhoda" /><span className="text-slate-700"><strong className="text-blue-700">Unikátní design:</strong> Originální vzhled přesně podle vašeho brandu. Váš web bude jedinečný.</span></li>
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/check-circle.svg" className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" alt="Výhoda" /><span className="text-slate-700"><strong className="text-blue-700">Prostor pro růst:</strong> Flexibilní platforma, která roste s vámi. Snadné přidávání nových funkcí.</span></li>
                            <li className="flex items-start"><img src="https://heroicons.com/24/solid/check-circle.svg" className="w-6 h-6 mr-3 text-green-500 flex-shrink-0 mt-0.5" alt="Výhoda" /><span className="text-slate-700"><strong className="text-blue-700">Rychlé nasazení:</strong> Efektivní proces zajistí spuštění webu v řádu týdnů, ne měsíců.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* Process Section */}
        <section id="proces" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Náš osvědčený proces</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Náš čtyřfázový proces zaručuje, že výsledek bude přesně odpovídat vašim cílům a představám.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-extrabold text-blue-200 mb-2">01</div>
                <h3 className="text-xl font-bold mb-2">Konzultace a analýza</h3>
                <p className="text-slate-600">Důkladně analyzujeme vaše potřeby, cíle a požadavky na nový digitální produkt.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-extrabold text-blue-200 mb-2">02</div>
                <h3 className="text-xl font-bold mb-2">Návrh a design</h3>
                <p className="text-slate-600">Vytvoříme návrh struktury (wireframe) a unikátní design, který bude funkční a vizuálně atraktivní.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-extrabold text-blue-200 mb-2">03</div>
                <h3 className="text-xl font-bold mb-2">Implementace a testování</h3>
                <p className="text-slate-600">Převedeme schválený design do funkčního kódu a důkladně otestujeme všechny funkce.</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-extrabold text-blue-200 mb-2">04</div>
                <h3 className="text-xl font-bold mb-2">Nasazení a podpora</h3>
                <p className="text-slate-600">Nasadíme řešení do ostrého provozu a poskytujeme následnou podporu a rozvoj.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="projekty" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Naše nedávné projekty</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Podívejte se na ukázky naší práce, kde jsme pomohli našim klientům uspět online.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="flex flex-col bg-slate-50 rounded-xl shadow-md overflow-hidden group">
                <img src="/images/project-zuzzi-paint-gallery.webp" alt="Projekt Zuzzi Paint Gallery" className="w-full h-56 object-cover object-top"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800">Zuzzi Paint Gallery</h3>
                  <p className="text-slate-600 mt-2 flex-grow">Moderní galerie pro umělkyni, která prezentuje díla v čistém a přehledném rozhraní vytvořeném v Next.js.</p>
                  <div className="mt-4"><span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Web</span><span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Galerie</span></div>
                </div>
              </div>
              <div className="flex flex-col bg-slate-50 rounded-xl shadow-md overflow-hidden group">
                <img src="/images/project-camo-on-wall-ecommerce.webp" alt="Projekt Camo On Wall E-shop" className="w-full h-56 object-cover object-top"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800">Camo On Wall E-shop</h3>
                  <p className="text-slate-600 mt-2 flex-grow">E-commerce platforma pro módní značku s minimalistickým designem a důrazem na skvělou uživatelskou přívětivost.</p>
                  <div className="mt-4"><span className="bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">E-commerce</span><span className="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Móda</span></div>
                </div>
              </div>
              <div className="flex flex-col bg-slate-50 rounded-xl shadow-md overflow-hidden group">
                <img src="/images/project-alchymie-usechu-essay.webp" alt="Projekt Alchymie úspěchu" className="w-full h-56 object-cover object-top"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800">Alchymie úspěchu</h3>
                  <p className="text-slate-600 mt-2 flex-grow">Interaktivní webová esej o psychologii a biologii lidské cesty s elegantním designem pro pohodlné čtení.</p>
                  <div className="mt-4"><span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Web</span><span className="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Osobní rozvoj</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries section */}
        <section id="obory" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tvoříme řešení pro každý obor</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Díky našim zkušenostem rozumíme specifickým potřebám různých odvětví a navrhujeme řešení, která přinášejí výsledky.</p>
            </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1"><img src="/images/blog-medical-website-optimization.jpg" alt="Zdravotnictví" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/><div className="absolute inset-0 bg-black/50 flex items-end p-4"><h3 className="text-white text-xl font-bold">Zdravotnictví</h3></div></div>
              <div className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1"><img src="/images/blog-real-estate-website.jpg" alt="Reality" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/><div className="absolute inset-0 bg-black/50 flex items-end p-4"><h3 className="text-white text-xl font-bold">Reality</h3></div></div>
              <div className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1"><img src="/images/blog-manufacturing-b2b-leads.jpg" alt="Výrobní firmy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/><div className="absolute inset-0 bg-black/50 flex items-end p-4"><h3 className="text-white text-xl font-bold">Výroba & B2B</h3></div></div>
              <div className="relative rounded-lg overflow-hidden group aspect-w-1 aspect-h-1"><img src="/images/blog-restaurant-hotel-marketing.jpg" alt="Gastro a Hotely" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"/><div className="absolute inset-0 bg-black/50 flex items-end p-4"><h3 className="text-white text-xl font-bold">Gastro & Hotely</h3></div></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="kontakt" className="bg-blue-700 text-white">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Jste připraveni na změnu?</h2>
            <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8">Kontaktujte nás a společně probereme váš projekt. První konzultace a návrh řešení jsou vždy zdarma.</p>
            <a href="mailto:info@digitalfusion.cz" className="bg-white text-blue-700 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-all text-lg">Napište nám</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white">Digital<span className="text-blue-500">Fusion</span></h3>
              <p className="mt-4 text-slate-400">Propojujeme kreativitu s technologií a tvoříme řešení, která posouvají byznys vpřed.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Navigace</h4>
              <ul className="mt-4 space-y-2">
                {navLinks.map(link => (
                  <li key={link.href + '-footer'}><a href={link.href} className="hover:text-blue-400 transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Kontaktujte nás</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/mail.svg" className="w-5 h-5 mr-3 text-blue-400" alt="Email"/><a href="mailto:info@digitalfusion.cz" className="hover:text-blue-400 transition-colors">info@digitalfusion.cz</a></li>
                <li className="flex items-center"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/phone.svg" className="w-5 h-5 mr-3 text-blue-400" alt="Phone"/><a href="tel:+420775583797" className="hover:text-blue-400 transition-colors">+420 775 583 797 (David Kubánek)</a></li>
                <li className="flex items-center"><img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/brand-instagram.svg" className="w-5 h-5 mr-3 text-blue-400" alt="Instagram"/><a href="https://instagram.com/digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">@digitalfusion.cz</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-700 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} DigitalFusion. Všechna práva vyhrazena.</p>
            <p className="mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">DigitalFusion</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
