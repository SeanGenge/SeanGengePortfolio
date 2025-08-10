import Image from "next/image";
import styles from "./page.module.css";
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ProjectsGrid from '../components/ProjectsGrid';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      {/* <ProjectsGrid /> */}
      <ContactMe />
      <Footer />
    </>
  );
}
