"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import ScrollReveal from "../ScrollReveal";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const links = {
    Beats: [
      { label: "Browse the Lab", href: "/#beats" },
      { label: "Exclusive Rights", href: "/exclusive-rights" },
      { label: "Custom Production", href: "/custom-beats" },
      { label: "The Guide", href: "/#guide" },
    ],
    Social: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "SoundCloud", href: "#" },
    ],
    Legal: [
      { label: "Ownership & Legal", href: "/exclusive-rights" },
      { label: "Contact Reppzz", href: "/#contact" },
    ],
  };

  const socialIcons = [
    { 
      label: "Instagram", 
      href: "#", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    { 
      label: "TikTok", 
      href: "#", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
        </svg>
      )
    },
    { 
      label: "YouTube", 
      href: "#", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    { 
      label: "SoundCloud", 
      href: "#", 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 10v3"></path>
          <path d="M6 6v11"></path>
          <path d="M10 3v18"></path>
          <path d="M14 8v7"></path>
          <path d="M18 5v13"></path>
          <path d="M22 10v3"></path>
        </svg>
      )
    },
  ];

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <ScrollReveal animation="fade" className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} onClick={(e) => handleLinkClick(e, "/#top")}>
              <span className={styles.logoText}>Prods</span>
              <span className={styles.logoAccent}>By</span>
              <span className={styles.logoText}>REPPZZ</span>
            </Link>
            <p className={styles.tagline}>
              Human-crafted production for the independent artist. 
              Always building, never cutting corners.
            </p>
            <div className={styles.socials}>
              {socialIcons.map((s) => (
                <a key={s.label} href={s.href} className={styles.socialBtn} aria-label={s.label}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.linksGrid}>
            {Object.entries(links).map(([section, items]) => (
              <div key={section} className={styles.linkCol}>
                <h3 className={styles.linkHeading}>{section}</h3>
                <ul className={styles.linkList}>
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link 
                        href={item.href} 
                        className={styles.link}
                        onClick={(e) => handleLinkClick(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            &copy; {year} ProdsByREPPZZ. Handcrafted with soul.
          </p>
          <div className={styles.bottomDecor} aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
