'use client';

import { useEffect } from "react";
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

export default function Home() {
  useEffect(() => {
    const observeAnimateOnScroll = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        // else { // Enable to have the effect repeat when scrolling up and down
        // 	entry.target.classList.remove('show');
        // }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach((el) => observeAnimateOnScroll.observe(el));
  }, []);
  
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <ProjectsGrid />
      <ContactMe />
      <Footer />
    </>
  );
}
