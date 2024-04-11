"use client";
// `app/page.tsx` is the UI for the `/` URL
import { useState } from "react";
import ItemCard from "./components/card";
import CardLayout from "./components/homepage/cardLayout";
import CollectionGrid from "./components/homepage/collectionGrid";
import FeatureProduct from "./components/homepage/featureProduct";
import HeroSection from "./components/homepage/heroSection";
import NavbarUI from "./components/navbar/navbar";
import Auth from "./auth/auth";
import { redirect } from "next/navigation";

export default function Page() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? redirect("/site") : redirect("/auth")}

      {/* // <HeroSection /> */}
    </>
  );
}
