import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { internetNav, legalNav, resourceNav, site, trademarkDisclaimer } from "@/lib/site";
import { providers } from "@/data/providers";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-navy pb-24 text-brand-100/80 lg:pb-0">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="container-x relative pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-100/70">
              {site.name} is an authorized sales partner helping U.S. households find the right internet, cable TV and
              bundle offers — with clear pricing, honest pros and cons, and plain-English guides.
            </p>
            <a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-brand-200">
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-brand-100/70 ring-1 ring-white/10">
              <ShieldCheck className="h-4 w-4 text-brand-300" /> Pricing last reviewed {site.lastReviewed}
            </p>
          </div>
          <FooterCol title="Internet Types" links={internetNav} />
          <FooterCol title="Providers" links={providers.map((p) => ({ label: `${p.name} Internet`, href: `/providers/${p.slug}` }))} />
          <FooterCol title="Company" links={[...resourceNav, ...legalNav]} />
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <h3 className="text-lg font-bold text-white">Our Authorized Network Partners</h3>
          <p className="mt-3 max-w-5xl text-sm leading-7 text-brand-100/80">
            At <strong className="text-white">{site.name}</strong>, we are proud to be an <strong className="text-white">authorized dealer</strong> for
            leading <strong className="text-white">internet service providers</strong> nationwide, including{" "}
            <strong className="text-white">{providers.map((p) => p.name).join(", ").replace(/, ([^,]*)$/, " and $1")}</strong>. Our team works
            closely with these trusted brands to bring you <strong className="text-white">reliable, high-speed internet options</strong>,{" "}
            <strong className="text-white">simple installation</strong> and <strong className="text-white">exceptional customer support</strong>,
            helping you find the <strong className="text-white">best plan</strong> for your <strong className="text-white">home or business</strong>{" "}
            with confidence.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-white/[0.04] p-5 text-xs leading-relaxed text-brand-100/60 ring-1 ring-white/10">
          {trademarkDisclaimer}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-xs sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {legalNav.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white">
                {l.label}
              </Link>
            ))}
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-white">{title}</h3>
      <ul className="mt-5 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group inline-flex items-center text-sm transition-colors hover:text-white">
              <span className="mr-0 h-px w-0 bg-brand-300 transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
