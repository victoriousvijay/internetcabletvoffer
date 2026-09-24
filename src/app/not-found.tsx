import Link from "next/link";
import { ArrowRight, WifiOff } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-b from-sky-soft to-white pt-24">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-700 text-white shadow-lift">
          <WifiOff className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">Signal lost — page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/internet-providers" className="btn btn-ghost">
            Compare providers
          </Link>
        </div>
      </div>
    </section>
  );
}
