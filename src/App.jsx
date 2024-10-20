import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { About } from './components/about/About';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';
import { newtonsCradle } from 'ldrs';
import {Contact} from './components/contact/Contact';
import {Event} from './components/event/Event';
import {Gallery} from './components/gallery/Gallery';
import {Team} from './components/team/Team';
import {GalShot} from './components/gallery_shortcut/GalShot';
import {Blog} from './components/blog/Blog';
import {Footer} from './components/footer/Footer';
newtonsCradle.register(); // Register the Newton's Cradle animation

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading with a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay for loading simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.App}>
      {loading ? (
        // Show loading animation while the content is "loading"
        <div className={styles.loading}>
          <l-newtons-cradle size="78" speed="1.4" color="White"></l-newtons-cradle>
        </div>
      ) : (
        // Show actual content once loading is complete
        <>
          <Navbar />
          <Hero />
          <About />
          <GalShot/>
          <Event/>
          <Team/>
          <Blog/>
          <Gallery/>
          <Contact/>
          <Footer/>
        </>
      )}
    </div>
  );
}

export default App;
