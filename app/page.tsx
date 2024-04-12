"use client";
// `app/page.tsx` is the UI for the `/` URL
import { useEffect, useState } from "react";
import ItemCard from "./components/card";
import CardLayout from "./components/homepage/cardLayout";
import CollectionGrid from "./components/homepage/collectionGrid";
import FeatureProduct from "./components/homepage/featureProduct";
import HeroSection from "./components/homepage/heroSection";
import NavbarUI from "./components/navbar/navbar";
import Auth from "./auth/auth";
import { redirect, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

export default  function Page() {
 const router = useRouter();
  return (
    <>
      {getCookie("userId") ? router.push("/site") : router.push("/auth")}

      {/* // <HeroSection /> */}
    </>
  );
}
