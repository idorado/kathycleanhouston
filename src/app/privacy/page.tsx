export const metadata = {
  title: 'Privacy Policy | Kathy Clean',
  description: 'Privacy Policy for Kathy Clean.',
};

export default function Page() {
  return (
    <main className="prose mx-auto p-6">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>

      <p>
        This Privacy Policy explains how Kathy Clean ("we," "us," or "our") collects, uses, discloses,
        and safeguards your information when you visit our website or use our cleaning services.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Contact & booking details</strong> (name, email, phone, address, service preferences, notes you share).</li>
        <li><strong>Transaction information</strong> (services purchased, amounts, dates). Card data is processed by our payment processor; we do not store full card numbers.</li>
        <li><strong>Communications</strong> (emails, SMS, messages related to quotes and scheduling).</li>
        <li><strong>Device & usage data</strong> (IP address, pages viewed, time on site, referrer) via cookies and analytics tools (e.g., PostHog).</li>
        <li><strong>Form submissions</strong> (e.g., quote/booking forms).</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Provide and manage cleaning services and quotes.</li>
        <li>Schedule visits, coordinate access, and communicate updates.</li>
        <li>Process payments and send invoices/receipts.</li>
        <li>Improve our website, services, and customer experience.</li>
        <li>Send service-related and, where permitted, marketing communications (you can opt out at any time).</li>
        <li>Detect, prevent, and address fraud, abuse, or safety issues.</li>
      </ul>

      <h2>3. Cookies & Tracking</h2>
      <p>
        We use cookies and similar technologies for essential functions, performance, and analytics (e.g., PostHog).
        You can adjust cookie settings in your browser. Some features may not function properly without certain cookies.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li><strong>Service providers</strong> (e.g., scheduling/CRM tools, payment processors, email/SMS providers, website hosting, analytics).</li>
        <li><strong>Professional advisors</strong> (legal, accounting) when necessary.</li>
        <li><strong>Authorities</strong> to comply with law, legal process, or protect rights/safety.</li>
        <li><strong>Business transfers</strong> (e.g., merger, acquisition) where your data may be part of the transferred assets.</li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        We retain personal information for as long as necessary to provide services and fulfill the purposes described
        in this Policy, unless a longer retention period is required or permitted by law.
      </p>

      <h2>6. Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your information. No method of
        transmission or storage is 100% secure; we cannot guarantee absolute security.
      </p>

      <h2>7. Your Choices & Rights</h2>
      <ul>
        <li><strong>Access/Correction/Deletion:</strong> You may request access to, correction, or deletion of your personal information, subject to legal limitations.</li>
        <li><strong>Marketing opt-out:</strong> You can opt out of marketing emails/SMS by using provided links or contacting us.</li>
        <li><strong>Do Not Track:</strong> Our site does not currently respond to DNT signals.</li>
      </ul>

      <h2>8. Children's Privacy</h2>
      <p>
        Our services are not directed to children under 13. If we learn that we have collected personal information
        from a child under 13 without parental consent, we will take steps to delete it.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        Depending on our service providers and hosting, your data may be processed in locations outside your state or
        country. We take steps to protect your information in accordance with this Policy.
      </p>

      <h2>10. Third-Party Links</h2>
      <p>
        Our website may include links to third-party sites or services. We are not responsible for their privacy
        practices or content. Review their policies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Policy to reflect changes in our practices or legal requirements. The updated version will
        be indicated by a revised "Last updated" date.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        Questions or requests? Contact <a href="mailto:support@kathyclean.com">support@kathyclean.com</a>.
      </p>

      <hr />
      
    </main>
  );
}
