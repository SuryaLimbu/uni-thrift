// `app/page.tsx` is the UI for the `/` URL

import CardLayout from "../components/homepage/cardLayout";
import CollectionGrid from "../components/homepage/collectionGrid";
import FeatureProduct from "../components/homepage/featureProduct";
import HeroSection from "../components/homepage/heroSection";


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
