"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link on the home page, just scroll to it smoothly
    if (isHome && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      setMenuOpen(false);

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/beats", label: "Beats" },
    { href: "/#guide", label: "Reppzz" },
    { href: "/exclusive-rights", label: "Ownership" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      id="navbar"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="ProdsByREPPZZ Home" onClick={() => setMenuOpen(false)}>
          <span className={styles.logoText}>Prods</span>
          <span className={styles.logoAccent}>By</span>
          <span className={styles.logoText}>REPPZZ</span>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/#contact" 
            className="btn btn-primary btn-sm" 
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            Work with Me ✦
          </Link>
        </nav>

        <button
          id="menu-toggle"
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen1 : ""}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen2 : ""}`} />
          <span className={`${styles.menuBar} ${menuOpen ? styles.menuBarOpen3 : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
