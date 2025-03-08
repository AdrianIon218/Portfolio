import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect, useSyncExternalStore } from "react";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/Layout/LoadingSpinner";
import { useTranslation } from "react-i18next";

const CV = lazy(() => import("./components/CV/CV"));
const ContactPage = lazy(() => import("./components/Contact/ContactPage"));
const Projects = lazy(() => import("./components/Projects/ProjectsPage"));
const NoPage = lazy(() => import("./components/NoPage/NoPage"));

function App() {
  const { i18n } = useTranslation();
  const activeLanguage =
    useSyncExternalStore(
      (listener: () => void) => {
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
      },
      () => localStorage.getItem("@activeLanguage")
    ) || i18n.language;

  useEffect(() => {
    i18n.changeLanguage(activeLanguage);
  }, [i18n, activeLanguage]);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Navigate to="CV" />} />
            <Route path="CV" element={<CV />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact" element={<ContactPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
