import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/Layout/LoadingSpinner";

const CV = lazy(() => import("./components/CV/CV"));
const ContactPage = lazy(() => import("./components/Contact/ContactPage"));
const Projects = lazy(() => import("./components/Projects/ProjectsPage"));
const NoPage = lazy(() => import("./components/NoPage/NoPage"));

function App() {
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
