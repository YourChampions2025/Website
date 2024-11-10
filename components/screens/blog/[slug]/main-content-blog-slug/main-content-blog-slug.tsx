import { BlogProps } from "@/types/types";
import styles from "./main-content-blog-slug.module.css";
import PortableTextComponent from "@/components/globals/general/portable-text-component/portable-text-component";
import Link from "next/link";

interface MainContentBlogSlugProps {
  blog: BlogProps;
}

export default function MainContentBlogSlug({
  blog,
}: MainContentBlogSlugProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <p className={styles.authorInfo}>
          <span className={styles.highlight}>By</span> {blog?.author}{" "}
          <span className={styles.highlight}>
            |{" "}
            {new Date(blog?.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
        <h1 className={styles.title}>{blog?.title}</h1>
        {blog?.content && (
          <div className={styles.articleText}>
            <PortableTextComponent content={blog?.content} />
          </div>
        )}
        <p className={styles.categories}>
          {blog.categories.length > 1 ? "Categories:" : "Category:"}{" "}
          {blog?.categories.map((category, index) => (
            <Link href={`/blog/categories/${category.slug}`}>
              {index === 0 ? "" : ", "}
              {category.title}
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
}
