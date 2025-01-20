import AboutAreaThree from "@/components/AboutAreaThree";
import BannerThree from "@/components/BannerThree";
import GalleryTwo from "@/components/GalleryTwo";
import HeaderThree from "@/components/HeaderThree";
import RoadmapOne from "@/components/RoadmapOne";
import TopAdvisorsTwo from "@/components/TopAdvisorsTwo";
import TournamentOne from "@/components/TournamentOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "DYAT - eSports and Gaming NFT NEXT JS Template",
  description:
    "DYAT is a modern, dynamic React template designed specifically for eSports teams, gaming communities, and NFT marketplaces. With its sleek design and powerful features, DYAT provides the perfect platform for showcasing gaming events, team profiles, NFT collections, and digital assets in the fast-growing world of gaming and blockchain.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderThree */}
      <HeaderThree />

      {/* BannerThree */}
      <BannerThree />

      {/* AboutAreaThree */}
      <AboutAreaThree />

      {/* GalleryTwo */}
      <GalleryTwo />

      {/* TournamentOne */}
      <TournamentOne />

      {/* RoadmapOne */}
      <RoadmapOne />

      {/* TopAdvisorsTwo */}
      <TopAdvisorsTwo />
    </>
  );
};

export default page;
