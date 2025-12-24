import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Assets from './Assets';
import IntakeForm from './IntakeForm';
import Footer from './Footer';
import AIChatWidget from './AIChatWidget';

export default function App() {
return (
className="min-h-screen flex flex-col">


/>
  <main id="main" className="flex-1">
    <Hero />
    <Assets />
    <section id="mandate" aria-labelledby="mandate-title" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 id="mandate-title" className="text-2xl sm:text-3xl font-semibold text-navy mb-8">
          Submit Your Investment Mandate
        </h2>
        <article className="bg-white rounded-2xl shadow-lux border border-slate-200">
          <IntakeForm />
        </article>
      </div>
    </section>
  </main>

  <footer>
    <Footer />
  </footer>

  <AIChatWidget />
</div>
);
}
