import styles from "../legal.module.css";

export const metadata = { title: "Terms of Service | ProdsByREPPZZ" };

export default function TermsPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          <h1 className={`text-display ${styles.heading}`}>Terms of Service</h1>
          <div className={styles.prose}>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric'})}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using this website to browse, purchase, or download beats, you agree to form a binding contract with ProdsByREPPZZ. If you do not agree, please do not use the site.</p>
            
            <h2>2. User Representations</h2>
            <p>You confirm that any information you provide (e.g., in contact forms) is accurate and that you are of legal age to enter into contracts (or have parental consent).</p>

            <h2>3. Intellectual Property</h2>
            <p>All beats, audio materials, and website content are the intellectual property of ProdsByREPPZZ. They are protected by copyright laws.</p>
            <ul>
              <li><strong>Free Downloads:</strong> Are strictly for non-profit, promotional use.</li>
              <li><strong>Purchases:</strong> Grant specific licensing rights based on your receipt. Ownership remains with the producer unless an "Exclusive Rights" contract transfers ownership.</li>
            </ul>

            <h2>4. Payments & Refunds</h2>
            <p>All sales are final due to the digital nature of the products. Refunds are only given in exceptional circumstances at the sole discretion of ProdsByREPPZZ.</p>
          </div>
        </div>
      </main>
    </>
  );
}
