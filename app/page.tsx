// `app/page.tsx` is the UI for the `/` URL
import ItemCard from "./components/card";
import CardLayout from "./components/homepage/cardLayout";
import CollectionGrid from "./components/homepage/collectionGrid";
import FeatureProduct from "./components/homepage/featureProduct";
import HeroSection from "./components/homepage/heroSection";
import NavbarUI from "./components/navbar/navbar";

export default function Page() {
  return (
    <>
      <HeroSection />
      <CardLayout />
      <FeatureProduct />
      <CardLayout />
      <CollectionGrid />
    </>
  );
}
