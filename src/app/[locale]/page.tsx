"use client";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  const t = useTranslations('lang');
  const router = useRouter();
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('lang') || 'en';
    if (savedLanguage) {
      router.push(`/${savedLanguage}`);
    }
  }, [router]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    localStorage.setItem('lang', language);
    router.push(`/${language}`);
  };

  return (
    <div>
      <nav>
        <h1>Next i18n</h1>
        <select onChange={handleLanguageChange} defaultValue={localStorage.getItem('lang') || 'en'}>
          <option value="en">English</option>
          <option value="ar">Arabic</option>
          <option value="sp">Spanish</option>
          <option value="hi">Hindi</option>
        </select>
      </nav>
      <head>
        <title>Landing Page</title>
        <meta name="description" content="Landing page for our service" />
      </head>
      <header className="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <button>{t('hero.buttonText')}</button>
      </header>

      <section className="features">
        {[0, 1, 2].map((index) => (
          <div className="feature" key={index}>
            <h2>{t(`features.${index}.title`)}</h2>
            <p>{t(`features.${index}.description`)}</p>
          </div>
        ))}
      </section>

      <footer className="callToAction">
        <h2>{t('callToAction.title')}</h2>
        <button>{t('callToAction.buttonText')}</button>
      </footer>
    </div>
  );
}
