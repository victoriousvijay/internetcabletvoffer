/**
 * next/image loader. Unsplash photos are resized by Unsplash's own CDN (fast worldwide) instead of the
 * small VPS re-downloading and re-encoding every size, which took ~2 s per image on first view.
 * Local files (provider logos) are tiny and served as-is.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const u = new URL(src);
    // Retina 4K requests (3840px) weigh ~1.8 MB; 2000px is plenty for these layouts.
    u.searchParams.set("w", String(Math.min(width, 2000)));
    u.searchParams.set("q", String(quality ?? 75));
    u.searchParams.set("auto", "format");
    return u.toString();
  }
  return `${src}?w=${width}`;
}
