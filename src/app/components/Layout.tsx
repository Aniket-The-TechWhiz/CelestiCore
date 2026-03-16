import { lazy, Suspense } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header";
import { CookieConsent } from "./CookieConsent";

const Footer = lazy(async () => {
  const module = await import("./Footer");
  return { default: module.Footer };
});

const CompanyBanner = lazy(async () => {
  const module = await import("./CompanyBanner");
  return { default: module.CompanyBanner };
});

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Suspense fallback={null}>
        <CompanyBanner />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <CookieConsent />
    </div>
  );
}