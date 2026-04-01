"use client";

import { useEffect, useRef, useState } from "react";
import BeatStore from "@/components/BeatStore/BeatStore";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Magnetic from "@/components/Magnetic";
import styles from "./StickyScroll.module.css";

// --- PRODS BY REPZZ MASTERPIECE HOME ---
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const totalHeight = container.offsetHeight - viewportHeight;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SEAMLESS 4-PHASE LOGIC (Dragged out for 600vh)
  // 0.0 - 0.2: Hero
  // 0.2 - 0.4: Problem
  // 0.4 - 0.6: Big Bang transition
  // 0.6 - 1.0: Solution (Stable)
  
  const heroOpacity = scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) * 10);
  const bgOpacity = scrollProgress < 0.15 ? 1 : Math.max(0, 1 - (scrollProgress - 0.15) * 8);
  const overlayOpacity = scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) * 8);
  
  const problemOpacity = scrollProgress > 0.2 && scrollProgress < 0.45 
    ? Math.min(1, (scrollProgress - 0.2) * 8) 
    : scrollProgress >= 0.45 ? Math.max(0, 1 - (scrollProgress - 0.45) * 8) : 0;

  const solutionOpacity = scrollProgress > 0.6 ? Math.min(1, (scrollProgress - 0.6) * 6) : 0;

  const stickyBg = scrollProgress > 0.85 ? '#000000' : '#101010';

  // BIG BANG EXPLOSION LOGIC (Centered between Problem and Solution)
  const bangProgress = scrollProgress > 0.45 && scrollProgress < 0.7 
    ? Math.min(1, (scrollProgress - 0.45) * 5) 
    : 0;
    
  const bangScale = bangProgress > 0 ? 0.01 + (bangProgress * 22) : 0;
  const bangOpacity = scrollProgress > 0.45 && scrollProgress < 0.65 
    ? (scrollProgress < 0.58 ? Math.min(1, (scrollProgress - 0.45) * 10) : Math.max(0, 1 - (scrollProgress - 0.58) * 10))
    : 0;

  return (
    <>
      <main id="main-content" style={{ scrollSnapType: 'y proximity' }}>
        {/* Sticky Container - The "Apple" Sequence */}
        <div ref={containerRef} className={styles.stickyContainer} style={{ height: '600vh' }}>
          {/* Scroll Snap Dividers for 200k "Grab" feel */}
          <div className="snap-section" style={{ position: 'absolute', top: '0', height: '1px', width: '100%' }} />
          <div className="snap-section" style={{ position: 'absolute', top: '150vh', height: '1px', width: '100%' }} />
          <div className="snap-section" style={{ position: 'absolute', top: '300vh', height: '1px', width: '100%' }} />
          <div className="snap-section" style={{ position: 'absolute', top: '450vh', height: '1px', width: '100%' }} />
          <div className="snap-section" style={{ position: 'absolute', top: '599vh', height: '1px', width: '100%' }} />

          <div className={styles.stickyElement} style={{ backgroundColor: stickyBg }}>
            {/* Background for Hero only */}
            <div className={styles.background} style={{ opacity: bgOpacity }} aria-hidden="true">
               <div className={styles.overlay} style={{ opacity: overlayOpacity }} />
            </div>
            
            {/* Section 1: Hero */}
            <div 
              className={`${styles.contentLayer} ${styles.heroLayer}`} 
              style={{ 
                opacity: heroOpacity, 
                pointerEvents: heroOpacity < 0.5 ? 'none' : 'auto',
                transform: `translateY(${(1 - heroOpacity) * 40}px) scale(${0.98 + (heroOpacity * 0.02)})`
              }}
            >
               <div className="container">
                  <div className={styles.heroLayout}>
                    <h1 className="text-hero">
                      <span style={{color: "rgba(255,255,255,0.75)"}}>You've got the </span>
                      <span className="glow-text-purple">vision. </span>
                      <span style={{color: "rgba(255,255,255,0.85)"}}>I've got the sound.</span>
                    </h1>
                    <p className="text-body" style={{maxWidth: "700px", marginTop: "2rem", color: "var(--color-on-surface-variant)"}}>
                      Hey — I'm REPPZZ. I'm 18 and I make beats for artists who have something real to say. You're the hero of this story. I'm just here to make sure the world hears you.
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                      <Magnetic>
                        <a href="#beats" className="btn btn-primary btn-lg">
                          Explore the Shop ✦
                        </a>
                      </Magnetic>
                      <Magnetic>
                        <a href="#contact" className="btn btn-secondary btn-lg">
                          Custom Production
                        </a>
                      </Magnetic>
                    </div>
                  </div>
               </div>
            </div>

            {/* Section 2: Problem / AI */}
            <div 
              className={styles.contentLayer} 
              style={{ 
                opacity: problemOpacity, 
                pointerEvents: problemOpacity < 0.5 ? 'none' : 'auto', 
                alignItems: 'center',
                transform: `translateY(${(1 - problemOpacity) * 40}px) scale(${0.98 + (problemOpacity * 0.02)})`
              }}
            >
               <div className="container" style={{position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <span className="text-label" style={{ color: "var(--color-primary)" }}>The Problem</span>
                  <h2 className="text-display" style={{marginTop: "1rem", marginBottom: "2rem"}}>
                    In a World of <span className={styles.glowTextOrange}>Artificial</span> Noise
                  </h2>
                  <p className="text-body" style={{maxWidth: "700px", fontSize: "1.25rem", lineHeight: 1.6}}>
                    The industry is being flooded with music that has no heartbeat. AI-generated loops and generic presets are killing the art. 
                  </p>
               </div>
            </div>

            {/* BIG BANGSingularity/Flash */}
            <div 
              className={styles.bigBang} 
              style={{ 
                opacity: bangOpacity,
                transform: `translate(-50%, -50%) scale(${bangScale})`,
                filter: `blur(${Math.max(2, 40 * (1 - bangProgress))}px) contrast(1.5) brightness(1.5)`
              }} 
            />

            {/* Section 3: Solution / Human Creativity */}
            <div 
              className={styles.contentLayer} 
              style={{ 
                opacity: solutionOpacity, 
                pointerEvents: solutionOpacity < 0.5 ? 'none' : 'auto', 
                alignItems: 'center',
                transform: `translateY(${(1 - solutionOpacity) * 40}px) scale(${0.98 + (solutionOpacity * 0.02)})`
              }}
            >
               <div className={styles.solutionGlow} style={{ opacity: solutionOpacity }} aria-hidden="true" />
               <div className="container" style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <span className="text-label" style={{ color: "var(--color-primary)" }}>The Solution</span>
                  <h2 className="text-display" style={{marginTop: "1rem", marginBottom: "2rem"}}>
                    Human <span className="glow-text-purple">Creativity</span> & Soul
                  </h2>
                  <p className="text-body" style={{maxWidth: "700px", fontSize: "1.25rem", lineHeight: 1.6}}>
                    Everything I make is crafted from the soul. No shortcuts. No AI. Just raw, human production made to help you tell your story and build your legacy.
                  </p>
                  <div style={{width: "60px", height: "2px", background: "var(--color-primary)", margin: "3rem 0", opacity: 0.3}} />
               </div>
            </div>
          </div>
        </div>

        {/* Normal scroll resume */}
        <div id="beats" style={{ position: 'relative', zIndex: 10, background: 'var(--color-surface-container-lowest)' }}>
          <BeatStore />
        </div>
        <div id="guide">
          <About />
        </div>
        <Contact />
      </main>
    </>
  );
}
