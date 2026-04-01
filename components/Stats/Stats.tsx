"use client";

import styles from "./Stats.module.css";

const stats = [
  { value: "2.4K+", label: "Community", icon: "👥" },
  { value: "150+", label: "Beats Dropped", icon: "🎵" },
  { value: "2M+", label: "Total Streams", icon: "🔊" },
  { value: "48H", label: "Avg. Delivery", icon: "⚡" },
];

export default function Stats() {
  return (
    <section id="stats" className={styles.section} aria-label="Producer statistics">
      <div className={styles.waveContainer}>
        {/* EQ / Sine Wave Background */}
        <svg className={styles.waveSvg} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            className={styles.wavePath}
            d="M0,160 C180,320 360,0 540,160 C720,320 900,0 1080,160 C1260,320 1440,160 L1440,320 L0,320 Z"
          />
        </svg>

        <div className="container">
          <div className={styles.grid}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={styles.statPoint} style={{ "--index": i } as any}>
                <div className={styles.node}>
                  <span className={styles.icon}>{stat.icon}</span>
                  <div className={styles.info}>
                    <span className={styles.value}>{stat.value}</span>
                    <span className={styles.label}>{stat.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
