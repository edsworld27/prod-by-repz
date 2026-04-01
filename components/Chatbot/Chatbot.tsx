"use client";

import { useState } from "react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      {isOpen ? (
        <div className={styles.window}>
          <div className={styles.header}>
            <h3>Drop a Message</h3>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.body}>
            {submitted ? (
              <div className={styles.thanks}>
                <p>Thanks for your message!</p>
                <p>We will be in touch soon. ✦</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                  <input type="text" placeholder="Name" required className={styles.input} />
                </div>
                <div className={styles.field}>
                  <textarea placeholder="How can I help?" required className={styles.textarea} rows={3}></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)} 
          className={styles.fab}
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}
