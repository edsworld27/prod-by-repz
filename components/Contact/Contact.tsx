"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import styles from "./Contact.module.css";
import ScrollReveal from "../ScrollReveal";
import Magnetic from "../Magnetic";

function ContactForm() {
  const searchParams = useSearchParams();
  const beatParam = searchParams.get('beat');

  return (
    <ScrollReveal animation="fade" delay={200} className={`glass-card ${styles.formCard}`}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formGrid}>
          <ScrollReveal animation="slide-up" delay={300} className={styles.field}>
            <label htmlFor="name" className={styles.label}>Your Name</label>
            <input type="text" id="name" className={styles.input} required placeholder="Joe Bloggs" />
          </ScrollReveal>
          
          <ScrollReveal animation="slide-up" delay={400} className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" className={styles.input} required placeholder="you@vision.com" />
          </ScrollReveal>
        </div>

        <ScrollReveal animation="slide-up" delay={500} className={styles.field}>
          <label htmlFor="interest" className={styles.label}>What do you need?</label>
          <div className={styles.selectWrapper}>
            <select id="interest" className={styles.select} required defaultValue={beatParam ? "exclusive" : "custom"}>
              <option value="custom">Custom Beat</option>
              <option value="exclusive">Exclusive Rights (Catalog)</option>
              <option value="collab">Collaboration</option>
              <option value="other">General Inquiry</option>
            </select>
            <span className={styles.selectArrow}>▼</span>
          </div>
        </ScrollReveal>

        {beatParam && (
          <ScrollReveal animation="slide-up" delay={550} className={styles.field}>
             <label htmlFor="beatName" className={styles.label}>Selected Beat</label>
             <input type="text" id="beatName" className={styles.input} readOnly value={beatParam} />
          </ScrollReveal>
        )}

        <ScrollReveal animation="slide-up" delay={600} className={styles.field}>
          <label htmlFor="message" className={styles.label}>Tell me about your project</label>
          <textarea 
            id="message" 
            className={styles.textarea} 
            required 
            placeholder="Tell me about your vision, style, and timeline..."
            rows={5}
          />
        </ScrollReveal>

        <ScrollReveal animation="fade" delay={700}>
          <Magnetic className="w-full">
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '1rem' }}>
              Send Message ✦
            </button>
          </Magnetic>
        </ScrollReveal>
      </form>
    </ScrollReveal>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.centerContent}>
          <ScrollReveal animation="slide-up" className={styles.header}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>
              Get In Touch
            </span>
            <h2 className={`text-display ${styles.heading}`}>
              Let's Make Something <span className="glow-text-purple">Fire.</span>
            </h2>
            <p className={styles.subheading}>
              I'm always looking for serious artists to work with. Reach out below and let's discuss your next project.
            </p>
          </ScrollReveal>
          
          <div className={styles.formWrapper}>
             <Suspense fallback={<div className="glass-card" style={{padding: "2rem", textAlign: "center"}}>Loading form...</div>}>
               <ContactForm />
             </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
