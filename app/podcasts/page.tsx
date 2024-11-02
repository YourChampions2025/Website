import ContactUs from "@/components/globals/general/contact-us/contact-us";
import LoadMoreDynamicData from "@/components/globals/general/load-more-dynamic-data/load-more-dynamic-data";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentPodcasts from "@/components/screens/podcasts/main-content-podcasts/main-content-podcasts";
import SideContentPodcasts from "@/components/screens/podcasts/side-content-podcasts/side-content-podcasts";

export default function PodcastsPage() {
  return (
    <main className="pt-[162px]">
      <PageHeader
        title="podcasts"
        description="Listen to “John and Jordan on Justice”"
      />
      <PageGridLayout
        mainContent={<MainContentPodcasts />}
        sideContent={<SideContentPodcasts />}
      />
      <LoadMoreDynamicData>load more podcasts</LoadMoreDynamicData>
      <ContactUs />
    </main>
  );
}
