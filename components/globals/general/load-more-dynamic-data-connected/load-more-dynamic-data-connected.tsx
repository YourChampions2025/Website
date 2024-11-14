"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";

interface LoadMoreDynamicDataConnectedProps {
  itemsLength: number;
  totalItems: number;
  title?: string;
}

export default function LoadMoreDynamicDataConnected({
  itemsLength,
  totalItems,
  title = "Load More",
}: LoadMoreDynamicDataConnectedProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString());
    const currentLimit = parseInt(params.get("limit") || "12", 10);

    const increment = 6;
    const newLimit = Math.min(currentLimit + increment, totalItems);

    params.set("limit", newLimit.toString());

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (totalItems > itemsLength) {
    return (
      <LoadMoreDynamicData onClick={handleLoadMore}>
        {title}
      </LoadMoreDynamicData>
    );
  } else {
    return null;
  }
}
