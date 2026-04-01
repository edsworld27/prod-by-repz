import styles from "./About.module.css";
import ScrollReveal from "../ScrollReveal";
import Magnetic from "../Magnetic";

export default function About() {
  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Visual */}
          <ScrollReveal animation="slide-right" className={styles.visual}>
            <div className={styles.visualInner}>
              <div className={styles.visualBg} aria-hidden="true" />
              <div className={styles.visualCard}>
                <div className={styles.avatar}>
                  <span className={styles.avatarInitials} aria-hidden="true">R</span>
                </div>
                <div className={styles.avatarInfo}>
                  <strong>REPZZ</strong>
                  <span className="text-label" style={{color:"var(--color-primary)", fontSize:"0.6rem"}}>
                    Prod. Since 2024
                  </span>
                </div>
              </div>

              {/* Floating graphic elements */}
              <div className={styles.glowRing} aria-hidden="true" />
              <div className={styles.floatBadge1} aria-hidden="true">
                <span>🎚️</span>
                <span className="text-label" style={{fontSize:"0.55rem"}}>Mixed & Mastered</span>
              </div>
              <div className={styles.floatBadge2} aria-hidden="true">
                <span>🔥</span>
                <span className="text-label" style={{fontSize:"0.55rem"}}>150+ Beats</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal animation="slide-left" delay={200} className={styles.text}>
            <span className="text-label" style={{ color: "var(--color-primary)" }}>
              The Guide
            </span>
            <h2 id="about-heading" className={`text-display ${styles.heading}`}>
              Still Learning.{" "}
              <span className="glow-text-purple">Always Building.</span>
            </h2>

            <p className={`text-body ${styles.para}`}>
              I'm 18, I love music, and I spend most of my time in the DAW figuring out how to make things sound right. I'm not an industry veteran — I'm a student of the game who just wants to make fire beats.
            </p>

            <p className={`text-body ${styles.para}`}>
              My goal isn't to be the star. My goal is to give *you* the sound you need to tell your story. Whether we're making dark trap or just vibing on a melodic loop, I'm here to learn, grow, and help you win.
            </p>

            <div className={styles.skills}>
              {[
                { name: "Dedication to the Craft", pct: 100 },
                { name: "Dark Trap & Drill Elements", pct: 85 },
                { name: "Sound Design (Learning Phase)", pct: 60 },
                { name: "Willingness to Collaborate", pct: 100 },
              ].map((skill, index) => (
                <ScrollReveal 
                  key={skill.name} 
                  delay={400 + (index * 100)} 
                  animation="fade" 
                  className={styles.skill}
                >
                  <div className={styles.skillHeader}>
                    <span className="text-label" style={{ fontSize: "0.65rem" }}>{skill.name}</span>
                    <span className="text-label" style={{ fontSize: "0.65rem", color: "var(--color-primary)" }}>
                      {skill.pct}%
                    </span>
                  </div>
                  <div className="progress-track" role="progressbar" aria-valuenow={skill.pct} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name} skill: ${skill.pct}%`}>
                    <div
                      className="progress-bar"
                      style={{ width: `${skill.pct}%` }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className={styles.cta}>
              <Magnetic>
                <a 
                  id="about-join-cta" 
                  href="#contact" 
                  className="btn btn-primary"
                  onClick={handleWorkClick}
                >
                  Work With REPZZ
                </a>
              </Magnetic>
              <div className={styles.social}>
                {["IG", "TT", "YT", "SC"].map((p) => (
                  <a
                    key={p}
                    href="#"
                    className={styles.socialLink}
                    aria-label={p}
                  >
                    {p}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
