"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero section">
      {/* Background glow orbs */}
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />

      <div className={`container ${styles.content}`}>

        {/* Headline */}
        <h1 className={`text-hero ${styles.headline} animate-fade-in-up delay-1`}>
          <span className={styles.line1}>You've got the </span>
          <span className={`glow-text-purple ${styles.line2}`}>vision. </span>
          <span className={styles.line3}>I've got the sound.</span>
        </h1>

        {/* Sub — human, warm, guide-framing */}
        <p className={`text-body ${styles.sub} animate-fade-in-up delay-3`}>
          Hey — I'm REPPZZ. I'm 18 and I make beats for artists who have something real to say. You're the hero of this story. I'm just here to make sure the world hears you.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} animate-fade-in-up delay-4`}>
          <a id="hero-join-cta" href="#community" className="btn btn-primary btn-lg">
            Join the Family — It&apos;s Free
          </a>
          <a id="hero-beats-cta" href="/beats" className="btn btn-secondary btn-lg">
            Browse Beats
          </a>
        </div>
      </div>
    </section>
  );
}
