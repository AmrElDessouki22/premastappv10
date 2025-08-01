'use client';

import { Hero } from '../components/ui/Hero';
import { About } from '../components/ui/About';
import { TemplatePreview } from '../components/ui/TemplatePreview';
import { SubscriptionForm } from '../components/ui/SubscriptionForm';
import { Footer } from '../components/ui/Footer';

export default function HomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <About />
      <TemplatePreview />
      <SubscriptionForm />
      <Footer />
    </main>
  );
}
