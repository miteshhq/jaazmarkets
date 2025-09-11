"use client";

import { usePathname } from "next/navigation";
import Navbar from "./COMMON/page";
import Footer from "./COMMON/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // Jaha Navbar/Footer nahi chahiye
  const noLayoutRoutes = ["/login", "/signup"];

  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
