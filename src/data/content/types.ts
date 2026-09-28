/** Long-form, SEO-focused article content for a provider landing page. All copy is original. */
export type ArticleSection = {
  id: string;
  /** H2 — phrased the way people search ("Is AT&T Fiber good for gaming?"). */
  h2: string;
  body: string[];
  bullets?: string[];
  /** Optional H3 sub-sections. */
  subs?: { h3: string; body: string }[];
};

export type Article = {
  /** Short lead paragraph under the article heading. */
  lead: string;
  sections: ArticleSection[];
};
