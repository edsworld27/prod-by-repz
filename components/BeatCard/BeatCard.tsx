"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./BeatCard.module.css";

// Same interface as before
export interface Beat {
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

export default function BeatCard({ beat, isPlaying, onPlay }: { beat: Beat; isPlaying: boolean; onPlay: (id: string) => void }) {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      setProgress(0);
      intervalRef.current = setInterval(() => {
        setProgress((p: number) => {
          if (p >= 100) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            onPlay("");
            return 0;
          }
          return p + 0.3;
        });
      }, 50);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setProgress(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <article
      id={`beat-${beat.id}`}
      className={`glass-card ${styles.card} ${isPlaying ? styles.cardActive : ""}`}
      aria-label={`Beat: ${beat.title}`}
    >
      {/* Top Row */}
      <div className={styles.cardTop}>
        <button
          className={`${styles.playBtn} ${isPlaying ? styles.playBtnActive : ""}`}
          onClick={() => onPlay(isPlaying ? "" : beat.id)}
          aria-label={isPlaying ? `Pause ${beat.title}` : `Play ${beat.title}`}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        <div className={styles.info}>
          <span className="text-label" style={{ color: "var(--color-primary)", fontSize: "0.6rem" }}>
            {beat.genre} · {beat.bpm} BPM · {beat.key}
          </span>
          <h3 className={`text-title ${styles.title}`}>{beat.title}</h3>
        </div>

        <div className={styles.duration} aria-label={`Duration: ${beat.duration}`}>
          <span className="text-label" style={{ color: "var(--color-on-surface-variant)", fontSize: "0.65rem" }}>
            {beat.duration}
          </span>
        </div>
      </div>

      {/* Waveform */}
      <div className={styles.waveform} aria-label="Audio waveform visualization" role="img">
        {beat.waveHeights.map((h, i) => (
          <div
            key={i}
            className={`${styles.waveBar} ${isPlaying && (i / beat.waveHeights.length) * 100 < progress ? styles.waveBarPlayed : ""}`}
            style={{
              height: `${h}px`,
              animationDelay: `${(i % 8) * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Progress */}
      {isPlaying && (
        <div className="progress-track" role="progressbar" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Tags */}
      <div className={styles.tags}>
        {beat.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {/* Pricing */}
      <div className={styles.pricing}>
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>Lease</span>
          <span className={styles.price}>${beat.price}</span>
        </div>
        <div className={styles.priceDivider} aria-hidden="true" />
        <div className={styles.priceGroup}>
          <span className={styles.priceLabel}>Exclusive</span>
          <span className={styles.priceExclusive}>${beat.exclusivePrice}</span>
        </div>
        <LinkToContact beatId={beat.id} title={beat.title} price={beat.price} />
      </div>
    </article>
  );
}

// Simple wrapper so we don't import next/link if it breaks standard HTML rules
// Actually next/link is perfect for SPAs.
import Link from "next/link";
function LinkToContact({beatId, title, price}: {beatId: string, title: string, price: number}) {
  return (
    <Link
      href={`/contact?beat=${encodeURIComponent(title)}`}
      id={`buy-${beatId}`}
      className={`btn btn-primary btn-sm ${styles.buyBtn}`}
      aria-label={`Buy ${title} for $${price}`}
    >
      Buy Now
    </Link>
  )
}
