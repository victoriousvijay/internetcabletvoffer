import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";
import { pageMeta } from "@/lib/schema";
import { pricingDisclaimer, site, trademarkDisclaimer } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer & Advertising Disclosure",
  description: `Advertising disclosure, trademark notice and pricing disclaimer for ${site.name}.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path="/disclaimer" intro="Transparency about how our site works, how we are paid and how to read our pricing.">
      <h2>Independent comparison site</h2>
      <p>{trademarkDisclaimer}</p>

      <h2>Advertising disclosure</h2>
      <p>
        {site.name} may earn a commission from providers when you click links or place orders through our site. Compensation may influence
        where offers appear on a page, but it never affects our editorial ratings, pros and cons, or the price you pay.
      </p>

      <h2>Pricing & availability</h2>
      <p>{pricingDisclaimer}</p>

      <h2>No professional advice</h2>
      <p>Content on this site is for general informational purposes only and does not constitute professional, legal or financial advice.</p>

      <h2>Contact</h2>
      <p>
        Spotted something outdated? Let us know at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
