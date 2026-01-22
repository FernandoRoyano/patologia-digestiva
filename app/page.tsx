'use client';

import styles from './styles/home.module.css';
import { HeroSection } from './components/home/HeroSection';
import { SpecialtiesSection } from './components/home/SpecialtiesSection';
import { FeaturedArticles } from './components/home/FeaturedArticles';
import { AboutPreview } from './components/home/AboutPreview';
import { PlansSection } from './components/PlansSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { FinalCTA } from './components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SpecialtiesSection />
      <FeaturedArticles />
      <AboutPreview />
      <PlansSection />
      <TestimonialsSection />
      <FinalCTA />
    </div>
  );
}
