import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import usePerformance from "./hooks/usePerformance";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";

// Lazy load pages for code splitting
const Homepage = lazy(() => import("./pages/Homepage"));
const Workpage = lazy(() => import("./pages/Workpage"));
const Aboutpage = lazy(() => import("./pages/Aboutpage"));
const Contactpage = lazy(() => import("./pages/Contactpage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetailPage = lazy(() => import("./pages/BlogDetailPage"));
const Projectpage = lazy(() => import("./pages/Projectpage"));
const ImageReveal = lazy(() => import("./components/ImageReveal"));
const FloatingActionBar = lazy(() => import("./components/FloatingActionBar"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  useSmoothScroll();
  usePerformance();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Short first-paint splash only — Suspense handles route loads
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/work" element={<Workpage />} />
              <Route path="/about" element={<Aboutpage />} />
              <Route path="/contact" element={<Contactpage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailPage />} />
              <Route path="/project/:id" element={<Projectpage />} />
              <Route path="/image" element={<ImageReveal />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>

            <FloatingActionBar />
            <ScrollToTop />
          </Suspense>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
