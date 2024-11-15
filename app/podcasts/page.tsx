import ContactUs from "@/components/globals/general/contact-us/contact-us";
import PageGridLayout from "@/components/globals/layout/page-grid-layout/page-grid-layout";
import PageHeader from "@/components/globals/layout/page-header/page-header";
import MainContentPodcasts from "@/components/screens/podcasts/main-content-podcasts/main-content-podcasts";
import SideContentPodcasts from "@/components/screens/podcasts/side-content-podcasts/side-content-podcasts";
import { getPodcasts } from "@/sanity/lib/api";
import { VideoCenterProps } from "@/types/types";

export default async function PodcastsPage() {
  const podcasts: VideoCenterProps[] = await getPodcasts();

  return (
    <main className="pt-[162px]">
      <PageHeader
        title="podcasts"
        link='Listen to "John and Jordan on Justice"'
        linkHref="/video-center"
      />
      <PageGridLayout
        mainContent={<MainContentPodcasts podcasts={podcasts} />}
        sideContent={<SideContentPodcasts />}
      />
      <ContactUs />
    </main>
  );
}
