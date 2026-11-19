import fs from "fs";
import path from "path";
import sharp from "sharp";

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

export type WorkImage = {
  title: string;
  src: string;
  width: number;
  height: number;
};

function titleFromFile(file: string) {
  const base = path.basename(file, path.extname(file));
  return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
}

async function imagesIn(dir: string, publicPath: string): Promise<WorkImage[]> {
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && IMAGE_EXT.has(path.extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const images: WorkImage[] = [];
  for (const file of files) {
    const meta = await sharp(path.join(dir, file)).metadata();
    images.push({
      title: titleFromFile(file),
      src: `${publicPath}/${encodeURIComponent(file)}`,
      width: meta.width ?? 1600,
      height: meta.height ?? 1000,
    });
  }
  return images;
}

export async function getWorkImages(): Promise<WorkImage[]> {
  return imagesIn(path.join(process.cwd(), "public", "images"), "/images");
}

export async function getProjectImages(
  slug: string,
  folder = "",
): Promise<WorkImage[]> {
  return imagesIn(
    path.join(process.cwd(), "public", "images", slug, folder),
    folder ? `/images/${slug}/${folder}` : `/images/${slug}`,
  );
}

function imageSrcsIn(dir: string, publicPath: string): string[] {
  if (!fs.existsSync(dir)) return [];

  const srcs: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    if (entry.isDirectory()) {
      srcs.push(
        ...imageSrcsIn(
          path.join(dir, entry.name),
          `${publicPath}/${encodeURIComponent(entry.name)}`,
        ),
      );
      continue;
    }
    if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
      srcs.push(`${publicPath}/${encodeURIComponent(entry.name)}`);
    }
  }
  return srcs;
}

export function listProjectImageSrcs(slug: string): string[] {
  return imageSrcsIn(
    path.join(process.cwd(), "public", "images", slug),
    `/images/${slug}`,
  );
}
