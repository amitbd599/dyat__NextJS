import AboutAreaTwo from "@/components/AboutAreaTwo";
import BannerTwo from "@/components/BannerTwo";
import GalleryOne from "@/components/GalleryOne";
import HeaderTwo from "@/components/HeaderTwo";
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

      {/* HeaderTwo */}
      <HeaderTwo />

      {/* BannerTwo */}
      <BannerTwo />

      {/* AboutAreaTwo */}
      <AboutAreaTwo />

      {/* GalleryOne */}
      <GalleryOne />
    </>
  );
};

export default page;
