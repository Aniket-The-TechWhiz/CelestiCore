import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CompanyBanner } from "./CompanyBanner";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        <Outlet />
      </main>
      <CompanyBanner />
      <Footer />
    </div>
  );
}