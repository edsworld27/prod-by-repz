"use client";

import styles from "./custom.module.css";
import Link from "next/link";

export default function CustomBeatsPage() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>1-of-1 Sound</span>
            <h1 className="text-display">Custom <span className="glow-text-purple">Production</span></h1>
            <p className={styles.subhead}>
              Sometimes a catalog beat isn't enough. I'll work with you one-on-one to build a track 
              specifically tailored to your vocals, style, and vision.
            </p>
          </header>

          <div className={styles.process}>
             <div className={styles.step}>
                <div className={styles.stepNumber}>01</div>
                <h3>Discovery</h3>
                <p>Send me your vocals, references, or just an idea. We'll discuss the vibe and direction.</p>
             </div>
             <div className={styles.step}>
                <div className={styles.stepNumber}>02</div>
                <h3>Drafting</h3>
                <p>I'll create a rough draft. You give feedback, and we refine the sound until it's perfect.</p>
             </div>
             <div className={styles.step}>
                <div className={styles.stepNumber}>03</div>
                <h3>Final Delivery</h3>
                <p>Once you're happy, I'll deliver the high-quality WAV and all Trackout stems.</p>
             </div>
          </div>

          <div className={styles.ctaWrapper}>
             <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                <h2>Ready to Start?</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Pricing for custom beats starts at $250. This includes exclusive rights.</p>
                <Link href="/contact?type=custom" className="btn btn-primary btn-lg">Request Custom Beat</Link>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
