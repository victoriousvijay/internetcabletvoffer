import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description: `The terms that govern your use of the ${site.name} website.`,
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" path="/terms-and-conditions" intro={`Please read these terms carefully before using ${site.name}.`}>
      <h2>1. Acceptance of terms</h2>
      <p>By accessing or using this website, you agree to these Terms &amp; Conditions and our Privacy Policy. If you do not agree, please do not use the site.</p>

      <h2>2. Our service</h2>
      <p>
        {site.name} provides general information and comparisons about internet, cable TV and related services. We are not an internet
        service provider, and we do not sell, install or bill for any provider&apos;s services. Any purchase you make is an agreement between
        you and the provider.
      </p>

      <h2>3. Accuracy of information</h2>
      <p>
        We work hard to keep plans, prices, speeds and availability current, but providers change offers frequently. Information is provided
        &quot;as is&quot; without warranties of any kind. Always confirm details directly with the provider before ordering.
      </p>

      <h2>4. Affiliate relationships</h2>
      <p>We may receive compensation when you click links or order services through our site. This does not affect the price you pay.</p>

      <h2>5. Acceptable use</h2>
      <ul>
        <li>Do not use the site for unlawful purposes or to infringe the rights of others.</li>
        <li>Do not attempt to disrupt, scrape at scale or gain unauthorized access to the site.</li>
        <li>Do not copy or republish our content without permission.</li>
      </ul>

      <h2>6. Intellectual property</h2>
      <p>
        Site design, text and graphics are owned by {site.name} or its licensors. Provider names and trademarks belong to their respective
        owners and are used for identification only.
      </p>

      <h2>7. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {site.name} is not liable for any indirect, incidental or consequential damages arising from
        your use of the site or any provider&apos;s services.
      </p>

      <h2>8. Changes to these terms</h2>
      <p>We may update these terms at any time. Continued use of the site after changes means you accept the revised terms.</p>

      <h2>9. Governing law</h2>
      <p>These terms are governed by the laws of the United States and the state in which {site.name} operates, without regard to conflict-of-law rules.</p>

      <h2>10. Contact</h2>
      <p>Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
    </LegalPage>
  );
}
