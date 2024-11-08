import PageHeader from "@/components/globals/layout/page-header/page-header";
import OverviewCard from "@/components/screens/blog/index/overview-card/overview-card";

export default function BlogPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="articles"
        description="keep up to date with our news"
      />
      <OverviewCard />
    </main>
  );
}
