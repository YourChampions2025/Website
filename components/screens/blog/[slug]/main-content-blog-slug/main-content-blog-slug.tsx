import styles from "./main-content-blog-slug.module.css";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import Link from "next/link";
import { TypedObject } from "sanity";

interface MainContentBlogSlugProps {
  author?: string;
  date: string;
  title: string;
  content: TypedObject | TypedObject[];
  court?: string;
  categories?: string[] | { title: string; slug: string }[];
  type?: "terrys-takes" | "blog";
}

export default function MainContentBlogSlug({
  author,
  date,
  title,
  content,
  court,
  categories,
  type = "blog",
}: MainContentBlogSlugProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.authorInfo}>
          <span className={styles.highlight}>By</span>{" "}
          {author || "Jordan Redavid"}{" "}
          <span className={styles.highlight}>
            |{" "}
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
        <h1 className={styles.title}>{title}</h1>
        {content && (
          <div className={styles.articleText}>
            <PortableTextComponent content={content} />
          </div>
        )}
        {court && (
          <span className={styles.categories}>
            Court:{" "}
            <Link href={`/terrys-takes/jurisdictions/${court}`}>
              {court.replace(/-/g, " ")}
            </Link>
          </span>
        )}
        {categories && (
          <span className={styles.categories}>
            {categories?.length > 1 ? "Categories:" : "Category:"}{" "}
            {categories?.map((category, index) => (
              <span>
                {index === 0 ? "" : ", "}

                <Link
                  key={index}
                  href={`/${type}/categories/${typeof category === "object" ? category.slug : category}`}
                >
                  {typeof category === "object"
                    ? category.title
                    : category.replace(/-/g, " ")}
                </Link>
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
