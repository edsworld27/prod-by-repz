"use client";

import styles from "./exclusive.module.css";
import Link from "next/link";

export default function OwnershipLegalPage() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <header className={styles.header}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>Transparency & Trust</span>
            <h1 className="text-display">Ownership <span className="glow-text-purple">& Legal</span></h1>
            <p className={styles.subhead}>
              Everything you need to know about buying beats, your rights as an artist, and how I protect your data.
            </p>
          </header>

          <div className={styles.legalGrid}>
            {/* 1. Exclusive Rights Section */}
            <section className={`${styles.legalSection} glass-card`}>
              <h2>Exclusive Rights</h2>
              <div className={styles.prose}>
                <p>When you purchase an **Exclusive License**, you become the sole owner of the beat. I remove it from the store immediately, and it will never be sold to another artist again.</p>
                <ul>
                  <li><strong>Unlimited usage:</strong> No caps on streams, radio play, or music videos.</li>
                  <li><strong>100% Royalty-Free:</strong> You keep all your earnings from digital sales and streaming.</li>
                  <li><strong>Trackout Stems:</strong> Receive individual high-quality files for a professional mix.</li>
                  <li><strong>Publishing:</strong> Standard 50/50 publishing split applies unless otherwise negotiated.</li>
                </ul>
              </div>
            </section>

            {/* 2. Licensing Breakdown */}
            <section className={`${styles.legalSection} glass-card`}>
              <h2>Licensing Guide</h2>
              <div className={styles.prose}>
                <p>Leasing (Non-Exclusive) is a great way to start. It allows you to use the beat for a limited number of streams while I retain the right to sell it to others.</p>
                <p><strong>Basic Lease:</strong> Up to 50k streams, untagged MP3.</p>
                <p><strong>Premium Lease:</strong> Up to 250k streams, high-quality WAV.</p>
                <p><strong>Unlimited Lease:</strong> Unlimited streams, WAV + Stems, but not exclusive.</p>
              </div>
            </section>

            {/* 3. Privacy Policy */}
            <section className={`${styles.legalSection} glass-card`}>
              <h2>Privacy & Cookies</h2>
              <div className={styles.prose}>
                <p>I value your privacy. I only collect the information necessary to process your orders and communicate with you about your projects.</p>
                <p><strong>Data usage:</strong> Your email is used for delivery and occasional updates. I never sell your data to third parties.</p>
                <p><strong>Cookies:</strong> This site uses basic cookies to enhance your experience, like remembering your cart or session.</p>
              </div>
            </section>

            {/* 4. Terms of Service */}
            <section className={`${styles.legalSection} glass-card`}>
              <h2>Terms of Service</h2>
              <div className={styles.prose}>
                <p>By using this website, you agree to treat the community with respect. All beats are the intellectual property of ProdsByREPPZZ until an exclusive license is fully executed.</p>
                <p>Refunds are not available for digital products once they have been downloaded.</p>
              </div>
            </section>
          </div>

          <div className={styles.finalCta}>
             <div className="glass-card" style={{ padding: '3rem', textAlign: 'center' }}>
                <h2>Ready to secure your sound?</h2>
                <p style={{ marginBottom: '2rem', opacity: 0.8 }}>Head back to the lab to find your next hit.</p>
                <Link href="/#beats" className="btn btn-primary btn-lg">Browse the Lab</Link>
             </div>
          </div>
        </div>
      </main>
    </>
  );
}
