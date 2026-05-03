import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const ROOTS = ["public/images", "public/blog", "public/icons"];
const EXTS = new Set([".png", ".jpg", ".jpeg"]);

type Result =
  | { file: string; skipped: true }
  | { file: string; webp: string; before: number; after: number }
  | { file: string; error: string };

async function* walk(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

async function convert(file: string): Promise<Result | null> {
  const ext = extname(file).toLowerCase();
  if (!EXTS.has(ext)) return null;
  const webp = file.replace(/\.(png|jpe?g)$/i, ".webp");
  try {
    const [src, dst] = await Promise.all([stat(file), stat(webp).catch(() => null)]);
    if (dst && dst.mtimeMs >= src.mtimeMs) return { file, skipped: true };
    await sharp(file).webp({ quality: 82, effort: 5 }).toFile(webp);
    const out = await stat(webp);
    return { file, webp, before: src.size, after: out.size };
  } catch (e) {
    return { file, error: (e as Error).message };
  }
}

const tasks: Promise<Result | null>[] = [];
for (const root of ROOTS) {
  for await (const f of walk(root)) tasks.push(convert(f));
}
const results = (await Promise.all(tasks)).filter((r): r is Result => r !== null);

let before = 0, after = 0, n = 0;
for (const r of results) {
  if ("error" in r) { console.error("ERR", r.file, r.error); continue; }
  if ("skipped" in r) continue;
  n++; before += r.before; after += r.after;
  const pct = ((1 - r.after / r.before) * 100).toFixed(0);
  console.log(`${pct}% ${(r.before/1024).toFixed(0)}K -> ${(r.after/1024).toFixed(0)}K  ${r.file}`);
}
console.log(`\n${n} converted. ${(before/1024/1024).toFixed(2)}MB -> ${(after/1024/1024).toFixed(2)}MB (${before ? ((1-after/before)*100).toFixed(0) : 0}% saved)`);
