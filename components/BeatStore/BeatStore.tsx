"use client";

import { useState } from "react";
import styles from "./BeatStore.module.css";
import BeatCard, { Beat } from "../BeatCard/BeatCard";
import ScrollReveal from "../ScrollReveal";
import Magnetic from "../Magnetic";

const beats: Beat[] = [
  {
    id: "001",
    title: "VOID RUNNER",
    genre: "Dark Trap",
    bpm: 140,
    key: "Am",
    price: 29,
    exclusivePrice: 149,
    tags: ["Dark", "Trap", "808s"],
    duration: "2:47",
    waveHeights: [3,6,10,14,18,22,26,30,26,22,18,14,10,6,3,8,16,24,32,24,16,8,4,10,20,32,20,10,4,8,16,24,32,24,16,8,14,28,20,12,8,16,28,20,12,8,4,12,20,28],
  },
  {
    id: "002",
    title: "STREET SERMON",
    genre: "Drill",
    bpm: 136,
    key: "F#m",
    price: 24,
    exclusivePrice: 129,
    tags: ["Drill", "Street", "Hard"],
    duration: "3:02",
    waveHeights: [28,20,12,6,3,8,16,24,32,24,16,8,4,12,20,28,20,12,6,3,10,20,30,20,10,4,8,16,24,32,24,16,8,12,6,3,8,16,24,32,24,16,8,4,10,20,30,20,10,4],
  },
  {
    id: "003",
    title: "PURPLE REIGN",
    genre: "Phonk",
    bpm: 130,
    key: "Dm",
    price: 34,
    exclusivePrice: 179,
    tags: ["Phonk", "Wavy", "Melody"],
    duration: "2:55",
    waveHeights: [10,16,22,28,32,28,22,16,10,6,10,16,22,28,32,28,22,16,10,6,4,8,16,24,32,24,16,8,4,8,20,32,20,8,4,12,24,32,24,12,4,10,22,32,22,10,4,8,18,28],
  },
  {
    id: "004",
    title: "GHOST PROTOCOL",
    genre: "UK Drill",
    bpm: 142,
    key: "Gm",
    price: 27,
    exclusivePrice: 139,
    tags: ["UK", "Drill", "Gritty"],
    duration: "2:38",
    waveHeights: [6,14,22,30,26,18,10,4,8,18,28,32,24,16,8,4,12,24,32,24,12,4,10,22,32,22,10,4,8,20,32,20,8,3,10,22,32,22,10,4,16,28,20,12,6,14,24,32,24,14],
  },
  {
    id: "005",
    title: "NEON ABYSS",
    genre: "Dark Phonk",
    bpm: 145,
    key: "E♭m",
    price: 39,
    exclusivePrice: 199,
    tags: ["Phonk", "Dark", "Bass"],
    duration: "3:15",
    waveHeights: [32,28,22,16,10,6,10,16,22,28,32,24,16,8,4,8,16,24,32,24,16,8,4,8,16,28,32,28,16,8,4,10,20,30,20,10,4,12,26,32,26,12,4,8,20,32,28,18,10,4],
  },
  {
    id: "006",
    title: "SHADOW FLEX",
    genre: "Trap Soul",
    bpm: 128,
    key: "Bm",
    price: 22,
    exclusivePrice: 119,
    tags: ["Melodic", "Soul", "Smooth"],
    duration: "3:30",
    waveHeights: [8,16,24,32,32,24,16,8,12,22,30,32,30,22,12,6,14,26,32,26,14,6,10,20,28,32,28,20,10,8,16,24,32,32,24,16,8,12,22,30,32,30,22,12,6,14,26,32,32,26,14],
  },
];

export default function BeatStore({ hideHeader = false }: { hideHeader?: boolean }) {
  const [playingId, setPlayingId] = useState<string>("");
  const [filter, setFilter] = useState("All");

  const filteredBeats = filter === "All" ? beats : beats.filter(b => b.genre === filter || b.genre.includes(filter));

  return (
    <section id="beats" className={styles.section} aria-labelledby="beats-heading">
      <div className={styles.orb} aria-hidden="true" />
      <div className="container">
        {/* Header */}
        {!hideHeader && (
          <ScrollReveal animation="fade" className={styles.header}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>
              THE LAB
            </span>
            <h2 id="beats-heading" className={`text-display ${styles.heading}`}>
              Explore <span className="glow-text-purple">the Sound</span>
            </h2>
            <p className={`text-body ${styles.desc}`}>
              I put in the hours so you can focus on the vocals. Every beat here 
              was made to elevate your story.
            </p>
          </ScrollReveal>
        )}

        {/* Filters */}
        <ScrollReveal animation="fade" delay={200} className={styles.filters} role="group" aria-label="Beat genre filters">
          {["All", "Dark Trap", "Drill", "Phonk", "UK Drill", "Trap Soul"].map((f) => (
            <button
              key={f}
              className={`${styles.filter} ${f === filter ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </ScrollReveal>

        {/* Beat Grid */}
        <div 
          className={styles.grid} 
          role="list" 
          aria-label="Available beats"
          key={filter} // trigger animation on re-render
        >
          {filteredBeats.length === 0 ? (
            <p className="text-body" style={{color: "var(--color-on-surface-variant)", gridColumn: "1/-1", textAlign: "center", padding: "2rem"}}>No beats found in this category yet. I'm working on it!</p>
          ) : (
            filteredBeats.map((beat, index) => (
              <ScrollReveal 
                key={beat.id} 
                delay={index * 100} 
                animation="slide-up"
                className={styles.cardWrapper}
              >
                <div role="listitem">
                  <BeatCard
                    beat={beat}
                    isPlaying={playingId === beat.id}
                    onPlay={setPlayingId}
                  />
                </div>
              </ScrollReveal>
            ))
          )}
        </div>

        <div className={styles.bottomCta}>
          <p className={`text-body ${styles.ctaText}`}>
            Looking for something deeper in the catalog?
          </p>
          <div style={{display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center"}}>
             <Magnetic>
               <a href="/beats" className="btn btn-primary btn-lg">
                  View All Beats
               </a>
             </Magnetic>
             <Magnetic>
               <a id="custom-beat-cta" href="/contact" className="btn btn-secondary btn-lg">
                  Request Custom Beat
               </a>
             </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
