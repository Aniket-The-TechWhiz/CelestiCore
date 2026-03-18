import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

const loadServicesPage = async () => {
  const module = await import("./pages/ServicesPage");
  return { Component: module.ServicesPage };
};

const loadInternshipsPage = async () => {
  const module = await import("./pages/InternshipsPage");
  return { Component: module.InternshipsPage };
};

const loadJobsPage = async () => {
  const module = await import("./pages/JobsPage");
  return { Component: module.JobsPage };
};

const loadProductsPage = async () => {
  const module = await import("./pages/ProductsPage");
  return { Component: module.ProductsPage };
};

const loadCompanyPage = async () => {
  const module = await import("./pages/CompanyPage");
  return { Component: module.CompanyPage };
};

const loadContactPage = async () => {
  const module = await import("./pages/ContactPage");
  return { Component: module.ContactPage };
};

const loadPrivacyPolicyPage = async () => {
  const module = await import("./pages/PrivacyPolicyPage");
  return { Component: module.PrivacyPolicyPage };
};

const loadTermsPage = async () => {
  const module = await import("./pages/TermsPage");
  return { Component: module.TermsPage };
};

const loadBlogPage = async () => {
  const module = await import("./pages/BlogPage");
  return { Component: module.BlogPage };
};

const loadBlogPostPage = async () => {
  const module = await import("./pages/BlogPostPage");
  return { Component: module.BlogPostPage };
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", lazy: loadServicesPage },
      { path: "internships", lazy: loadInternshipsPage },
      { path: "jobs", lazy: loadJobsPage },
      { path: "products", lazy: loadProductsPage },
      { path: "company", lazy: loadCompanyPage },
      { path: "about", lazy: loadCompanyPage },
      { path: "contact", lazy: loadContactPage },
      { path: "blog", lazy: loadBlogPage },
      { path: "blog/:slug", lazy: loadBlogPostPage },
      { path: "privacy-policy", lazy: loadPrivacyPolicyPage },
      { path: "terms", lazy: loadTermsPage },
    ],
  },
]);
