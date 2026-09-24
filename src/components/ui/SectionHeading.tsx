import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className={light ? "eyebrow bg-white/10 text-brand-200 ring-white/15" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-brand-100/80" : "text-slate-600"}`}>{text}</p>}
    </Reveal>
  );
}
