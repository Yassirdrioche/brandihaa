"use client";

import HeroSection from "@/components/HeroSection";
import ServicesCategories from "@/components/ServicesCategories";
import AiForm from "@/components/AiForm";
import ManualFormWebsite from "@/components/ManualFormWebsite";
import ManualFormPhotography from "@/components/ManualFormPhotography";
import { useState } from "react";

export default function Home() {
  const [formMode, setFormMode] = useState(null); // 'ai' | 'manual' | null
  const [activeService, setActiveService] = useState(null); // 'website' | 'photography' | ...

  const handleMethodSelect = (method, service) => {
    setFormMode(method);
    setActiveService(service);
  };

  const closeForm = () => {
    setFormMode(null);
    setActiveService(null);
  }

  return (
    <main className="relative">
      <HeroSection />
      <ServicesCategories onMethodSelect={handleMethodSelect} />

      {/* Forms as Modals */}
      {formMode === 'ai' && (
        <AiForm service={activeService} onClose={closeForm} />
      )}

      {formMode === 'manual' && (
        <>
            {activeService === 'website' && <ManualFormWebsite onClose={closeForm} />}
            {activeService === 'photography' && <ManualFormPhotography onClose={closeForm} />}
            {/* Fallback */}
            {(activeService !== 'website' && activeService !== 'photography') && <ManualFormWebsite onClose={closeForm} />}
        </>
      )}
    </main>
  );
}
