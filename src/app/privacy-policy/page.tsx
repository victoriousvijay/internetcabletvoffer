import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy-policy" intro={`Your privacy matters. This policy explains what information ${site.name} collects and how we use it.`}>
      <h2>1. Who we are</h2>
      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates this website, an independent comparison service for internet,
        cable TV and related home services in the United States.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li><strong>Information you provide:</strong> such as your ZIP code when searching, or your name, email and message when you contact us.</li>
        <li><strong>Automatically collected data:</strong> device and browser type, pages viewed, referring URLs and approximate location derived from your IP address.</li>
        <li><strong>Cookies and similar technologies:</strong> used to keep the site working, remember preferences and understand how visitors use our pages.</li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To show relevant providers and plans and improve our comparisons.</li>
        <li>To respond to your questions and requests.</li>
        <li>To measure site performance, prevent fraud and keep the site secure.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>4. Sharing</h2>
      <p>
        We do not sell your personal information. We may share limited data with service providers that help us operate the site (such as
        hosting and analytics), and with provider partners only when you choose to click through to their offers. We may disclose
        information if required by law.
      </p>

      <h2>5. Third-party links</h2>
      <p>Our pages link to provider websites. Their privacy practices are governed by their own policies, which we encourage you to review.</p>

      <h2>6. Your choices & rights</h2>
      <ul>
        <li>You can disable cookies in your browser settings.</li>
        <li>Depending on your state (for example California, Virginia, Colorado), you may have rights to access, correct, delete or opt out of certain uses of your personal information.</li>
        <li>To make a request, email <a href={`mailto:${site.email}`}>{site.email}</a>.</li>
      </ul>

      <h2>7. Data security & retention</h2>
      <p>We use reasonable safeguards to protect information and keep it only as long as needed for the purposes described above.</p>

      <h2>8. Children</h2>
      <p>This site is not directed to children under 13, and we do not knowingly collect their personal information.</p>

      <h2>9. Changes</h2>
      <p>We may update this policy from time to time. The effective date above shows when it was last revised.</p>

      <h2>10. Contact</h2>
      <p>Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
