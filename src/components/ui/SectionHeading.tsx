import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  text,
  center = false,
  light = false,
}: {
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? "text-white" : "text-acc-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-brand-100/80" : "text-slate-600"}`}>{text}</p>}
    </Reveal>
  );
}
