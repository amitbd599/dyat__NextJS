import BannerOne from "@/components/BannerOne";
import FeatureAreaOne from "@/components/FeatureAreaOne";
import HeaderOne from "@/components/HeaderOne";

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
    </>
  );
};

export default page;
