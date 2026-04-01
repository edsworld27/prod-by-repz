"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";
import BeatCard from "@/components/BeatCard/BeatCard";

interface Beat {
  id: string;
  title: string;
  genre: string;
  bpm: number;
  key: string;
  price: number;
  exclusivePrice: number;
  tags: string[];
  duration: string;
  waveHeights: number[];
}

const allBeats: Beat[] = [
  { id: "001", title: "VOID RUNNER", genre: "Dark Trap", bpm: 140, key: "Am", price: 29, exclusivePrice: 149, tags: ["Dark", "Trap", "808s"], duration: "2:47", waveHeights: [3,6,10,14,18,22,26,30,26,22,18,14,10,6,3,8,16,24,32,24,16,8,4,10,20,32,20,10,4,8,16,24,32,24,16,8,14,28,20,12,8,16,28,20,12,8,4,12,20,28] },
  { id: "002", title: "STREET SERMON", genre: "Drill", bpm: 136, key: "F#m", price: 24, exclusivePrice: 129, tags: ["Drill", "Street", "Hard"], duration: "3:02", waveHeights: [28,20,12,6,3,8,16,24,32,24,16,8,4,12,20,28,20,12,6,3,10,20,30,20,10,4,8,16,24,32,24,16,8,12,6,3,8,16,24,32,24,16,8,4,10,20,30,20,10,4] },
  { id: "003", title: "PURPLE REIGN", genre: "Phonk", bpm: 130, key: "Dm", price: 34, exclusivePrice: 179, tags: ["Phonk", "Wavy", "Melody"], duration: "2:55", waveHeights: [10,16,22,28,32,28,22,16,10,6,10,16,22,28,32,28,22,16,10,6,4,8,16,24,32,24,16,8,4,8,20,32,20,8,4,12,24,32,24,12,4,10,22,32,22,10,4,8,18,28] },
  { id: "004", title: "GHOST PROTOCOL", genre: "UK Drill", bpm: 142, key: "Gm", price: 27, exclusivePrice: 139, tags: ["UK", "Drill", "Gritty"], duration: "2:38", waveHeights: [6,14,22,30,26,18,10,4,8,18,28,32,24,16,8,4,12,24,32,24,12,4,10,22,32,22,10,4,8,20,32,20,8,3,10,22,32,22,10,4,16,28,20,12,6,14,24,32,24,14] },
  { id: "005", title: "NEON ABYSS", genre: "Dark Phonk", bpm: 145, key: "E♭m", price: 39, exclusivePrice: 199, tags: ["Phonk", "Dark", "Bass"], duration: "3:15", waveHeights: [32,28,22,16,10,6,10,16,22,28,32,24,16,8,4,8,16,24,32,24,16,8,4,8,16,28,32,28,16,8,4,10,20,30,20,10,4,12,26,32,26,12,4,8,20,32,28,18,10,4] },
  { id: "006", title: "SHADOW FLEX", genre: "Trap Soul", bpm: 128, key: "Bm", price: 22, exclusivePrice: 119, tags: ["Melodic", "Soul", "Smooth"], duration: "3:30", waveHeights: [12,18,24,28,32,28,24,18,12,8,12,18,24,28,32,24,18,12,8,4,10,18,28,32,28,18,10,4,8,18,28,32,28,18,8,4,10,22,32,22,10,4,14,26,32,26,14,6,3,8] },
  { id: "007", title: "MIDNIGHT DRIVE", genre: "Phonk", bpm: 132, key: "Em", price: 29, exclusivePrice: 149, tags: ["Drift", "Night", "Fast"], duration: "2:45", waveHeights: [4,8,12,20,28,32,28,20,12,8,4,12,18,24,28,24,18,12,8,16,22,30,32,30,22,16,8,12,20,28,32,28,20,12,6,10,16,24,30,24,16,10,6,12,20,28,32,28,20,12,4] },
  { id: "008", title: "STEEL CITY", genre: "UK Drill", bpm: 143, key: "Fm", price: 34, exclusivePrice: 189, tags: ["Aggressive", "Bass", "UK"], duration: "3:05", waveHeights: [8,16,24,32,32,24,16,8,12,22,30,32,30,22,12,6,14,26,32,26,14,6,10,20,28,32,28,20,10,8,16,24,32,32,24,16,8,12,22,30,32,30,22,12,6,14,26,32,32,26,14] },
];

export default function BeatsPage() {
  const [playingId, setPlayingId] = useState("");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredBeats = allBeats.filter((b) => {
    const matchesFilter = filter === "All" || b.genre === filter || b.genre.includes(filter);
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || 
                          b.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1 className="text-display">Full Catalog</h1>
            <p className="text-body" style={{color: "var(--color-on-surface-variant)"}}>Find the exact sound you need.</p>
          </div>

          <div className={styles.controls}>
            <div className={styles.search}>
              <input 
                type="text" 
                placeholder="Search beats, genre, or tags..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <div className={styles.filters}>
               {["All", "Dark Trap", "Drill", "Phonk", "UK Drill", "Trap Soul"].map((f) => (
                <button
                  key={f}
                  className={`${styles.filterBtn} ${f === filter ? styles.filterBtnActive : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.grid} key={filter + search}>
            {filteredBeats.length === 0 ? (
              <p className={styles.noResults}>No beats found matching "{search}".</p>
            ) : (
               filteredBeats.map(beat => (
                 <div className={styles.cardWrapper} key={beat.id}>
                    <BeatCard beat={beat} isPlaying={playingId === beat.id} onPlay={setPlayingId} />
                 </div>
               ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
