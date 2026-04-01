import styles from "../legal.module.css";

export const metadata = { title: "Privacy Policy | ProdsByREPPZZ" };

export default function PrivacyPage() {
  return (
    <>
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          <h1 className={`text-display ${styles.heading}`}>Privacy Policy</h1>
          <div className={styles.prose}>
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric'})}</p>
            
            <h2>What Information Is Collected</h2>
            <p>When you sign up for the community or contact me through the form, the following may be collected:</p>
            <ul>
              <li><strong>Personal Info:</strong> Name, Email Address, Social Links.</li>
              <li><strong>Technical Data:</strong> IP addresses and browser info for security and site analytics.</li>
            </ul>

            <h2>How It Is Used</h2>
            <p>Your information is solely used to:</p>
            <ul>
              <li>Send you the weekly free beats and community updates you signed up for.</li>
              <li>Reply to your custom beat and collaboration inquiries.</li>
              <li>Process license transactions and securely deliver files.</li>
            </ul>
            <p><strong>I do not sell or rent your data to anyone.</strong></p>

            <h2>Your Rights</h2>
            <p>You can unsubscribe from the community emails at any time by clicking the link at the bottom of the emails, or by requesting deletion of your data through the contact page.</p>
          </div>
        </div>
      </main>
    </>
  );
}
