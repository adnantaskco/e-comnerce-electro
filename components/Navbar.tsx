"use client";

import { useState } from "react";
import TopBar from "./topnavbar";
import MainNav from "./mainnavbar";
import CategoryBar from "./CategoryBar";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <TopBar />

      <MainNav
        setMobileMenu={setMobileMenu}
      />

      <CategoryBar />

      <MobileDrawer
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
    </>
  );
}