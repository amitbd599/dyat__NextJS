import AboutAreaOne from "@/components/AboutAreaOne";
import BannerOne from "@/components/BannerOne";
import BlockChainGalleryAreaOne from "@/components/BlockChainGalleryAreaOne";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import HeaderOne from "@/components/HeaderOne";
import TopAuctionAreaOne from "@/components/TopAuctionAreaOne";
import TopSellerAreaOne from "@/components/TopSellerAreaOne";

export const metadata = {
  title: "DYAT - eSports and Gaming NFT NEXT JS Template",
  description:
    "DYAT is a modern, dynamic React template designed specifically for eSports teams, gaming communities, and NFT marketplaces. With its sleek design and powerful features, DYAT provides the perfect platform for showcasing gaming events, team profiles, NFT collections, and digital assets in the fast-growing world of gaming and blockchain.",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureAreaOne */}
      <FeatureAreaOne />

      {/* TopSellerAreaOne */}
      <TopSellerAreaOne />

      {/* AboutAreaOne */}
      <AboutAreaOne />

      {/* TopAuctionAreaOne */}
      <TopAuctionAreaOne />

      {/* BlockChainGalleryAreaOne */}
      <BlockChainGalleryAreaOne />
    </>
  );
};

export default page;
