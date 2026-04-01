import Link from "next/link";
import Cursor from "@/components/Cursor";
import Magnetic from "@/components/Magnetic";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <Cursor />
      
      {/* Desktop Background Layer */}
      <div className={styles.background} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.message}>Lost in the Void</h1>
        <p className={styles.description}>
          The frequency you're looking for doesn't exist. 
          Return to the lab to find your rhythm.
        </p>
        
        <div className={styles.cta}>
          <Magnetic strength={50}>
            <Link 
              href="/" 
              className="btn btn-primary btn-lg"
              style={{ padding: '1rem 3rem' }}
            >
              Return To Lab ✦
            </Link>
          </Magnetic>
        </div>
      </div>
    </main>
  );
}
