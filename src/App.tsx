import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import Features from './components/Features';
import MockupShowcase from './components/MockupShowcase';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Offers from './components/Offers';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('business');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-on-background font-sans antialiased overflow-x-hidden">
      {/* Top Navigation */}
      <Header onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="pt-20">
        {/* Hero Section */}
        <Hero onContactClick={handleContactClick} />

        {/* Dynamic Counter Statistics */}
        <Stats />

        {/* Benefits Cards Section with category filters */}
        <Benefits />

        {/* High Resolution Device Mockup Perspective Showcase */}
        <MockupShowcase />

        {/* Bento Grid Core Features Grid with detail popup modals */}
        <Features />

        {/* 6-Step Implementation/Deployment Timeline Process */}
        <Process />

        {/* Pricing Table with toggle Billing (Monthly vs Annual with 20% discount) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* High Conversion Exclusive Offer Call to Action Banner */}
        <Offers onContactClick={handleContactClick} />

        {/* Fully accessible interactive FAQ Accordion */}
        <FAQ />

        {/* Structured Lead Form with validation and Success Ticket summary */}
        <RegistrationForm selectedPlanId={selectedPlanId} />
      </main>

      {/* Footer corporate info & Quick link list */}
      <Footer />
    </div>
  );
}
