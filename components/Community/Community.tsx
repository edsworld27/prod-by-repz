"use client";

import styles from "./Community.module.css";

const perks = [
  {
    icon: "🎧",
    title: "Free Beat Drops",
    desc: "Get exclusive free beats every week to test your vocals on.",
  },
  {
    icon: "🎚️",
    title: "Learning Together",
    desc: "I share my workflow and what I'm learning. We all grow our sound together.",
  },
  {
    icon: "🤝",
    title: "Collab Opportunities",
    desc: "Connect with other up-and-coming artists and producers. Let's make something new.",
  },
  {
    icon: "📲",
    title: "Direct Access",
    desc: "Message me directly. Need a specific vibe or feedback? I'm here for it.",
  },
  {
    icon: "💰",
    title: "Member-Only Deals",
    desc: "Community members get discounts and first-access to exclusive beats.",
  },
  {
    icon: "🔥",
    title: "Early Releases",
    desc: "First to hear every album, every pack, every collab before the internet catches on.",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      className={styles.section}
      aria-labelledby="community-heading"
    >
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <span className="text-label" style={{ color: "var(--color-primary)" }}>
            Artists Together
          </span>
          <h2 id="community-heading" className={`text-display ${styles.heading}`}>
            Join the{" "}
            <span className="glow-text-purple">Community</span>
          </h2>
          <p className={`text-body ${styles.sub}`}>
            This isn&apos;t just an email list — it&apos;s a space for aspiring artists shaping music together. Let's build the next wave of sound.
          </p>
        </div>

        {/* Perks Grid */}
        <div className={styles.grid} role="list" aria-label="Community benefits">
          {perks.map((perk, i) => (
            <div
              key={perk.title}
              className={`glass-card ${styles.card}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              role="listitem"
            >
              <span className={styles.icon} aria-hidden="true">{perk.icon}</span>
              <h3 className={`text-title ${styles.cardTitle}`}>{perk.title}</h3>
              <p className={`text-body-sm ${styles.cardDesc}`}>{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div className={styles.cta}>
          <div className={`glass-card-dark ${styles.ctaBox}`}>
            <div className={styles.ctaOrb} aria-hidden="true" />
            <span className="text-label" style={{ color: "var(--color-primary)" }}>
              No Credit Card. No Catch.
            </span>
            <h3 className={`text-display ${styles.ctaTitle}`}>
              Ready to Level Up?
            </h3>
            <p className={`text-body ${styles.ctaDesc}`}>
              Join 2,400+ producers already in the circle. Free forever.
            </p>
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault()}
              aria-label="Join community form"
              noValidate
            >
              <input
                id="email-input"
                type="email"
                placeholder="your@email.com"
                className={styles.emailInput}
                aria-label="Email address"
                autoComplete="email"
                required
              />
              <button
                id="join-community-btn"
                type="submit"
                className="btn btn-primary btn-lg"
              >
                Join the Movement
              </button>
            </form>
            <p className={styles.legal}>
              By joining, you agree to receive updates from REPZZ. Unsubscribe
              anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
