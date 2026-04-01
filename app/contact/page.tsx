"use client";

import { useSearchParams } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import { Suspense } from 'react';

function ContactForm() {
  const searchParams = useSearchParams();
  const beatParam = searchParams.get('beat');

  return (
    <div className={`glass-card ${styles.formCard}`}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <input type="text" id="name" className={styles.formInput} required defaultValue="Reppzz / Peppzz" placeholder="G-Eazy" />
          </div>
          
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.formInput} required placeholder="you@vision.com" />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="interest" className={styles.label}>What do you need?</label>
          <div className={styles.selectWrapper}>
            <select id="interest" className={styles.formSelect} required defaultValue={beatParam ? "exclusive" : "custom"}>
              <option value="custom">Custom Beat</option>
              <option value="exclusive">Exclusive Rights (Catalog)</option>
              <option value="collab">Collaboration</option>
              <option value="other">General Inquiry</option>
            </select>
            <span className={styles.selectArrow}>▼</span>
          </div>
        </div>

        {beatParam && (
          <div className={styles.field}>
             <label htmlFor="beatName" className={styles.label}>Selected Beat</label>
             <input type="text" id="beatName" className={styles.formInput} readOnly value={beatParam} />
          </div>
        )}

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Tell me about your project</label>
          <textarea 
            id="message" 
            className={styles.formTextarea} 
            required 
            placeholder="Tell me about your vision, style, and timeline..."
            rows={5}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
          Send Message ✦
        </button>
      </form>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.centerContent}>
            <div className={styles.header}>
              <span className="text-label" style={{ color: "var(--color-primary)" }}>
                Get In Touch
              </span>
              <h1 className={`text-hero ${styles.heading}`}>
                Let's Make Something <span className="glow-text-purple">Fire.</span>
              </h1>
              <p className={styles.subheading}>
                I'm always looking for serious artists to work with. Reach out below and let's discuss your next project.
              </p>
            </div>
            
            <div className={styles.formWrapper}>
               <Suspense fallback={<div className="glass-card" style={{padding: "2rem", textAlign: "center"}}>Loading form...</div>}>
                 <ContactForm />
               </Suspense>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
