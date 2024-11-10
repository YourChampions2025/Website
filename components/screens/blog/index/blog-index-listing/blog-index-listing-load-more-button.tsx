"use client";
import { BlogProps } from "@/types/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";

interface BlogIndexListingLoadMoreButtonProps {
  blogs: BlogProps[];
  totalBlogs: number;
}

export default function BlogIndexListingLoadMoreButton({
  blogs,
  totalBlogs,
}: BlogIndexListingLoadMoreButtonProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    const currentLimit = parseInt(params.get("limit") || "12", 10);

    const increment = 6;
    const newLimit = Math.min(currentLimit + increment, totalBlogs);

    params.set("limit", newLimit.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (totalBlogs > blogs.length) {
    return (
      <LoadMoreDynamicData onClick={handleLoadMore}>
        load more
      </LoadMoreDynamicData>
    );
  } else {
    return null;
  }
}
