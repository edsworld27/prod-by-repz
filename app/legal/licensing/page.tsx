import styles from "../legal.module.css";
import Link from "next/link";

export const metadata = { title: "Licensing Guide | ProdsByREPPZZ" };

export default function LicensingPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          <h1 className={`text-display ${styles.heading}`}>What's the Difference?</h1>
          <div className={styles.prose}>
            <p>If you're new to buying beats, the terminology can be confusing. Here is a simple breakdown of the two main ways you can buy my beats.</p>
            
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid rgba(224,141,255,0.2)' }}>
              <h2 style={{ marginTop: 0, color: "var(--color-primary)" }}>1. Leasing (Non-Exclusive)</h2>
              <p><strong>Best for:</strong> Artists testing the waters, dropping on SoundCloud/YouTube, or artists on a budget.</p>
              <ul>
                <li><strong>What it is:</strong> You are <em>renting</em> the right to use the beat. I can still sell this beat to other artists.</li>
                <li><strong>Limits:</strong> Usually capped at a certain number of streams (e.g., 50,000 to 500,000 depending on the tier) and music videos.</li>
                <li><strong>Files:</strong> You get an untagged MP3, or WAV, or Trackouts (stems) depending on how much the lease costs.</li>
                <li><strong>Distribution:</strong> You can upload to Spotify/Apple Music, but you <strong>cannot</strong> register the song with Content ID.</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <h2 style={{ marginTop: 0, color: "#fff" }}>2. Exclusive Rights</h2>
              <p><strong>Best for:</strong> Serious releases, artists getting backing, or songs you know will blow up.</p>
              <ul>
                <li><strong>What it is:</strong> You are buying the beat completely. Once sold, the beat is removed from my store and never sold to anyone else ever again.</li>
                <li><strong>Limits:</strong> <strong>Unlimited.</strong> Unlimited streams, unlimited radio play, unlimited music videos.</li>
                <li><strong>Files:</strong> You get the highest quality WAV and the full Trackouts (stems) for your engineer to mix.</li>
                <li><strong>Distribution:</strong> You can register the song to Content ID, BMI/ASCAP (split publishing), and fully monetize it everywhere.</li>
              </ul>
            </div>

            <p style={{ textAlign: "center", marginTop: "4rem" }}>
              <strong>Still not sure?</strong><br/><br/>
              <Link href="/contact" className="btn btn-primary btn-sm">Hit me up with questions</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
