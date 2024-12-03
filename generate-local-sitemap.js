const fs = require("node:fs");
const path = require("node:path");
const { execSync } = require("node:child_process");

/**
 * You should run this script with `pnpm generate-sitemap`.
 *
 * This generates a local file called `local-sitemap.ts` that exports a list of all
 * important slugs, by reading the filesystem and recognizing the `page.tsx` that are not under slug.
 */

const LOCAL_SITEMAP_FILE_PATH = path.join(__dirname, "./app/local-sitemap.ts");
async function generateLocalSitemap() {
  console.log("[TCG] ✍️  Generating sitemap...");
  const files = await fs.promises.readdir(path.join(__dirname, "./app"), {
    recursive: true,
  });

  const pagesThatArentDynamic = files.filter(
    (filePath) =>
      filePath.endsWith("page.tsx") &&
      // Exclude any dynamically generated pages
      !(filePath.includes("[") && filePath.includes("[")) &&
      // Exclude sanity
      !filePath.includes("[[...tool]]")
  );

  console.log(
    `[TCG] 🔎 Found ${pagesThatArentDynamic.length} static pages on the Next.js project...`
  );

  const formattedPages = pagesThatArentDynamic
    .map((p) => {
      let formatted = p
        // Remove the suffix, leave only the route
        .replace("/page.tsx", "")
        // The main root page.tsx
        .replace("page.tsx", "");

      return `/${formatted}`.trim();
    })
    // Do not include the root, as it has a higher priority and will be included on sitemap.ts
    .filter((p) => p !== "/");

  if (fs.existsSync(LOCAL_SITEMAP_FILE_PATH))
    fs.rmSync(LOCAL_SITEMAP_FILE_PATH);

  // Write the array to the file
  fs.writeFileSync(
    LOCAL_SITEMAP_FILE_PATH,
    `export const SITEMAP_LOCAL_SLUGS = ${JSON.stringify(formattedPages)}`
  );

  console.log("[TCG] 💅 File generated, formatting...");

  // Formats it
  execSync(`pnpm prettier ${LOCAL_SITEMAP_FILE_PATH} --write`);

  console.log("[TCG] 🚀 Done!");
}

generateLocalSitemap();
