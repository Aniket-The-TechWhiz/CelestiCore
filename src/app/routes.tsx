import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { InternshipsPage } from "./pages/InternshipsPage";
import { JobsPage } from "./pages/JobsPage";
import { ProductsPage } from "./pages/ProductsPage";
import { CompanyPage } from "./pages/CompanyPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "internships", Component: InternshipsPage },
      { path: "jobs", Component: JobsPage },
      { path: "products", Component: ProductsPage },
      { path: "company", Component: CompanyPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
