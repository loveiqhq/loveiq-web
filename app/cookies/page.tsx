import type { Metadata } from "next";
import LegalNavSection from "../../components/legal/LegalNavSection";
import FooterSection from "../../components/landing/FooterSection";

export const metadata: Metadata = {
  title: "Cookie Policy | LoveIQ",
  description: "LoveIQ Cookie Policy - Information about cookies and tracking technologies we use.",
};

export default function CookiesPage() {
  return (
    <>
      <LegalNavSection />
      <main className="min-h-screen bg-page px-4 py-20">
        <article className="content-shell prose prose-invert mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="text-sm text-text-secondary uppercase tracking-wide">Last updated:</p>

          <p>
            This Cookie Policy explains how the following company uses cookies and similar technologies on loveiq.org and
            related services.
          </p>

          <p>
            <strong>Applied Psychometrics UG (in formation) (haftungsbeschränkt)</strong>
            <br />
            Hasenheide 62
            <br />
            10967 Berlin
            <br />
            Germany
            <br />
            Managing Director: Marcus Börner
            <br />
            Email: <a href="mailto:hello@loveiq.org">hello@loveiq.org</a>
            <br />
            (“LoveIQ”, “we”, “us”)
          </p>

          <h2>1. What are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They allow the website to
            recognize your device and store certain information about your preferences or past actions.
          </p>
          <p>We also use similar technologies such as:</p>
          <ul>
            <li>local storage</li>
            <li>pixels</li>
            <li>device identifiers</li>
            <li>scripts</li>
          </ul>
          <p>For simplicity, all these technologies are referred to as “cookies”.</p>

          <h2>2. Legal Basis</h2>
          <p>We use cookies only in accordance with:</p>
          <ul>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>German Telecommunications Telemedia Data Protection Act (TTDSG)</li>
            <li>ePrivacy Directive</li>
          </ul>
          <p>
            <strong>Strictly necessary cookies:</strong> § 25 (2) TTDSG / Art. 6(1)(b) GDPR — no consent required.
          </p>
          <p>
            <strong>All other cookies:</strong> § 25 (1) TTDSG / Art. 6(1)(a) GDPR — require prior explicit consent via
            our consent banner.
          </p>

          <h2>3. Categories of Cookies We Use</h2>
          <h3>A. Strictly Necessary Cookies</h3>
          <p>These cookies are required for the operation of LoveIQ and cannot be disabled. Examples:</p>
          <ul>
            <li>login authentication</li>
            <li>session security</li>
            <li>shopping/checkout process</li>
            <li>consent status storage</li>
          </ul>
          <p>
            Legal basis: Legitimate interest &amp; contract performance (Art. 6(1)(b) GDPR, §25(2) TTDSG)
          </p>

          <h3>B. Functional Cookies</h3>
          <p>These improve usability:</p>
          <ul>
            <li>language preferences</li>
            <li>interface settings</li>
            <li>remembering progress in surveys</li>
          </ul>
          <p>Legal basis: Consent (Art. 6(1)(a) GDPR)</p>

          <h3>C. Analytics Cookies</h3>
          <p>Used to understand how users interact with LoveIQ:</p>
          <ul>
            <li>page visits</li>
            <li>error tracking</li>
            <li>performance metrics</li>
          </ul>
          <p>Typical tools may include privacy-friendly analytics and aggregated statistics.</p>
          <p>Legal basis: Consent (Art. 6(1)(a) GDPR). IP addresses are anonymized where technically possible.</p>

          <h3>D. Marketing Cookies</h3>
          <p>We may use cookies for:</p>
          <ul>
            <li>advertising measurement</li>
            <li>retargeting</li>
            <li>conversion tracking</li>
          </ul>
          <p>These are only activated after explicit consent.</p>
          <p>Legal basis: Consent (Art. 6(1)(a) GDPR)</p>

          <h3>E. Third-Party Services</h3>
          <p>LoveIQ may integrate services such as:</p>
          <ul>
            <li>payment providers (e.g., Stripe)</li>
            <li>hosting/CDN</li>
            <li>email services</li>
            <li>analytics tools</li>
          </ul>
          <p>These providers may set their own cookies. We conclude data-processing agreements with partners under Art. 28 GDPR.</p>

          <h2>4. Consent Management</h2>
          <p>When you first visit loveiq.org, you will be asked to choose:</p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
            <li>Customize preferences</li>
          </ul>
          <p>Your choices are stored and can be changed at any time via the “Cookie Settings” link in the footer.</p>

          <h2>5. How to Control Cookies</h2>
          <p>You can:</p>
          <ul>
            <li>change preferences via our banner</li>
            <li>delete cookies in your browser</li>
            <li>block cookies via browser settings</li>
          </ul>
          <p>Please note: disabling necessary cookies may limit functionality.</p>

          <h2>6. Storage Duration</h2>
          <p>Cookies are stored only as long as necessary:</p>
          <ul>
            <li>Session cookies: deleted after session</li>
            <li>Consent cookie: up to 12 months</li>
            <li>Analytics cookies: maximum 24 months</li>
            <li>Marketing cookies: maximum 12 months</li>
          </ul>

          <h2>7. Data Transfers</h2>
          <p>Some third-party providers may process data outside the EU. We ensure protection through:</p>
          <ul>
            <li>EU Standard Contractual Clauses</li>
            <li>additional safeguards</li>
            <li>data minimization</li>
          </ul>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>withdraw consent at any time</li>
            <li>access stored data</li>
            <li>request deletion</li>
            <li>object to processing</li>
            <li>lodge a complaint with a supervisory authority</li>
          </ul>
          <p>Contact us in case.</p>

          <h2>9. Updates</h2>
          <p>We may update this Cookie Policy to reflect legal or technical changes.</p>

          <h2>10. Governing Law</h2>
          <p>These Terms are governed by the laws of the Federal Republic of Germany.</p>
        </article>
      </main>
      <FooterSection />
    </>
  );
}
