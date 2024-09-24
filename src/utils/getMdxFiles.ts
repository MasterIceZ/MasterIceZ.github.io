import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMdxFiles(dir: string) {
  const files = fs.readdirSync(dir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);
      const [datePart, ...nameParts] = file.split("-");
      const date = new Date(
        parseInt(datePart.slice(4, 6), 10) + 2000, // Year
        parseInt(datePart.slice(2, 4), 10) - 1, // Month (0-based)
        parseInt(datePart.slice(0, 2), 10) // Day
      );
      const name = nameParts.join("-").replace(".mdx", "");
      return {
        name,
        path: filePath,
        date,
        fileName: file,
        frontmatter: data,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
