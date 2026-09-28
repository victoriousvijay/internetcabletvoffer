import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import type { Article, ArticleSection } from "@/data/content";
import { img, images, phone, site } from "@/lib/site";
import { CallButton } from "@/components/ui/CallButton";

/** Brand-neutral photos for text/image rows (no third-party logos or TV UIs). */
const pool = [images.homeOffice, images.friendsLaptops, images.laptopDesk, images.router, images.cozyRoom, images.workspace, images.kitchen, images.modernHome, images.ethernet, images.livingRoom];

/**
 * Text-first SEO guide, laid out like a long-form landing page:
 * rows alternate "text + photo" / "photo + text", with some full-width text rows.
 * H3 sub-sections become side-by-side text columns; bullets are check lists.
 */
export function ProviderArticle({ name, article, photos }: { name: string; article: Article; photos: string[] }) {
  // Skip photos that show third-party brands (gaming gear logos, TV UIs).
  const banned = [images.gaming, images.livingTv];
  const own = photos.filter((p) => !banned.includes(p));
  const pics = [...own, ...pool.filter((p) => !own.includes(p))];
  let picIdx = 0;
  const callAfter = Math.min(2, article.sections.length - 1);

  return (
    <section id="guide" className="scroll-mt-40 bg-white py-16 sm:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-acc-ink sm:text-5xl">{name} Internet: Complete Guide</h2>
          <p className="mt-3 text-sm text-slate-500">
            Updated {site.lastReviewed} · By the {site.name} team
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-700">{article.lead}</p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-24">
          {article.sections.map((s, i) => {
            // Every third row is full-width text; the others get a photo, alternating sides.
            const withPhoto = i % 3 !== 2 && !s.subs;
            const photo = withPhoto ? pics[picIdx++ % pics.length] : undefined;
            const flip = picIdx % 2 === 0;
            return (
              <div key={s.id}>
                <section id={`guide-${s.id}`} className="scroll-mt-40">
                  {photo ? (
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                      <div className={flip ? "lg:order-2" : ""}>
                        <TextBlock s={s} />
                      </div>
                      <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${flip ? "lg:order-1" : ""}`}>
                        <Image src={img(photo, 1100)} alt={`${name} internet: ${s.h2}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto max-w-5xl">
                      <TextBlock s={s} wide />
                    </div>
                  )}
                </section>

                {i === callAfter && (
                  <aside className="mx-auto mt-20 flex max-w-5xl flex-col gap-4 rounded-3xl bg-acc-soft p-6 ring-1 ring-acc/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                    <div>
                      <p className="flex items-center gap-2 text-xl font-extrabold text-acc-ink">
                        <Phone className="h-5 w-5 text-acc-text" /> Talk to a {name} specialist
                      </p>
                      <p className="mt-1 text-slate-600">
                        Call {phone.display} to check availability and lock in today&apos;s {name} price.
                      </p>
                    </div>
                    <CallButton className="w-full shrink-0 sm:w-auto" />
                  </aside>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TextBlock({ s, wide = false }: { s: ArticleSection; wide?: boolean }) {
  return (
    <>
      <h2 className={`font-extrabold tracking-tight text-acc-ink ${wide ? "text-center text-3xl sm:text-4xl" : "text-3xl sm:text-[2.1rem] sm:leading-tight"}`}>{s.h2}</h2>
      <div className={wide ? "mx-auto mt-5 max-w-3xl text-center" : "mt-5"}>
        {s.body.map((para, k) => (
          <p key={k} className="mt-4 text-[17px] leading-8 text-slate-700 first:mt-0">
            {para}
          </p>
        ))}
      </div>

      {s.subs && (
        <div className={`mt-10 grid gap-x-10 gap-y-8 ${s.subs.length > 1 ? "md:grid-cols-2" : ""} ${s.subs.length > 3 ? "lg:grid-cols-2" : ""}`}>
          {s.subs.map((sub) => (
            <div key={sub.h3} className="border-l-4 border-acc/25 pl-5">
              <h3 className="text-lg font-bold text-acc-ink">{sub.h3}</h3>
              <p className="mt-2 text-[16px] leading-7 text-slate-700">{sub.body}</p>
            </div>
          ))}
        </div>
      )}

      {s.bullets && (
        <ul className={`mt-6 space-y-3 ${wide ? "mx-auto max-w-3xl" : ""}`}>
          {s.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[17px] leading-7 text-slate-700">
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-acc-text" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
