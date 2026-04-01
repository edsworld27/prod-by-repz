"use client";

import styles from "./ProblemStatement.module.css";

export default function ProblemStatement() {
  return (
    <section className={styles.section}>
      <div className="container-narrow">
        <div className={styles.content}>
          <span className="text-label" style={{ color: "var(--color-primary)" }}>
            The Problem
          </span>
          <h2 className={`text-display ${styles.heading}`}>
            In a World of <span className="glow-text-purple">Artificial</span> Noise
          </h2>
          <p className={styles.statement}>
            The industry is being flooded with music that has no heartbeat. AI-generated loops, 
            soulless algorithms, and generic presets are killing the art. 
            Music isn't just about the math of a 4/4 bar; it's about the struggle, 
            the energy, and the human connection.
          </p>
          <div className={styles.divider} />
          <p className={styles.solution}>
            That's where I come in. Every kick, every snare, and every melody 
            is crafted from the soul. No shortcuts. No AI. Just raw, human production 
            made to help you tell your story.
          </p>
        </div>
      </div>
    </section>
  );
}
