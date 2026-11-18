/** Prefix a public-folder path with Vite's base so GitHub Pages subpaths still resolve. */
export function publicAsset(src) {
  if (!src || typeof src !== 'string') return src;
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  const base = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/')) {
    return `${base.replace(/\/$/, '')}${src}`;
  }
  return src;
}
