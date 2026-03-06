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
// const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Projectpage = lazy(() => import("./pages/Projectpage"));
const ImageReveal = lazy(() => import("./components/ImageReveal"));
// const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const FloatingActionBar = lazy(() => import("./components/FloatingActionBar"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

function App() {
  useSmoothScroll();
  usePerformance(); // Monitor Core Web Vitals
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              <Route path="/project/:id" element={<Projectpage />} />
              <Route path="/image" element={<ImageReveal />} />
              {/* <Route path="/testimonials" element={<TestimonialsPage />} /> */}
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
