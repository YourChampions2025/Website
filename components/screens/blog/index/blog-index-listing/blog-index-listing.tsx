import { BlogProps } from "@/types/types";
import React from "react";
import { IoTriangle } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { formatDateForHref } from "@/utils/functions";
import LoadMoreDynamicDataConnected from "@/components/globals/general/load-more-dynamic-data-connected/load-more-dynamic-data-connected";

interface BlogIndexListingProps {
  blogs: BlogProps[];
  totalBlogs: number;
}

export default function BlogIndexListing({
  blogs,
  totalBlogs,
}: BlogIndexListingProps) {
  return (
    <div className="w-full flex flex-col border-t border-[#083376]">
      <div className="w-full flex flex-col">
        <div className="w-full mx-auto grid sd:grid-cols-1 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="w-full h-full flex flex-col items-start [&:nth-child(3n+2)]:border-l [&:nth-child(3n+2)]:border-r border-b border-[#083376]"
            >
              <div className="w-full h-[416px] overflow-hidden">
                <Image
                  alt={blog.title}
                  src={blog.imageUrl}
                  width={1600}
                  height={1600}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-6 md:gap-4 sm:gap-2 px-12 py-16">
                <p className="text-[#2DE046] text-[16px] tracking-[calc(16px*-0.02)] uppercase">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>

                <span className="text-[#8D8D8D] text-[16px] tracking-[calc(16px*-0.02)] uppercase">
                  {blog.categories
                    ?.map((category) => category.title)
                    .join(", ")}
                </span>

                <h6 className="text-[26px] tracking-[calc(26px*-0.02)] font-medium text-left">
                  {blog.title}
                </h6>

                <p className="text-[18px] tracking-[calc(18px*-0.02)] text-[#8D8D8D] text-left line-clamp-4">
                  {blog.description}
                </p>

                <Link
                  href={`/articles/${formatDateForHref(blog.date)}/${blog.slug}`}
                  className="flex items-center justify-center gap-2 uppercase text-[18px] tracking-[calc(18px*-0.02)] text-pretty underline"
                >
                  <IoTriangle className="shrink-0 rotate-90 text-[#1055C1]" />
                  read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LoadMoreDynamicDataConnected
        itemsLength={blogs.length}
        totalItems={totalBlogs}
      />
    </div>
  );
}
