import Image from "next/image";
import { ZipSearch } from "@/components/ui/ZipSearch";
import { Reveal } from "@/components/ui/Reveal";
import { img, images } from "@/lib/site";

export function CtaBand({
  title = "Ready to find a better internet deal?",
  text = "Enter your ZIP code to compare internet and TV providers, plans and prices.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-x py-16 sm:py-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-800 to-navy px-6 py-12 text-white sm:px-12 sm:py-16">
        <Image src={img(images.earthLights, 1600)} alt="" fill sizes="100vw" className="object-cover opacity-25 mix-blend-luminosity" />
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 max-w-lg text-brand-100/85">{text}</p>
          </div>
          <ZipSearch compact />
        </div>
      </Reveal>
    </section>
  );
}
