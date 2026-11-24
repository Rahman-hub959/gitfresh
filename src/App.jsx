import React, { useState, useEffect } from 'react';
import BarCouncilBanner from './components/BarCouncilBanner';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import PracticeAreasSection from './components/PracticeAreasSection';
import LegalOpinionsSection from './components/LegalOpinionsSection';
import AboutSection from './components/AboutSection';
import ParentsTributeSection from './components/ParentsTributeSection';
import LegalAwarenessSection from './components/LegalAwarenessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import UrgentAidModal from './components/UrgentAidModal';
import InteractiveCursor from './components/InteractiveCursor';

const DEFAULT_PROFILE = {
  phone: "+91 80191 89343",
  email: "legalsource.24@gmail.com",
  emailSecondary: "vasanthahr06@gmail.com",
  officeHours: "Monday to Saturday: 10:00 AM – 7:30 PM (By Prior Appointment)",
  corporateOffice: "Uniton Corporate Office, 3rd Floor, Raidurgam, Near Metro, Hyderabad-500081.",
  tgChambers: "High Court Complex, Ghansi Bazaar, Hyderabad, Telangana",
  apChambers: "High Court Buildings Complex, Nelapadu, Amaravati, Andhra Pradesh",
  photoUrl: "/assets/advocate-portrait-square.jpg"
};

export default function App() {
  // Theme state: permanently locked to royal dark mode (midnight sapphire & 24K gold foil)
  const isDark = true;

  useEffect(() => {
    document.documentElement.classList.add('dark');
    try {
      localStorage.setItem('advocate_theme_mode', 'dark');
    } catch (e) {
      console.warn("Could not write theme mode", e);
    }
  }, []);

  const profileData = DEFAULT_PROFILE;
  const [isUrgentOpen, setIsUrgentOpen] = useState(false);
  const [preselectedMatter, setPreselectedMatter] = useState("");

  const handleSelectMatter = (matterTitle) => {
    setPreselectedMatter(matterTitle);
  };

  const handleScheduleUrgent = () => {
    setPreselectedMatter("Urgent Legal Assistance (Bail / Injunction)");
    const el = document.querySelector('#chambers');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#080d1a] text-slate-100 relative">
      {/* Interactive Golden Cursor Trail & Ambient Spotlight */}
      <InteractiveCursor />
      
      {/* 1. Bar Council of India Compliance Banner */}
      <BarCouncilBanner isDark={isDark} />

      {/* 2. Top Header Navigation */}
      <Navbar
        onOpenUrgent={() => setIsUrgentOpen(true)}
        contactData={profileData}
        isDark={isDark}
      />

      {/* 3. Hero Section with 3D Interactive Scales of Justice */}
      <main className="flex-1">
        <HeroSection
          onOpenUrgent={() => setIsUrgentOpen(true)}
          isDark={isDark}
        />

        {/* 4. Philosophy & 4 Pillars of Practice */}
        <PhilosophySection
          isDark={isDark}
        />

        {/* 5. 10 Practice Verticals */}
        <PracticeAreasSection
          onSelectMatter={handleSelectMatter}
          isDark={isDark}
        />

        {/* 6. Legal Opinions & Scrutiny Process */}
        <LegalOpinionsSection
          isDark={isDark}
        />

        {/* 7. About the Advocate & Multidisciplinary Matrix */}
        <AboutSection
          photoUrl={profileData.photoUrl}
          isDark={isDark}
        />

        {/* 8. My Inspiration – My Beloved Parents Tribute */}
        <ParentsTributeSection
          isDark={isDark}
        />

        {/* 9. Legal Awareness & Public Education Hub */}
        <LegalAwarenessSection
          isDark={isDark}
        />

        {/* 10. Chambers & Consultation Request Form */}
        <ContactSection
          profileData={profileData}
          preselectedMatter={preselectedMatter}
          isDark={isDark}
        />
      </main>

      {/* 11. Footer */}
      <Footer
        isDark={isDark}
      />

      {/* Urgent Aid Modal */}
      <UrgentAidModal
        isOpen={isUrgentOpen}
        onClose={() => setIsUrgentOpen(false)}
        onScheduleUrgent={handleScheduleUrgent}
        isDark={isDark}
      />

    </div>
  );
}
