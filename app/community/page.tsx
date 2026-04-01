"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Community from "@/components/Community/Community";
import styles from "./community.module.css";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>The Family</span>
            <h1 className="text-display">The <span className="glow-text-purple">Community</span></h1>
            <p className={styles.subhead}>
               More than just beats. We're a network of independent artists growing together. 
               Join us for free samples, feedback sessions, and exclusive opportunities.
            </p>
          </header>
          
          <Community />
          
          <div className={styles.extraSection}>
             <div className={styles.perkGrid}>
                <div className={styles.perk}>
                   <h3>Feedback Sessions</h3>
                   <p>Join our Discord for weekly track feedback from REPPZZ and other producers.</p>
                </div>
                <div className={styles.perk}>
                   <h3>Exclusive Packs</h3>
                   <p>Community members get a 100MB+ sample pack of loops and drum kits for free.</p>
                </div>
                <div className={styles.perk}>
                   <h3>Collab Opportunities</h3>
                   <p>Find singers, rappers, and other producers in the family to collab with.</p>
                </div>
             </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
